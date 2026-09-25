import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <Logo light />
      <p className="site-footer__text">
        კითხვების შემთხვევაში დაგვიკავშირდით WhatsApp-ზე: +995 591 58 55 22
      </p>
      <p className="site-footer__copy">© {new Date().getFullYear()} — ყველა უფლება დაცულია</p>
    </footer>
  )
}
