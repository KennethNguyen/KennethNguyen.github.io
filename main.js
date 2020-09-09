!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=e=>{const t=document.createElement("h2");return t.classList.add("projectTitle"),t.innerHTML=e,t},o=(e,t)=>{const n=document.createElement("div"),a=document.createElement("img");return a.classList.add("projectScreenshot"),a.src=e,a.alt=t,a.style.minWidth="50vmin",a.style.minHeight="50vmin",a.style.width="100%",a.style.height="100%",n.append(a),n},s=(e,t)=>{const n=document.createElement("p");n.innerHTML=e;const a=document.createElement("p");return a.innerHTML=t,[n,a]},c=(e,t)=>{const n=document.createElement("div");n.classList.add("linksContainer");const a=r(e,"Live Demo","projectLiveButton"),o=r(t,"Source Code","projectCodeButton");return n.append(a,o),n},r=(e,t,n)=>{const a=document.createElement("a");a.classList.add("projectLink"),a.href=e,a.target="_blank",project;const o=document.createElement("button");return o.classList.add("projectButton",""+n),o.innerHTML=t,a.append(o),a},i=()=>{const e=document.querySelector(".showcase");for(;e.firstChild;)e.removeChild(e.firstChild)},d=()=>{document.querySelector(".showcase").style.backgroundColor="#fff9e3";const e=document.createElement("div");e.classList.add("resume");const t=document.createElement("h1");t.innerHTML="Resume";const n=document.createElement("div");n.classList.add("userLinks");const a=document.createElement("a");a.classList.add("linkItem"),a.innerHTML="View PDF in a new tab",a.href="KennethNguyen-Resume.pdf",a.target="_blank";const o=document.createElement("a");o.classList.add("linkItem"),o.innerHTML="Direct Download",o.href="KennethNguyen-Resume.pdf",o.download="KennethNguyen-Resume.pdf",n.append(a,o);const s=document.createElement("embed");s.classList.add("resumePDF"),s.src="KennethNguyen-Resume.pdf",s.type="application/pdf",s.alt="PDF format of Resume. Click above links to view in a new tab or download.",s.style.maxHeight="775",s.height="775",s.width="80%",e.append(t,n,s),document.querySelector(".showcase").appendChild(e)};d(),document.getElementById("project").addEventListener("click",(function(){i(),(()=>{document.querySelector(".showcase").style.backgroundColor="#fff9e3";const e=document.createElement("div");e.classList.add("projects");const t=document.createElement("h1");t.innerHTML="Projects";const n=document.createElement("div");n.classList.add("projectsFlexContainer");const r=document.createElement("div");r.classList.add("projectItem");const i=a("Todo List"),d=o("./images/exampleTodo.png","To-Do App Page"),[l,u]=s("A todo list for users to add tasks to a list and keep track of which tasks need to be done","Utilized: React, JavaScript, CSS"),p=c("https://kennethnguyen.github.io/todo-list/","https://github.com/KennethNguyen/todo-list");r.append(i,d,l,u,p);const m=document.createElement("div");m.classList.add("projectItem");const h=a("Weather"),g=o("./images/exampleWeather.png","Weather App Page"),[f,y]=s("A weather app to determine the weather of any place in the world using OpenWeatherMap API","Utilized: React, JavaScript, Bootstrap/CSS"),b=c("https://kennethnguyen.github.io/weather-app/","https://github.com/KennethNguyen/weather-app");m.append(h,g,f,y,b);const v=document.createElement("div");v.classList.add("projectItem");const L=a("Library"),E=o("./images/exampleLibrary.png","Library App Page"),[k,w]=s("A library for users to keep track of their books","Utilized: Utilized: HTML, JavaScript, CSS"),I=c("https://kennethnguyen.github.io/library/","https://github.com/KennethNguyen/library");v.append(L,E,k,w,I);const S=document.createElement("div");S.classList.add("projectItem");const T=a("Reddit FMF Deal Scraper"),j=o("./images/exampleScript.png","Reddit r/frugalmalefashion deal scraper result"),[C,M]=s("A script that scrapes /r/frugalmalefashion for deals and notifies the Reddit user of said deals in a Private Message","Utilized: Python3, PRAW (Python Reddit API Wrapper)"),P=c("","https://github.com/KennethNguyen/reddit-fmf-deal-scraper");S.append(T,j,C,M,P);const A=document.createElement("div");A.classList.add("projectItem");const D=a("Tic-Tac-Toe"),H=o("./images/exampleTicTacToe.png","Tic-Tac-Toe App Page"),[x,N]=s("A tic-tac-toe game able to play with 2 players","Utilized: HTML, JavaScript, CSS"),O=c("https://kennethnguyen.github.io/tic-tac-toe/","https://github.com/KennethNguyen/tic-tac-toe");A.append(D,H,x,N,O);const R=document.createElement("div");R.classList.add("projectItem");const U=a("Notes"),K=o("./images/exampleNotes.png","Notes App Page"),[z,B]=s("A RESTful, full-stack CRUD notes web application","Utilized: Py4Web, Vue.js, SQLite (through DAL connection), Bulma/CSS"),V=c("","https://github.com/KennethNguyen/py4web-notes-app");R.append(U,K,z,B,V);const W=document.createElement("div");W.classList.add("projectItem");const _=a("COVID-19 US Tracker"),q=o("./images/exampleCOVID19.png","COVID-19 Tracker Page"),[F,G]=s("A COVID-19 tracker that visualizes the statistics (total positive cases, recoveries, and deaths) of COVID-19 data in the United States provided by the COVID Tracking Project API. ","Utilized: React, Material-UI, Chart.js, COVID Tracking Project API"),J=c("https://covid19-us-tracker-visual.herokuapp.com/","https://github.com/KennethNguyen/COVID19-US-tracker");W.append(_,q,F,G,J),n.append(W,S,r,m,v,A,R),e.append(t,n),document.querySelector(".showcase").appendChild(e)})()})),document.getElementById("about").addEventListener("click",(function(){i(),(()=>{document.querySelector(".showcase").style.backgroundColor="#fff9e3";const e=document.createElement("div");e.classList.add("aboutMe");const t=document.createElement("h1");t.innerHTML="About Me";const n=document.createElement("div");n.classList.add("aboutGrid");const a=document.createElement("div");a.classList.add("aboutElement"),a.id="personalSelf";const o=document.createElement("h2");o.innerHTML="Who Am I?";const s=document.createElement("p");s.classList.add("aboutText"),s.innerHTML="My name has been all over this website a lot but just so there's no confusion on who I am, I am Kenneth. I'm currently a fourth year B.S. Computer Science major at University of California, Santa Cruz. I enjoy learning about anything and everything, from how to perfectly toast toast (you read that right) to how to speedrun creating a full-stack RESTful To-Do App. I am an aspiring full-stack web developer but moreso a front-end enthusiast. I am constantly learning new technologies and skills and improving myself as a programmer. As a developer, my interests lie in creating applications that people will want to use to help themselves, others, and/or the environment.",a.append(o,s);const c=document.createElement("div");c.classList.add("aboutElement"),c.id="hobbies";const r=document.createElement("h2");r.innerHTML="Hobbies";const i=document.createElement("p");i.classList.add("aboutText"),i.innerHTML="I like to code, it's honestly relaxing and fun to work on side projects but there are a lot of other activities I enjoy. One of my favorite things to do is listen to music, specifically hip-hop/rap, EDM, and lo-fi beats, but I am open to all music types except country. I usually watch the NBA and NFL during their playoff seasons and my pick for the NBA 2020 Champions are the Lakers (hopefully this ages well). Not too long ago, I started gaining an interest in JDM cars and enjoy learning about car culture and performance aspects. I am also an avid gamer and especially hooked onto the Metroidvania, Soulsborne, and Platformer genres. Off the screens, I like cooking because I can expand my taste buds trying different recipes and find new ways to minimize burning down my house.",c.append(r,i);const d=document.createElement("div");d.classList.add("aboutElement"),d.id="topGames";const l=document.createElement("h2");l.innerHTML="My Top Games";const u=document.createElement("img");u.src="./images/hollow-knight-icon.png",u.alt="Hollow Knight Game Icon",u.style.width="auto",u.style.height="auto";const p=document.createElement("img");p.src="./images/celeste-icon.png",p.alt="Celeste Game Icon",p.style.width="auto",p.style.height="auto";const m=document.createElement("img");m.src="./images/dark-souls-3-icon.png",m.alt="Dark Souls Game Icon",m.style.width="auto",m.style.height="auto",d.append(l,u,p,m),n.append(a,c,d),e.append(t,n),document.querySelector(".showcase").appendChild(e)})()})),document.getElementById("resume").addEventListener("click",(function(){i(),d()}))}]);