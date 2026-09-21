const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    // Toggle mobile menu state
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when a nav link is clicked
    document.querySelectorAll('.nav-item a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Search form submit handler
    function handleSearch(event) {
        event.preventDefault();
        
        const keyword = document.getElementById('searchInput').value.trim();
        const make = document.getElementById('makeFilter').value;
        const price = document.getElementById('priceFilter').value;

        console.log('Search Query:', { keyword, make, price });
        
        // Basic UI feedback instead of alert
        const banner = document.querySelector('.hero-banner h1');
        banner.textContent = `Searching for: ${keyword || 'All Cars'} ${make ? '(' + make.toUpperCase() + ')' : ''}`;
    }


    const carData = [
            {
                name: "Tesla Model 3",
                price: "$38,990",
                image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "BMW M4 Competition",
                price: "$78,100",
                image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Porsche 911 Carrera",
                price: "$114,400",
                image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Audi RS e-tron GT",
                price: "$106,500",
                image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Ford Mustang GT",
                price: "$42,495",
                image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Mercedes-AMG GT",
                price: "$134,900",
                image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Porsche 911 Carrera",
                price: "$114,400",
                image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Audi R8 V10",
                price: "$158,600",
                image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "BMW M4 Competition",
                price: "$79,100",
                image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Lamborghini Huracán",
                price: "$212,000",
                image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80"
            }
        ];

        function renderCars() {
            const grid = document.getElementById('carGrid');
            grid.innerHTML = carData.map(car => `
                <article class="car-card">
                    <div class="image-container">
                        <img 
                            src="${car.image}" 
                            alt="${car.name}" 
                            class="car-image"
                            onerror="this.src='https://placehold.co/600x400/e2e8f0/475569?text=Car+Image'"
                        />
                    </div>
                    <div class="car-details">
                        <h2 class="car-name">${car.name}</h2>
                        <span class="car-price">${car.price}</span>
                    </div>
                </article>
            `).join('');
        }

        // Initialize grid render on load
        window.onload = renderCars;