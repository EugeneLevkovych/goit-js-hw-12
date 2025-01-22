import{a as u,i as n,S as m}from"./assets/vendor-Dpd1z_xS.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const p=t=>`<li class="gallery-card">
  <a href="${t.largeImageURL}" class="gallery-item">
  <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}"/>
  </a>
  <ul class="text-list">
               <li class="text-item">
                        <h2 class="text-title">Likes:</h2>
                        <p class="text-values">${t.likes}</p>
                    </li>
                    <li class="text-item">
                        <h2 class="text-title">Views:</h2>
                        <p class="text-values">${t.views}</p>
                    </li>
                    <li class="text-item">
                        <h2 class="text-title">Comments:</h2>
                        <p class="text-values">${t.comments}</p>
                    </li>
                    <li class="text-item">
                        <h2 class="text-title">Downloads:</h2>
                        <p class="text-values">${t.downloads}</p>
                    </li>
       
          </ul>
  
  </li>
  `,h=t=>{const r=new URLSearchParams({key:"48247224-415eb498da8da81883dddb739",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15});return u.get(`https://pixabay.com/api/?${r}`)},d=document.querySelector(".js-search-form"),o=document.querySelector(".js-gallery"),c=document.querySelector(".loader"),y=async t=>{try{t.preventDefault();const r=t.currentTarget.elements.user_query.value.trim();if(r===""){n.error({position:"topRight",message:"Field must be filled in!"});return}o.innerHTML="",c.classList.remove("is-hidden"),d.reset();const a=await h(r);if(a.data.total===0){o.innerHTML="",c.classList.add("is-hidden"),n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}const i=a.data.hits.map(s=>p(s)).join("");o.innerHTML=i,new m(".js-gallery a",{captionsData:"alt",captionPosition:"bottom",animationSpeed:250}).refresh(),c.classList.add("is-hidden")}catch(r){console.log(r)}};d.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
