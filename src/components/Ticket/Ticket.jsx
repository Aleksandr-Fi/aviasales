import classes from './Ticket.module.scss'

const Ticket = ({ id, ticketData }) => {
  const priceStyle = (num) => {
    const str = String(num)
    const price = `${str.slice(0, str.length - 3)} ${str.slice(-3, str.length)}`
    return price
  }

  const timeView = (num) => {
    if (num < 10) {
      return `0${num}`
    }
    return num
  }

  const timeStyle = (time, dur) => {
    const date = new Date(time)
    const newTime = date.getTime() + dur * 60 * 1000
    const newDate = new Date(newTime)
    return `${timeView(date.getUTCHours())}:${timeView(date.getMinutes())} -
      ${timeView(newDate.getUTCHours())}:${timeView(newDate.getMinutes())}`
  }

  const durationStyle = (num) => `${Math.floor(num / 60)}ч ${num % 60}м`

  const stopsStyle = (num) => {
    if (!num) {
      return 'ПРЯМОЙ РЕЙС'
    }
    if (num === 1) {
      return `${num} ПЕРЕСАДКА`
    }
    return `${num} ПЕРЕСАДКИ`
  }

  let keySegment = id

  return (
    <div className={classes.Ticket}>
      <header className={classes.Ticket__header}>
        <span className={classes.Ticket__price}>{priceStyle(ticketData.price)} P</span>
        <img
          className={classes.Ticket__logo}
          alt="companies logo"
          src={`http://pics.avs.io/110/36/${ticketData.carrier}.png`}
        />
      </header>
      {ticketData.segments.map((item) => (
        <div key={`${id}-${keySegment++}`} className={classes.Ticket__content}>
          <div className={classes.Ticket__way}>
            <span>{`${item.origin} - ${item.destination}`}</span>
            <p>{timeStyle(item.date, item.duration)}</p>
          </div>
          <div className={classes.Ticket__time}>
            <span>В пути</span>
            <p>{durationStyle(item.duration)}</p>
          </div>
          <div className={classes.Ticket__transfers}>
            <span>{stopsStyle(item.stops.length)}</span>
            <p>{item.stops.join(', ')}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Ticket
