(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[629],{Gkh8:function(e,t,i){"use strict";i.r(t),t.default={data:function(){return{selection:{}}},methods:{checkItem:function(e){this.$super("checkItem",e),e.checked?this.selection[e.id]=e:delete this.selection[e.id],this.$emit("check-item",this.selection)},getTreeItems:function(e){var t=Object.keys(this.checkedElements),i=this.$super("getTreeItems",e);return i.forEach((function(e){var i=t.includes(e.id);i&&(e.checked=i)})),i}}}}}]);