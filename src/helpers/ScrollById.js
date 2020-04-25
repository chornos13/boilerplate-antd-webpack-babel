export default function scrollById(id, offset = 94) {
  const element = document.getElementById(id)
  const bodyRect = document.body.getBoundingClientRect().top
  const elementRect = element.getBoundingClientRect().top
  const elementPosition = elementRect - bodyRect
  const offsetPosition = elementPosition - (offset + 15)

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  })
}
