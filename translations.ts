/**
 * Central place for all contact information.
 * Change the country code here if needed (e.g. 212 = Morocco, 213 = Algeria).
 */
export const CONTACT = {
  brand: "Mohamed Designer",
  phoneLocal: "0691299941",
  phoneIntl: "212691299941",
  email: "mohameddesigner826@gmail.com",
  instagram: "Mohamed.designer.v",
  instagramUrl: "https://www.instagram.com/Mohamed.designer.v",
  whatsappWeb: "https://web.whatsapp.com/send",
};

export const waLink = (message: string) =>
  `https://wa.me/${CONTACT.phoneIntl}?text=${encodeURIComponent(message)}`;

export const mailLink = (subject: string, body: string) =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
