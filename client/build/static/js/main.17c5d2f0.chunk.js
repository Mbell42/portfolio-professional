(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(13),c=a.n(r),m=(a(74),a(75),a(76),a(77),a(16)),s=a(17),o=a(20),i=a(18),d=a(21),h=a(3),u=a(22),p=a(6),g=a(57),E=a.n(g),b=function(e){return l.a.createElement("div",null,l.a.createElement(h.A,{src:E.a},l.a.createElement(h.p,{className:"rgba-black-light"}),e.children))},f=(a(14),a(26)),w=a.n(f),N=function(){return l.a.createElement("div",{className:"pageContainer"},l.a.createElement(b,null,l.a.createElement(h.g,{className:"mainContainer d-flex justify-content-center align-items-center"},l.a.createElement(h.y,null,l.a.createElement(h.e,{md:"12",className:"mb-4 white-text text-center"},l.a.createElement("h1",{className:"h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 "},"Matthew Bell"),l.a.createElement("hr",{className:"hr-light my-4"}),l.a.createElement(h.e,{md:"8",className:"mb-4 white-text text-center float-left"},l.a.createElement("h4",{className:"text-uppercase mb-4 white-text "},l.a.createElement("strong",null,"Web Design and VFX")),l.a.createElement("p",null,"Full Stack Web Developer with a background in 3D Animation and VFX with 4 years of experience in film and mobile video game production. I learn new skills quickly, with the ability to pivot and take on new challenges. I am seeking a transition into Web and Software Development."),l.a.createElement("a",{href:"/about",className:"white-text py-3"},l.a.createElement(h.b,{gradient:"peach"},"Read More")),l.a.createElement("a",{href:"/contact",className:"white-text"},l.a.createElement(h.b,{gradient:"purple"},"Contact Me"))),l.a.createElement(h.e,{md:"4",className:"mb-4 float-right"},l.a.createElement("img",{src:w.a,alt:"Matthew Bell",className:"img-fluid rounded-circle"})))))))},y=function(){return l.a.createElement("div",{className:"pageContainer"},l.a.createElement(b,null,l.a.createElement(h.g,{className:"mainContainer d-flex justify-content-center align-items-center"},l.a.createElement(h.y,null,l.a.createElement(h.e,{md:"12",className:"mb-4 white-text text-center"},l.a.createElement("h1",{className:"h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5"},"About Me"),l.a.createElement("hr",{className:"hr-light my-4"}),l.a.createElement(h.e,{md:"8",className:"mb-4 float-left white-text text-center"},l.a.createElement("h4",{className:"text-uppercase mb-4 white-text "},l.a.createElement("strong",null,"Web Design and VFX")),l.a.createElement("p",null,"I am a Full Stack Web Developer with a background in 3D Animation and VFX with 4 years of experience in film and mobile video game production. Graduate of UCSD Coding Bootcamp, with skills in HTML, CSS, NodeJS, MongoDB, Express, React, and NodeJS.  I enjoy working in a challenging environment and I mesh well with any size team. My bag of skills includes, but is not limited to; 3D Charater Animation, VFX Compositing, Databases, Data Collection, and both Quality Control/Assurance. Top among my goals is to work in a team environment, where collaboration allows for the creation of solutions to new and difficult problems, and where the combined value of the product is increased beyond the sum of its parts."),l.a.createElement("a",{href:"/contact",className:"white-text"},l.a.createElement(h.b,{gradient:"purple"},"Contact Me")),l.a.createElement("a",{href:"/gallery_code",className:"white-text"},l.a.createElement(h.b,{gradient:"peach"},"Web Development Gallery")),l.a.createElement("a",{href:"/gallery_vfx",className:"white-text"},l.a.createElement(h.b,{gradient:"peach"},"VFX Gallery"))),l.a.createElement(h.e,{md:"4",className:"float-right"},l.a.createElement("img",{src:w.a,alt:"Matthew Bell",className:"img-fluid rounded-circle"})))))))},x=a(29),v=a.n(x),k=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={name:"",email:"",subject:"",message:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"resetForm",value:function(){this.setState({name:"",email:"",subject:"",message:""})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log(this.state);try{v()({method:"POST",url:"/send",data:this.state}).then(setTimeout(function(){alert("email sent"),t.resetForm()},3e3))}catch(a){console.log(a)}}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.e,{lg:"5",className:"lg-0 mb-4"},l.a.createElement(h.c,null,l.a.createElement(h.d,null,l.a.createElement("div",{className:"text-center form-header indigo accent-1"},l.a.createElement("h3",{className:"mt-2"},l.a.createElement(h.m,{icon:"envelope"})," Send me a message:")),l.a.createElement("p",{className:"text-center font-small dark-grey-text"},"I will return your message as soon as possible."),l.a.createElement("form",{id:"contact-form",onSubmit:this.handleSubmit.bind(this),method:"POST"},l.a.createElement("div",{className:"md-form form-group"},l.a.createElement(h.o,{className:"form-control",icon:"user",label:"Your name",iconClass:"grey-text",type:"text",value:this.state.name,onChange:this.onNameChange.bind(this),id:"form-name"})),l.a.createElement("div",{className:"md-form form-group"},l.a.createElement(h.o,{className:"form-control",icon:"envelope",label:"Your email",iconClass:"grey-text",type:"email",value:this.state.email,onChange:this.onEmailChange.bind(this),id:"form-email"})),l.a.createElement("div",{className:"md-form form-group"},l.a.createElement(h.o,{className:"form-control",icon:"tag",label:"Subject",iconClass:"grey-text",type:"text",value:this.state.subject,onChange:this.onSubjectChange.bind(this),id:"form-subject"})),l.a.createElement("div",{className:"md-form form-group"},l.a.createElement(h.o,{className:"form-control",icon:"pencil-alt",label:"Message",iconClass:"grey-text",type:"textarea",rows:"5",value:this.state.message,onChange:this.onMessageChange.bind(this),id:"form-text"})),l.a.createElement("div",{className:"text-center"},l.a.createElement(h.b,{gradient:"peach",type:"submit"},"Submit")))))))}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onSubjectChange",value:function(e){this.setState({subject:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}}]),t}(n.Component),j=function(){return l.a.createElement(h.e,{lg:"7"},l.a.createElement("div",{id:"map-container",className:"rounded z-depth-1-half map-container",style:{height:"400px"}},l.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-117.0147!3d32.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494",title:"La Mesa",width:"100%",height:"100%",frameBorder:"0",style:{border:0}})),l.a.createElement("br",null),l.a.createElement(h.y,{className:"text-center"},l.a.createElement(h.e,{md:"4"},l.a.createElement(h.b,{tag:"a",color:"indigo",className:"accent-1"},l.a.createElement(h.m,{icon:"map-marker-alt"})),l.a.createElement("p",{className:"white-text"},l.a.createElement("small",null,"La Mesa, 91942")),l.a.createElement("p",{className:"mb-md-0 white-text"},l.a.createElement("small",null,"United States"))),l.a.createElement(h.e,{md:"4"},l.a.createElement(h.b,{tag:"a",color:"indigo",className:"accent-1"},l.a.createElement(h.m,{icon:"phone"})),l.a.createElement("p",{className:"white-text"},l.a.createElement("small",null,"+ 01 858 922 5440")),l.a.createElement("p",{className:"mb-md-0  white-text"},l.a.createElement("small",null,"Mon - Fri, 8:00-20:00"))),l.a.createElement(h.e,{md:"4"},l.a.createElement(h.b,{tag:"a",color:"indigo",className:"accent-1"},l.a.createElement(h.m,{icon:"envelope"})),l.a.createElement("p",{className:"white-text"},l.a.createElement("small",null,"matthewbell1030@gmail.com")))))},C=function(e){function t(){return Object(m.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"pageContainer"},l.a.createElement(b,null,l.a.createElement(h.g,{className:"mainContainer d-flex justify-content-center align-items-center"},l.a.createElement(h.y,null,l.a.createElement(h.e,{md:"12",className:"mb-4 white-text "},l.a.createElement("h1",{className:"h1-reponsive text-center white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5"},"Contact me"),l.a.createElement("hr",{className:"hr-light my-4"}),l.a.createElement("h5",{className:"text-center font-weight-bold white-text w-responsive mx-auto pb-5"},"If you have any questions, or would like to collaborate on a project, please let me know!"),l.a.createElement(h.y,null,l.a.createElement(k,null),l.a.createElement(j,null)))))))}}]),t}(n.Component),S=a(58),M=a.n(S),D=a(59),F=a.n(D),O=a(60),T=a.n(O),_=a(61),I=a.n(_),V=a(62),W=a.n(V),X=a(63),q=a.n(X),P=function(){return l.a.createElement("div",{className:"pageContainer"},l.a.createElement(b,null,l.a.createElement(h.g,{className:"mainContainer d-flex justify-content-center align-items-center"},l.a.createElement(h.y,null,l.a.createElement(h.e,{md:"12",className:"mb-4 white-text text-center"},l.a.createElement("h1",{className:"h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5"},"Web Develepment Gallery"),l.a.createElement("hr",{className:"hr-light my-4"}),l.a.createElement("h5",{className:"white-text font-weight-bold w-responsive mx-auto mb-5"},"A collection of my past projects, including school projects.  Click the images to view the projects"),l.a.createElement(h.y,{className:"text-center flex-row"},l.a.createElement(h.e,{lg:"4",md:"12",className:"mb-lg-0 mb-4"},l.a.createElement("a",{href:"https://github.com/Mbell42/07_project-01",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:M.a,alt:"Currency App",className:"img-fluid rounded z-depth-2"})),l.a.createElement(h.d,{className:"pb-0"},l.a.createElement("h4",{className:"font-weight-bold my-2"},"School Project 1 - CurrencyExchangePro"),l.a.createElement("p",{className:"white-text mb-5"},"This is my first group project for class.  My team built a currency-app that can convert any currency into another currency, store/display your search history, and send a text message of the most recent search details."))),l.a.createElement(h.e,{lg:"4",md:"12",className:"mb-lg-0 mb-4"},l.a.createElement("a",{href:"https://github.com/Mbell42/06_weather-dashboard",target:"blank"},l.a.createElement("img",{src:W.a,alt:"Weather Dashboard",className:"img-fluid rounded z-depth-2"})),l.a.createElement(h.d,{className:"pb-0 mb-3"},l.a.createElement("h4",{className:"font-weight-bold my-2"},"Weather",l.a.createElement("br",null),"Dashboard"),l.a.createElement("p",{className:"white-text mb-5"},"This is my sixth homework project.  I made a weather dashboard that will display current and forecast weather data using API requests.  The current weather data is displayed in the top right, and the forecast data for five days is shown below."))),l.a.createElement(h.e,{lg:"4",md:"12",className:"mb-lg-0 mb-4"},l.a.createElement("a",{href:"https://github.com/Mbell42/05_work-day-scheduler",target:"blank"},l.a.createElement("img",{src:F.a,alt:"Day Scheduler",className:"img-fluid rounded z-depth-2"})),l.a.createElement(h.d,{className:"pb-0 mb-3"},l.a.createElement("h4",{className:"font-weight-bold my-2"},"Work Day",l.a.createElement("br",null),"Scheduler"),l.a.createElement("p",{className:"white-text mb-5"},"This is my fifth homework project. I Created a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery."))),l.a.createElement(h.e,{lg:"4",md:"12",className:"mb-lg-0 mb-4"},l.a.createElement("a",{href:"https://github.com/Mbell42/project2",target:"blank"},l.a.createElement("img",{src:I.a,alt:"Minute Page",className:"img-fluid rounded z-depth-2"})),l.a.createElement(h.d,{className:"pb-0 mb-3"},l.a.createElement("h4",{className:"font-weight-bold my-2"},"School Project 2 - Minute Page"),l.a.createElement("p",{className:"white-text mb-5"},"This is the second group project for my class. My Team created a landing page generator using NodeJs, Express, and MySQL.  Users can login, and quickly create landing pages that are bound to their user account."))),l.a.createElement(h.e,{lg:"4",md:"12",className:"mb-lg-0 mb-4"},l.a.createElement("a",{href:"https://github.com/Mbell42/generator-pw-random",target:"blank"},l.a.createElement("img",{src:q.a,alt:"Random Password Generator",className:"img-fluid rounded z-depth-2"})),l.a.createElement(h.d,{className:"pb-0 mb-3"},l.a.createElement("h4",{className:"font-weight-bold my-2"},"Random Password Generator"),l.a.createElement("p",{className:"white-text mb-5"},"This is my third homework project. I Created a simple random password generator that allows the user to save the created password to their clipboard."))),l.a.createElement(h.e,{lg:"4",md:"12",className:"mb-lg-0 mb-4"},l.a.createElement("a",{href:"https://github.com/Mbell42/10_TemplateEngine-EmployeeSummary",target:"blank"},l.a.createElement("img",{src:T.a,alt:"Emplyee Summary",className:"img-fluid rounded z-depth-2"})),l.a.createElement(h.d,{className:"pb-0 mb-3"},l.a.createElement("h4",{className:"font-weight-bold my-2"},"TemplateEngine-EmployeeSummary"),l.a.createElement("p",{className:"white-text mb-5"},"This is my tenth homework project.  I Created a a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person.")))))))))},A=a(64),z=a.n(A),B=a(65),G=a.n(B),L=a(66),R=a.n(L),J=a(67),H=a.n(J),U=function(){return l.a.createElement("div",{className:"pageContainer"},l.a.createElement(b,null,l.a.createElement(h.g,{className:"mainContainer d-flex justify-content-center align-items-center"},l.a.createElement(h.y,null,l.a.createElement(h.e,{md:"12",className:"mb-4 white-text text-center"},l.a.createElement("h1",{className:"h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5"},"VFX Gallery"),l.a.createElement("hr",{className:"hr-light my-4"}),l.a.createElement("h5",{className:"white-text  font-weight-bold w-responsive mx-auto mb-5"},"Some of the best VFX projects I have had the pleasure to take part in.  Click the images to view the projects"),l.a.createElement(h.y,{className:"text-center"},l.a.createElement(h.e,{lg:"3"}),l.a.createElement(h.e,{lg:"6",md:"12",className:"mb-lg-0 mb-4"},l.a.createElement("a",{href:"https://www.imdb.com/title/tt0478970/"},l.a.createElement("img",{src:z.a,alt:"",className:"img-fluid rounded z-depth-3"})),l.a.createElement(h.d,{className:"pb-0"},l.a.createElement("h4",{className:"font-weight-bold my-2"},"Antman (2015)"),l.a.createElement("p",{className:"white-text mb-5"},"Provided VFX and Stereoscopic VFX compositing for 2D and 3D."))),l.a.createElement(h.e,{lg:"3"}),l.a.createElement(h.e,{lg:"4",md:"12",className:"mb-lg-0 mb-4"},l.a.createElement("a",{href:"https://www.imdb.com/title/tt1029360/"},l.a.createElement("img",{src:G.a,alt:"",className:"img-fluid rounded z-depth-3"})),l.a.createElement(h.d,{className:"pb-0"},l.a.createElement("h4",{className:"font-weight-bold my-2"},"Poltergeist",l.a.createElement("br",null),"(2016)"),l.a.createElement("p",{className:"white-text mb-5"},"Provided VFX and Stereoscopic VFX compositing for 2D and 3D."))),l.a.createElement(h.e,{lg:"4",md:"12",className:"mb-lg-0 mb-4"},l.a.createElement("a",{href:"https://www.imdb.com/title/tt2908446/"},l.a.createElement("img",{src:H.a,alt:"",className:"img-fluid rounded z-depth-3"})),l.a.createElement(h.d,{className:"pb-0"},l.a.createElement("h4",{className:"font-weight-bold my-2"},"Divergent Series: Insurgent (2015)"),l.a.createElement("p",{className:"white-text mb-5"},"Provided VFX and Stereoscopic VFX compositing for 2D and 3D."))),l.a.createElement(h.e,{lg:"4",md:"12",className:"mb-lg-0 mb-4"},l.a.createElement("a",{href:"https://www.imdb.com/title/tt3488710/"},l.a.createElement("img",{src:R.a,alt:"",className:"img-fluid rounded z-depth-3"})),l.a.createElement(h.d,{className:"pb-0"},l.a.createElement("h4",{className:"font-weight-bold my-2"},"The Walk",l.a.createElement("br",null),"(2015)"),l.a.createElement("p",{className:"white-text mb-5"},"Provided VFX and Stereoscopic VFX compositing for 2D and 3D.")))))))))},Q=a(68),Y=a.n(Q),$=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={isOpen:!1},a.toggleCollapse=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement(h.s,{className:"navbar fixed-top",color:"secondary-color-dark",dark:!0,expand:"md",scrolling:!0},l.a.createElement(h.t,null,l.a.createElement(h.r,{to:"/home"},l.a.createElement("strong",{className:"white-text"},"MB"))),l.a.createElement(h.v,{onClick:this.toggleCollapse}),l.a.createElement(h.f,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},l.a.createElement(h.u,{left:!0},l.a.createElement(h.q,null,l.a.createElement(h.r,{to:"home"},"Home")),l.a.createElement(h.q,null,l.a.createElement(h.r,{to:"about"},"About")),l.a.createElement(h.q,null,l.a.createElement(h.r,{to:"contact"},"Contact")),l.a.createElement(h.q,null,l.a.createElement(h.h,null,l.a.createElement(h.k,{nav:!0,caret:!0},l.a.createElement("span",{className:"mr-2"},"Galleries")),l.a.createElement(h.j,null,l.a.createElement(h.i,{href:"gallery_code"},"Web Development Gallery"),l.a.createElement(h.i,{href:"gallery_vfx"},"VFX Gallery")))),l.a.createElement(h.q,null,l.a.createElement("a",{role:"presentation",className:"nav-link",href:Y.a,target:"_blank",rel:"noopener noreferrer"},"Resume"))))),l.a.createElement(p.c,null,l.a.createElement(p.a,{path:"/about",component:y}),l.a.createElement(p.a,{path:"/contact",component:C}),l.a.createElement(p.a,{path:"/gallery_code",component:P}),l.a.createElement(p.a,{path:"/gallery_vfx",component:U}),l.a.createElement(p.a,{path:"/home",component:N}),l.a.createElement(p.a,{exact:!0,path:"/",component:N})))}}]),t}(n.Component),K=function(){return l.a.createElement(h.l,{color:"secondary-color-dark",className:"font-small pt-4"},l.a.createElement(h.g,{fluid:!0,className:"text-center text-md-left"},l.a.createElement(h.y,null,l.a.createElement(h.e,{md:"6"},l.a.createElement("h5",{className:"title"},"Matthew Bell"),l.a.createElement("hr",{className:"hr-grey my-4"}),l.a.createElement("p",null,"email: matthewbell1030@gmail.com",l.a.createElement("br",null),"phone: 858-922-5440")),l.a.createElement(h.e,{md:"6"},l.a.createElement("h5",{className:"title"},"Links"),l.a.createElement("hr",{className:"hr-grey my-4"}),l.a.createElement("ul",{className:"pl-0"},l.a.createElement("li",{className:"list-unstyled"},l.a.createElement("a",{href:"https://github.com/Mbell42",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("p",null,"Github"))),l.a.createElement("li",{className:"list-unstyled"},l.a.createElement("a",{href:"https://www.linkedin.com/in/matthew-bell-developer-artist/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("p",null,"LinkedIn"))),l.a.createElement("li",{className:"list-unstyled"},l.a.createElement("a",{href:"https://vimeo.com/matthewgbell",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("p",null,"Vimeo"))),l.a.createElement("li",{className:"list-unstyled"},l.a.createElement("a",{href:"https://www.imdb.com/name/nm7347199/?ref_=rvi_nm",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("p",null,"IMDB"))))))),l.a.createElement("div",{className:"footer-copyright text-center py-3"},l.a.createElement(h.g,{fluid:!0},l.a.createElement("p",{className:"text-center"},"matthewbell1030@gmail.com",l.a.createElement("br",null),"phone: 858-922-5440"),"\xa9 ",(new Date).getFullYear()," Copyright")))};a(117);var Z=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement($,null),l.a.createElement(K,null))},ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(l.a.createElement(Z,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");ee?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):te(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):te(e)})}}()},14:function(e,t,a){},26:function(e,t,a){e.exports=a.p+"static/media/mbSquare.df861856.jpg"},57:function(e,t,a){e.exports=a.p+"static/media/mountain-pass-fade.e10d07dc.jpg"},58:function(e,t,a){e.exports=a.p+"static/media/currencyAppSquare.b330147d.png"},59:function(e,t,a){e.exports=a.p+"static/media/day-scheduler-square.f99054a7.png"},60:function(e,t,a){e.exports=a.p+"static/media/employee-summary-square.67f0204b.png"},61:function(e,t,a){e.exports=a.p+"static/media/project2_minute-page-square.8fe8c3be.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/weather-dashboard-square.04fa3646.png"},63:function(e,t,a){e.exports=a.p+"static/media/randomPwGen-square.5008af11.png"},64:function(e,t,a){e.exports=a.p+"static/media/antman.abd187d7.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/poltergeist.20fb1090.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/theWalk.3d554e84.jpg"},67:function(e,t,a){e.exports=a.p+"static/media/insurgent.53435518.jpg"},68:function(e,t,a){e.exports=a.p+"static/media/MattBell-Resume.31311689.pdf"},69:function(e,t,a){e.exports=a(118)},77:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.17c5d2f0.chunk.js.map