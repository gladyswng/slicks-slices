const formatter = Intl.NumberFormat('no-NO', {
  style: 'currency',
  currency: 'NOK'
})

export default function formatMoney(cents) {
  return formatter.format(cents / 100)
}