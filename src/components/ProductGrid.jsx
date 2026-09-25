import { products } from '../data/products.js'
import ProductCard from './ProductCard.jsx'

export default function ProductGrid() {
  return (
    <section id="products" className="products">
      <div className="products__header">
        <h2>კატალოგი</h2>
        <p>ყველა პროდუქტი მზადდება მკვდარი ზღვის ბუნებრივი მინერალებით.</p>
      </div>
      <div className="products__grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
