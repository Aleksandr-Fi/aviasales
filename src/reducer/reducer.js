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

const reduce = combineReducers({
  checkbox,
  tabFilter,
})

export default reduce
