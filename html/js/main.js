document.addEventListener('DOMContentLoaded', () => {
    const loadProductsButton = document.getElementById('loadProducts');
    const container = document.querySelector('.album .row'); // Ajuste para coincidir con el HTML
  
    loadProductsButton.addEventListener('click', async () => {
      try {
        // Llama a la API para obtener los productos
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
  
        // Selecciona los primeros 9 productos
        const firstNineProducts = products.slice(0, 9);
  
        // Limpia el contenedor antes de agregar los productos
        container.innerHTML = '';
  
        // Recorre los productos y genera las cards dinámicamente
        firstNineProducts.forEach(product => {
          const productCard = `
            <div class="col">
              <div class="card shadow-sm">
                <img src="${product.image}" class="card-img-top" alt="${product.title}" style="height: 225px; object-fit: contain;">
                <div class="card-body">
                  <h5 class="card-title">${product.title}</h5>
                  <p class="card-text">${product.description.slice(0, 100)}...</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-body-secondary">$${product.price}</small>
                  </div>
                </div>
              </div>
            </div>
          `;
          container.innerHTML += productCard;
        });
      } catch (error) {
        console.error('Error al cargar los productos:', error);
        container.innerHTML = '<p>Error al cargar los productos. Por favor, intenta de nuevo más tarde.</p>';
      }
    });
  });
  