// import React from 'react'
import { Checkbox } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../store/actions/actions'

import classes from './SidePanel.module.scss'

const CheckboxGroup = Checkbox.Group

const SidePanel = ({ checkbox, onCheckItemChange, checkAll }) => {
  const { checkedList, checkListData, isAllChecked } = checkbox
  const checksName = checkListData.map((item) => item.checkName)

  return (
    <aside className={classes.SidePanel}>
      <h1 className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
      <Checkbox className={classes['checkbox-all']} onChange={(event) => checkAll(event)} checked={isAllChecked}>
        Все
      </Checkbox>
      <CheckboxGroup
        className={classes['checkbox-group']}
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel)
