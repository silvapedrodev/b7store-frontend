export const data = {
  banners: [
    { img: '/assets/banners/banner-1.png', link: '' },
    { img: '/assets/banners/banner-2.png', link: '' },
    { img: '/assets/banners/banner-3.png', link: '' },
    { img: '/assets/banners/banner-4.png', link: '' },
  ],
  products: [
    {
      id: 1,
      label: 'Camisa PHP',
      image: '/assets/products/camiseta-php.png',
      price: 49.99,
      liked: true
    },
    {
      id: 2,
      label: 'Camisa Laravel',
      image: '/assets/products/camiseta-laravel-branca.png',
      price: 39.90,
      liked: false
    },
    {
      id: 3,
      label: 'Camisa Node',
      image: '/assets/products/camiseta-node.png',
      price: 29.90,
      liked: false
    },
    {
      id: 4,
      label: 'Camisa React',
      image: '/assets/products/camiseta-react-azul.png',
      price: 19.99,
      liked: false
    },
  ],
  product: {
    id: 1,
    label: 'Camisa PHP',
    images: [
      '/assets/products/camiseta-php.png',
      '/assets/products/camiseta-laravel-branca.png'
    ],
    price: 19.90,
    liked: false,
    description: 'Lorem ipsum dolor sit amet.'
  },
  addresses: [
    {
      id: 1,
      zipcode: '12345-678',
      street: 'Rua teste 1',
      number: 123,
      city: 'Cidade Lorem',
      state: 'Estado Lorem',
      country: 'País',
    },
    {
      id: 2,
      zipcode: '67892-986',
      street: 'Rua teste 1',
      number: 456,
      city: 'Cidade Lorem',
      state: 'Estado Lorem',
      country: 'País',
    },
    {
      id: 3,
      zipcode: '1222-856',
      street: 'Rua teste 1',
      number: 768,
      city: 'Cidade Lorem',
      state: 'Estado Lorem',
      country: 'País',
    }
  ],
}