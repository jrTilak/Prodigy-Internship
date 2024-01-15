document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader-container");
  setTimeout(() => {
    loader.classList.add("fade-out");
  }, 2000);
});

document.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("navbar-scrolled", window.scrollY > 50);
});

const landingBackground = document.querySelector("#landing-background");
const images = ["bg-1.jpg", "bg-2.jpg", "bg-3.jpg", "bg-4.jpg", "bg-5.jpg"];
images.forEach((image) => {
  const img = document.createElement("img");
  img.src = `assets/backgrounds/${image}`;
  img.classList.add("landing-background-image");
  landingBackground.appendChild(img);
});

const backgroundIndicators = document.querySelector("#background-indicators");
images.forEach((image, index) => {
  const indicator = document.createElement("div");
  if (index === 0) {
    indicator.classList.add("active");
  }
  indicator.classList.add("background-indicator");
  indicator.addEventListener("click", () => {
    index = images.indexOf(image);
    slideImages();
  });
  backgroundIndicators.appendChild(indicator);
});

const landingBackgroundImages = document.querySelectorAll(
  "#landing-background img"
);

let index = 0;
const nextSlide = () => {
  index++;
  if (index > landingBackgroundImages.length - 1) {
    index = 0;
  }
  slideImages();
};

landingBackgroundImages.forEach((image, index) => {
  image.style.left = `${index * 100}%`;
});

let autoSlide = setInterval(nextSlide, 7000);

const slideImages = () => {
  landingBackgroundImages.forEach((image) => {
    image.style.transform = `translateX(-${index * 100}%)`;
  });
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 7000);
  backgroundIndicators.querySelectorAll("div").forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
};

const prevSlide = () => {
  index--;
  if (index < 0) {
    index = landingBackgroundImages.length - 1;
  }
  slideImages();
};

backgroundIndicators.querySelectorAll("div").forEach((indicator, i) => {
  indicator.addEventListener("click", () => {
    index = i;
    slideImages();
  });
});

const menuItemsContainer = document.querySelector(".menu-items-container");
const menuItemsDetails = document.querySelector("#menu-item-details");
const overlay = document.querySelector(".menu-item-detailed-overlay");
fetch("/assets/foods.json")
  .then(async (menuItems) => {
    menuItems = await menuItems.json();
    let i = 0;
    let j = 0;
    menuItems.forEach((item, index) => {
      const menuItemDetails = document.createElement("div");
      menuItemDetails.classList.add("menu-item-detailed");
      menuItemDetails.style.backgroundImage = `url(${item.images[1]})`;
      menuItemDetails.innerHTML = `
      <button class="close">&#10006;</button>
      <div class="bottom-content">
        <div class="headings">
          <h3>$ ${item.price}</h3>
          <h2>${item.name}</h2>
        </div>
        <p>
          ${item.description}
        </p>
        <button class="button-primary">Add to Cart</button>
      </div>
        `;

      menuItemDetails.querySelector(".close").addEventListener("click", () => {
        overlay.classList.remove("active");
        menuItemDetails.classList.remove("active");
      });
      menuItemDetails
        .querySelector(".button-primary")
        .addEventListener("click", () => {
          overlay.classList.remove("active");
          menuItemDetails.classList.remove("active");
        });

      const menuItemImage = document.createElement("div");
      menuItemImage.classList.add("menu-item-image");
      menuItemImage.classList.add("menu-item");
      menuItemImage.innerHTML = `
      <img src="${item.images[0]}" alt="" />
      <img src="/assets/zoom-in-icon.svg" alt="" class="icon" />
      <span class="overlay"></span>
      `;
      menuItemImage.addEventListener("click", () => {
        overlay.classList.add("active");
        menuItemDetails.classList.add("active");
      });

      const menuItemInfo = document.createElement("div");
      menuItemInfo.classList.add("menu-item-info");
      menuItemInfo.classList.add(`menu-item`);
      menuItemInfo.innerHTML = `
      <h3>$${item.price}</h3>
      <h2>${item.name}</h2>
      <span> &#9733; </span>
      <p>
        ${item.description}
      </p>
      `;
      menuItemInfo.addEventListener("click", () => {
        menuItemDetails.classList.add("active");
        overlay.classList.add("active");
      });

      menuItemImage.addEventListener("mouseover", () => {
        menuItemImage.querySelector(".overlay").classList.add("active");
        menuItemImage.querySelector(".icon").classList.add("active");
      });
      menuItemImage.addEventListener("mouseout", () => {
        menuItemImage.querySelector(".overlay").classList.remove("active");
        menuItemImage.querySelector(".icon").classList.remove("active");
      });

      menuItemInfo.addEventListener("mouseover", () => {
        menuItemImage.querySelector(".icon").classList.add("active");
      });
      menuItemInfo.addEventListener("mouseout", () => {
        menuItemImage.querySelector(".icon").classList.remove("active");
      });

      menuItemsDetails.appendChild(menuItemDetails);

      if (i % 2 === 0) {
        menuItemsContainer.appendChild(menuItemInfo);
        menuItemsContainer.appendChild(menuItemImage);
      } else {
        menuItemsContainer.appendChild(menuItemImage);
        menuItemsContainer.appendChild(menuItemInfo);
      }

      if (j >= 1) {
        j = 0;
        i++;
      } else {
        j++;
      }
    });
  })
  .catch((error) => {
    console.error("Error fetching menu items:", error);
  });

// scrollbar
const scroll = document.querySelector(".scrollbar");
document.addEventListener("scroll", () => {
  scroll.style.height = `${
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  }vh`;
});
