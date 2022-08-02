// import SimpleLightbox from "simplelightbox";

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryLightboxImages = [];

galleryItems
    .forEach((item) => {
                
        const imageLink = document.createElement('a');
        imageLink.classList.add('gallery__item');
        imageLink.href = item.original;
                
        const image = document.createElement('img');
        image.classList.add('gallery__image');
        image.src = item.preview;
        image.alt = item.description;
        imageLink.appendChild(image);
        
        galleryLightboxImages.push(imageLink);
    })

const gallery = document.querySelector('.gallery');
    
gallery.append(...galleryLightboxImages);

let simpleLightboxGallery = new SimpleLightbox('.gallery a', {
        captions: true,
        captionType: 'attr',
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    })

    simpleLightboxGallery.on('show.simplelightbox');

    // console.log(galleryItems);
