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

  // const tickets = ticketsArray.map((item) => (
  //   <div className={classes.ticket} key={keys()}>
  //     <div className={classes["ticket-details"]}>
  //       <p className={classes["ticket-price"]}>{priceStyle(item.price)} P</p>
  //       <img src={`http://pics.avs.io/110/36/${item.carrier}.png`}
  //         alt="companies logo" style={{ alignSelf: "flex-start" }} />
  //     </div>
  //     {ticketDetails(item.segments)}
  //   </div>
  // ));

  const errorMessage = (
    <div className={classes['ticket-wrapper']}>Рейсов, подходящих под заданные фильтры, не найдено</div>
  )

  const loadMessage = (isStop) => (isStop ? null : <p>Данные по билетам еще загружаются</p>)

  let tiketKey = 1

  return ticketsDataSort.length ? (
    <div className={classes.ListTickets}>
      {loadMessage(stop)}
      {ticketsArray.map((ticketData) => (
        <Ticket key={tiketKey++} ticketData={ticketData} id={tiketKey++} />
      ))}
      {/* <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket /> */}
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
