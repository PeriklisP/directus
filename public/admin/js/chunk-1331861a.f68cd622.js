(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1331861a"],{"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(e){return["half","half-left","half-right","full","fill"].includes(e)}}}}},"8f28":function(e,t,a){"use strict";var l=a("ecd1"),n=a.n(l);n.a},bcc1:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.value?a("div",{staticClass:"datetime-updated"},[e.options.showRelative?a("v-timeago",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.displayValue,expression:"displayValue"}],staticClass:"no-wrap",attrs:{datetime:e.date,"auto-update":60,locale:e.$i18n.locale}}):a("div",[e._v(e._s(e.displayValue))]),a("v-icon",{attrs:{name:"today"}})],1):e.newItem?a("v-input",{attrs:{readonly:!0,placeholder:e.$t("interfaces-datetime-updated-now"),"icon-right":"today"}}):a("v-input",{attrs:{readonly:!0,placeholder:e.$t("interfaces-datetime-updated-unknown"),"icon-right":"today"}})},n=[],i=(a("a481"),a("8db2")),u=a.n(i),d={mixins:[u.a],computed:{date:function(){return this.value?new Date(this.value.replace(" ","T")+"Z"):null},displayValue:function(){if(this.date)return this.$d(this.date,"long")+" GMT"}}},o=d,r=(a("8f28"),a("2877")),p=Object(r["a"])(o,l,n,!1,null,"378c41e2",null);t["default"]=p.exports},ecd1:function(e,t,a){}}]);
//# sourceMappingURL=chunk-1331861a.f68cd622.js.map