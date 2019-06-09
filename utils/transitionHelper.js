export default function(to, from) {
  if (!from) return 'slide-left'
  return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
}
