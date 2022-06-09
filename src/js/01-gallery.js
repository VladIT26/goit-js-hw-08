import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const itemsOnList = document.querySelector('div.gallery')

function makeListMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  }).join("");
}
const items = makeListMarkup(galleryItems);
itemsOnList.insertAdjacentHTML('afterbegin', items);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});
console.log(galleryItems);
