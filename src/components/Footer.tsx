import stlyes from './Footer.module.css'
export const Footer = () => {
  return (
    <footer className={stlyes.footer}>
      <cite>"La edad no es cuántos años tienes, sino cuánta vida has vivido." - <a href="https://es.wikipedia.org/wiki/Abraham_Lincoln" target='_blank'>Abraham Lincoln</a></cite>
    </footer>
  )
}