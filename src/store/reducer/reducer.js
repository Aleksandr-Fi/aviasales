import { combineReducers } from 'redux'

import checkbox from './reducers/checkbox'
import tabFilter from './reducers/tabFilter'
import searchData from './reducers/searchData'
import ticketShows from './reducers/ticketShows'

const reducer = combineReducers({
  checkbox,
  tabFilter,
  searchData,
  ticketShows,
})

export default reducer
