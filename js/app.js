
new Vue({
  el: '#app',
  data: {
    products: [
      { name: 'Audífono', price: 30000, stock: 3, image: 'https://www.dimarsa.cl/media/catalog/product/m/a/marcasphilips27phlt101b-negro1jpeg_0.jpg' },
      { name: 'Mouse', price: 20000, stock: 5, image: 'https://via.placeholder.com/50' },
      { name: 'Teclado', price: 15000, stock: 10, image: 'https://via.placeholder.com/50' },
      { name: 'Gabinete', price: 35000, stock: 4, image: 'https://via.placeholder.com/50' },
      { name: 'Pantalla', price: 175000, stock: 3, image: 'https://via.placeholder.com/50' },
      { name: 'Silla', price: 150000, stock: 2, image: 'https://via.placeholder.com/50' }
    ],
    cart: []
  },
  computed: {
    total() {
      return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
  },
  methods: {
    addToCart(product) {
      const item = this.cart.find(p => p.name === product.name);
      if (item) {
        if (item.quantity < product.stock) {
          item.quantity++;
        } else {
          alert('No hay más unidades disponibles de ' + product.name);
        }
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(product) {
      this.cart = this.cart.filter(p => p.name !== product.name);
    }
  }
});
