export type Product = {
  id: string
  name: string
  category: string
  price: number
  image: string
  badge?: string
}

export const navLinks = [
  { label: 'New In', href: '#new' },
  { label: 'Clothing', href: '#categories' },
  { label: 'Bags', href: '#categories' },
  { label: 'Jewelry', href: '#categories' },
  { label: 'Living', href: '#categories' },
  { label: 'Journal', href: '#journal' },
]

export const categories = [
  { title: 'Clothing', subtitle: '의류', image: '/images/product-1.png' },
  { title: 'Bags', subtitle: '가방', image: '/images/product-2.png' },
  { title: 'Jewelry', subtitle: '주얼리', image: '/images/product-4.png' },
  { title: 'Living', subtitle: '리빙', image: '/images/category-home.png' },
]

export const products: Product[] = [
  {
    id: 'p1',
    name: '소프트 메리노 카디건',
    category: 'Knitwear',
    price: 168000,
    image: '/images/product-1.png',
    badge: 'New',
  },
  {
    id: 'p2',
    name: '카멜리아 레더 토트백',
    category: 'Bags',
    price: 289000,
    image: '/images/product-2.png',
  },
  {
    id: 'p3',
    name: '실크 슬립 미디 스커트',
    category: 'Skirts',
    price: 142000,
    image: '/images/product-3.png',
    badge: 'Best',
  },
  {
    id: 'p4',
    name: '데일리 골드 후프 세트',
    category: 'Jewelry',
    price: 96000,
    image: '/images/product-4.png',
  },
]

export const formatPrice = (value: number) =>
  `₩${value.toLocaleString('ko-KR')}`
