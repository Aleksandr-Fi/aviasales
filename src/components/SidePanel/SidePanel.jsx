import React from 'react'
import { Checkbox } from 'antd'

import classes from './SidePanel.module.scss'

const CheckboxGroup = Checkbox.Group

const SidePanel = () => {
  const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
  const defaultCheckedList = ['Без пересадок', '1 пересадка', '2 пересадки']

  const [checkedList, setCheckedList] = React.useState(defaultCheckedList)
  const [indeterminate, setIndeterminate] = React.useState(true)
  const [checkAll, setCheckAll] = React.useState(false)

  const onChange = (list) => {
    setCheckedList(list)
    setIndeterminate(!!list.length && list.length < plainOptions.length)
    setCheckAll(list.length === plainOptions.length)
  }

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : [])
    setIndeterminate(false)
    setCheckAll(e.target.checked)
  }
  return (
    <aside className={classes.SiderPanel}>
      <h1 className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
      <Checkbox
        className={classes['chekbox-all']}
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Все
      </Checkbox>
      <CheckboxGroup
        className={classes['chekbox-group']}
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      />
    </aside>
  )
}

export default SidePanel
