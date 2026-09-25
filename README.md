# Dead Sea Care — React Storefront

A catalog-style storefront for Dead Sea mineral cosmetics, inspired by isracos.ge.
Each product card has a "შეკვეთა" (Order) button that opens WhatsApp
(+972 58 458 8405) with the product ID and a preset Georgian greeting.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/` — upload that folder to any static host.

## Customize

- **Logo**: `src/components/Logo.jsx` — currently a placeholder mark + wordmark ("KaniSea"). Swap in your real logo/name.
- **Products**: `src/data/products.js` — add, remove, or edit products. Each needs a unique `id` (sent to WhatsApp), `name`, `description`, `price`, and `image`.
- **WhatsApp number / message**: `src/utils/whatsapp.js`.
- **Colors / fonts**: CSS custom properties at the top of `src/index.css`.
- **Hero image**: `src/assets/hero-bg.jpg`.
