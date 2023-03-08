import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
//console.log(galleryItems);
const items = [];

//Перебирання масиву об'єктів методом forEach
galleryItems.forEach((element) => {
    
  //Створення тегів галереї і класів до тегів

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");

  galleryLink.href = element.original;
  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = element.preview;

  galleryImage.setAttribute("title", element.description);
  galleryImage.alt = element.description;

  galleryLink.append(galleryImage);
  items.push(galleryLink);
});
gallery.append(...items);
new SimpleLightbox(".gallery a", {
    captionDelay: 250,
});
