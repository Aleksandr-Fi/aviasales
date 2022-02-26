import { Radio } from 'antd'

import ListTickets from '../ListTickets'

import classes from './Content.module.scss'

const Content = () => {
  return (
    <section className={classes.Content}>
      <Radio.Group className={classes['radio-filter']} defaultValue="a" buttonStyle="solid">
        <Radio.Button className={classes['radio-btn']} value="a">
          САМЫЙ ДЕШЕВЫЙ
        </Radio.Button>
        <Radio.Button className={classes['radio-btn']} value="b">
          САМЫЙ БЫСТРЫЙ
        </Radio.Button>
        <Radio.Button className={classes['radio-btn']} value="c">
          ОПТИМАЛЬНЫЙ
        </Radio.Button>
      </Radio.Group>
      <ListTickets />
      <button className={classes.Content__btn}>Показать еще 5 билетов!</button>
    </section>
  )
}

export default Content
