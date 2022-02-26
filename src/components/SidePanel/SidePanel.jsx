// import React from 'react'
import { Checkbox } from 'antd'
import { connect } from 'react-redux'

import * as actions from '../../actions/actions'

import classes from './SidePanel.module.scss'

const CheckboxGroup = Checkbox.Group

const SidePanel = ({ checkbox, onCheckItemChange, checkAll }) => {
  const { checkedList, checkListData, isAllChecked } = checkbox
  const checksName = checkListData.map((item) => item.checkName)

  return (
    <aside className={classes.SiderPanel}>
      <h1 className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
      <Checkbox className={classes['chekbox-all']} onChange={(event) => checkAll(event)} checked={isAllChecked}>
        Все
      </Checkbox>
      <CheckboxGroup
        className={classes['chekbox-group']}
        options={checksName}
        value={checkedList}
        onChange={(list) => onCheckItemChange(list, checkListData)}
      />
    </aside>
  )
}

const mapStateToProps = (state) => ({
  checkbox: state.checkbox,
})

export default connect(mapStateToProps, actions)(SidePanel)
