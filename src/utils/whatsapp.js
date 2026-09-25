const WHATSAPP_NUMBER = '955591585522'
const STATIC_TEXT = 'გამარჯობათ, დაინტერესებული ვარ ამ პროდუქტით!'

export function buildWhatsAppLink(product) {
  const message = `${STATIC_TEXT}\n\nპროდუქტის ID: ${product.id}\nდასახელება: ${product.name}`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
