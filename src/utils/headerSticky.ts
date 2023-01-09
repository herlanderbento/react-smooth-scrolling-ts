export function headerSticky() {
  const header = document.querySelector('header') as Element

  const scrollTop = window.scrollY as Number

  scrollTop >= 80
    ? header.classList.add('is__sticky')
    : header.classList.remove('is__sticky')
}
