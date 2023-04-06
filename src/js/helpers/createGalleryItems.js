function createGalleryMarkup(items, container) {
  const markup = items
    .map(
      ({ preview, original, description }) =>
        `<li class='gallery__item'>
        <a class='gallery__link' href='${original}'>
          <img
            class='gallery__image'
            src='${preview}'
            data-source='${original}'
            alt='${description}'
          />
        </a>
      </li>`
    )
    .join('');
  container.insertAdjacentHTML('beforeend', markup);
}

export { createGalleryMarkup };
