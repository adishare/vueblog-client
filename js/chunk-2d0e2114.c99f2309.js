(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2114"],{"7cb4":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade"}},[t.user&&"checkoutView"==t.viewMode?e("div",{staticClass:"container bg-light"},[e("div",{staticClass:"row p-4 text-primary"},[e("div",{staticClass:"col-md-4 order-md-2 mb-4"},[e("h4",{staticClass:"d-flex justify-content-between align-items-center mb-3"},[e("span",{staticClass:"text-muted"},[t._v("Your cart ")]),e("span",{staticClass:"badge badge-secondary badge-pill"},[t._v(" "+t._s(t.totalQtyOfCart)+" ")])]),e("ul",{staticClass:"list-group mb-3"},[e("li",{staticClass:"list-group-item d-flex justify-content-between active"},[e("span",[t._v("Cart Id ")]),e("strong",[t._v("#"+t._s(t.cartId))])]),t._l(t.checkoutModel.items,function(s,a){return e("li",{key:a,staticClass:"list-group-item d-flex justify-content-between lh-condensed"},[e("div",[e("h6",{staticClass:"my-0"},[t._v(t._s(s.name))]),e("small",{staticClass:"text-muted"},[t._v("@ "+t._s(t.getRpFormat(s.price))+" x "+t._s(s.quantity)+" ")])]),e("span",{staticClass:"text-muted"},[t._v(" "+t._s(t.getRpFormat(s.subtotal))+" ")])])}),e("li",{staticClass:"list-group-item d-flex justify-content-between active"},[e("span",[t._v("Total ")]),e("strong",[t._v(t._s(t.getRpFormat(t.checkoutModel.total)))])])],2)]),e("div",{staticClass:"col-md-8 order-md-1"},[e("h4",{staticClass:"mb-3"},[t._v("Billing address")]),e("form",{staticClass:"needs-validation",attrs:{novalidate:""}},[e("div",{staticClass:"mb-3"},[e("label",[t._v("Account Name ")]),e("input",{staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.user.name}})]),e("div",{staticClass:"mb-3"},[e("label",[t._v("Account Email ")]),e("input",{staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.user.email}})]),e("div",{staticClass:"mb-3"},[e("label",{attrs:{for:"email"}},[t._v("Notification Email "),e("span",{staticClass:"text-muted"},[t._v("(Optional)")])]),e("input",{staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"you@example.com"}}),e("div",{staticClass:"invalid-feedback"},[t._v("\n                    Please enter a valid email address for shipping updates.\n                ")])]),e("div",{staticClass:"mb-3"},[e("label",{attrs:{for:"address"}},[t._v("Address")]),e("input",{staticClass:"form-control",attrs:{type:"text",id:"address",placeholder:"1234 Main St",required:""}}),e("div",{staticClass:"invalid-feedback"},[t._v("\n                    Please enter your shipping address.\n                ")])]),e("hr",{staticClass:"mb-4"}),t._v("\n                map is under construction :)\n            "),e("hr",{staticClass:"mb-4"}),e("h4",{staticClass:"mb-3"},[t._v("Payment")]),e("div",{staticClass:"d-block my-3"},[e("div",{staticClass:"custom-control custom-radio"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutModel.status,expression:"checkoutModel.status"}],staticClass:"custom-control-input",attrs:{id:"transfer",name:"paymentMethod",value:"transfer",type:"radio"},domProps:{checked:t._q(t.checkoutModel.status,"transfer")},on:{change:function(s){t.$set(t.checkoutModel,"status","transfer")}}}),e("label",{staticClass:"custom-control-label",attrs:{for:"transfer"}},[t._v("Transfer")])]),e("div",{staticClass:"custom-control custom-radio"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutModel.status,expression:"checkoutModel.status"}],staticClass:"custom-control-input",attrs:{id:"cod",name:"paymentMethod",value:"cash on delivery",type:"radio"},domProps:{checked:t._q(t.checkoutModel.status,"cash on delivery")},on:{change:function(s){t.$set(t.checkoutModel,"status","cash on delivery")}}}),e("label",{staticClass:"custom-control-label",attrs:{for:"cod"}},[t._v("Cash On Deliery")])]),e("div",{staticClass:"custom-control custom-radio"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkoutModel.status,expression:"checkoutModel.status"}],staticClass:"custom-control-input",attrs:{id:"credit",name:"paymentMethod",value:"credit",type:"radio"},domProps:{checked:t._q(t.checkoutModel.status,"credit")},on:{change:function(s){t.$set(t.checkoutModel,"status","credit")}}}),e("label",{staticClass:"custom-control-label",attrs:{for:"credit"}},[t._v("Credit")])])]),e("hr",{staticClass:"mb-4"}),e("button",{staticClass:"btn btn-info btn-lg ",on:{click:function(s){s.preventDefault(),t.changeViewMode("main","checkoutView")}}},[t._v(" Back & Contonue Shopping")]),e("button",{staticClass:"btn btn-success btn-lg pull-right ",on:{click:function(s){s.preventDefault(),t.confirmCheckout()}}},[t._v("Confirm & Checkout")])])])])]):t._e()])},o=[],c={name:"Checkout",props:["user","viewMode","totalQtyOfCart","cartId","checkoutModel","getRpFormat","changeViewMode","confirmCheckout"]},i=c,l=e("2877"),n=Object(l["a"])(i,a,o,!1,null,null,null);s["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0e2114.c99f2309.js.map