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

export default tabFilter
