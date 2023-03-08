import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
console.log(galleryItems);
const items = [];

//Перебирання масиву об'єктів методом forEach
galleryItems.forEach((element) => {
    
  //Створення тегів галереї і класів до тегів
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");
  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");

  galleryLink.href = element.original;
  const galleryImg = document.createElement("img");
  galleryImg.classList.add("gallery__image");
  galleryImg.src = element.preview;

  galleryImg.setAttribute("data-source", element.original);
  galleryImg.alt = element.description;

  galleryItem.append(galleryLink);
  galleryLink.append(galleryImg);
  items.push(galleryItem);
});
gallery.append(...items);
document.addEventListener("click", (e) => {
  //По кліку користувач не буде перенаправлений на іншу сторінку
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const imgSelected = e.target.getAttribute("data-source");
  const template = basicLightbox.create(
    `<img src ="${imgSelected}" width="700" height="500">`,
    {
      onShow: () => {
        document.addEventListener("keydown", closeModal);
      },
      onClose: () => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );
  template.show();
  function closeModal(e) {
    if (e.key === "Escape") {
      template.close();
    }
  }
});
