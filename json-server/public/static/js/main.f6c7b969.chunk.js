(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{102:function(e,a,t){},103:function(e,a,t){},151:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),s=t.n(l),o=(t(99),t(100),t(101),t(102),t(20)),c=t(21),m=t(22),i=t(23),u=t(9),d=(t(103),t(152)),E=t(153),h=t(154),f=t(155),p=t(156),g=t(157),b=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},N="http://localhost:3001/";function v(e){var a=e.dish;return r.a.createElement(d.a,null,r.a.createElement(u.b,{to:"/menu/".concat(a.id)},r.a.createElement(E.a,{width:"100%",src:N+a.image,alt:a.name}),r.a.createElement(h.a,null,r.a.createElement(f.a,null,a.name))))}var y=function(e){var a=e.dishes.dishes.map((function(e){return r.a.createElement("div",{className:"col-12 col-md-5 m-1",key:e.id},r.a.createElement(v,{dish:e}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.dishes.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(p.a,null,r.a.createElement(g.a,null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement(g.a,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},a))},w=t(19),M=t(158),O=t(159),L=t(160),k=t(179),S=t(161),D=t(162),j=t(163),C=t(164),F=t(165),x=t(8),A=t(31),I=function(e){return function(a){return!a||a.length<=e}};function T(e){var a=e.dish;return r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(A.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.a,null,r.a.createElement(E.a,{top:!0,src:N+a.image,alt:a.name}),r.a.createElement(M.a,null,r.a.createElement(f.a,null,a.name),r.a.createElement(O.a,null,a.description)))))}function R(e){var a=e.comments,t=e.postComment,n=e.dishId;return null!=a?r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement("h4",null,"Comments"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(A.Stagger,{in:!0},a.map((function(e){return r.a.createElement(A.Fade,{in:!0},r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"-- ",e.author," ,",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date))))))})))),r.a.createElement(_,{dishId:n,postComment:t})):r.a.createElement("div",null,"No Comments")}var _=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={showModal:!1},n.toggleModal=n.toggleModal.bind(Object(w.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(w.a)(n)),n}return Object(c.a)(t,[{key:"toggleModal",value:function(){this.setState({showModal:!this.state.showModal})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,a=this;return r.a.createElement("div",null,r.a.createElement(L.a,{color:"outline-dark",onClick:this.toggleModal},r.a.createElement("i",{className:"fa fa-pencil"})," Submit Comment"),r.a.createElement(k.a,{isOpen:this.state.showModal,toggle:this.toggleModal},r.a.createElement(S.a,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(D.a,null,r.a.createElement(x.LocalForm,{onSubmit:function(e){return a.handleSubmit(e)}},r.a.createElement(j.a,{className:"form-group"},r.a.createElement(C.a,{htmlFor:"rating",xs:12},"Rating"),r.a.createElement(F.a,{xs:12},r.a.createElement(x.Control.select,{model:".rating",id:"rating",name:"rating",className:"form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(C.a,{htmlFor:"author",xs:12},"Your Name"),r.a.createElement(F.a,{xs:12},r.a.createElement(x.Control.text,{model:".author",id:"author",name:"author",placeholder:"Your Name",className:"form-control",validators:{minLength:(e=3,function(a){return a&&a.length>=e}),maxLength:I(15)}}),r.a.createElement(x.Errors,{className:"text-danger",model:".author",show:"touched",messages:{minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(C.a,{htmlFor:"comment",xs:12},"Comment"),r.a.createElement(F.a,{xs:12},r.a.createElement(x.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:"6",className:"form-control"}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(F.a,{xs:12},r.a.createElement(L.a,{type:"submit",color:"primary"},"Submit")))))))}}]),t}(n.Component),P=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(p.a,null,r.a.createElement(g.a,null,r.a.createElement(u.b,{to:"/menu"},"Menu")),r.a.createElement(g.a,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement(T,{dish:e.dish}),r.a.createElement(R,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id}))):r.a.createElement("div",null)},q=function(e){return e&&e.length},H=function(e){return function(a){return!a||a.length<=e}},G=function(e){return function(a){return a&&a.length>=e}},U=function(e){return!isNaN(Number(e))},W=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},Y=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(w.a)(n)),n}return Object(c.a)(t,[{key:"handleSubmit",value:function(e){this.props.postFeedback(e.firstname,e.lastname,e.telnum,e.email,e.agree,e.contactType,e.message),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(p.a,null,r.a.createElement(g.a,null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement(g.a,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(x.Form,{model:"feedback",onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(j.a,{className:"form-group"},r.a.createElement(C.a,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(F.a,{md:10},r.a.createElement(x.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:q,minLength:G(3),maxLength:H(15)}}),r.a.createElement(x.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(C.a,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(F.a,{md:10},r.a.createElement(x.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:q,minLength:G(3),maxLength:H(15)}}),r.a.createElement(x.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(C.a,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(F.a,{md:10},r.a.createElement(x.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:q,minLength:G(3),maxLength:H(15),isNumber:U}}),r.a.createElement(x.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(C.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(F.a,{md:10},r.a.createElement(x.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:q,validEmail:W}}),r.a.createElement(x.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(F.a,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(C.a,{check:!0},r.a.createElement(x.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(F.a,{md:{size:3,offset:1}},r.a.createElement(x.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(C.a,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(F.a,{md:10},r.a.createElement(x.Control.textarea,{model:".message",id:"message",name:"message",rows:"8",className:"form-control"}))),r.a.createElement(j.a,{className:"form-group"},r.a.createElement(F.a,{md:{size:10,offset:2}},r.a.createElement(L.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),t}(n.Component),B=t(166),K=t(167);function z(e){var a=e.leader;e.isLoading,e.errMess;return r.a.createElement(A.Fade,{in:!0},r.a.createElement(B.a,null,r.a.createElement(B.a,{left:!0,middle:!0},r.a.createElement(B.a,{object:!0,src:N+a.image,alt:a.name})),r.a.createElement(B.a,{body:!0,className:"ml-5"},r.a.createElement(B.a,{heading:!0},a.name),r.a.createElement("p",null,a.designation),r.a.createElement("div",null,a.description))))}var J=function(e){var a=e.leaders.leaders.map((function(a){return console.log(e.leaders.isLoading),e.leaders.isLoading?r.a.createElement(b,null):e.leaders.errMess?r.a.createElement("h4",null,e.leaders.errMess):r.a.createElement("div",{key:a.id,className:"col-12 mb-4"},r.a.createElement(z,{leader:a}))}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(p.a,null,r.a.createElement(g.a,null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement(g.a,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(d.a,null,r.a.createElement(K.a,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(M.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(d.a,null,r.a.createElement(M.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(B.a,{list:!0},a))))},Z=t(168);function $(e){var a=e.item,t=e.isLoading,n=e.errMess;return t?r.a.createElement(b,null):n?r.a.createElement("h4",null,n):r.a.createElement(A.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.a,null,r.a.createElement(E.a,{src:N+a.image,alt:a.name}),r.a.createElement(M.a,null,r.a.createElement(f.a,null,a.name),a.designation?r.a.createElement(Z.a,null,a.designation):null,r.a.createElement(O.a,null,a.description))))}var Q=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement($,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement($,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement($,{item:e.leader,isLoading:e.leaderLoading,errMess:e.leaderErrMess}))))},V=t(169),X=t(170),ee=t(171),ae=t(172),te=t(173),ne=t(174),re=t(175),le=t(176),se=t(177),oe=t(178),ce=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).toggleNav=n.toggleNav.bind(Object(w.a)(n)),n.toggleModal=n.toggleModal.bind(Object(w.a)(n)),n.handleLogin=n.handleLogin.bind(Object(w.a)(n)),n.state={isNavOpen:!1},n}return Object(c.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen,isModalOpen:!1})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(V.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(X.a,{onClick:this.toggleNav}),r.a.createElement(ee.a,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(ae.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(te.a,{navbar:!0},r.a.createElement(ne.a,null,r.a.createElement(u.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(ne.a,null,r.a.createElement(u.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(ne.a,null,r.a.createElement(u.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(ne.a,null,r.a.createElement(u.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement(te.a,{className:"ml-auto",navbar:!0},r.a.createElement(ne.a,null,r.a.createElement(L.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))))),r.a.createElement(re.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))),r.a.createElement(k.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(S.a,{toggle:this.toggleModal},"Login"),r.a.createElement(D.a,null,r.a.createElement(le.a,{onSubmit:this.handleLogin},r.a.createElement(se.a,null,r.a.createElement(C.a,{htmlFor:"username"},"Username"),r.a.createElement(oe.a,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),r.a.createElement(se.a,null,r.a.createElement(C.a,{htmlFor:"password"},"Password"),r.a.createElement(oe.a,{type:"password",id:"password",name:"password",innerRef:function(a){return e.password=a}})),r.a.createElement(se.a,{check:!0},r.a.createElement(C.a,{check:!0},r.a.createElement(oe.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember me")),r.a.createElement(L.a,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),t}(n.Component);var me=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(u.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},ie=t(10),ue=t(26),de=function(){return{type:"DISHES_LOADING"}},Ee=function(e){return{type:"DISHES_FAILED",payload:e}},he=function(e){return{type:"ADD_DISHES",payload:e}},fe=function(e){return{type:"COMMENTS_FAILED",payload:e}},pe=function(e){return{type:"ADD_COMMENTS",payload:e}},ge=function(){return{type:"PROMOS_LOADING"}},be=function(e){return{type:"PROMOS_FAILED",payload:e}},Ne=function(e){return{type:"ADD_PROMOS",payload:e}},ve=function(){return{type:"LEADERS_LOADING"}},ye=function(e){return{type:"LEADERS_FAILED",payload:e}},we=t(56),Me=t(88),Oe=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){return Object(o.a)(this,t),a.call(this,e)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"onDishSelect",value:function(e){this.setState({selectedDish:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(ce,null),r.a.createElement("div",null,r.a.createElement(we.a,null,r.a.createElement(Me.a,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(ie.d,{location:this.props.location},r.a.createElement(ie.b,{path:"/home",component:function(){return r.a.createElement(Q,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leaderLoading:e.props.leaders.isLoading,leaderErrMess:e.props.leaders.errMess})}}),r.a.createElement(ie.b,{exact:!0,path:"/aboutus",component:function(){return r.a.createElement(J,{leaders:e.props.leaders,leaderLoading:e.props.leaders.isLoading,leaderErrMess:e.props.leaders.errMess})}}),r.a.createElement(ie.b,{exact:!0,path:"/menu",component:function(){return r.a.createElement(y,{dishes:e.props.dishes})}}),r.a.createElement(ie.b,{path:"/menu/:dishId",component:function(a){var t=a.match;return r.a.createElement(P,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(ie.b,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(Y,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),r.a.createElement(ie.a,{to:"/home"}))))),r.a.createElement(me,null))}}]),t}(n.Component),Le=Object(ie.g)(Object(ue.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(a,t,n,r){return e(function(e,a,t,n){return function(r){var l={dishId:e,rating:a,author:t,comment:n};return l.date=(new Date).toISOString(),fetch(N+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(a,t,n,r))},fetchDishes:function(){e((function(e){return e(de(!0)),fetch(N+"dishes").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(he(a))})).catch((function(a){return e(Ee(a.message))}))}))},resetFeedbackForm:function(){e(x.actions.reset("feedback"))},fetchComments:function(){return e((function(e){return fetch(N+"comments").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(pe(a))})).catch((function(a){return e(fe(a.message))}))}))},fetchPromos:function(){return e((function(e){return e(ge()),fetch(N+"promotions").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(Ne(a))})).catch((function(a){return e(be(a.message))}))}))},fetchLeaders:function(){return e((function(e){return e(ve(!0)),fetch(N+"leaders").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(function(e){return{type:"ADD_LEADERS",payload:e}}(a))})).catch((function(a){return e(ye(a.message))}))}))},postFeedback:function(a,t,n,r,l,s,o){return e(function(e,a,t,n,r,l,s){return function(o){var c={firstname:e,lastname:a,telnum:t,email:n,agree:r,contactType:l,message:s};return c.date=(new Date).toISOString(),fetch(N+"feedback",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){o({type:"ADD_FEEDBACK",payload:e}),alert(JSON.stringify(e))})).catch((function(e){console.log("post feedback",e.message),alert("Your feedback could not be posted\nError: "+e.message)}))}}(a,t,n,r,l,s,o))}}}))(Oe)),ke=t(12),Se=t(27),De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DISHES":return Object(ke.a)({},e,{isLoading:!1,errMess:null,dishes:a.payload});case"DISHES_LOADING":return Object(ke.a)({},e,{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(ke.a)({},e,{isLoading:!1,errMess:a.payload});default:return e}},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENTS":return Object(ke.a)({},e,{errMess:null,comments:a.payload});case"COMMENTS_FAILED":return Object(ke.a)({},e,{errMess:a.payload});case"ADD_COMMENT":var t=a.payload;return Object(ke.a)({},e,{comments:e.comments.concat(t)});default:return e}},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROMOS":return Object(ke.a)({},e,{isLoading:!1,errMess:null,promotions:a.payload});case"PROMOS_LOADING":return Object(ke.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(ke.a)({},e,{isLoading:!1,errMess:a.payload});default:return e}},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_LEADERS":return Object(ke.a)({},e,{isLoading:!1,errMess:null,leaders:a.payload});case"LEADERS_LOADING":return Object(ke.a)({},e,{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return Object(ke.a)({},e,{isLoading:!1,errMess:a.payload});default:return e}},xe={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},Ae=t(91),Ie=t(92),Te=t.n(Ie),Re=Object(Se.createStore)(Object(Se.combineReducers)(Object(ke.a)({dishes:De,comments:je,promotions:Ce,leaders:Fe},Object(x.createForms)({feedback:xe}))),Object(Se.applyMiddleware)(Ae.a,Te.a)),_e=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(ue.Provider,{store:Re},r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(Le,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_e,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,a,t){e.exports=t(151)}},[[94,1,2]]]);
//# sourceMappingURL=main.f6c7b969.chunk.js.map