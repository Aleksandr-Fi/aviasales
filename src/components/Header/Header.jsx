import classes from './Header.module.scss'

const Header = () => {
  console.log(classes)
  return (
    <header className={classes.Header}>
      <img
        alt="logo"
        className={classes.Header__logo}
        src="https://aviasales-rho.vercel.app/static/media/Logo.472c0451.svg"
      />
    </header>
  )
}

export default Header
