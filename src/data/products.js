import antiwrinkle from '../assets/product-antiwrinkle.webp'
import nourishing from '../assets/product-nourishing.webp'
import daycream from '../assets/product-daycream.webp'

// Each product needs a stable id — it's sent to WhatsApp so the seller
// knows exactly which item the customer is asking about.
export const products = [
  {
    id: 'CB-101',
    name: 'ანტი-ეიჯინგ კრემი',
    nameEn: 'Mineral Anti-Wrinkle Cream',
    line: 'Dead Sea Minerals',
    description:
      'მკვრივი მინერალური კრემი ნაოჭების წინააღმდეგ, გამდიდრებული მკვდარი ზღვის მინერალებით კანის დრეკადობის შესანარჩუნებლად.',
    price: '89 ₾',
    image: antiwrinkle,
  },
  {
    id: 'CB-102',
    name: 'მკვებავი კრემი',
    nameEn: 'Nourishing Cream with Vitamin E',
    line: 'Dead Sea Minerals',
    description:
      'ვიტამინ E-ით გამდიდრებული მკვებავი კრემი, რომელიც აღადგენს კანის ბუნებრივ ბარიერს და ანიჭებს რბილობას.',
    price: '79 ₾',
    image: nourishing,
  },
  {
    id: 'CB-103',
    name: 'დღის კრემი SPF-15',
    nameEn: 'Moisturizing Day Cream SPF-15',
    line: 'Age+ Derma Collagen',
    description:
      'დამატენიანებელი დღის კრემი კოლაგენითა და ლაქტამიდის კომპლექსით, SPF-15 დაცვით მზის სხივებისგან.',
    price: '95 ₾',
    image: daycream,
  },
]
