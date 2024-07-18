import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
// Opisany w dokumentacji
import SimpleLightbox from "simplelightbox";
// Opcjonalny import stylów
import "simplelightbox/dist/simple-lightbox.min.css";

document.getElementById('search-form').addEventListener('submit', event => {
    event.preventDefault();
    const query = document.getElementById('search-query').value;
    fetchImages(query);
});

function fetchImages(query) {
    const apiKey = '44974018-ca766bb5bf44f97c206908e6f'; 
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                    title: 'Error',
                    message: 'Przepraszamy, nie ma obrazów zgodnych z wyszukiwaniem. Spróbuj ponownie!'
                });
            } else {
                displayImages(data.hits);
            }
        })
        .catch(error => {
            iziToast.error({
                title: 'Error',
                message: `There was a problem with the fetch operation: ${error}`
                
            });
            console.log(error);
        });
}
function displayImages(images) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
    images.forEach(image => {
        const a = document.createElement('a');
        a.href = image.largeImageURL;
        a.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = image.webformatURL;
        img.alt = image.tags;

        a.appendChild(img);
        gallery.appendChild(a);
    });

    // Initialize SimpleLightbox
    const lightbox = new SimpleLightbox('.gallery a', {
        captionType: 'attr',
        captionsData: 'alt',
        captionDelay: 250
    });
}