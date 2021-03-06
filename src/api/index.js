const ticketsReceived = (response) => ({
  type: 'DATA_RECEIVED',
  ticketsData: response.tickets,
  stop: response.stop,
})

const getSearchId = async () => {
  const getUrl = await fetch('https://front-test.beta.aviasales.ru/search')
  const url = await getUrl.json()
  return url
}

const getTickets = async (url, dispatch) => {
  const res = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${url}`)

  if (res.ok) {
    const body = await res.json()
    dispatch(ticketsReceived(body))
    if (!body.stop) getTickets(url, dispatch)
  } else {
    getTickets(url, dispatch)
  }
}

const getTicketData = () => (dispatch) =>
  getSearchId().then((url) => {
    getTickets(url.searchId, dispatch)
  })

export default getTicketData
