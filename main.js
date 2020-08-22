!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=e=>{const t=document.createElement("img");return t.classList.add("projectScreenshot"),t.src=e,t.style.minWidth="50vmin",t.style.minHeight="50vmin",t.style.width="100%",t.style.height="100%",t},o=(e,t,n)=>{const a=document.createElement("h2");a.classList.add("projectTitle"),a.innerHTML=e;const o=document.createElement("p");o.innerHTML=t;const c=document.createElement("p");return c.innerHTML=n,[a,o,c]},c=(e,t)=>[s(e,"Live Demo","projectLiveButton"),s(t,"Source Code","projectCodeButton")],s=(e,t,n)=>{const a=document.createElement("a");a.classList.add("projectLink"),a.href=e,a.target="_blank";const o=document.createElement("button");return o.classList.add("projectButton",""+n),o.innerHTML=t,a.append(o),a},i=()=>{document.querySelector(".showcase").style.backgroundColor="#fff9e3";const e=document.createElement("div");e.classList.add("projects");const t=document.createElement("h1");t.innerHTML="Projects";const n=document.createElement("div");n.classList.add("projectsFlexContainer");const s=document.createElement("div");s.classList.add("projectItem");const i=document.createElement("div");i.classList.add("leftSection"),i.append(a("./images/exampleTodo.png"));const d=document.createElement("div");d.classList.add("rightSection");const[r,l,m]=o("Todo List","A todo list for users to add tasks to a list and keep track of which tasks need to be done","Utilized: React.js, JavaScript, CSS"),u=document.createElement("div");u.classList.add("linksContainer");const[p,h]=c("https://kennethnguyen.github.io/todo-list/","https://github.com/KennethNguyen/todo-list");u.append(p,h),d.append(r,l,m,u),s.append(i,d);const g=document.createElement("div");g.classList.add("projectItem");const f=document.createElement("div");f.classList.add("leftSection"),f.append(a("./images/exampleWeather.png"));const y=document.createElement("div");y.classList.add("rightSection");const[L,v,E]=o("Weather","A weather app to determine the weather of any place in the world using OpenWeatherMap API","Utilized: React.js, JavaScript, Bootstrap/CSS"),b=document.createElement("div");b.classList.add("linksContainer");const[S,k]=c("https://kennethnguyen.github.io/weather-app/","https://github.com/KennethNguyen/weather-app");b.append(S,k),y.append(L,v,E,b),g.append(f,y);const w=document.createElement("div");w.classList.add("projectItem");const T=document.createElement("div");T.classList.add("leftSection"),T.append(a("./images/exampleLibrary.png"));const j=document.createElement("div");j.classList.add("rightSection");const[M,C,I]=o("Library","A library for users to keep track of their books","Utilized: Utilized: HTML, JavaScript, CSS"),H=document.createElement("div");H.classList.add("linksContainer");const[x,P]=c("https://kennethnguyen.github.io/library/","https://github.com/KennethNguyen/library");H.append(x,P),j.append(M,C,I,H),w.append(T,j);const A=document.createElement("div");A.classList.add("projectItem");const N=document.createElement("div");N.classList.add("leftSection"),N.append(a("./images/exampleScript.png"));const R=document.createElement("div");R.classList.add("rightSection");const[K,O,z]=o("Reddit FMF Deal Scraper","A script that scrapes /r/frugalmalefashion for deals and notifies the Reddit user of said deals in a Private Message","Utilized: Python, PRAW (Python Reddit API Wrapper)"),B=document.createElement("div");B.classList.add("linksContainer");const[,D]=c("","https://github.com/KennethNguyen/reddit-fmf-deal-scraper");B.append(D),R.append(K,O,z,B),A.append(N,R);const U=document.createElement("div");U.classList.add("projectItem");const W=document.createElement("div");W.classList.add("leftSection"),W.append(a("./images/exampleTicTacToe.png"));const _=document.createElement("div");_.classList.add("rightSection");const[q,F,J]=o("Tic-Tac-Toe","A tic-tac-toe game able to play with 2 players","Utilized: HTML, JavaScript, CSS"),G=document.createElement("div");G.classList.add("linksContainer");const[V,Q]=c("https://kennethnguyen.github.io/tic-tac-toe/","https://github.com/KennethNguyen/tic-tac-toe");G.append(V,Q),_.append(q,F,J,G),U.append(W,_);const X=document.createElement("div");X.classList.add("calculatorProject","projectItem");const Y=document.createElement("div");Y.classList.add("leftSection"),Y.append(a("./images/exampleCalculator.png"));const Z=document.createElement("div");Z.classList.add("rightSection");const[$,ee,te]=o("Calculator","A basic four function calculator","Utilized: HTML, JavaScript, CSS"),ne=document.createElement("div");ne.classList.add("linksContainer");const[ae,oe]=c("https://kennethnguyen.github.io/calculator/","https://github.com/KennethNguyen/calculator");ne.append(ae,oe),Z.append($,ee,te,ne),X.append(Y,Z),n.append(s,g,A,w,U,X),e.append(t,n),document.querySelector(".showcase").appendChild(e)},d=()=>{const e=document.querySelector(".showcase");for(;e.firstChild;)e.removeChild(e.firstChild)};i(),document.getElementById("project").addEventListener("click",(function(){d(),i()})),document.getElementById("about").addEventListener("click",(function(){d(),(()=>{document.querySelector(".showcase").style.backgroundColor="#fff9e3";const e=document.createElement("div");e.classList.add("aboutMe");const t=document.createElement("h1");t.innerHTML="About Me";const n=document.createElement("div");n.classList.add("aboutGrid");const a=document.createElement("div");a.classList.add("aboutElement"),a.id="personalSelf";const o=document.createElement("h2");o.innerHTML="Who Am I?";const c=document.createElement("p");c.classList.add("aboutText"),c.innerHTML="I am a fourth year B.S. Computer Science major at University of California, Santa Cruz. Driven and focused, I like to see exceptional results and strive to produce such results. While working on a project, I think about ways to optimize or further improve any component of the project. Typically, I make notes on what I want to implement next on a project if I do not get to it. I am constantly learning new technology skills and improving myself as a programmer. My interests lie in learning and discovering new technologies and being able to deploy software that people want to use.",a.append(o,c);const s=document.createElement("div");s.classList.add("aboutElement"),s.id="hobbies";const i=document.createElement("h2");i.innerHTML="Hobbies";const d=document.createElement("p");d.classList.add("aboutText"),d.innerHTML="Outside of programming and school, my favorite thing to do is discover new songs and jam out to music. The main genres of music I listen to are hip-hop/rap, lo-fi hip hop, and EDM.  I enjoy sports and usually watch the NBA and NFL during their respective playoff seasons. I am also an avid gamer and especially hooked onto the Metroidvania, Soulsborne, and Platformer genres. Off of the screens, I like cooking because I can experiment with different recipes and ingredients to refine flavors and discover new tastes.",s.append(i,d);const r=document.createElement("div");r.classList.add("aboutElement"),r.id="topGames";const l=document.createElement("h2");l.innerHTML="My Top Games";const m=document.createElement("img");m.src="./images/hollow-knight-icon.png",m.style.width="auto",m.style.height="auto";const u=document.createElement("img");u.src="./images/celeste-icon.png",u.style.width="auto",u.style.height="auto";const p=document.createElement("img");p.src="./images/dark-souls-3-icon.png",p.style.width="auto",p.style.height="auto",r.append(l,m,u,p),n.append(a,s,r),e.append(t,n),document.querySelector(".showcase").appendChild(e)})()})),document.getElementById("resume").addEventListener("click",(function(){d(),(()=>{document.querySelector(".showcase").style.backgroundColor="#fff9e3";const e=document.createElement("div");e.classList.add("resume");const t=document.createElement("h1");t.innerHTML="Resume";const n=document.createElement("div");n.classList.add("userLinks");const a=document.createElement("a");a.classList.add("linkItem"),a.innerHTML="View PDF in a new tab",a.href="KennethNguyen-Resume.pdf",a.target="_blank";const o=document.createElement("a");o.classList.add("linkItem"),o.innerHTML="Direct Download",o.href="KennethNguyen-Resume.pdf",o.download="KennethNguyen-Resume.pdf",n.append(a,o);const c=document.createElement("embed");c.classList.add("resumePDF"),c.src="KennethNguyen-Resume.pdf",c.style.maxHeight="800",c.height="800",c.width="80%",e.append(t,n,c),document.querySelector(".showcase").appendChild(e)})()}))}]);