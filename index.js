import{a as x,S as b,i}from"./assets/vendor-Dpd1z_xS.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const h=e=>`<li class="gallery-card">
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
  `,y=(e,s)=>{const a={params:{key:"48247224-415eb498da8da81883dddb739",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}};return x.get("https://pixabay.com/api/",a)},g=document.querySelector(".js-search-form"),d=document.querySelector(".js-gallery"),c=document.querySelector(".js-loader"),p=document.querySelector(".js-loader-2"),o=document.querySelector(".load-more-btn");let l=1,u="";const f=new b(".js-gallery a",{captionsData:"alt",captionPosition:"bottom",animationSpeed:250}),v=async e=>{try{if(e.preventDefault(),u=e.currentTarget.elements.user_query.value.trim(),u===""){i.error({position:"topRight",message:"Field must be filled in!"});return}l=1,o.classList.add("is-hidden"),d.innerHTML="",c.classList.remove("is-hidden"),g.reset();const s=await y(u,l);if(s.data.total===0){d.innerHTML="",c.classList.add("is-hidden"),i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}s.data.totalHits>1&&(o.classList.remove("is-hidden"),o.addEventListener("click",L));const a=s.data.hits.map(n=>h(n)).join("");d.innerHTML=a,f.refresh(),c.classList.add("is-hidden")}catch(s){i.error({title:"Error",message:"BAD REQUEST",position:"topRight"}),console.log(s),c.classList.add("is-hidden")}};g.addEventListener("submit",v);const L=async()=>{try{p.classList.remove("is-hidden"),l++;const e=await y(u,l),s=e.data.hits.map(a=>h(a)).join("");d.insertAdjacentHTML("beforeend",s),l===e.data.totalHits&&(o.classList.add("is-hidden"),o.removeEventListener("click",L),i.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),f.refresh(),p.classList.add("is-hidden")}catch(e){i.error({title:"Error",message:"BAD REQUEST",position:"topRight"}),console.log(e),p.classList.add("is-hidden")}};
//# sourceMappingURL=index.js.map
