export function createWhatsAppLink(number, message = '') {
  const cleanNumber = number.replace(/\D/g, '');
  const normalizedMessage = encodeURIComponent(message.trim() || 'Olá, gostaria de entender melhor minha situação.');

  return `https://wa.me/55${cleanNumber}?text=${normalizedMessage}`;
}
