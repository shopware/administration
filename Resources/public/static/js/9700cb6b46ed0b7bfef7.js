"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[64988],{64988:function(e,t,i){i.r(t),t.default={emits:["check-item"],data(){return{selection:{}}},methods:{checkItem(e){this.$super("checkItem",e),e.checked?this.selection[e.id]=e:delete this.selection[e.id],this.$emit("check-item",this.selection)},getTreeItems(e){let t=Object.keys(this.checkedElements),i=this.$super("getTreeItems",e);return i.forEach(e=>{let i=t.includes(e.id);i&&(e.checked=i)}),i}}}}}]);