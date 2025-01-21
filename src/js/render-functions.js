export const createGalleryCardTempplate = imgInfo => {
  //console.log(imgInfo);
  return `<li class="gallery-card">
  <a href="${imgInfo.largeImageURL}" class="gallery-item">
  <img class="gallery-img" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}"/>
  </a>
  <ul class="text-list">
               <li class="text-item">
                        <h2 class="text-title">Likes:</h2>
                        <p class="text-values">${imgInfo.likes}</p>
                    </li>
                    <li class="text-item">
                        <h2 class="text-title">Views:</h2>
                        <p class="text-values">${imgInfo.views}</p>
                    </li>
                    <li class="text-item">
                        <h2 class="text-title">Comments:</h2>
                        <p class="text-values">${imgInfo.comments}</p>
                    </li>
                    <li class="text-item">
                        <h2 class="text-title">Downloads:</h2>
                        <p class="text-values">${imgInfo.downloads}</p>
                    </li>
       
          </ul>
  
  </li>
  `;
};
