import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'

const NAV_LINKS = [
  { href: '#products', label: 'კატალოგი' },
  { href: '#about', label: 'მინერალების შესახებ' },
  { href: '#contact', label: 'კონტაქტი' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header ${scrolled || menuOpen ? 'site-header--solid' : ''}`}>
      <Logo light />

      <nav className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? 'დახურვა' : 'მენიუ'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M2 2L20 20M20 2L2 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M2 5H20M2 11H20M2 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </header>
  )
}
