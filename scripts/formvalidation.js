const rating = document.getElementById('rating');
        const ratingValue = document.getElementById('ratingValue');

        rating.addEventListener('input', () => {
            ratingValue.textContent = rating.value;
        });