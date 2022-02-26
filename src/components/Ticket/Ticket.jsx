import classes from './Ticket.module.scss'

const Ticket = () => {
  return (
    <div className={classes.Ticket}>
      <header className={classes.Ticket__header}>
        <span className={classes.Ticket__price}>13 400 Р </span>
        <img className={classes.Ticket__logo} src="https://pics.avs.io/110/36/MH.png" />
      </header>
      <div className={classes.Ticket__content}>
        <div className={classes.Ticket__way}>
          <span>MOW – HKT</span>
          <p>10:45 – 08:00</p>
        </div>
        <div className={classes.Ticket__time}>
          <span>В пути</span>
          <p>21ч 15м</p>
        </div>
        <div className={classes.Ticket__transfers}>
          <span>2 пересадки</span>
          <p>HKG, JNB</p>
        </div>
      </div>
      <div className={classes.Ticket__content}>
        <div className={classes.Ticket__way}>
          <span>MOW – HKT</span>
          <p>10:45 – 08:00</p>
        </div>
        <div className={classes.Ticket__time}>
          <span>В пути</span>
          <p>21ч 15м</p>
        </div>
        <div className={classes.Ticket__transfers}>
          <span>2 пересадки</span>
          <p>HKG, JNB</p>
        </div>
      </div>
    </div>
  )
}

export default Ticket
