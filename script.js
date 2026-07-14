const images = [
    {
      thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
      hd: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600",
      caption: "A peaceful mountain landscape surrounded by nature."
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600",
      hd: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1600",
      caption: "A calm lake reflecting the mountains and clouds."
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600",
      hd: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600",
      caption: "Sunlight passing through a green forest."
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600",
      hd: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600",
      caption: "A beautiful mountain valley under a cloudy sky."
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600",
      hd: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600",
      caption: "Snow-covered mountains reaching into the sky."
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600",
      hd: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1600",
      caption: "A waterfall flowing through a rocky forest."
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600",
      hd: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1600",
      caption: "A colourful sunset over an open field."
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600",
      hd: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1600",
      caption: "A quiet path leading through the forest."
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600",
      hd: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600",
      caption: "A person exploring a large mountain landscape."
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=600",
      hd: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=1600",
      caption: "Tall trees creating a peaceful natural environment."
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600",
      hd: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1600",
      caption: "A bright green field beneath a blue sky."
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1443632864897-14973fa006cf?w=600",
      hd: "https://images.unsplash.com/photo-1443632864897-14973fa006cf?w=1600",
      caption: "A quiet lake surrounded by mountains and trees."
    }
  ];
  
  const gallery = document.getElementById("gallery");
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const modalCaption = document.getElementById("modal-caption");
  
  images.forEach(function (image, index) {
    const figure = document.createElement("figure");
    const galleryImage = document.createElement("img");
    const caption = document.createElement("figcaption");
  
    figure.classList.add("gallery-item");
  
    galleryImage.src = image.thumbnail;
    galleryImage.alt = image.caption;
    galleryImage.dataset.index = index;
  
    caption.textContent = image.caption;
  
    figure.appendChild(galleryImage);
    figure.appendChild(caption);
  
    gallery.appendChild(figure);
  });
  
  gallery.addEventListener("click", function (event) {
    if (event.target.tagName === "IMG") {
      const imageIndex = event.target.dataset.index;
      const selectedImage = images[imageIndex];
  
      modalImage.src = selectedImage.hd;
      modalImage.alt = selectedImage.caption;
      modalCaption.textContent = selectedImage.caption;
  
      modal.classList.add("show");
    }
  });
  
  modalImage.addEventListener("click", function () {
    modal.classList.remove("show");
  });
