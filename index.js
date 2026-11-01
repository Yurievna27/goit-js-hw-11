import{a as u,S as d,i}from"./assets/vendor-BX8YMJUK.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",f="58341818-aa4b6b37dc6ab2f989114a374";function m(n){return u.get(p,{params:{key:f,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function g(n){const o=n.map(t=>`<li class="gallery-item">
    <a class="gallery-link" href="${t.largeImageURL}">
      <img
        class="gallery-image"
        src="${t.webformatURL}"
        alt="${t.tags}"
      />
    </a>
    <div class="image-info">
      <p><b>Likes</b><span>${t.likes}</span></p>
      <p><b>Views</b><span>${t.views}</span></p>
      <p><b>Comments</b><span>${t.comments}</span></p>
      <p><b>Downloads</b><span>${t.downloads}</span></p>
    </div>
  </li>`).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function h(){c.innerHTML=""}function b(){l.classList.remove("hidden")}function L(){l.classList.add("hidden")}const w=document.querySelector(".form"),S=document.querySelector(".form input[type='text']");w.addEventListener("submit",n=>{n.preventDefault();const o=S.value.trim();o!==""&&(h(),b(),m(o).then(t=>{if(t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(t.hits)}).catch(t=>{i.error({message:"Something went wrong. Please try again!"})}).finally(()=>{L()}))});
//# sourceMappingURL=index.js.map
