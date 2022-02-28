import { Radio } from 'antd'
import { connect } from 'react-redux'

import * as actions from '../../actions/actions'
import ListTickets from '../ListTickets'

import classes from './Content.module.scss'

const Content = ({ filter, setFilter, addTicketsShows }) => {
  return (
    <section className={classes.Content}>
      <Radio.Group className={classes['radio-filter']} defaultValue={filter.filterType} buttonStyle="solid">
        <Radio.Button className={classes['radio-btn']} value="cheap" onClick={(event) => setFilter(event.target.value)}>
          САМЫЙ ДЕШЕВЫЙ
        </Radio.Button>
        <Radio.Button className={classes['radio-btn']} value="fast" onClick={(event) => setFilter(event.target.value)}>
          САМЫЙ БЫСТРЫЙ
        </Radio.Button>
        <Radio.Button
          className={classes['radio-btn']}
          value="optimal"
          onClick={(event) => setFilter(event.target.value)}
        >
          ОПТИМАЛЬНЫЙ
        </Radio.Button>
      </Radio.Group>
      <ListTickets />
      <button onClick={addTicketsShows} className={classes.Content__btn}>
        Показать еще 5 билетов!
      </button>
    </section>
  )
}

const mapStateToProps = (state) => ({
  filter: state.tabFilter,
})

export default connect(mapStateToProps, actions)(Content)
