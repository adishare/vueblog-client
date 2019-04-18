(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-216ac9bb","chunk-e44ac44e"],{"4f86":function(t,e,i){},"8ffa":function(t,e,i){"use strict";var a=i("ed95"),s=i.n(a);s.a},"99ad":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("articleCard",{attrs:{logNotification:t.logNotification,fetchArticles:t.fetchArticles,fetchArticle:t.fetchArticle,article:t.article,user:t.user}})],1)])])},s=[],c=i("d4bc"),n={name:"ArticleDetail",props:["user","logNotification","fetchArticles"],components:{ArticleCard:c["default"]},data:function(){return{article:""}},created:function(){},methods:{fetchArticle:function(){var t=this;this.$server.get("/articles/".concat(this.$route.params.id)).then(function(e){t.article=e.data}).catch(function(t){console.log(t.response)})}},watch:{"$route.params.id":{handler:function(t){var e=this,i=t;this.$server.get("/articles/updateViewer/".concat(i)).then(function(){e.fetchArticle(),e.fetchArticles()}).catch(function(t){console.log(t.response)})},deep:!0,immediate:!0}}},l=n,o=i("2877"),r=Object(o["a"])(l,a,s,!1,null,null,null);e["default"]=r.exports},a553:function(t,e,i){"use strict";var a=i("4f86"),s=i.n(a);s.a},d4bc:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade",mode:"out-in"}},[t.article?i("div",{staticClass:"col m-3 cardarticle"},[i("div",{staticClass:"card"},[i("div",{staticClass:"row no-gutters"},[t.article.img?i("div",{staticClass:"col-auto"},[i("img",{staticClass:"img-fluid",attrs:{src:"//placehold.it/200",alt:""}})]):t._e(),i("div",{staticClass:"col"},[i("div",{staticClass:"card-block"},[i("div",{staticClass:"card-header"},[t.editMode?i("input",{directives:[{name:"model",rawName:"v-model",value:t.editArticleModel.title,expression:"editArticleModel.title"}],staticClass:"form-control",attrs:{type:"text",maxlength:"50",id:"editArticleTitle",placeholder:"Article Title",required:"1"},domProps:{value:t.editArticleModel.title},on:{input:function(e){e.target.composing||t.$set(t.editArticleModel,"title",e.target.value)}}}):t._e(),t.editMode?t._e():i("h4",[t._v(t._s(t.article.title))])]),i("div",{staticClass:"card-body"},[t.editMode?i("vue-editor",{attrs:{id:"editArticleContent"},model:{value:t.editArticleModel.content,callback:function(e){t.$set(t.editArticleModel,"content",e)},expression:"editArticleModel.content"}}):t._e(),t.editMode?t._e():i("span",["articles"==t.$route.name?i("div",{domProps:{innerHTML:t._s(t.article.content.length>200?t.article.content.slice(0,200)+" ...":t.article.content)}}):t._e(),"articles"==t.$route.name?i("span",{staticClass:"tohover",on:{click:function(e){e.preventDefault(),t.$router.push({name:"articleDetail",params:{id:t.article._id}})}}},[i("span",{staticClass:"badge badge-pill badge-success pull-right"},[i("i",[t._v("Read More >> ")])]),i("br")]):t._e(),"articleDetail"==t.$route.name?i("div",{domProps:{innerHTML:t._s(t.article.content)}}):t._e()]),t.editMode?i("span",{staticClass:"text-centered row pull-right p-3 mx-auto"},[i("button",{staticClass:"btn btn-secondary m-3",attrs:{type:"button"},on:{click:function(e){t.editMode=!1}}},[t._v("Cancel")]),i("button",{staticClass:"btn btn-warning m-3",attrs:{type:"button"},on:{click:t.updateArticle}},[t._v("Update")])]):t._e(),i("hr"),i("small",{staticClass:"pull-right"},[i("b",[t._v(t._s(t.article.author.name))])]),i("br"),i("small",{staticClass:"pull-right"},[i("i",[t._v(t._s(t.article.updatedAt))])]),i("br")],1),"articleDetail"==t.$route.name?i("div",{staticClass:"card-footer"},[i("Related",{attrs:{article:t.article}})],1):t._e()])]),"articles"==t.$route.name?i("div",{staticClass:" p-3 d-flex align-content-around flex-wrap bg-primary text-light",staticStyle:{width:"50px"}},[i("span",[i("span",{staticClass:"badge badge-pill badge-success"},[t._v(t._s(t.article.viewCount))]),i("i",{staticClass:"fa fa-eye fa-lg"})]),i("span",[i("span",{staticClass:"badge badge-pill badge-warning"},[t._v(" "+t._s(t.article.likes.length)+" ")]),i("i",{staticClass:"fa fa-heart fa-lg"})]),i("span",[i("span",{staticClass:"badge badge-pill badge-info"},[t._v(t._s(t.article.comments.length))]),i("i",{staticClass:"fa fa-comments fa-lg"})])]):t._e()]),t.$route.params.id===t.article._id?i("div",{staticClass:"card-footer"},[i("div",{staticClass:" d-flex justify-content-between p-2 px-5"},[i("span",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.like()}}},[t.user&&-1!=t.article.likes.indexOf(t.user._id)?i("i",{staticClass:"fa fa-heart fa-lg"}):i("i",{staticClass:"fa fa-heart-o fa-lg",attrs:{"aria-hidden":"true"}}),i("span",{staticClass:"badge badge-pill badge-danger"},[t._v(t._s(t.article.likes.length))])]),i("span",[i("i",{staticClass:"fa fa-comments fa-lg"}),i("span",{staticClass:"badge badge-pill badge-warning"},[t._v(t._s(t.article.comments.length))])]),i("span",[i("i",{staticClass:"fa fa-eye fa-lg"}),i("span",{staticClass:"badge badge-pill badge-success"},[t._v(t._s(t.article.viewCount))])]),t.user&&t.article.author._id==t.user._id?i("span",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.editArticle()}}},[i("i",{staticClass:"fa fa-pencil-square fa-lg"})]):t._e(),t.user&&t.article.author._id==t.user._id?i("span",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.deleteArticle()}}},[i("i",{staticClass:"fa fa-remove fa-lg"})]):t._e()])]):t._e(),t.$route.params.id===t.article._id?i("div",{staticClass:"card-footer"},[i("CommentBar",{attrs:{article:t.article,logNotification:t.logNotification,user:t.user,fetchArticle:t.fetchArticle,fetchArticles:t.fetchArticles}})],1):t._e()])]):t._e()])},s=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("ul",{staticClass:"list-group"},[t._l(t.comments,function(e){return i("li",{key:e._id,staticClass:"list-group-item"},[i("div",{staticClass:"d-flex justify-content-between "},[i("span",[t._v("\n                    "+t._s(e.comment)+" \n                    "),i("br"),i("small",{staticClass:"ml-3"},[t._v(" - "+t._s(e.user.name)+" @ "),i("i",[t._v(" "+t._s(e.createdAt)+" ")])])]),t.user&&e.user._id==t.user._id?i("div",{staticStyle:{cursor:"pointer"},on:{click:function(i){t.deleteComment(e._id)}}},[i("i",{staticClass:"fa fa-trash fa-sm"})]):t._e()])])}),t.user?i("li",{staticClass:"list-group-item active"},[i("form",[i("div",{staticClass:"form-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.commentInput,expression:"commentInput"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Comment..."},domProps:{value:t.commentInput},on:{input:function(e){e.target.composing||(t.commentInput=e.target.value)}}}),i("input",{staticClass:"btn btn-sm btn-warning mt-2 pull-right ",attrs:{type:"submit",value:"Post Comment"},on:{click:function(e){e.preventDefault(),t.postComment()}}})])])]):t._e()],2)])},n=[],l={props:["article","logNotification","user","fetchArticle","fetchArticles"],data:function(){return{commentInput:"",comments:this.article.comments}},created:function(){},methods:{postComment:function(){var t=this;if(""==this.commentInput.trim())return this.logNotification("Please Write your Comment","warning",3e3);this.$server.post("/comments/".concat(this.article._id),{comment:this.commentInput},{headers:{token:localStorage.getItem("token")}}).then(function(e){t.commentInput="",t.comments=e.data.comments,t.fetchArticle(),t.fetchArticles()}).catch(function(t){console.log(t.response)})},deleteComment:function(t){var e=this;this.$server.delete("/comments/".concat(t),{headers:{token:localStorage.getItem("token")}}).then(function(t){e.fetchArticle(),e.fetchArticles(),e.comments=t.data.article.comments,e.logNotification(t.data.message,"info",2e3)}).catch(function(t){e.logNotification(t.response,"danger",5e3)})}}},o=l,r=i("2877"),d=Object(r["a"])(o,c,n,!1,null,null,null),u=d.exports,f=i("b3e9"),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h5",{},[t._v(" Realted Videos")]),i("transition",{attrs:{name:"fade",mode:"out-in"}},[t.playVideoMode?t._e():i("div",{staticClass:"card-deck"},t._l(t.relatedVideos,function(e,a){return i("div",{key:a,staticClass:"card hover",on:{click:function(i){t.playVideo(e.id.videoId)}}},[i("img",{staticClass:"card-img-top",attrs:{src:e.snippet.thumbnails.medium.url,alt:e.snippet.title}}),i("div",{staticClass:"card-body"},[i("h6",{staticClass:"card-title"},[t._v(t._s(e.snippet.title))])])])}))]),i("transition",{attrs:{name:"fade",mode:"out-in"}},[t.playVideoMode?i("span",[i("iframe",{attrs:{width:"100%",height:"400px",src:t.playVideoMode}}),i("button",{staticClass:"btn btn-success btn-lg btn-block ",attrs:{type:"button"},on:{click:function(e){t.playVideoMode=""}}},[t._v("Back")])]):t._e()])],1)},p=[],h=i("1052"),g=i.n(h),v={props:["article"],data:function(){return{relatedVideos:[],playVideoMode:""}},created:function(){this.getRelatedVideos()},methods:{playVideo:function(t){this.playVideoMode="https://www.youtube.com/embed/".concat(t)},getRelatedVideos:function(){var t=this;g.a.get("https://www.googleapis.com/youtube/v3/search",{params:{key:"AIzaSyB14D6HhI49S1hlpYeySp0u09fHIB0DrGg",part:"snippet,id",maxResults:3,order:"relevance",type:"video",q:t.article.title}}).then(function(e){t.relatedVideos=e.data.items}).catch(function(t){console.log(t)})}}},_=v,C=(i("a553"),Object(r["a"])(_,m,p,!1,null,"6eb116dc",null)),b=C.exports,A={props:["article","user","logNotification","fetchArticles","fetchArticle"],components:{CommentBar:u,VueEditor:f["VueEditor"],Related:b},data:function(){return{editMode:!1,editArticleModel:{title:this.article.title,content:this.article.content}}},created:function(){},methods:{like:function(){var t=this;return this.user?this.user._id==this.article.author._id?this.logNotification(" Please like others article ;) ","warning",1e3):void this.$server.post("/articles/likes/".concat(this.article._id),{},{headers:{token:localStorage.getItem("token")}}).then(function(e){t.logNotification(e.data.message,"info",3e3),t.fetchArticles(),t.fetchArticle()}).catch(function(e){t.logNotification(e.response.data.message,"danger",3e3)}):this.logNotification(" Please Register/Login First ","info",1e3)},deleteArticle:function(){var t=this;this.$server.delete("/articles/".concat(this.article._id),{headers:{token:localStorage.getItem("token")}}).then(function(){t.logNotification("Article Deleted","info",3e3),t.fetchArticles(),t.$router.push("/")}).catch(function(e){t.logNotification(e.response.data.message,"danger",3e3)})},editArticle:function(){this.editMode=!0,this.editArticleModel={title:this.article.title,content:this.article.content}},updateArticle:function(){var t=this;this.$server.put("/articles/".concat(this.article._id),this.editArticleModel,{headers:{token:localStorage.getItem("token")}}).then(function(e){t.logNotification(e.data.message,"info",3e3),t.fetchArticles(),t.fetchArticle(),t.editMode=!1}).catch(function(e){t.logNotification(e.response.data.message,"danger",3e3)})}}},k=A,y=(i("8ffa"),Object(r["a"])(k,a,s,!1,null,null,null));e["default"]=y.exports},ed95:function(t,e,i){}}]);
//# sourceMappingURL=chunk-216ac9bb.d01197e3.js.map