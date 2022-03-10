const searchDataState = {
  ticketsData: [],
  stop: false,
}

const searchData = (state = searchDataState, action = 'ACTION') => {
  const { type, ticketsData, stop } = action
  const newTickets = Array.from(state.ticketsData)
  switch (type) {
    case 'DATA_RECEIVED':
      newTickets.push(...ticketsData)
      return {
        ...state,
        ticketsData: newTickets,
        stop,
      }
    default:
      return state
  }
}

export default searchData
