import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { createGalleryCardTempplate } from './js/render-functions';
import { fetchPhotosByQuery } from './js/pixabay-api';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.loader');

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedQuery = event.currentTarget.elements.user_query.value.trim();

  if (searchedQuery === '') {
    iziToast.error({
      position: 'topRight',
      message: 'Field must be filled in!',
    });
    return;
  }
  galleryEl.innerHTML = '';

  loaderEl.classList.remove('is-hidden');

  searchFormEl.reset();

  fetchPhotosByQuery(searchedQuery)
    .then(data => {
      if (data.total === 0) {
        galleryEl.innerHTML = '';
        loaderEl.classList.add('is-hidden');
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      const galleryTemplate = data.hits
        .map(el => createGalleryCardTempplate(el))
        .join('');

      galleryEl.innerHTML = galleryTemplate;

      const lightbox = new SimpleLightbox('.js-gallery a', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        animationSpeed: 250,
      });
      lightbox.refresh();
    })
    .catch(err => {
      iziToast.error({
        title: 'Error',
        message: 'BAD REQUEST',
        position: 'topRight',
      });
      console.log(err);
    })
    .finally(() => {
      loaderEl.classList.add('is-hidden');
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
