import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImages = [];

galleryItems
    .forEach((item) => {
        const divWithImage = document.createElement('div');
        divWithImage.classList.add('gallery__item');

        const imageLink = document.createElement('a');
        imageLink.classList.add('gallery__link');
        imageLink.href = item.original;
        divWithImage.appendChild(imageLink);

        const image = document.createElement('img');
        image.classList.add('gallery__image');
        image.src = item.preview;
        image.setAttribute('data-source', `${item.original}`);
        image.alt = item.description;
        imageLink.appendChild(image);

        galleryImages.push(divWithImage);
})

const gallery = document.querySelector('.gallery');

gallery.append(...galleryImages);

gallery.addEventListener('click', handleClickOnGallery);

function handleClickOnGallery(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== 'IMG') { return; };
    
    const largeImageSource = event.target.dataset.source;
    console.log(largeImageSource);

    const modal = basicLightbox.create(
        `<img src="${largeImageSource}" width="800" height="600">
        `);
    modal.show()

     
};





// console.log(galleryItems);
