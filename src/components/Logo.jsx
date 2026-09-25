export default function Logo({ light = false }) {
  return (
    <div className={`logo ${light ? 'logo--light' : ''}`}>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="17" cy="17" r="16" stroke="currentColor" strokeWidth="1.2" />
        <path d="M17 6 C21 12 24 15 24 20 A7 7 0 1 1 10 20 C10 15 13 12 17 6Z" fill="currentColor" opacity="0.9" />
      </svg>
      <span className="logo__text">
        Kani<em>Sea</em>
      </span>
    </div>
  )
}
