import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
import { createGalleryMarkup } from './helpers/createGalleryItems';

const container = document.querySelector('.gallery');

createGalleryMarkup(galleryItems, container);

new SimpleLightbox('.gallery a', {
  /* options */
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
