const t={template:`
        <dt :class="$attrs.class" class="sw-media-quickinfo-metadata-item__term">
            {{ this.labelName }}:
        </dt>
        <dd :class="$attrs.class"  class="sw-media-quickinfo-metadata-item__description">
            <slot/>
        </dd>
    `,props:{labelName:{required:!0,type:String}}};export{t as default};
