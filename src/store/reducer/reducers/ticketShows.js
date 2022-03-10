const ticketShows = (state = 5, action = 'ACTION') => {
  switch (action.type) {
    case 'ADD_TICKETS_SHOWS': {
      state += 5
      return state
    }
    default:
      return state
  }
}

export default ticketShows
