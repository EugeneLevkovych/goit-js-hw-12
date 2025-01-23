import{a as f,i as m,S as L}from"./assets/vendor-Dpd1z_xS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const p=s=>`<li class="gallery-card">
  <a href="${s.largeImageURL}" class="gallery-item">
  <img class="gallery-img" src="${s.webformatURL}" alt="${s.tags}"/>
  </a>
  <ul class="text-list">
               <li class="text-item">
                        <h2 class="text-title">Likes:</h2>
                        <p class="text-values">${s.likes}</p>
                    </li>
                    <li class="text-item">
                        <h2 class="text-title">Views:</h2>
                        <p class="text-values">${s.views}</p>
                    </li>
                    <li class="text-item">
                        <h2 class="text-title">Comments:</h2>
                        <p class="text-values">${s.comments}</p>
                    </li>
                    <li class="text-item">
                        <h2 class="text-title">Downloads:</h2>
                        <p class="text-values">${s.downloads}</p>
                    </li>
       
          </ul>
  
  </li>
  `,h=(s,t)=>{const a={params:{key:"48247224-415eb498da8da81883dddb739",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}};return f.get("https://pixabay.com/api/",a)},y=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),u=document.querySelector(".loader"),l=document.querySelector(".load-more-btn");let n=1,i="";const x=async s=>{try{if(s.preventDefault(),i=s.currentTarget.elements.user_query.value.trim(),console.log(i),i===""){m.error({position:"topRight",message:"Field must be filled in!"});return}n=1,l.classList.add("is-hidden"),c.innerHTML="",u.classList.remove("is-hidden"),y.reset();const t=await h(i,n);if(t.data.total===0){c.innerHTML="",u.classList.add("is-hidden"),m.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}t.data.totalHits>1&&(l.classList.remove("is-hidden"),l.addEventListener("click",g));const a=t.data.hits.map(e=>p(e)).join("");c.innerHTML=a,new L(".js-gallery a",{captionsData:"alt",captionPosition:"bottom",animationSpeed:250}).refresh(),u.classList.add("is-hidden")}catch(t){console.log(t)}};y.addEventListener("submit",x);const g=async s=>{try{n++;const t=await h(i,n),a=t.data.hits.map(o=>p(o)).join("");c.insertAdjacentHTML("beforeend",a),n===t.data.totalHits&&(l.classList.add("is-hidden"),l.removeEventListener("click",g),m.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch(t){console.log(t)}};
//# sourceMappingURL=index.js.map
