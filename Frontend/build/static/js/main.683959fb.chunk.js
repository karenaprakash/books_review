(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{246:function(e,t,a){e.exports=a(444)},444:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(90),l=a.n(o),i=a(16),c=a(8),s=a(9),u=a(215),m=a.n(u),p=a(216),d=a.n(p),h=a(36),b=a(11),v=a(12),E=a(14),g=a(13),f=a(15),y=a(99),k=a(18),O=a.n(k),w=a(60),_=a(93),N=a.n(_);a(445);N.a.initializeApp({apiKey:"AIzaSyBQyJUdzSNoqvF57H0kL2xl1svlAtfi84g",authDomain:"booksreview-4122b.firebaseapp.com",databaseURL:"https://booksreview-4122b.firebaseio.com",projectId:"booksreview-4122b",storageBucket:"booksreview-4122b.appspot.com",messagingSenderId:"225638829365",appId:"1:225638829365:web:9ca5d276a1b794865a107c"});var I=N.a.storage();function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"asc",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return{type:"GET_BOOKS",payload:O.a.get("/api/getBooks?limit=".concat(e,"&skip=").concat(t,"&order=").concat(a)).then(function(e){return n?[].concat(Object(y.a)(n),Object(y.a)(e.data)):e.data})}}function S(e){return console.log(e),{type:"ADD_BOOK_ERROR",payload:"error"}}var R=function(e){return function(t){var a="firebase-image-"+Date.now();I.ref("images/".concat(a)).put(e.bookImage[0]).on("state_changed",function(e){t((console.log("start"),{type:"ADD_BOOK_START",payload:"start"}))},function(e){t(S(e))},function(){I.ref("images").child(a).getDownloadURL().then(function(a){if(e.bookImage=a,console.log(e),a)O.a.post("/api/book",e).then(function(e){return console.log(e.data),e.data.post?(alert("Data uploaded Successfully."),t(Object(w.a)("AddBook")),t((console.log("done"),{type:"ADD_BOOK_SUCCESS",payload:"done"}))):(t(S("error")),alert("Error while uploading data.Please try again later")),e.data}).catch(function(e){t(S(e)),alert("error while uploading image using firebase storage")})})})}};function C(){return{type:"CLEAR_NEWBOOK",payload:{}}}function B(e){return{type:"GET_BOOK",payload:O.a.get("/api/getBook?id=".concat(e)).then(function(e){return e.data})}}var T=function(e){return function(t){var a="firebase-image-"+Date.now();I.ref("images/".concat(a)).put(e.bookImage[0]).on("state_changed",function(e){t((console.log("start"),{type:"ADD_BOOK_START",payload:"start"}))},function(e){t(function(e){return console.log(e),{type:"ADD_BOOK_ERROR",payload:"error"}}(e))},function(){I.ref("images").child(a).getDownloadURL().then(function(a){if(e.bookImage=a,console.log(e),a){var n=O.a.post("/api/book_with_img_update",e).then(function(e){return e.data});t((r=n,console.log("done"),{type:"UPDATE_BOOK_WITH_IMG",payload:r}))}var r})})}};function D(e){return{type:"UPDATE_BOOK_WITHOUT_IMG",payload:O.a.post("/api/book_without_img_update",e).then(function(e){return e.data})}}function P(e,t){I.refFromURL(t).delete();return{type:"DELETE_BOOK",payload:O.a.delete("/api/delete_book?id=".concat(e)).then(function(e){return e.data})}}function L(){return{type:"CLEAR_BOOK",payload:{book:null,updateBook:!1,postDeleted:!1}}}var A=function(e){return r.a.createElement(i.b,{to:"/books/".concat(e._id),className:"book_item"},r.a.createElement("div",{className:"book_header"},r.a.createElement("h2",null,e.name)),r.a.createElement("div",{className:"book_items"},r.a.createElement("div",{className:"book_author"},e.author),r.a.createElement("div",{className:"book_bubble"},r.a.createElement("strong",null,"Price")," $",e.price),r.a.createElement("div",{className:"book_bubble"},r.a.createElement("strong",null,"Pages")," ",e.pages),r.a.createElement("div",{className:"book_bubble rating"},r.a.createElement("strong",null,"Rating")," ",e.rating)))},U=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(E.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(o)))).renderItems=function(e){return e.list?e.list.map(function(e){return r.a.createElement(A,Object.assign({},e,{key:e._id}))}):null},a.loadmore=function(){var e=a.props.books.list.length;a.props.dispatch(j(5,e,"desc",a.props.books.list))},a}return Object(f.a)(t,e),Object(v.a)(t,[{key:"componentWillMount",value:function(){this.props.dispatch(j(5,0,"desc"))}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderItems(this.props.books),r.a.createElement("div",{className:"loadmore",onClick:this.loadmore},"Load More"))}}]),t}(n.Component);var F=Object(c.b)(function(e){return{books:e.books}})(U),x=function(){return r.a.createElement("div",null,r.a.createElement(F,null))},W=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(E.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(o)))).renderBook=function(e){return e.book?r.a.createElement("div",{className:"br_container"},r.a.createElement("div",{className:"br_header"},r.a.createElement("h2",null,e.book.name),r.a.createElement("h5",null,e.book.author),r.a.createElement("div",{className:"br_reviewer"},r.a.createElement("span",null,"Review By:")," ",e.reviewer.name," ",e.reviewer.lastname),r.a.createElement("div",{className:"br_image"},r.a.createElement("img",{src:"".concat(e.book.bookImage),alt:"book"}))),r.a.createElement("div",{className:"br_review"},e.book.review),r.a.createElement("div",{className:"br_box"},r.a.createElement("div",{className:"left"},r.a.createElement("div",null,r.a.createElement("span",null,"Pages:"),e.book.pages),r.a.createElement("div",null,r.a.createElement("span",null,"Price:")," $",e.book.price)),r.a.createElement("div",{className:"right"},r.a.createElement("span",null,"Rating"),r.a.createElement("div",null,e.book.rating,"/5")))):null},a}return Object(f.a)(t,e),Object(v.a)(t,[{key:"componentWillMount",value:function(){this.props.dispatch(function(e){var t=O.a.get("/api/getBook?id=".concat(e));return function(e){t.then(function(t){var a=t.data;O.a.get("/api/getReviewer?id=".concat(a.ownerId)).then(function(t){var n=t.data;e({type:"GET_BOOK_W_REVIEWER",payload:{book:a,reviewer:n}})})})}}(this.props.match.params.id))}},{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"CLEAR_BOOK_W_REVIEWER",payload:{book:{},reviewer:{}}})}},{key:"render",value:function(){var e=this.props.books;return r.a.createElement("div",null,this.renderBook(e))}}]),t}(n.Component);var K=Object(c.b)(function(e){return{books:e.books}})(W),G=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",error:"",success:!1},a.handleInputEmail=function(e){a.setState({email:e.target.value})},a.handleInputPassword=function(e){a.setState({password:e.target.value})},a.submitForm=function(e){e.preventDefault(),a.props.dispatch(function(e){var t=e.email,a=e.password;return{type:"USER_LOGIN",payload:O.a.post("/api/login",{email:t,password:a}).then(function(e){return e.data})}}(a.state))},a}return Object(f.a)(t,e),Object(v.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.user.login.isAuth&&this.props.history.push("/user")}},{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{className:"rl_container"},r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("h2",null,"Login Here"),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"email",placeholder:"Enter Your Email",value:this.state.email,onChange:this.handleInputEmail})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"password",placeholder:"Enter Your Password",value:this.state.password,onChange:this.handleInputPassword})),r.a.createElement("button",{type:"submit"},"Login"),r.a.createElement("div",{className:"error"},e.login?r.a.createElement("div",null,e.login.message):null)))}}]),t}(n.Component);var H=Object(c.b)(function(e){return{user:e.user}})(G),M=a(94),V=a.n(M),z=a(218),J=a.n(z);var Y=Object(c.b)(function(e){return{user:e.user}})(function(e){var t=e.user,a=e.onHideNav,n=[{type:"navItem",icon:"home",text:"Home",link:"/",restricted:!1},{type:"navItem",icon:"file-text-o",text:"My Profile",link:"/user",restricted:!0},{type:"navItem",icon:"users",text:"Add Admins",link:"/user/register",restricted:!0},{type:"navItem",icon:"sign-in",text:"Login",link:"/login",restricted:!1,exclude:!0},{type:"navItem",icon:"plus",text:"Add Reviews",link:"/user/add",restricted:!0},{type:"navItem",icon:"star",text:"My Reviews",link:"/user/user-reviews",restricted:!0},{type:"navItem",icon:"sign-out",text:"Logout",link:"/user/logout",restricted:!0}],o=function(e,t){return r.a.createElement("div",{key:t,className:e.type,onClick:a},r.a.createElement(i.b,{to:e.link},r.a.createElement(V.a,{name:e.icon}),e.text))};return r.a.createElement("div",null,t.login?n.map(function(e,a){return t.login.isAuth?e.exclude?null:o(e,a):e.restricted?null:o(e,a)}):null)}),$=function(e){return r.a.createElement(J.a,{showNav:e.showNav,onHideNav:e.onHideNav,navStyle:{background:"#242424",maxWidth:"220px"}},r.a.createElement(Y,{onHideNav:e.onHideNav}))},q=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={showNav:!1},a.onHideNav=function(){a.setState({showNav:!1})},a}return Object(f.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("header",null,r.a.createElement("div",{className:"open_nav"},r.a.createElement(V.a,{name:"bars",onClick:function(){return e.setState({showNav:!0})},style:{color:"#ffffff",padding:"10px",cursor:"pointer"}})),r.a.createElement($,{showNav:this.state.showNav,onHideNav:function(){return e.onHideNav()}}),r.a.createElement(i.b,{to:"/",className:"logo"},"The Book's Reviews"))}}]),t}(n.Component),Q=function(e){return r.a.createElement("div",null,r.a.createElement(q,null),r.a.createElement("div",null,e.children))},X=function(e,t){var a=function(a){function n(){var e,t;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(E.a)(this,(e=Object(g.a)(n)).call.apply(e,[this].concat(r)))).state={loading:!0},t}return Object(f.a)(n,a),Object(v.a)(n,[{key:"componentWillMount",value:function(){this.props.dispatch({type:"USER_AUTH",payload:O.a.get("/api/auth").then(function(e){return e.data})})}},{key:"componentWillReceiveProps",value:function(e){this.setState({loading:!1}),e.user.login.isAuth?!1===t&&this.props.history.push("/user"):t&&this.props.history.push("/login")}},{key:"render",value:function(){return this.state.loading?r.a.createElement("div",{className:"loader"}," Loading... "):r.a.createElement(e,Object.assign({},this.props,{user:this.props.user}))}}]),n}(n.Component);return Object(c.b)(function(e){return{user:e.user}})(a)},Z=function(e){var t=e.user.login;return r.a.createElement("div",{className:"user_container"},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{alt:"avatar",src:"/images/avatar.png"})),r.a.createElement("div",{className:"nfo"},r.a.createElement("div",null,r.a.createElement("span",null,"Name:")," ",t.name),r.a.createElement("div",null,r.a.createElement("span",null,"Lastname:")," ",t.lastname),r.a.createElement("div",null,r.a.createElement("span",null,"Email:")," ",t.email)))},ee=a(211),te=a(212),ae=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(E.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(o)))).state={bookImage:null,bookName:"",imageUrl:"",isSubmited:!1,bookData:null,loader:!1,show:!0},a.handleFileChange=function(e){console.log(e.target.files[0]),e.target.files&&e.target.files[0]&&a.setState({imageUrl:URL.createObjectURL(e.target.files[0]),show:!0}),e.target.file&&a.setState({bookImage:e.target.files[0],bookName:e.target.files[0].name})},a.renderFileInputField=function(e){e.input.value&&console.log(e.input.value.length);var t=e.input.value?a.state.bookName:+new Date;console.log(t);var n="form-input ".concat(e.meta.touched&&e.meta.error?"has-error":"");return r.a.createElement("div",{className:n},r.a.createElement("label",null,e.myLabel),r.a.createElement("input",{key:t,type:"file",onChange:e.input.onChange}),r.a.createElement("div",{className:"error"},e.meta.touched?e.meta.error:""))},a.handleSelectChange=function(e){console.log(e.target.value)},a}return Object(f.a)(t,e),Object(v.a)(t,[{key:"renderInputField",value:function(e){var t="form-input ".concat(e.meta.touched&&e.meta.error?"has-error":"");return r.a.createElement("div",{className:t},r.a.createElement("label",null,e.myLabel),r.a.createElement("input",Object.assign({type:"text"},e.input,{onChange:e.input.onChange})),r.a.createElement("div",{className:"error"},e.meta.touched?e.meta.error:""))}},{key:"renderTextareaField",value:function(e){var t="form-input ".concat(e.meta.touched&&e.meta.error?"has-error":"");return r.a.createElement("div",{className:t},r.a.createElement("label",null,e.myLabel),r.a.createElement("textarea",e.input),r.a.createElement("div",{className:"error"},e.meta.touched?e.meta.error:""))}},{key:"renderNumberInputField",value:function(e){var t="form-input ".concat(e.meta.touched&&e.meta.error?"has-error":"");return r.a.createElement("div",{className:t},r.a.createElement("label",null,e.myLabel),r.a.createElement("input",Object.assign({type:"number"},e.input,{onChange:e.input.onChange})),r.a.createElement("div",{className:"error"},e.meta.touched?e.meta.error:""))}},{key:"renderSelectField",value:function(e){var t="form-input ".concat(e.meta.touched&&e.meta.error?"has-error":"");return r.a.createElement("div",{className:t},r.a.createElement("label",null,e.myLabel),r.a.createElement("select",Object.assign({},e.input,{onChange:e.input.onChange}),e.children),r.a.createElement("div",{className:"error"},e.meta.touched?e.meta.error:""))}},{key:"onSubmit",value:function(e){e.ownerId=this.props.user.login.id,this.props.dispatch(R(e)),this.setState({isSubmited:!0})}},{key:"componentWillUnmount",value:function(){console.log("component will unmount"),this.props.dispatch({type:"CLEAR_NEWBOOK",payload:{}})}},{key:"componentWillMount",value:function(){console.log("component will mount"),this.props.dispatch({type:"CLEAR_NEWBOOK",payload:{}})}},{key:"componentDidUpdate",value:function(){console.log("component did update")}},{key:"componentWillUpdate",value:function(){console.log("component will update")}},{key:"shouldComponentUpdate",value:function(){return console.log("component should update"),!0}},{key:"componentWillReceiveProps",value:function(e){console.log("component will reciveProps"),""!==this.state.imageUrl&&null!==e.data.bookImage&&"done"===e.data.bookImage&&(this.setState({show:!1}),e.data.bookImage=""),console.log(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Form"},r.a.createElement("div",{className:"top"},r.a.createElement("h3",null,"Add a Review"),r.a.createElement(i.b,{to:"/"},"Back")),r.a.createElement("form",{onSubmit:this.props.handleSubmit(function(t){return e.onSubmit(t)}),method:"POST",encType:"multipart/form-data"},r.a.createElement(ee.a,{myLabel:"Enter Name",name:"name",component:this.renderInputField}),r.a.createElement(ee.a,{myLabel:"Enter Author",name:"author",component:this.renderInputField}),r.a.createElement(ee.a,{myLabel:"Enter Review",name:"review",component:this.renderTextareaField}),r.a.createElement(ee.a,{myLabel:"Enter Pages",name:"pages",component:this.renderNumberInputField}),r.a.createElement(ee.a,{myLabel:"Enter Price",name:"price",component:this.renderNumberInputField}),r.a.createElement(ee.a,{myLabel:"Select Rating",name:"rating",component:this.renderSelectField},r.a.createElement("option",null),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5")),r.a.createElement(ee.a,{myLabel:"Select Book Image",name:"bookImage",type:"file",onChange:this.handleFileChange,component:this.renderFileInputField}),""!==this.state.imageUrl&&null!==this.props.data.bookImage&&this.state.show?r.a.createElement("div",{className:"br_image"},r.a.createElement("img",{src:this.state.imageUrl,alt:"product"})):null,null!==this.props.data.bookImage&&"start"===this.props.data.bookImage?r.a.createElement("div",{className:"loader"}," Loading... "):null,r.a.createElement("button",{type:"submit"},"Submit")))}}]),t}(n.Component);var ne=Object(c.b)(function(e){var t;return t={name:"",author:"",review:"",pages:"",rating:"",price:"",bookImage:""},{data:e.books,initialValues:t}},{addBook:R,clearNewBook:C})(Object(te.a)({validate:function(e){var t={};return e.name||(t.name="The name is empty"),e.author||(t.author="The author is empty"),e.review||(t.review="The review is empty"),e.pages||(t.pages="The pages is empty"),e.price||(t.price="The price is empty"),e.rating||(t.rating="The rating is empty"),e.bookImage&&0!==e.bookImage.length||(t.bookImage="The bookImage is empty"),t},form:"AddBook",enableReinitialize:!0})(ae)),re=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={formData:{bookImage:"",isBookSelected:!1},isFormChanged:null},a.deletePost=function(){var e=a.props.book,t="";0!==Object.entries(e).length&&null!==e.book&&(t=e.book.bookImage,a.props.dispatch(P(a.props.match.params.id,t)),window.scrollTo(0,0))},a.redirectUser=function(){setTimeout(function(){a.props.history.push("/user/user-reviews")},1e3)},a.handleFileChange=function(e){1===e.target.files.length&&a.setState({formData:{bookImage:e.target.files[0].name,isBookSelected:!0}})},a.handleSelectChange=function(e){console.log(e.target.value)},a.submitForm=function(e){if(null!=a.props.initialValues&&null!=e){if(JSON.stringify(a.props.initialValues)===JSON.stringify(e))return a.setState({isFormChanged:!1}),void window.scrollTo(0,0);a.setState({isFormChanged:!0}),window.scrollTo(0,0)}a.state.formData.isBookSelected&&"string"!==typeof e.bookImage&&null!==e.bookImage?a.props.dispatch(T(e)):a.props.dispatch(D(e))},a}return Object(f.a)(t,e),Object(v.a)(t,[{key:"componentWillMount",value:function(){this.props.dispatch(B(this.props.match.params.id))}},{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"CLEAR_BOOK",payload:{book:null,updateBook:!1,postDeleted:!1}})}},{key:"componentWillReciveProps",value:function(e){console.log(this.props),console.log(e)}},{key:"renderInputField",value:function(e){var t="form-input ".concat(e.meta.touched&&e.meta.error?"has-error":"");return r.a.createElement("div",{className:t},r.a.createElement("label",null,e.myLabel),r.a.createElement("input",Object.assign({type:"text"},e.input,{onChange:e.input.onChange})),r.a.createElement("div",{className:"error"},e.meta.touched?e.meta.error:""))}},{key:"renderFileInputField",value:function(e){var t="form-input ".concat(e.meta.touched&&e.meta.error?"has-error":"");return r.a.createElement("div",{className:t},r.a.createElement("label",null,e.myLabel),r.a.createElement("input",{type:"file",onChange:e.input.onChange}),r.a.createElement("div",{className:"error"},e.meta.touched?e.meta.error:""))}},{key:"renderTextareaField",value:function(e){var t="form-input ".concat(e.meta.touched&&e.meta.error?"has-error":"");return r.a.createElement("div",{className:t},r.a.createElement("label",null,e.myLabel),r.a.createElement("textarea",e.input),r.a.createElement("div",{className:"error"},e.meta.touched?e.meta.error:""))}},{key:"renderNumberInputField",value:function(e){var t="form-input ".concat(e.meta.touched&&e.meta.error?"has-error":"");return r.a.createElement("div",{className:t},r.a.createElement("label",null,e.myLabel),r.a.createElement("input",Object.assign({type:"number"},e.input,{onChange:e.input.onChange})),r.a.createElement("div",{className:"error"},e.meta.touched?e.meta.error:""))}},{key:"renderSelectField",value:function(e){var t="form-input ".concat(e.meta.touched&&e.meta.error?"has-error":"");return r.a.createElement("div",{className:t},r.a.createElement("label",null,e.myLabel),r.a.createElement("select",Object.assign({},e.input,{onChange:e.input.onChange}),e.children),r.a.createElement("div",{className:"error"},e.meta.touched?e.meta.error:""))}},{key:"render",value:function(){var e=this,t=this.props.book,a=Object.entries(t).length;return r.a.createElement("div",{className:"Form"},r.a.createElement("div",{className:"top"},r.a.createElement("h3",null,"Edit Review"),r.a.createElement(i.b,{to:"/"},"Back")),t.updateBook?r.a.createElement("div",{className:"edit_confirm"},"post updated,",r.a.createElement(i.b,{to:"/books/".concat(t.book._id)},"click here to see post")):null,t.postDeleted?r.a.createElement("div",{className:"red_tag"},"Post Deleted",this.redirectUser()):null,this.state.isFormChanged||null===this.state.isFormChanged?null:r.a.createElement("div",{className:"edit_confirm"},"Please Make Some Changes."),r.a.createElement("form",{onSubmit:this.props.handleSubmit(function(t){return e.submitForm(t)}),method:"POST",encType:"multipart/form-data"},r.a.createElement(ee.a,{myLabel:"Enter Name",name:"name",component:this.renderInputField}),r.a.createElement(ee.a,{myLabel:"Enter Author",name:"author",component:this.renderInputField}),r.a.createElement(ee.a,{myLabel:"Enter Review",name:"review",component:this.renderTextareaField}),r.a.createElement(ee.a,{myLabel:"Enter Pages",name:"pages",component:this.renderNumberInputField}),r.a.createElement(ee.a,{myLabel:"Enter Price",name:"price",component:this.renderNumberInputField}),r.a.createElement(ee.a,{myLabel:"Select Rating",name:"rating",component:this.renderSelectField},r.a.createElement("option",null),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5")),r.a.createElement(ee.a,{myLabel:"Select Book Image",name:"bookImage",value:this.state.formData.bookImage,type:"file",onChange:this.handleFileChange,component:this.renderFileInputField}),0===a||null===t.book?null:r.a.createElement("div",{className:"br_image"},r.a.createElement("img",{src:"".concat(t.book.bookImage),alt:"product"})),r.a.createElement("div",{className:"delete_post"},r.a.createElement("button",{type:"submit"},"Edit  Review")),r.a.createElement("div",{className:"delete_post"},r.a.createElement("div",{className:"button",onClick:function(){return e.deletePost()}},"Delete Review"))))}}]),t}(n.PureComponent);var oe=Object(c.b)(function(e){var t=e.books,a={};if(0!==Object.entries(t).length&&"object"===typeof t.book&&null!==t.book){var n=e.books.book;a={_id:n._id,name:n.name,author:n.author,review:n.review,pages:n.pages,rating:n.rating,price:n.price,bookImage:n.bookImage}}return{book:e.books,initialValues:a}},{getBook:B,updateBook_with_image:T,updateBook_without_image:D,clearBook:L,deleteBook:P})(Object(te.a)({validate:function(e){var t={};return e.name||(t.name="The name is empty"),e.author||(t.author="The author is empty"),e.review||(t.review="The review is empty"),e.pages||(t.pages="The pages is empty"),e.price||(t.price="The price is empty"),e.rating||(t.rating="The rating is empty"),e.bookImage&&0!==e.bookImage.length&&null!==e.bookImage||(t.bookImage="The bookImage is empty"),t},form:"EditReview",enableReinitialize:!0})(re)),le=a(220),ie=a.n(le),ce=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(E.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(o)))).showUserPosts=function(e){return e.userPosts?e.userPosts.map(function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,r.a.createElement(i.b,{to:"/user/edit-post/".concat(e._id)},e.name)),r.a.createElement("td",null,e.author),r.a.createElement("td",null,ie()(e.createAt).format("MM/DD/YY")))}):null},a}return Object(f.a)(t,e),Object(v.a)(t,[{key:"componentWillMount",value:function(){var e;this.props.dispatch((e=this.props.user.login.id,{type:"GET_USER_POSTS",payload:O.a.get("/api/user_posts?id=".concat(e)).then(function(e){return e.data})}))}},{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{className:"user_posts"},r.a.createElement("h4",null,"Your Reviews:"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Author"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",null,this.showUserPosts(e))))}}]),t}(n.Component);var se=Object(c.b)(function(e){return{user:e.user}})(ce),ue=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(E.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(o)))).state={name:"",lastname:"",email:"",password:"",error:""},a.handleInputName=function(e){a.setState({name:e.target.value})},a.handleInputLastName=function(e){a.setState({lastname:e.target.value})},a.handleInputEmail=function(e){a.setState({email:e.target.value})},a.handleInputPassword=function(e){a.setState({password:e.target.value})},a.submitForm=function(e){e.preventDefault(),a.setState({error:""}),a.props.dispatch(function(e,t){var a=O.a.post("/api/register",e);return function(e){a.then(function(a){var n=a.data,r=n.success?[].concat(Object(y.a)(t),[n.user]):t,o={success:n.success,users:r};e({type:"USER_REGISTER",payload:o})})}}({email:a.state.email,password:a.state.password,name:a.state.name,lastname:a.state.lastname},a.props.user.users))},a.showUsers=function(e){return e.users?e.users.map(function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.lastname),r.a.createElement("td",null,e.email))}):null},a}return Object(f.a)(t,e),Object(v.a)(t,[{key:"componentWillMount",value:function(){this.props.dispatch({type:"GET_USER",payload:O.a.get("/api/users").then(function(e){return e.data})})}},{key:"componentWillReceiveProps",value:function(e){!1===e.user.register?this.setState({error:"Error,try again."}):this.setState({name:"",lastname:"",email:"",password:""})}},{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{className:"rl_container"},r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("h2",null,"Add User"),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"text",placeholder:"Enter Name",value:this.state.name,onChange:this.handleInputName})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"text",placeholder:"Enter Lastname",value:this.state.lastname,onChange:this.handleInputLastName})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"email",placeholder:"Enter Email",value:this.state.email,onChange:this.handleInputEmail})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"password",placeholder:"Enter Password",value:this.state.password,onChange:this.handleInputPassword})),r.a.createElement("button",{type:"submit"},"Add User"),r.a.createElement("div",{className:"error"},this.state.error)),r.a.createElement("div",{className:"current_users"},r.a.createElement("h4",null,"Current Users:"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Lastname"),r.a.createElement("th",null,"Email"))),r.a.createElement("tbody",null,this.showUsers(e)))))}}]),t}(n.PureComponent);var me=Object(c.b)(function(e){return{user:e.user}})(ue),pe=function(e){O.a.get("/api/logout").then(function(t){setTimeout(function(){e.history.push("/")},2e3)});return r.a.createElement("div",{className:"logout_container"},r.a.createElement("h1",null,"Sorry to see you go :("))},de=function(){return r.a.createElement(Q,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/login",exact:!0,component:X(H,!1)}),r.a.createElement(h.a,{path:"/user/logout",exact:!0,component:X(pe,!0)}),r.a.createElement(h.a,{path:"/user/add",exact:!0,component:X(ne,!0)}),r.a.createElement(h.a,{path:"/user/register",exact:!0,component:X(me,!0)}),r.a.createElement(h.a,{path:"/user/edit-post/:id",exact:!0,component:X(oe,!0)}),r.a.createElement(h.a,{path:"/user",exact:!0,component:X(Z,!0)}),r.a.createElement(h.a,{path:"/user/user-reviews",exact:!0,component:X(se,!0)}),r.a.createElement(h.a,{path:"/",exact:!0,component:X(x,null)}),r.a.createElement(h.a,{path:"/books/:id",exact:!0,component:X(K,null)})))},he=a(97);function be(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function ve(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?be(a,!0).forEach(function(t){Object(he.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):be(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function Ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function ge(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ee(a,!0).forEach(function(t){Object(he.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ee(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var fe=a(213),ye=Object(s.c)({books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BOOKS":return ve({},e,{list:t.payload});case"GET_BOOK":return ve({},e,{book:t.payload});case"GET_BOOK_W_REVIEWER":case"CLEAR_BOOK_W_REVIEWER":return ve({},e,{book:t.payload.book,reviewer:t.payload.reviewer});case"ADD_BOOK":case"ADD_BOOK_START":case"ADD_BOOK_ERROR":case"ADD_BOOK_SUCCESS":return ve({},e,{bookImage:t.payload});case"CLEAR_NEWBOOK":return ve({},e,{newbook:t.payload});case"UPDATE_BOOK_WITH_IMG":case"UPDATE_BOOK_WITHOUT_IMG":return ve({},e,{updateBook:t.payload.success,book:t.payload.doc});case"DELETE_BOOK":return ve({},e,{postDeleted:t.payload});case"CLEAR_BOOK":return ve({},e,{updateBook:t.payload.updateBook,book:t.payload.book,postDeleted:t.payload.postDeleted});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN":case"USER_AUTH":return ge({},e,{login:t.payload});case"GET_USER_POSTS":return ge({},e,{userPosts:t.payload});case"GET_USER":return ge({},e,{users:t.payload});case"USER_REGISTER":return ge({},e,{register:t.payload.success,users:t.payload.users});default:return e}},form:fe.a}),ke=(a(338),Object(s.a)(m.a,d.a.withExtraArgument({firebase:N.a,storage:I}))(s.d));l.a.render(r.a.createElement(c.a,{store:ke(ye)},r.a.createElement(i.a,null,r.a.createElement(de,null))),document.getElementById("root"))}},[[246,1,2]]]);
//# sourceMappingURL=main.683959fb.chunk.js.map