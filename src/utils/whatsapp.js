const WHATSAPP_NUMBER = '972544343247' // Replace with your WhatsApp number in international format without '+' or dashes
const STATIC_TEXT = 'გამარჯობათ, დაინტერესებული ვარ ამ პროდუქტით!'

export function buildWhatsAppLink(product) {
  const message = `${STATIC_TEXT}\n\nპროდუქტის ID: ${product.id}\nდასახელება: ${product.name}`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
