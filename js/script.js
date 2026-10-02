(function(){
"use strict";
const $=(s,r=document)=>r.querySelector(s);
const fmt=d=>new Date(d+"T12:00:00").toLocaleDateString("es-ES",{day:"numeric",month:"long",year:"numeric"});
const thumb=(g,f)=>`${g.carpeta}/thumbs/${f}`;
const full=(g,f)=>`${g.carpeta}/${f}`;
const sorted=[...GALERIAS].sort((a,b)=>b.fecha.localeCompare(a.fecha));

/* Menú móvil */
const btn=$(".menu-btn"),nav=$(".nav");
btn.addEventListener("click",()=>{const o=nav.classList.toggle("open");btn.setAttribute("aria-expanded",o)});
const y=$("#year");if(y)y.textContent=new Date().getFullYear();

/* Tarjeta de galería */
const card=g=>`<article class="card"><a href="galerias.html?g=${g.id}">
<img src="${thumb(g,g.portada||g.fotos[0])}" alt="${g.titulo}, ${g.lugar}" loading="lazy" width="800" height="1000">
<div class="cap"><h3>${g.titulo}</h3><p>${g.lugar}</p><p>${fmt(g.fecha)}</p>
${g.hermandad?`<p class="h">${g.hermandad}</p>`:""}<p>${g.fotos.length} fotografías</p><span class="ver">Ver galería</span></div></a></article>`;

/* Inicio */
const ult=$("#ultimas");
if(ult)ult.innerHTML=sorted.slice(0,3).map(card).join("");

/* Galerías */
const grid=$("#grid-galerias");
if(grid){
  const fy=$("#f-year"),fc=$("#f-cat"),fh=$("#f-her");
  const uniq=a=>[...new Set(a.filter(Boolean))];
  uniq(sorted.map(g=>g.fecha.slice(0,4))).forEach(v=>fy.add(new Option(v,v)));
  uniq(sorted.map(g=>g.categoria)).sort().forEach(v=>fc.add(new Option(v,v)));
  uniq(sorted.map(g=>g.hermandad)).sort().forEach(v=>fh.add(new Option(v,v)));
  const draw=()=>{
    const r=sorted.filter(g=>(!fy.value||g.fecha.startsWith(fy.value))&&(!fc.value||g.categoria===fc.value)&&(!fh.value||g.hermandad===fh.value));
    grid.innerHTML=r.map(card).join("");$("#vacio").hidden=r.length>0;
  };
  [fy,fc,fh].forEach(s=>s.addEventListener("change",draw));draw();

  const id=new URLSearchParams(location.search).get("g");
  const g=GALERIAS.find(x=>x.id===id);
  if(g)openGallery(g);
}

function openGallery(g){
  $("#listado").hidden=true;$("#detalle").hidden=false;
  document.title=`${g.titulo} | Manu Sánchez Fotografía Cofrade`;
  $("#d-titulo").textContent=g.titulo;
  $("#d-meta").textContent=[g.hermandad,g.lugar,fmt(g.fecha),g.fotos.length+" fotografías"].filter(Boolean).join(" · ");
  $("#photos").innerHTML=g.fotos.map((f,i)=>`<button class="ph" data-wm="${MARCA_AGUA}" data-i="${i}" aria-label="Abrir fotografía ${i+1}">
<img src="${thumb(g,f)}" alt="${g.titulo}${g.hermandad?", "+g.hermandad:""}. Fotografía ${i+1}" loading="lazy" decoding="async" width="600" height="750"></button>`).join("");
  $("#photos").addEventListener("click",e=>{const b=e.target.closest(".ph");if(b)show(g,+b.dataset.i)});
}

/* Visor */
let lb,cur=0,G;
function build(){
  lb=document.createElement("div");lb.className="lb";lb.hidden=true;
  lb.setAttribute("role","dialog");lb.setAttribute("aria-modal","true");lb.setAttribute("aria-label","Visor de fotografías");
  lb.innerHTML=`<figure data-wm="${MARCA_AGUA}"><img alt=""></figure>
<button class="x" aria-label="Cerrar">&times;</button><button class="p" aria-label="Anterior">&#8249;</button><button class="n" aria-label="Siguiente">&#8250;</button><div class="c"></div>`;
  document.body.appendChild(lb);
  $(".x",lb).onclick=close;$(".p",lb).onclick=()=>go(-1);$(".n",lb).onclick=()=>go(1);
  lb.addEventListener("click",e=>{if(e.target===lb)close()});
  let sx=0;
  lb.addEventListener("touchstart",e=>{sx=e.touches[0].clientX},{passive:true});
  lb.addEventListener("touchend",e=>{const d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>50)go(d<0?1:-1)});
  document.addEventListener("keydown",e=>{
    if(lb.hidden)return;
    if(e.key==="Escape")close();
    if(e.key==="ArrowRight")go(1);
    if(e.key==="ArrowLeft")go(-1);
  });
}
function show(g,i){
  if(!lb)build();
  G=g;cur=(i+g.fotos.length)%g.fotos.length;
  const img=$("img",lb);img.src=full(g,g.fotos[cur]);
  img.alt=`${g.titulo}. Fotografía ${cur+1} de ${g.fotos.length}`;
  $(".c",lb).textContent=`${cur+1} / ${g.fotos.length}`;
  lb.hidden=false;document.body.style.overflow="hidden";$(".x",lb).focus();
  [1,-1].forEach(d=>{new Image().src=full(g,g.fotos[(cur+d+g.fotos.length)%g.fotos.length])}); // precarga vecinas
}
const go=d=>show(G,cur+d);
function close(){lb.hidden=true;document.body.style.overflow=""}
})();
