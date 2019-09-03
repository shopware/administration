import { initializeUserNotifications } from 'src/app/state/notification.store';

const { State } = Shopware;

export default function initializeUserContext() {
    const serviceContainer = this.getContainer('service');

    return new Promise((resolve) => {
        const loginService = serviceContainer.loginService;
        const context = Shopware.Application.getContainer('service').context;
        const userService = serviceContainer.userService;

        // The user isn't logged in
        if (!loginService.isLoggedIn()) {
            // Remove existing login info from the locale storage
            loginService.logout();
            resolve();
            return;
        }

        userService.getUser().then((response) => {
            // Populate the current user to the context object
            const data = response.data;
            delete data.password;

            context.currentUser = data;
            State.getStore('adminUser').state.currentUser = data;
            initializeUserNotifications();
            resolve();
        }).catch(() => {
            // An error occurred which means the user isn't logged in so get rid of the information in local storage
            loginService.logout();
            resolve();
        });
    });
}
