import Ticket from '../Ticket'

import classes from './ListTickets.module.scss'

const ListTickets = () => {
  return (
    <div className={classes.ListTickets}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  )
}

export default ListTickets
