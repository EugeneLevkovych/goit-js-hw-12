import{a as v,S as x,i as l}from"./assets/vendor-Dpd1z_xS.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const g=e=>`<li class="gallery-card">
  <a href="${e.largeImageURL}" class="gallery-item">
  <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}"/>
  </a>
  <ul class="text-list">
               <li class="text-item">
                        <h2 class="text-title">Likes:</h2>
                        <p class="text-values">${e.likes}</p>
                    </li>
                    <li class="text-item">
                        <h2 class="text-title">Views:</h2>
                        <p class="text-values">${e.views}</p>
                    </li>
                    <li class="text-item">
                        <h2 class="text-title">Comments:</h2>
                        <p class="text-values">${e.comments}</p>
                    </li>
                    <li class="text-item">
                        <h2 class="text-title">Downloads:</h2>
                        <p class="text-values">${e.downloads}</p>
                    </li>
       
          </ul>
  
  </li>
  `,y=(e,s)=>{const o={params:{key:"48247224-415eb498da8da81883dddb739",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}};return v.get("https://pixabay.com/api/",o)},f=document.querySelector(".js-search-form"),d=document.querySelector(".js-gallery"),c=document.querySelector(".js-loader"),m=document.querySelector(".js-loader-2"),i=document.querySelector(".load-more-btn");let n=1,u="";const L=new x(".js-gallery a",{captionsData:"alt",captionPosition:"bottom",animationSpeed:250}),b=async e=>{try{if(e.preventDefault(),i.removeEventListener("click",p),u=e.currentTarget.elements.user_query.value.trim(),u===""){l.error({position:"topRight",message:"Field must be filled in!"});return}n=1,i.classList.add("is-hidden"),d.innerHTML="",c.classList.remove("is-hidden"),f.reset();const s=await y(u,n);if(s.data.total===0){d.innerHTML="",c.classList.add("is-hidden"),l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}s.data.totalHits>1&&(i.classList.remove("is-hidden"),i.addEventListener("click",p));const o=s.data.hits.map(a=>g(a)).join("");d.innerHTML=o,L.refresh(),c.classList.add("is-hidden")}catch(s){l.error({title:"Error",message:"BAD REQUEST",position:"topRight"}),console.log(s),c.classList.add("is-hidden")}};f.addEventListener("submit",b);const p=async()=>{try{m.classList.remove("is-hidden"),n++;const e=await y(u,n),s=e.data.hits.map(a=>g(a)).join("");d.insertAdjacentHTML("beforeend",s),n>=e.data.totalHits/15&&(i.classList.add("is-hidden"),i.removeEventListener("click",p),l.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),L.refresh();const o=document.querySelectorAll(".gallery-card");if(o.length>0){const a=o[0].getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}m.classList.add("is-hidden")}catch(e){l.error({title:"Error",message:"BAD REQUEST",position:"topRight"}),console.log(e),m.classList.add("is-hidden")}};
//# sourceMappingURL=index.js.map
