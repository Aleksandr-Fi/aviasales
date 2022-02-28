export const checkAll = (event) => {
  if (event?.target?.checked) {
    return { type: 'CHECK_ALL' }
  }
  return { type: 'CHECK_NONE' }
}

export const onCheckItemChange = (list, checkedList) => {
  if (list.length === checkedList.length) {
    return {
      type: 'CHECK_ALL',
      checkedList: list,
    }
  }
  return {
    type: 'CHECK_ITEM',
    checkedList: list,
  }
}

export const setFilter = (filter) => ({ type: 'SET_FILTER', filterType: filter })

export const addTicketsShows = () => ({ type: 'ADD_TICKETS_SHOWS' })
