
new Vue({
  el: '#app',
  data: {
    products: [
      { name: 'Audífono', price: 30000, stock: 3, image: 'https://www.dimarsa.cl/media/catalog/product/m/a/marcasphilips27phlt101b-negro1jpeg_0.jpg' },
      { name: 'Mouse', price: 20000, stock: 5, image: 'https://media.spdigital.cl/thumbnails/products/5rq6eedr_aa395897_thumbnail_512.png' },
      { name: 'Teclado', price: 15000, stock: 10, image: 'https://http2.mlstatic.com/D_NQ_NP_690994-MLA74651892230_022024-O.webp' },
      { name: 'Gabinete', price: 35000, stock: 4, image: 'https://media.spdigital.cl/thumbnails/products/uarpex6c_d2479a00_thumbnail_512.jpg' },
      { name: 'Pantalla', price: 175000, stock: 3, image: 'https://image.made-in-china.com/2f0j00WVGUZNfMEikm/18-5-Inch-Ultra-Slim-Desktop-Computer-PC-LED-Display-Screen-for-Gaming-Monitor.webp' },
      { name: 'Silla', price: 150000, stock: 2, image: 'https://www.winpy.cl/files/39428-9061-Silla-Gamer-Cougar-HotRod-1.jpg' }
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
