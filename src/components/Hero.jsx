import heroBg from '../assets/hero-bg.jpg'

// The PDF must live at public/catalog/CATALOG C& B 2022.pdf — encodeURI
// keeps the space/ampersand in the filename valid inside a URL.
const CATALOG_PDF = encodeURI('/catalog/CATALOG C& B 2022.pdf')

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__eyebrow">მკვდარი ზღვის მინერალები</p>
        <h1 className="hero__title">კანის მოვლა, <br />ტაძრის სიღრმიდან</h1>
        <p className="hero__subtitle">
          ბუნებრივი მინერალური კოსმეტიკა, აღებული მკვდარი ზღვის სანაპიროდან —
          თითოეული ბოთლი ინახავს ათასწლეულების სამკურნალო ძალას.
        </p>
        <div className="hero__actions">
          <a
            href={CATALOG_PDF}
            className="hero__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            კატალოგის ჩამოტვირთვა (PDF)
          </a>
          <a href="#products" className="hero__cta hero__cta--ghost">
            იხილეთ პროდუქტები
          </a>
        </div>
      </div>
    </section>
  )
}
