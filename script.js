'use strict';
const $=id=>document.getElementById(id);
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
const eo=t=>1-Math.pow(1-t,3);
const eio=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;

/* ================== EDIT ME — all portfolio data lives here ================== */
const ME={
  name:"MUHAMMAD ASBER ALI",
  role:"SOFTWARE DEVELOPER — PYTHON & AI",
  tagline:"Building practical projects in software development, automation and AI.",
  location:"KARACHI, PAKISTAN",
  email:"zerotwosss188@gmail.com",
  github:"https://github.com/zerotwosss188-ship-it",
  phone:"+92 305 2655003",
  bio:[
    "Aspiring software developer focused on Python, AI and modern web technologies. I learn by building independent projects, exploring how software works, and improving through hands-on practice.",
    "My work so far includes a Python-based assistant, a dataset inspection tool, a calculator with history, and frontend website projects. I'm keen to keep developing my skills and contribute to real software projects."
  ],
  stats:[
    {n:5,suffix:"",label:"PROJECTS BUILT"},
    {n:4,suffix:"",label:"CORE TECHS"},
    {n:3,suffix:"",label:"LEARNING NOW"},
    {n:2028,suffix:"",label:"GRADUATION"}
  ],
  services: [
    { title: "Web Development", desc: "Building responsive, modern web interfaces using HTML, CSS, JS and modern frameworks." },
    { title: "AI & Automation", desc: "Creating Python scripts, AI assistants, and tools to automate repetitive desktop tasks." },
    { title: "UI/UX Design", desc: "Designing clean, glassmorphic user interfaces with a focus on seamless interactions." }
  ],
  tools: ["VS Code", "Git", "GitHub", "PyCharm", "Postman", "Figma", "Linux", "JSON"],
  skills:[
    {name:"Python",v:85},
    {name:"JavaScript",v:75},
    {name:"HTML",v:90},
    {name:"CSS",v:84},
    {name:"React",v:60},
    {name:"Node.js",v:55}
  ],
  learning:["React","JSON","Node.js"],
  interests:["AI Assistants","Desktop Automation","Frontend Development","Software Engineering"],
  projects:[
    {
      id:"01",
      st:"ONGOING BUILD",
      title:"ZERO OS — PRIVACY-FIRST AI",
      desc:"A fully localized AI desktop assistant with complete PC control. Zero OS is built on a strict 'Privacy First' architecture—no cloud processing, no data mining. It features a custom Sakura-themed UI, episodic memory storage (local DB), and deep OS automation to execute workflows, manage files, and control your system securely.",
      tags:["Python","AI Agent","PC Control","Privacy-First","Local DB"],
      visual:"gallery",
      images:["assets/zero-os-1.png", "assets/zero-os-2.png", "assets/zero-os-3.png"],
      btnText: "IN DEVELOPMENT",
      link: ""
    },
    {
      id:"02",
      st:"SHIPPED",
      title:"JARVIS — PYTHON ASSISTANT",
      desc:"A text-based Python assistant written independently to strengthen practical programming skills. Includes a conversational knowledge and teaching system that expands with information provided by the user.",
      highlights: [
        "Built entirely with Python standard libraries",
        "Custom NLP matching logic for user queries",
        "Persistent local memory to remember context"
      ],
      tags:["Python","CLI","Knowledge System"], 
      visual:"terminal", 
      btnText: "",
      link:""
    },
    {
      id:"03",
      st:"SHIPPED",
      title:"AI DATASET INSPECTOR",
      desc:"A menu-driven Python utility for inspecting text data — counting records, identifying unique values and checking duplicates.",
      highlights: [
        "Efficient file parsing for large datasets",
        "Real-time duplicate detection algorithms",
        "Practises structured functions and clean file handling"
      ],
      tags:["Python","Data","File Handling"], 
      visual:"terminal", 
      btnText: "",
      link:""
    },
    {
      id:"04",
      st:"SHIPPED",
      title:"CALCULATOR WITH HISTORY",
      desc:"A programming project that performs calculations and keeps a history of previous results — combining core Python logic with practical data handling.",
      highlights: [
        "Evaluates complex string-based math operations",
        "Saves calculation history to a local state",
        "Error handling for invalid inputs"
      ],
      tags:["Python","Logic","State"], 
      visual:"terminal", 
      btnText: "",
      link:""
    },
    {
      id:"05",
      st:"ONGOING",
      title:"FULL-STACK WEB APPS",
      desc:"Independent web applications built to master modern frontend development. Includes 'FandomVerse' (a unified pop-culture portal) and 'NextStep Navigator' (an interactive career discovery dashboard). Focused on responsive layouts, complex state management, and premium UI design.",
      tags:["React","Tailwind","JavaScript","Web Dev","UI/UX"],
      visual:"gallery",
      images:["assets/web-fandom-1.png", "assets/web-fandom-2.png", "assets/web-fandom-3.png","assets/web-nextstep-1.png", "assets/web-nextstep-2.png", "assets/web-nextstep-3.png"],
      btnText: "VIEW LIVE APPS",
      links: ["https://fandomverse-hub.vercel.app/", "https://nextstep-navigator-future.vercel.app/"]
    }
  ],
  logs: [
    { date: "OCT 2026", title: "Started learning React", desc: "Diving into component-based architecture and state management." },
    { date: "SEP 2026", title: "Refined Zero OS Architecture", desc: "Upgraded the voice recognition module for better accuracy in noisy environments." },
    { date: "AUG 2026", title: "Completed Aptech AI Module", desc: "Finalized the structured AI training certification." }
  ],
  timeline:[
    {year:"NOW → 2028",title:"ARMY PUBLIC COLLEGE",org:"ONGOING COLLEGE STUDIES",desc:"Expected completion 2028 — building the academic foundation while shipping projects on the side."},
    {year:"TRAINING",title:"APTECH",org:"AI-FOCUSED CERTIFICATION",desc:"Structured AI training — turning self-taught curiosity into disciplined engineering practice."},
    {year:"ALWAYS",title:"SELF-TAUGHT BUILDS",org:"INDEPENDENT PROJECTS",desc:"The fastest way to learn is to build: assistants, tools and websites, each one pushing the next skill level."},
    {year:"NEXT",title:"INTERNSHIP / JUNIOR ROLE",org:"CAREER DIRECTION",desc:"Looking for opportunities to apply current skills, learn from experienced developers and contribute to useful products. Focus: Python, React, JSON, Node.js."}
  ],
  footer:"© 2026 MUHAMMAD ASBER ALI — HANDCRAFTED WITH VANILLA HTML/CSS/JS · NO FRAMEWORKS · NO TEMPLATES"
};

/* ---------- 1. Three.js Interactive Hero ---------- */
function initHero3D() {
  const canvas = $('hero-3d-canvas');
  if(!canvas || !window.THREE) return;
  
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const geometry = new THREE.IcosahedronGeometry(2.5, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0xff6a00, wireframe: true, transparent: true, opacity: 0.15 });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  
  const coreGeo = new THREE.IcosahedronGeometry(1.5, 0);
  const coreMat = new THREE.MeshBasicMaterial({ color: 0xffb347, transparent: true, opacity: 0.05 });
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  scene.add(coreMesh);

  camera.position.z = 6;
  
  let mouseX = 0, mouseY = 0;
  let targetRotX = 0, targetRotY = 0;
  
  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    
    targetRotY = mouseX * 0.5; 
    targetRotX = mouseY * 0.5;
  });

  function animate3D() {
    requestAnimationFrame(animate3D);
    
    mesh.rotation.x += (targetRotX - mesh.rotation.x) * 0.05;
    mesh.rotation.y += (targetRotY - mesh.rotation.y) * 0.05;
    
    mesh.rotation.x += 0.001;
    mesh.rotation.y += 0.002;
    
    coreMesh.rotation.x -= 0.002;
    coreMesh.rotation.y -= 0.001;
    
    renderer.render(scene, camera);
  }
  animate3D();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

/* ---------- 2. Radar Chart ---------- */
function drawRadar(lp) {
  const canvas = $('radarChart');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  
  const size = canvas.parentElement.clientWidth;
  if(canvas.width !== size) {
    canvas.width = size;
    canvas.height = size;
  }
  
  const cx = size / 2;
  const cy = size / 2;
  const radius = size * 0.35;
  const numSkills = ME.skills.length;
  const angleStep = (Math.PI * 2) / numSkills;
  
  ctx.clearRect(0, 0, size, size);
  
  ctx.strokeStyle = 'rgba(255,255,255,0.1)';
  ctx.lineWidth = 1;
  for(let i = 1; i <= 5; i++) {
    const r = radius * (i / 5);
    ctx.beginPath();
    for(let j = 0; j < numSkills; j++) {
      const angle = j * angleStep - Math.PI / 2;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if(j === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  }
  
  ctx.font = '10px Fira Code';
  ctx.fillStyle = '#94a3b8';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  for(let i = 0; i < numSkills; i++) {
    const angle = i * angleStep - Math.PI / 2;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(x, y);
    ctx.stroke();
    
    const labelX = cx + Math.cos(angle) * (radius + 25);
    const labelY = cy + Math.sin(angle) * (radius + 25);
    ctx.fillText(ME.skills[i].name, labelX, labelY);
  }
  
  const progress = eo(clamp(lp / 0.4));
  ctx.beginPath();
  ctx.fillStyle = 'rgba(255, 106, 0, 0.2)';
  ctx.strokeStyle = 'var(--primary)';
  ctx.lineWidth = 2;
  
  for(let i = 0; i < numSkills; i++) {
    const angle = i * angleStep - Math.PI / 2;
    const val = ME.skills[i].v * progress;
    const r = radius * (val / 100);
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    
    if(i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  for(let i = 0; i < numSkills; i++) {
    const angle = i * angleStep - Math.PI / 2;
    const val = ME.skills[i].v * progress;
    const r = radius * (val / 100);
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#ffb347';
    ctx.fill();
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#ff6a00';
  }
  ctx.shadowBlur = 0;
}

/* ---------- 3. Text Scramble ---------- */
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

function initScramble() {
  const els = document.querySelectorAll('.chapTitle em, .chapTitle span:not(.sc)');
  els.forEach(el => {
    const fx = new TextScramble(el);
    const originalText = el.innerText;
    el.addEventListener('mouseenter', () => {
      fx.setText(originalText);
    });
  });
}

/* ---------- 4. Synthwave Audio Toggle ---------- */
let audioCtx, oscillator, gainNode;
let isAudioPlaying = false;

function toggleAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    oscillator = audioCtx.createOscillator();
    gainNode = audioCtx.createGain();
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(55, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.start();
  }
  
  const btn = $('audioToggle');
  if (!isAudioPlaying) {
    audioCtx.resume();
    gainNode.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 1);
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>';
    isAudioPlaying = true;
  } else {
    gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.5);
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>';
    isAudioPlaying = false;
  }
}

/* ---------- 5. Confetti Burst ---------- */
function triggerConfetti() {
  const canvas = $('confettiCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#ff6a00', '#ffb347', '#3aff9e', '#ffffff'];
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: window.innerWidth / 2, y: window.innerHeight / 2,
      vx: (Math.random() - 0.5) * 20, vy: (Math.random() - 0.5) * 20 - 5,
      size: Math.random() * 4 + 2, color: colors[Math.floor(Math.random() * colors.length)], life: 1
    });
  }
  function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;
    particles.forEach(p => {
      if (p.life > 0) {
        active = true; p.x += p.vx; p.y += p.vy; p.vy += 0.5; p.vx *= 0.98; p.life -= 0.02;
        ctx.globalAlpha = p.life; ctx.fillStyle = p.color;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
      }
    });
    if (active) requestAnimationFrame(updateConfetti);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  updateConfetti();
}

window.addEventListener('resize', () => {
  const canvas = $('confettiCanvas');
  if(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
});

/* ---------- 6. Live Status Indicator ---------- */
function updateLiveStatus() {
  const statusEl = $('idStatus');
  if(!statusEl) return;
  
  const karachiTime = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Karachi"}));
  const hour = karachiTime.getHours();
  
  if (hour >= 9 && hour < 18) {
    statusEl.innerHTML = '● CODING NOW';
    statusEl.style.color = '#3aff9e';
    statusEl.style.borderColor = 'rgba(58,255,158,0.2)';
    statusEl.style.background = 'rgba(58,255,158,0.1)';
  } else {
    statusEl.innerHTML = '● OFFLINE (SLEEPING)';
    statusEl.style.color = '#ff6a00';
    statusEl.style.borderColor = 'rgba(255,106,0,0.2)';
    statusEl.style.background = 'rgba(255,106,0,0.1)';
  }
}

/* ---------- 7. Typing Faux UI ---------- */
function startUITyping() {
  const uiBodies = document.querySelectorAll('.ui-body');
  uiBodies.forEach((body, index) => {
    if(body.querySelector('.ui-cursor')) return;
    const textNodes = [];
    const walk = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while(node = walk.nextNode()) {
      if(node.nodeValue.trim()) textNodes.push(node);
    }
    textNodes.forEach(n => { n.originalText = n.nodeValue; n.nodeValue = ''; });
    const cursor = document.createElement('span');
    cursor.className = 'ui-cursor';
    body.appendChild(cursor);
    let charIndex = 0;
    let nodeIndex = 0;
    setTimeout(() => {
      const typeInterval = setInterval(() => {
        if(nodeIndex >= textNodes.length) { clearInterval(typeInterval); return; }
        const currentNode = textNodes[nodeIndex];
        if(charIndex < currentNode.originalText.length) {
          currentNode.nodeValue += currentNode.originalText[charIndex];
          charIndex++;
        } else { nodeIndex++; charIndex = 0; }
      }, 30);
    }, 1000 + index * 500);
  });
}

/* =============================================================================
   DOM POPULATION & INITIALIZATION
   ============================================================================= */
document.addEventListener('DOMContentLoaded', () => {
  
  $('heroName').innerHTML=ME.name.split('').map(c=>`<span>${c===' '?'&nbsp;':c}</span>`).join('');
  $('heroTag').textContent=ME.tagline;
  $('avatar').textContent=ME.name.split(' ').map(w=>w[0]).join('');
  $('idName').textContent=ME.name;
  $('loc').textContent='// '+ME.location;
  $('bio').innerHTML=ME.bio.map(p=>`<p class="rv">${p}</p>`).join('');

  $('servicesGrid').innerHTML = ME.services.map(s => `
    <div class="service-card glass-panel">
      <h4>${s.title}</h4><p>${s.desc}</p>
    </div>
  `).join('');

  $('statGrid').innerHTML=ME.stats.map(s=>`<div class="stat glass-panel"><b data-n="${s.n}" data-suf="${s.suffix||''}">0${s.suffix||''}</b><span>${s.label}</span></div>`).join('');

  $('toolsGrid').innerHTML = ME.tools.map(t => `
    <div class="tool-item">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
      ${t}
    </div>
  `).join('');

  $('learnRow').innerHTML=ME.learning.map(t=>`<span class="chip learn">${t}</span>`).join('');
  $('intRow').innerHTML=ME.interests.map(t=>`<span class="chip">${t}</span>`).join('');

  // Projects
  $('projStage').insertAdjacentHTML('afterbegin','<div id="ghostNum">01</div>');
  ME.projects.forEach(p=>{
    let uiVisual = '';
    
    if(p.visual === 'terminal') {
      let termContent = '';
      if(p.id === "02") {
        termContent = `<span class="keyword">def</span> <span class="string">jarvis_boot</span>():<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment"># Loading NLP engine...</span><br>&nbsp;&nbsp;&nbsp;&nbsp;initialize_audio()<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span> <span class="string">'Online.'</span><br><br>> Hello Asber. How can I help?<br>> Listening...`;
      } else if(p.id === "03") {
        termContent = `<span class="keyword">def</span> <span class="string">inspect_dataset</span>(file):<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment"># Parsing records...</span><br>&nbsp;&nbsp;&nbsp;&nbsp;data = load_csv(file)<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span> analyze(data)<br><br>> 1,024 records found.<br>> 12 duplicates detected.`;
      } else if(p.id === "04") {
        termContent = `<span class="keyword">def</span> <span class="string">calculate</span>(op, a, b):<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment"># Evaluating logic...</span><br>&nbsp;&nbsp;&nbsp;&nbsp;result = eval(f<span class="string">"{a}{op}{b}"</span>)<br>&nbsp;&nbsp;&nbsp;&nbsp;history.save(result)<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span> result<br><br>> 54 * 12 = 648<br>> Saved to history.`;
      }
      uiVisual = `<div class="pcard-visual terminal-click"><div class="ui-header"><div class="ui-dot red"></div><div class="ui-dot yellow"></div><div class="ui-dot green"></div></div><div class="ui-body">${termContent}</div></div>`;
    } else if (p.visual === 'gallery') {
      uiVisual = `
        <div class="pcard-visual gallery-visual gallery-click">
          <div class="ui-header"><div class="ui-dot red"></div><div class="ui-dot yellow"></div><div class="ui-dot green"></div><div class="gallery-title">${p.title}</div></div>
          <div class="gallery-container">
            <!-- Added cache-busting query param + onerror fallback -->
            ${p.images.map((img, i) => `<img src="${img}?v=2" onerror="this.onerror=null;this.src='https://via.placeholder.com/800x600/0d0805/ff6a00?text=Project+Image'" alt="${p.title}" class="gallery-img ${i===0?'active':''}" data-index="${i}">`).join('')}
            <div class="gallery-nav">${p.images.map((_, i) => `<span class="g-dot ${i===0?'active':''}" data-index="${i}"></span>`).join('')}</div>
          </div>
        </div>`;
    }
    
    // Button & Highlight Logic
    let actionHtml = '';
    if (p.btnText === "IN DEVELOPMENT") {
      actionHtml = `<div class="dev-badge"><div class="pulse-dot"></div> ${p.btnText}</div>`;
    } else if (p.btnText === "VIEW LIVE APPS" && p.links) {
      actionHtml = `<div style="display:flex; gap:10px; margin-top:20px; flex-wrap:wrap;">
        <a href="${p.links[0]}" target="_blank" class="btn btn-primary" style="flex:1; min-width:140px; padding:10px;">FANDOMVERSE ↗</a>
        <a href="${p.links[1]}" target="_blank" class="btn btn-secondary" style="flex:1; min-width:140px; padding:10px;">NEXTSTEP ↗</a>
      </div>`;
    } else if (p.btnText && p.link) {
      actionHtml = `<a href="${p.link}" target="_blank" class="btn btn-secondary" style="margin-top: 20px; display: inline-flex; align-self: flex-start;">${p.btnText}</a>`;
    }

    let highlightsHtml = p.highlights ? `<ul class="p-highlights">${p.highlights.map(h => `<li>${h}</li>`).join('')}</ul>` : '';

    const body=`
      ${uiVisual}
      <div class="pcard-content">
        <div class="pkick"><span>FEATURED PROJECT</span><span class="st${p.st==='ONGOING'?' pulse':''}">● ${p.st}</span></div>
        <h3>${p.title}</h3><p>${p.desc}</p>
        ${highlightsHtml}
        <div class="ptags">${p.tags.map(t=>`<span class="chip">${t}</span>`).join('')}</div>
        ${actionHtml}
      </div>
    `;
    $('projStage').insertAdjacentHTML('beforeend',`<div class="pwrap"><article class="pcard glass-panel"><div class="pid">${p.id}</div>${body}</article></div>`);
  });

  // --- MODAL LOGIC & GALLERY INIT ---
  const modal = $('projectModal');
  const modalBody = $('modalBody');
  const modalClose = $('modalClose');
  let modalInterval = null;

  // Main Page Auto-cycling Galleries
  function initMainGallery(container) {
    const imgs = container.querySelectorAll('.gallery-img');
    const dots = container.querySelectorAll('.g-dot');
    if(imgs.length === 0) return;
    
    let currentIndex = 0;
    setInterval(() => {
      imgs[currentIndex].classList.remove('active');
      dots[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % imgs.length;
      imgs[currentIndex].classList.add('active');
      dots[currentIndex].classList.add('active');
    }, 3000);
  }

  document.querySelectorAll('.gallery-container').forEach(container => initMainGallery(container));

  // Modal Logic with Arrows
  const openModal = (element) => {
    clearInterval(modalInterval);
    const clone = element.cloneNode(true);
    modalBody.innerHTML = '';
    modalBody.appendChild(clone);
    modal.classList.add('active');

    if (clone.classList.contains('gallery-visual')) {
      const container = clone.querySelector('.gallery-container');
      const imgs = container.querySelectorAll('.gallery-img');
      const dots = container.querySelectorAll('.g-dot');

      if (imgs.length > 1) {
        const prevBtn = document.createElement('button');
        prevBtn.className = 'modal-nav prev';
        prevBtn.innerHTML = '❮';
        const nextBtn = document.createElement('button');
        nextBtn.className = 'modal-nav next';
        nextBtn.innerHTML = '❯';
        container.appendChild(prevBtn);
        container.appendChild(nextBtn);

        let currentIndex = 0;

        const updateModalGallery = (newIndex) => {
          imgs[currentIndex].classList.remove('active');
          dots[currentIndex].classList.remove('active');
          
          currentIndex = (newIndex + imgs.length) % imgs.length;
          
          imgs[currentIndex].classList.add('active');
          dots[currentIndex].classList.add('active');
        };

        const startAutoPlay = () => {
          clearInterval(modalInterval);
          modalInterval = setInterval(() => updateModalGallery(currentIndex + 1), 3000);
        };
        startAutoPlay();

        prevBtn.addEventListener('click', (e) => { 
          e.stopPropagation(); 
          updateModalGallery(currentIndex - 1); 
          startAutoPlay(); 
        });
        nextBtn.addEventListener('click', (e) => { 
          e.stopPropagation(); 
          updateModalGallery(currentIndex + 1); 
          startAutoPlay(); 
        });
      }
    }
  };

  const closeModal = () => {
    modal.classList.remove('active');
    clearInterval(modalInterval);
    setTimeout(() => { modalBody.innerHTML = ''; }, 300);
  };

  document.querySelectorAll('.pcard-visual').forEach(vis => {
    vis.addEventListener('click', (e) => {
      e.stopPropagation(); 
      openModal(vis);
    });
  });

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('active')) closeModal(); });

  // --- RESUME MODAL LOGIC ---
  const resumeModal = $('resumeModal');
  const resumeBtn = $('resumeBtn');
  const resumeClose = $('resumeClose');
  const resumeCopy = $('resumeCopy');

  resumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resumeModal.classList.add('active');
    resumeModal.querySelector('.modal-content').style.transform = 'scale(1)';
  });

  const closeResume = () => {
    resumeModal.classList.remove('active');
    resumeModal.querySelector('.modal-content').style.transform = 'scale(0.95)';
  };

  resumeClose.addEventListener('click', closeResume);
  resumeModal.addEventListener('click', (e) => { if (e.target === resumeModal) closeResume(); });

  // Copy email to clipboard
  if(resumeCopy) {
    resumeCopy.addEventListener('click', () => {
      navigator.clipboard.writeText('zerotwosss188@gmail.com').then(() => {
        resumeCopy.textContent = 'COPIED!';
        setTimeout(() => { resumeCopy.textContent = 'COPY EMAIL'; }, 2000);
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    });
  }

  // Timeline
  $('tlItems').innerHTML=ME.timeline.map(t=>`<div class="tlItem"><div class="tlDot"></div><div class="year">${t.year}</div><h3>${t.title}</h3><div class="org">${t.org}</div><p>${t.desc}</p></div>`).join('');

  // Contact & Logs
  $('socials').innerHTML=`<a href="${ME.github}" target="_blank" rel="noopener">GITHUB ↗</a><a href="mailto:${ME.email}">EMAIL ↗</a><a href="tel:${ME.phone.replace(/[^+\d]/g,'')}">PHONE ↗</a><span class="chip">${ME.location}</span>`;
  $('foot').textContent=ME.footer;
  
  $('agrid').innerHTML=ME.projects.map((p,i)=>{
    let linkHtml = '';
    if (p.link) {
      linkHtml = `<a href="${p.link}" target="_blank" style="color: var(--primary-light); font-size: 13px; font-family: 'Fira Code', monospace; margin-top: 16px; display: inline-block;">[ VIEW CODE ↗ ]</a>`;
    } else if (p.links) {
      linkHtml = `<div style="display:flex; gap:10px; margin-top: 16px; flex-wrap:wrap;">
        <a href="${p.links[0]}" target="_blank" style="color: var(--primary); font-size: 13px; font-family: 'Fira Code', monospace;">[ FANDOMVERSE ↗ ]</a>
        <a href="${p.links[1]}" target="_blank" style="color: var(--primary); font-size: 13px; font-family: 'Fira Code', monospace;">[ NEXTSTEP ↗ ]</a>
      </div>`;
    } else {
      linkHtml = `<span style="color: #64748b; font-size: 13px; font-family: 'Fira Code', monospace; margin-top: 16px; display: inline-block;">[ IN DEVELOPMENT ]</span>`;
    }

    return `<div class="acard" data-d="${i%3}">
      <div class="an">${p.id}</div>
      <div class="astat${/ONGOING/.test(p.st)?' pulse':''}">● ${p.st}</div>
      <div>
        <h4>${p.title}</h4><p>${p.desc}</p>
        <div class="atags">${p.tags.map(t=>`<span class="chip">${t}</span>`).join('')}</div>
        ${linkHtml}
      </div>
    </div>`;
  }).join('');
  
  $('logsGrid').innerHTML = ME.logs.map(log => `
    <div class="log-item">
      <div class="log-date">${log.date}</div>
      <div class="log-content"><h4>${log.title}</h4><p>${log.desc}</p></div>
    </div>
  `).join('');

  $('afootTxt').textContent=ME.footer;
  $('afootLinks').innerHTML=`<a href="${ME.github}" target="_blank" rel="noopener">GITHUB</a><a href="mailto:${ME.email}">EMAIL</a><a href="tel:${ME.phone.replace(/[^+\d]/g,'')}">PHONE</a>`;

  // 2. INITIALIZE VISUALS & EVENTS
  initHero3D();
  initScramble();
  updateLiveStatus();
  setTimeout(startUITyping, 1500);

  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){const el=e.target;setTimeout(()=>el.classList.add('in'),(+el.dataset.d)*110);io.unobserve(el);}
  }),{threshold:.12});
  document.querySelectorAll('.acard').forEach(c=>io.observe(c));

  // Mouse Trail
  const trailContainer = $('trail-container');
  let lastTrailTime = 0;
  window.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastTrailTime < 30) return;
    lastTrailTime = now;
    const particle = document.createElement('div');
    particle.classList.add('trail-particle');
    particle.style.left = `${e.clientX}px`; particle.style.top = `${e.clientY}px`;
    const size = 4 + Math.random() * 6;
    particle.style.width = `${size}px`; particle.style.height = `${size}px`;
    trailContainer.appendChild(particle);
    setTimeout(() => particle.remove(), 800);
  });

  // Magnetic Buttons (EXCLUDES MODAL BUTTONS SO THEY DON'T MOVE AWAY ON CLICK)
  document.querySelectorAll('.btn:not(.resume-actions .btn), .hire-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = `translate(0px, 0px)`; });
  });

  // 3D Tilt (EXCLUDES MAIN NAV)
  document.querySelectorAll('.glass-panel:not(.main-nav), .acard').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; const y = e.clientY - rect.top;
      const centerX = rect.width / 2; const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      card.style.setProperty('--mouse-x', `${x}px`); card.style.setProperty('--mouse-y', `${y}px`);
    });
    card.addEventListener('mouseleave', () => { card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`; });
  });

  // Cinematic Intro Sequence
  const introText = $('introText');
  const preloader = $('preloader');

  const sequence = [
    { text: "SYSTEM.BOOT()", time: 0 },
    { text: "IDENTIFYING_USER...", time: 600 },
    { text: "USER: MUHAMMAD ASBER ALI", time: 1200 },
    { text: "ACCESS_GRANTED", time: 1800 }
  ];

  sequence.forEach(step => {
    setTimeout(() => {
      introText.textContent = step.text;
    }, step.time);
  });

  // Trigger the fade out and start the site
  setTimeout(() => {
    preloader.classList.add('hidden');
    // We scroll to top to reset the 3D engine state
    scrollTo(0,0); 
    // Start the typing effect for the role
    startTyping(); 
  }, 2600);

  // Event Listeners
  $('audioToggle').addEventListener('click', toggleAudio);
  $('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // 1. Grab the user's input
    const name = $('contactForm').querySelector('input[type="text"]').value;
    const email = $('contactForm').querySelector('input[type="email"]').value;
    const topic = $('contactForm').querySelector('select').value;
    const message = $('contactForm').querySelector('textarea').value;

    // 2. Format the email
    const subject = `Portfolio Contact: ${topic.toUpperCase()}`;
    const body = `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\nMessage:\n${message}`;

    // 3. Encode it for the URL
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // 4. Open Gmail Compose in a new tab
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=zerotwosss188@gmail.com&su=${encodedSubject}&body=${encodedBody}`;
    window.open(gmailUrl, '_blank');

    // 5. UI Feedback
    const btn = $('contactForm').querySelector('button'); 
    const status = $('formStatus');
    btn.textContent = 'TRANSMITTING...';
    
    setTimeout(() => {
      btn.textContent = 'SEND TRANSMISSION'; 
      status.style.display = 'block';
      $('contactForm').reset(); 
      triggerConfetti();
      setTimeout(() => status.style.display = 'none', 4000);
    }, 1500);
  });

  // Mobile Menu Logic
  const hamburger = $('hamburger'); 
  const navLinksContainer = $('navLinks');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); 
    navLinksContainer.classList.toggle('active');
    document.body.style.overflow = navLinksContainer.classList.contains('active') ? 'hidden' : '';
  });

  // 3. CACHE ELEMENTS *AFTER* POPULATION
  const rvA=[...document.querySelectorAll('#ch2 .rv')];
  const statB=[...document.querySelectorAll('#statGrid b')];
  const learnChips=[...document.querySelectorAll('#learnRow .chip')];
  const intChips=[...document.querySelectorAll('#intRow .chip')];
  const pwraps=[...document.querySelectorAll('.pwrap')];
  const tlE=[...document.querySelectorAll('.tlItem')];
  const cvHead=[$('cvTag'),$('cvTitle')];
  const c6rv=[...document.querySelectorAll('#ch6 .rv')];
  
  const el={pbar:$('pbar'),phead:$('phead'),pct:$('pct'),projTag:$('projTag'),scrollHint:$('scrollHint'), heroActions:document.querySelector('.hero-actions'), heroStats:document.querySelector('.hero-stats-bar')};
  const navLinks=[...document.querySelectorAll('.nav-links a')];

  // 4. START SCROLL ENGINE
  const chapters=[
    {a:0.00,b:0.12,el:$('ch1'),id:'ch1'},
    {a:0.12,b:0.25,el:$('ch2'),id:'ch2'},
    {a:0.25,b:0.41,el:$('ch3'),id:'ch3'},
    {a:0.41,b:0.70,el:$('ch4'),id:'ch4'},
    {a:0.70,b:0.85,el:$('ch5'),id:'ch5'},
    {a:0.85,b:1.00,el:$('ch6'),id:'ch6'}
  ];
  // Changed the 4th value to 0.1035 (which calculates exactly to 44% of the screen)
  const HOLD=[.85,.75,.85,.1035,.65,.90]; 
  const REST=chapters.map((c,i)=>c.a+(c.b-c.a)*HOLD[i]);

  const space=$('scrollSpace');
  function movieEnd(){return space.offsetHeight-innerHeight;}

  // Unified smooth scroll logic (Handles all # links gracefully)
  function navigateTo(href) {
    if(!href) return;
    snap = null;
    
    // Close mobile menu if open
    hamburger.classList.remove('active'); 
    navLinksContainer.classList.remove('active');
    document.body.style.overflow = '';

    if (href === '#archive') {
      document.getElementById('archive').scrollIntoView({ behavior: 'smooth' });
    } else {
      const index = chapters.findIndex(c => '#' + c.id === href);
      if(index !== -1) { 
        const m = movieEnd(); 
        scrollTo({ top: m * REST[index], behavior: 'smooth' }); 
      }
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if(href === '#') return;
      e.preventDefault();
      navigateTo(href);
    });
  });

  // Ensure the mobile nav links trigger the navigation properly
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', (e) => {
      hamburger.classList.remove('active'); 
      navLinksContainer.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  const letters=[...document.querySelectorAll('#heroName span')];
  const heroNameEl=$('heroName');
  const sw1=$('sw1'),sw2=$('sw2');
  const leafL=$('leafL'),leafR=$('leafR'),seam=$('seam'),glow=$('doorGlow');
  const ghost=$('ghostNum');

  function fade(lp,fi,fo){let o=1;if(fi>0&&lp<fi)o=lp/fi;if(fo>0&&lp>1-fo)o=(1-lp)/fo;return clamp(o);}
  function reveal(nodes,lp,start,step,dur){
    dur=dur||.3;
    nodes.forEach((n,i)=>{const t=clamp((lp-start-i*step)/dur);const e=eo(t);
      n.style.opacity=e;n.style.transform=`translateY(${(1-e)*44}px)`;});
  }

  // RENDERERS
  function rHero(lp,now){
    const c=chapters[0]; c.el.style.opacity=fade(lp,0,.06);
    const power=clamp(lp/.18); const flick=lp<.26?(.75+.25*Math.sin(now/38)):1;
    const open=clamp((lp-.2)/.35);const O=eio(open);
    seam.style.opacity = (0.2 + 0.8 * power) * (1 - O) * flick;
    glow.style.opacity = (0.2 + 0.8 * power) * (.5 + .5 * eo(open));
    leafL.style.transform=`translateX(${O*-7}vw) rotateY(${O*-95}deg)`;
    leafR.style.transform=`translateX(${O*7}vw) rotateY(${O*95}deg)`;
    const k1=clamp((lp-.22)/.35),k2=clamp((lp-.3)/.35);
    sw1.style.transform=`translate(-50%,-50%) scale(${.2+eo(k1)*5.5})`;
    sw1.style.opacity=clamp((lp-.22)*6)*(1-k1)*.85;
    sw2.style.transform=`translate(-50%,-50%) scale(${.2+eo(k2)*5.5})`;
    sw2.style.opacity=clamp((lp-.3)*6)*(1-k2)*.7;
    letters.forEach((s,i)=>{
      const t=clamp((lp-i*.012)/.15); const e=eo(t);
      s.style.opacity=1; s.style.transform=`translateZ(${(1-e)*260}px) rotateY(${(1-e)*60}deg) translateY(${(1-e)*24}px)`;
    });
    $('heroRole').style.opacity = 1; $('heroTag').style.opacity = 1;
    const actionsOpacity = clamp((lp - 0.1) * 4);
    el.heroActions.style.opacity = actionsOpacity; el.heroStats.style.opacity = actionsOpacity;
    heroNameEl.style.transform=`translate(-50%,-50%) translateZ(-70px) translateY(${(Math.sin(now/900)*6).toFixed(2)}px)`;
    el.scrollHint.style.opacity = clamp(1 - (lp / 0.05));
  }

  function rAbout(lp){
    const c=chapters[1]; c.el.style.opacity=fade(lp,.06,.08);
    const t=eo(clamp(lp/.26)); const card=$('idCard');
    card.style.opacity=t; card.style.transform=`perspective(900px) rotateY(${(1-t)*70}deg) translateX(${(1-t)*-80}px)`;
    reveal(rvA,lp,.06,.06,.26);
    statB.forEach((b,i)=>{const tt=clamp((lp-.15-i*.05)/.16);
      b.textContent=Math.round(eo(tt)*(+b.dataset.n))+b.dataset.suf;});
  }

  function rSkills(lp){
    const c=chapters[2]; c.el.style.opacity=fade(lp,.05,.07);
    const t=eo(clamp(lp/.22)); const head=$('skillHead');
    head.style.opacity=t; head.style.transform=`translateY(${(1-t)*40}px)`;
    drawRadar(lp);
    learnChips.forEach((ch,i)=>{const tt=clamp((lp-.46-i*.03)/.14);
      ch.style.opacity=tt; ch.style.transform=`scale(${.6+.4*eo(tt)})`;});
    intChips.forEach((ch,i)=>{const tt=clamp((lp-.58-i*.03)/.14);
      ch.style.opacity=tt; ch.style.transform=`scale(${.6+.4*eo(tt)})`;});
  }

  function rProj(lp){
    const c=chapters[3]; c.el.style.opacity=fade(lp,.03,.05);
    el.projTag.style.opacity = clamp(lp/.05);
    const seg=1/ME.projects.length;
    pwraps.forEach((w,i)=>{
      let local = (lp - i*seg) / seg;
      if(i === 0 && lp < 0.2) local = 0.5; 
      let ein = eo(clamp(local / 0.25));
      let eout = (i === ME.projects.length - 1) ? 0 : eo(clamp((local - 0.75) / 0.25));
      let opacity = ein * (1 - eout);
      w.style.opacity = Math.max(0, opacity);
      
      w.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';
      const visual = w.querySelector('.pcard-visual');
      if(visual) visual.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';

      let z = (1 - ein) * -300 + eout * 300; 
      let y = (1 - ein) * 50 - eout * 50;    
      w.style.transform = `translate(-50%, -50%) translateY(${y}px) translateZ(${z}px)`;
      if (opacity > 0.5) ghost.textContent = ME.projects[i].id;
    });
  }

  function rCv(lp){
    const c=chapters[4]; c.el.style.opacity=fade(lp,.03,.07);
    $('tlFill').style.transform=`scaleY(${clamp(lp/.4)})`;
    reveal(cvHead,lp,0,.07,.24);
    tlE.forEach((it,i)=>{
      const t=clamp((lp-.08-i*.07)/.2); const e=eo(t);
      it.style.opacity=e; it.style.transform=`translateX(${(i%2?70:-70)*(1-e)}px)`;
      it.querySelector('.tlDot').style.transform=`scale(${eo(clamp(t*1.6))})`;
    });
  }

  function rContact(lp){
    const c=chapters[5]; c.el.style.opacity=fade(lp,.05,0);
    const t=eo(clamp(lp/.3)); const po=$('portal');
    po.style.opacity=t; po.style.transform=`translate(-50%,-50%) scale(${.65+.35*t})`;
    reveal(c6rv,lp,.2,.07,.28);
  }

  const fns=[rHero,rAbout,rSkills,rProj,rCv,rContact];
  chapters.forEach((c,i)=>c.fn=fns[i]);

  // Background Embers
  const cv=$('fx'),cx=cv.getContext('2d');let W=0,H=0;
  function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;}
  rs();addEventListener('resize',rs);
  const parts=Array.from({length:64},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:.8+Math.random()*2.4,v:14+Math.random()*40,w:Math.random()*6.283,g:140+(Math.random()*80|0),a:.25+Math.random()*.5}));
  function embers(now,dt,inten){
    cx.clearRect(0,0,W,H);
    const t=now/1000;
    for(const p of parts){
      p.y-=p.v*dt;if(p.y<-12){p.y=H+12;p.x=Math.random()*W;}
      const x=p.x+Math.sin(t*.8+p.w)*22;
      const al=p.a*inten*(.6+.4*Math.sin(t*2+p.w));
      cx.beginPath();cx.arc(x,p.y,p.r,0,6.283);
      cx.fillStyle=`rgba(255,${p.g},26,${al.toFixed(3)})`;
      cx.fill();
    }
  }

  // Scroll Lock Engine
  let target=0,cur=0;
  let snap=null,userScrolled=false,lastScrollT=performance.now();
  if('scrollRestoration' in history)history.scrollRestoration='manual';

  addEventListener('scroll',()=>{
    userScrolled=true;lastScrollT=performance.now();
    const m=movieEnd(); target=clamp(scrollY/Math.max(1,m));
  },{passive:true});
  ['wheel','touchstart','keydown','mousedown'].forEach(ev=>addEventListener(ev,()=>{
    snap=null;lastScrollT=performance.now();
  },{passive:true}));

  function render(p,now){
    el.pbar.style.transform=`scaleX(${p})`;
    el.phead.style.left=(p*100)+'%';
    el.pct.textContent=Math.round(p*100)+'%';
    
    const inArchive=scrollY>movieEnd()+40;
    let onNav=0;
    for(let i=0;i<chapters.length;i++)if(p>=chapters[i].a-.0001){onNav=i;}
    if(inArchive)onNav=6;
    
    if(render.pn!==onNav){
      render.pn=onNav;
      navLinks.forEach((a,i)=>a.classList.toggle('active',i===onNav));
    }
    
    for(const c of chapters){
      const vis=p>=c.a-.05&&p<=c.b+.05; 
      c.el.style.visibility=vis?'visible':'hidden';
      if(vis){
        const lp=clamp((p-c.a)/(c.b-c.a));
        c.fn(lp,now);
      }
    }
    let inten=.45;
    if(p<.12)inten+=.35*clamp(p/.22);
    if(p>.85)inten+=.4;
    return inten;
  }

  let lastT=performance.now();
  function loop(now){
    const dt=Math.min(.05,(now-lastT)/1000);lastT=now;
    if(!snap&&userScrolled&&now-lastScrollT>220&&Math.abs(target-cur)<.002){
      const m=movieEnd();
      if(scrollY<m-80&&scrollY>m*.02){
        let best=-1,bd=1e9;
        REST.forEach((r,i)=>{const d=Math.abs(r*m-scrollY);if(d<bd){bd=d;best=i;}});
        if(best>=0){
          const r=REST[best]*m,d=r-scrollY;
          if((d>24&&d<420)||(d<-24&&d>-300))snap={from:scrollY,to:r,t0:now,lastPos:scrollY};
        }
      }
    }
    if(snap){
      if(Math.abs(scrollY-snap.lastPos)>50){snap=null;}
      else{
        const t=clamp((now-snap.t0)/650);
        const y=snap.from+(snap.to-snap.from)*eio(t);
        scrollTo(0,y);snap.lastPos=y;
        if(t>=1){snap=null;lastScrollT=performance.now();}
      }
    }else{
      cur+=(target-cur)*(1-Math.exp(-dt*17));
      if(Math.abs(target-cur)<.0004)cur=target;
    }
    embers(now,dt,render(cur,now));
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  // Start Typing effect
  function startTyping() {
    const text = "// SOFTWARE DEVELOPER — PYTHON & AI";
    const el = $('heroRole');
    el.textContent = "";
    let i = 0;
    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i); i++; setTimeout(type, 50);
      }
    }
    type();
  }
});