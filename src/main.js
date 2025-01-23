import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { createGalleryCardTempplate } from './js/render-functions';
import { fetchPhotosByQuery } from './js/pixabay-api';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.loader');
const loadMoreButtonEl = document.querySelector('.load-more-btn');

let page = 1;
let searchedQuery = '';

//-------Submit------
const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    searchedQuery = event.currentTarget.elements.user_query.value.trim();
    console.log(searchedQuery);
    if (searchedQuery === '') {
      iziToast.error({
        position: 'topRight',
        message: 'Field must be filled in!',
      });
      return;
    }

    page = 1;
    loadMoreButtonEl.classList.add('is-hidden');

    galleryEl.innerHTML = '';

    loaderEl.classList.remove('is-hidden');

    searchFormEl.reset();

    const response = await fetchPhotosByQuery(searchedQuery, page);
    if (response.data.total === 0) {
      galleryEl.innerHTML = '';
      loaderEl.classList.add('is-hidden');
      iziToast.error({
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    if (response.data.totalHits > 1) {
      loadMoreButtonEl.classList.remove('is-hidden');
      loadMoreButtonEl.addEventListener('click', onLoadMoreBtnClick);
    }
    const galleryTemplate = response.data.hits
      .map(el => createGalleryCardTempplate(el))
      .join('');

    galleryEl.innerHTML = galleryTemplate;

    const lightbox = new SimpleLightbox('.js-gallery a', {
      captionsData: 'alt',
      captionPosition: 'bottom',
      animationSpeed: 250,
    });
    lightbox.refresh();
    loaderEl.classList.add('is-hidden');
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);

const onLoadMoreBtnClick = async event => {
  try {
    page++;
    const response = await fetchPhotosByQuery(searchedQuery, page);

    const galleryTemplate = response.data.hits
      .map(el => createGalleryCardTempplate(el))
      .join('');

    galleryEl.insertAdjacentHTML('beforeend', galleryTemplate);

    if (page === response.data.totalHits) {
      loadMoreButtonEl.classList.add('is-hidden');
      loadMoreButtonEl.removeEventListener('click', onLoadMoreBtnClick);
      iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (err) {
    console.log(err);
  }
};
