export const business = {
  name: 'Aircraft Services Group',
  displayName: 'VIP Charters',
  address: '401 Industrial Ave\nTeterboro, NJ 07608',
  addressLine: '401 Industrial Ave, Teterboro, NJ 07608',
  phone: '(973) 864-6200',
  phoneHref: 'tel:+19738646200',
  email: 'info@jetvipcharter.com',
} as const

export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(business.addressLine)}&output=embed&z=14`

export const directionsUrl = `https://maps.google.com/?q=${encodeURIComponent(business.addressLine)}`
