import { connect } from 'react-redux'

import Ticket from '../Ticket'

import classes from './ListTickets.module.scss'

const ListTickets = ({ data, ticketCount, filter, checkbox }) => {
  const counts = checkbox.checkedList.map((li) => {
    for (const item of checkbox.checkListData) {
      if (li === item.checkName) return item.count
    }
    return null
  })

  const { filterType, filterFuncCheap, filterFuncFast, filterFuncOptimal } = filter

  const { ticketsData, stop } = data

  let ticketsDataSort = [...ticketsData]

  if (filterType === 'cheap') ticketsDataSort = ticketsDataSort.sort(filterFuncCheap)
  if (filterType === 'fast') ticketsDataSort = ticketsDataSort.sort(filterFuncFast)
  if (filterType === 'optimal') ticketsDataSort = ticketsDataSort.sort(filterFuncOptimal)

  ticketsDataSort = ticketsDataSort.filter((item) => {
    const arr = counts.map((check) => check === item.segments[0].stops.length)
    return arr.includes(true)
  })

  const ticketsArray = ticketsDataSort.slice(0, ticketCount)

  const errorMessage = (
    <div className={classes['ticket-wrapper']}>Рейсов, подходящих под заданные фильтры, не найдено</div>
  )

  const loadMessage = (isStop) => (isStop ? null : <p>Данные по билетам еще загружаются</p>)

  let ticketKey = 1

  return ticketsDataSort.length ? (
    <div className={classes.ListTickets}>
      {loadMessage(stop)}
      {ticketsArray.map((ticketData) => (
        <Ticket key={ticketKey++} ticketData={ticketData} id={ticketKey++} />
      ))}
    </div>
  ) : (
    errorMessage
  )
}

const mapStateToProps = (state) => ({
  data: state.searchData,
  ticketCount: state.ticketShows,
  checkbox: state.checkbox,
  filter: state.tabFilter,
})

export default connect(mapStateToProps)(ListTickets)
