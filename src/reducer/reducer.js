import { combineReducers } from 'redux'

const checkboxState = {
  checkListData: [
    {
      checkName: 'Без пересадок',
      count: 0,
    },
    {
      checkName: '1 пересадка',
      count: 1,
    },
    {
      checkName: '2 пересадки',
      count: 2,
    },
    {
      checkName: '3 пересадки',
      count: 3,
    },
  ],
  checkedList: ['Без пересадок', '1 пересадка', '2 пересадки'],
  isAllChecked: false,
}

const checkbox = (state = checkboxState, action = 'ACTION') => {
  switch (action.type) {
    case 'CHECK_ALL':
      return {
        ...state,
        checkedList: checkboxState.checkListData.map((item) => item.checkName),
        isAllChecked: true,
      }
    case 'CHECK_ITEM':
      return {
        ...state,
        checkedList: action.checkedList,
        isAllChecked: false,
      }
    case 'CHECK_NONE':
      return {
        ...state,
        checkedList: [],
        isAllChecked: false,
      }
    default:
      return state
  }
}

const tabFilterState = {
  filterType: 'cheap',
  filterFuncCheap: (elemA, elemB) => elemA.price - elemB.price,
  filterFuncFast: (elemA, elemB) =>
    elemA.segments[0].duration + elemA.segments[1].duration - (elemB.segments[0].duration + elemB.segments[1].duration),
  filterFuncOptimal: (elemA, elemB) =>
    elemA.price / (elemA.segments[0].duration + elemA.segments[1].duration) -
    elemB.price / (elemB.segments[0].duration + elemB.segments[1].duration),
}

const tabFilter = (state = tabFilterState, action = 'ACTION') => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filterType: action.filterType,
      }
    default:
      return state
  }
}

const searchDataState = {
  ticketsData: [],
  stop: false,
}

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

const searchData = (state = searchDataState, action = 'ACTION') => {
  const { type, ticketsData, stop } = action
  const newTickets = Array.from(state.ticketsData)
  switch (type) {
    case 'DATA_RECCEIVED':
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

const reducer = combineReducers({
  checkbox,
  tabFilter,
  searchData,
  ticketShows,
})

export default reducer
