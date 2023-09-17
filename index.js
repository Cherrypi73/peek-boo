let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel img');

        function showSlide() {
            slides.forEach((slide, index) => {
                if (index === currentSlide) {
                    slide.style.display = 'block';
                } else {
                    slide.style.display = 'none';
                }
            });
        }

        function nextSlide() {
            currentSlide++;
            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }
            showSlide();
        }

        function prevSlide() {
            currentSlide--;
            if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }
            showSlide();
        }

        showSlide();
        let isDescriptionVisible = false;

        function toggleDescription() {
            const description = document.getElementById('description');
            isDescriptionVisible = !isDescriptionVisible;
            
            if (isDescriptionVisible) {
                description.textContent = 'Descrição completa do NFT. Lorem ipsum dolor sit amet, consectetur adipiscing elit...';
            } else {
                description.textContent = 'Clique para ver a descrição';
            }
        }