import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <Logo light />
      <p className="site-footer__text">
        კითხვების შემთხვევაში დაგვიკავშირდით WhatsApp-ზე: +972 54 434 3247
      </p>
      <p className="site-footer__copy">© {new Date().getFullYear()} — ყველა უფლება დაცულია</p>
    </footer>
  )
}
