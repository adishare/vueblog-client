(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-467b0d58"],{2909:function(t,e,n){"use strict";function s(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function i(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){return s(t)||i(t)||a()}n.d(e,"a",function(){return r})},"2f21":function(t,e,n){"use strict";var s=n("79e5");t.exports=function(t,e){return!!t&&s(function(){e?t.call(null,function(){},1):t.call(null)})}},"55dd":function(t,e,n){"use strict";var s=n("5ca1"),i=n("d8e8"),a=n("4bf8"),r=n("79e5"),o=[].sort,c=[1,2,3];s(s.P+s.F*(r(function(){c.sort(void 0)})||!r(function(){c.sort(null)})||!n("2f21")(o)),"Array",{sort:function(t){return void 0===t?o.call(a(this)):o.call(a(this),i(t))}})},a010:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("ul",{staticClass:"list-group"},[t._l(t.answers,function(e){return n("li",{key:e._id,staticClass:"list-group-item p-0"},[n("div",{staticClass:"d-flex justify-content-between pl-0"},[n("div",{staticClass:"text-center justify-content-between d-flex pl-0 py-3",staticStyle:{width:"80px","flex-direction":"column"}},[n("span",[t.user&&e.user._id!=t.user._id?n("span",{staticStyle:{cursor:"pointer"},on:{click:function(n){t.upvote(e._id)}}},[t.user&&-1!=e.upVotes.indexOf(t.user._id)?n("i",{staticClass:"fa fa-thumbs-up fa-lg"}):n("i",{staticClass:"fa fa-thumbs-o-up fa-lg",attrs:{"aria-hidden":"true"}})]):t._e(),n("span",[n("h4",{staticClass:"mb-0 text-secondary"},[t._v("\n                                "+t._s(e.upVotes.length-e.downVotes.length)+"\n                            ")])]),t.user&&e.user._id!=t.user._id?n("span",{staticStyle:{cursor:"pointer"},on:{click:function(n){t.downvote(e._id)}}},[t.user&&-1!=e.downVotes.indexOf(t.user._id)?n("i",{staticClass:"fa fa-thumbs-down fa-lg"}):n("i",{staticClass:"fa fa-thumbs-o-down fa-lg",attrs:{"aria-hidden":"true"}})]):t._e()]),t.user&&e.user._id==t.user._id?n("span",{staticStyle:{cursor:"pointer"},on:{click:function(n){t.editAnswer(e)}}},[n("i",{staticClass:"fa fa-pencil-square fa-lg"})]):t._e()]),n("span",{staticClass:"col p-3"},[t.editAnswerModel._id!=e._id?n("div",{domProps:{innerHTML:t._s(e.answer)}}):t._e(),t.editAnswerModel.answer&&t.editAnswerModel._id==e._id?n("form",[n("div",{staticClass:"form-group"},[n("vue-editor",{attrs:{id:"answerInput"},model:{value:t.editAnswerModel.answer,callback:function(e){t.$set(t.editAnswerModel,"answer",e)},expression:"editAnswerModel.answer"}}),n("input",{staticClass:"btn btn-sm btn-warning m-2 pull-right ",attrs:{type:"submit",value:"Update"},on:{click:function(e){e.preventDefault(),t.updateAnswer()}}}),n("input",{staticClass:"btn btn-sm btn-info m-2 pull-right ",attrs:{type:"submit",value:"Cancel"},on:{click:function(e){e.preventDefault(),t.editAnswerModel={}}}})],1)]):t._e(),n("br"),t.editAnswerModel.answer?t._e():n("small",{staticClass:"pull-right text-right"},[n("h6",{staticClass:"text-info"},[t._v("\n                        - "+t._s(e.user.name)+"\n                        ")]),n("i",[t._v("at "+t._s(e.createdAt.slice(0,10))+" ")])])])])])}),t.user?n("li",{staticClass:"list-group-item active"},[n("form",[n("div",{staticClass:"form-group bg-white"},[n("vue-editor",{attrs:{placeholder:"Type Your Answer...",id:"answerInput"},model:{value:t.answerInput,callback:function(e){t.answerInput=e},expression:"answerInput"}}),n("input",{staticClass:"btn btn-sm btn-warning mt-2 pull-right ",attrs:{type:"submit",value:"Post Answer"},on:{click:function(e){e.preventDefault(),t.postAnswer()}}})],1)])]):t._e()],2)])},i=[],a=n("2909"),r=(n("55dd"),n("be94")),o=n("2f62"),c=n("b3e9"),u={props:["thread","logNotification","user"],components:{VueEditor:c["VueEditor"]},data:function(){return{answerInput:"",editAnswerModel:{},answers:[]}},created:function(){},methods:Object(r["a"])({},Object(o["b"])(["fetchThread","fetchThreads"]),{postAnswer:function(){var t=this;if(""==this.answerInput.trim())return this.logNotification("Please Write your Answer","warning",3e3);this.$server.post("/answers/".concat(this.thread._id),{answer:this.answerInput},{headers:{token:localStorage.getItem("token")}}).then(function(){t.answerInput="",t.fetchThread(t.$route.params.id),t.fetchThreads()}).catch(function(e){t.logNotification(e.response,"danger",5e3)})},upvote:function(t){var e=this;this.$server.post("/answers/upvotes/".concat(t),{},{headers:{token:localStorage.getItem("token")}}).then(function(t){e.logNotification(t.data.message,"info",3e3),e.fetchThread(e.thread._id)}).catch(function(t){e.logNotification(t.response.data.message,"danger",3e3)})},downvote:function(t){var e=this;this.$server.post("/answers/downvotes/".concat(t),{},{headers:{token:localStorage.getItem("token")}}).then(function(t){e.logNotification(t.data.message,"info",3e3),e.fetchThread(e.thread._id)}).catch(function(t){e.logNotification(t.response.data.message,"danger",3e3)})},editAnswer:function(t){this.editAnswerModel={_id:t._id,answer:t.answer}},updateAnswer:function(){var t=this;this.$server.put("/answers/".concat(this.editAnswerModel._id),this.editAnswerModel,{headers:{token:localStorage.getItem("token")}}).then(function(e){t.logNotification(e.data.message,"info",3e3),t.fetchThread(t.thread._id),t.editAnswerModel={}}).catch(function(e){t.logNotification(e.response.data.message,"danger",3e3)})}}),watch:{thread:{handler:function(t){this.answers=Object(a["a"])(t.answers).sort(function(t,e){return e.upVotes.length-e.downVotes.length-(t.upVotes.length-t.downVotes.length)})},deep:!0,immediate:!0}}},l=u,d=n("2877"),f=Object(d["a"])(l,s,i,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-467b0d58.66e4f77b.js.map