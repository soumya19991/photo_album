// Array to store all image file names (you need to add all 3000 image names here)
const images = [];
for (let i = 1; i <= 3000; i++) {
    images.push(`images/photo (${i}).jpg`);
}
console.log(images);
const photoAlbum = document.getElementById("photoAlbum");
const loadMoreButton = document.getElementById("loadMore");

let currentIndex = 0;
const imagesPerPage = 20; // Number of images to load per click

// Function to load a batch of images
function loadImages() {
    const endIndex = Math.min(currentIndex + imagesPerPage, images.length);
    for (let i = currentIndex; i < endIndex; i++) {
        const colDiv = document.createElement("div");
        colDiv.className = "col-6 col-md-2 photo";

        const img = document.createElement("img");
        img.src = images[i];
        img.className = "img-fluid rounded";
        img.alt = `Photo ${i + 1}`;
        img.setAttribute("onclick", "openModal(this)");

        colDiv.appendChild(img);
        photoAlbum.appendChild(colDiv);
    }

    currentIndex = endIndex;

    // Hide the load more button if all images are loaded
    if (currentIndex >= images.length) {
        loadMoreButton.style.display = "none";
    }
}

// Function to open the modal and set the download link
function openModal(imgElement) {
    const modalImage = document.getElementById("modalImage");
    const downloadLink = document.getElementById("downloadLink");
    const photoModal = new bootstrap.Modal(document.getElementById("photoModal"));

    modalImage.src = imgElement.src;
    downloadLink.href = imgElement.src;

    photoModal.show();
}

// Initial load
document.addEventListener("DOMContentLoaded", () => {
    loadImages();

    // Load more images on button click
    loadMoreButton.addEventListener("click", loadImages);
});
