  const swiper = new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
      spaceBetween: 20,
    });

  
    document.getElementById('categoryFilter').addEventListener('change', function () {
      const category = this.value;
      document.querySelectorAll('.product-card').forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });


    const scrollBtn = document.getElementById("scrollToTopBtn");
    window.onscroll = () => {
      scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    };
    scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

   
    const cart = [];
    function addToCart(name, price) {
      cart.push({ name, price });
      alert(`${name} добавлен в корзину. Всего товаров: ${cart.length}`);
    }