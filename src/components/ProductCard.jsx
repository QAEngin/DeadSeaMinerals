import { buildWhatsAppLink } from '../utils/whatsapp.js'

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="product-card__body">
        <p className="product-card__line">{product.line}</p>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>
      </div>
      <div className="product-card__footer">
        <span className="product-card__price">{product.price}</span>
        <a
          className="product-card__cta"
          href={buildWhatsAppLink(product)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          შეკვეთა
        </a>
      </div>
    </article>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.42a9.87 9.87 0 0 0 4.62 1.18h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm5.8 14.07c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.13.11-1.83-.12-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.17-4.93-4.37-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.77-.36.2 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.27.36-.22.6-.13.24.09 1.54.73 1.8.86.27.14.44.2.51.32.07.12.07.66-.17 1.34Z" />
    </svg>
  )
}
