!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=e=>{const t=document.createElement("img");return t.classList.add("projectScreenshot"),t.src=e,t.style.minWidth="50vmin",t.style.minHeight="50vmin",t.style.width="100%",t.style.height="100%",t},a=(e,t,n)=>{const o=document.createElement("h2");o.classList.add("projectTitle"),o.innerHTML=e;const a=document.createElement("p");a.innerHTML=t;const c=document.createElement("p");return c.innerHTML=n,[o,a,c]},c=(e,t)=>[s(e,"Live Demo","projectLiveButton"),s(t,"Source Code","projectCodeButton")],s=(e,t,n)=>{const o=document.createElement("a");o.classList.add("projectLink"),o.href=e,o.target="_blank";const a=document.createElement("button");return a.classList.add("projectButton",`${n}`),a.innerHTML=t,o.append(a),o},i=()=>{document.querySelector(".showcase").style.backgroundColor="#444d56";const e=document.createElement("div");e.classList.add("projects");const t=document.createElement("h1");t.innerHTML="Projects";const n=document.createElement("div");n.classList.add("projectsFlexContainer");const s=document.createElement("div");s.classList.add("projectItem");const i=document.createElement("div");i.classList.add("leftSection"),i.append(o("./images/exampleTodo.png"));const d=document.createElement("div");d.classList.add("rightSection");const[r,l,m]=a("Todo List","A todo list for users to add tasks to a list and keep track of which tasks need to be done","Utilized: React.js, JavaScript, CSS"),u=document.createElement("div");u.classList.add("linksContainer");const[p,h]=c("https://kennethnguyen.github.io/todo-list/","https://github.com/KennethNguyen/todo-list");u.append(p,h),d.append(r,l,m,u),s.append(i,d);const g=document.createElement("div");g.classList.add("projectItem");const f=document.createElement("div");f.classList.add("leftSection"),f.append(o("./images/exampleWeather.png"));const y=document.createElement("div");y.classList.add("rightSection");const[L,v,E]=a("Weather","A weather app to determine the weather of any place in the world using OpenWeatherMap API","Utilized: React.js, JavaScript, Bootstrap/CSS"),b=document.createElement("div");b.classList.add("linksContainer");const[S,k]=c("https://kennethnguyen.github.io/weather-app/","https://github.com/KennethNguyen/weather-app"),w=document.createElement("p");w.innerHTML="*Disclaimer: User must disable https secure connection to fetch the API call if using the demo. This is not needed if repo is cloned and is run using npm start",b.append(S,k),y.append(L,v,E,b,w),g.append(f,y);const T=document.createElement("div");T.classList.add("projectItem");const j=document.createElement("div");j.classList.add("leftSection"),j.append(o("./images/exampleLibrary.png"));const M=document.createElement("div");M.classList.add("rightSection");const[C,I,H]=a("Library","A library for users to keep track of their books","Utilized: Utilized: HTML, JavaScript, CSS"),x=document.createElement("div");x.classList.add("linksContainer");const[P,N]=c("https://kennethnguyen.github.io/library/","https://github.com/KennethNguyen/library");x.append(P,N),M.append(C,I,H,x),T.append(j,M);const A=document.createElement("div");A.classList.add("projectItem");const K=document.createElement("div");K.classList.add("leftSection"),K.append(o("./images/exampleScript.png"));const R=document.createElement("div");R.classList.add("rightSection");const[O,z,B]=a("Reddit FMF Deal Scraper","A script that scrapes /r/frugalmalefashion for deals and notifies the Reddit user of said deals in a Private Message","Utilized: Python, PRAW (Python Reddit API Wrapper)"),D=document.createElement("div");D.classList.add("linksContainer");const[,U]=c("","https://github.com/KennethNguyen/reddit-fmf-deal-scraper");D.append(U),R.append(O,z,B,D),A.append(K,R);const W=document.createElement("div");W.classList.add("projectItem");const _=document.createElement("div");_.classList.add("leftSection"),_.append(o("./images/exampleTicTacToe.png"));const q=document.createElement("div");q.classList.add("rightSection");const[F,J,G]=a("Tic-Tac-Toe","A tic-tac-toe game able to play with 2 players","Utilized: HTML, JavaScript, CSS"),Q=document.createElement("div");Q.classList.add("linksContainer");const[V,Y]=c("https://kennethnguyen.github.io/tic-tac-toe/","https://github.com/KennethNguyen/tic-tac-toe");Q.append(V,Y),q.append(F,J,G,Q),W.append(_,q);const $=document.createElement("div");$.classList.add("calculatorProject","projectItem");const X=document.createElement("div");X.classList.add("leftSection"),X.append(o("./images/exampleCalculator.png"));const Z=document.createElement("div");Z.classList.add("rightSection");const[ee,te,ne]=a("Calculator","A basic four function calculator","Utilized: HTML, JavaScript, CSS"),oe=document.createElement("div");oe.classList.add("linksContainer");const[ae,ce]=c("https://kennethnguyen.github.io/calculator/","https://github.com/KennethNguyen/calculator");oe.append(ae,ce),Z.append(ee,te,ne,oe),$.append(X,Z),n.append(s,g,A,T,W,$),e.append(t,n),document.querySelector(".showcase").appendChild(e)},d=()=>{const e=document.querySelector(".showcase");for(;e.firstChild;)e.removeChild(e.firstChild)};i(),document.getElementById("project").addEventListener("click",(function(){d(),i()})),document.getElementById("about").addEventListener("click",(function(){d(),(()=>{document.querySelector(".showcase").style.backgroundColor="#19443c";const e=document.createElement("div");e.classList.add("aboutMe");const t=document.createElement("h1");t.innerHTML="About Me";const n=document.createElement("div");n.classList.add("aboutGrid");const o=document.createElement("div");o.classList.add("aboutElement"),o.id="personalSelf";const a=document.createElement("h2");a.innerHTML="I'm Kenneth Nguyen";const c=document.createElement("p");c.classList.add("aboutText"),c.innerHTML="I am a third year B.S. Computer Science major at University of California, Santa Cruz. Driven and focused, I like to see exceptional results and strive to produce such results. While working on a project, I think about ways to optimize or further improve any component of the project. Typically, I make notes on what I want to implement next on a project if I do not get to it. I am constantly learning new technology skills and improving myself as a programmer. My interests lie in learning and discovering new technologies and being able to deploy software that people want to use.",o.append(a,c);const s=document.createElement("div");s.classList.add("aboutElement"),s.id="hobbies";const i=document.createElement("h2");i.innerHTML="Hobbies";const d=document.createElement("p");d.classList.add("aboutText"),d.innerHTML="Outside of programming and school, my favorite thing to do is discover new songs and jam out to music. The main genres of music I listen to are hip-hop/rap, lo-fi hip hop, and EDM.  I enjoy sports and usually watch the NBA and NFL during their respective playoff seasons. I am also an avid gamer and especially hooked onto the Metroidvania, Soulsborne, and Platformer genres. Off of the screens, I like cooking because I can experiment with different recipes and ingredients to refine flavors and discover new tastes.",s.append(i,d);const r=document.createElement("div");r.classList.add("aboutElement"),r.id="topGames";const l=document.createElement("h2");l.innerHTML="My Top Games";const m=document.createElement("img");m.src="./images/hollow-knight-icon.png",m.style.width="auto",m.style.height="auto";const u=document.createElement("img");u.src="./images/celeste-icon.png",u.style.width="auto",u.style.height="auto";const p=document.createElement("img");p.src="./images/dark-souls-3-icon.png",p.style.width="auto",p.style.height="auto",r.append(l,m,u,p);const h=document.createElement("iframe");h.src="https://www.youtube.com/embed/hHW1oY26kxQ",h.style.width="auto",h.style.minWidth="600px",h.style.height="auto",h.style.minHeight="260px",n.append(o,s,r),e.append(t,n,h),document.querySelector(".showcase").appendChild(e)})()})),document.getElementById("resume").addEventListener("click",(function(){d(),(()=>{document.querySelector(".showcase").style.backgroundColor="#565350";const e=document.createElement("div");e.classList.add("resume");const t=document.createElement("h1");t.innerHTML="Resume";const n=document.createElement("div");n.classList.add("userLinks");const o=document.createElement("a");o.classList.add("linkItem"),o.innerHTML="View PDF in a new tab",o.href="KennethNguyen-Resume.pdf",o.target="_blank";const a=document.createElement("a");a.classList.add("linkItem"),a.innerHTML="Direct Download",a.href="KennethNguyen-Resume.pdf",a.download="KennethNguyen-Resume.pdf",n.append(o,a);const c=document.createElement("embed");c.classList.add("resumePDF"),c.src="KennethNguyen-Resume.pdf",c.style.maxHeight="800",c.height="800",c.width="80%",e.append(t,n,c),document.querySelector(".showcase").appendChild(e)})()}))}]);