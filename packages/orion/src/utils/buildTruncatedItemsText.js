export default (firstItem, count) => {
  const suffix = count > 1 ? ` +${count - 1}` : ''
  return `${firstItem}${suffix}`
}
