import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import FilterAction from '../containers/FilterAction'
import '../css/components/Actions.css';

const FilterActionList = (props) => (
  <div className="Actions">{
    props.actionSchema.map((item,idx) => (<FilterAction {...item} id={props.id} key={idx}/>))
  }</div>
)

const mapStateToProps = (state, ownProps) => {
  return {
    actionSchema: state.defaultCfgReducer.actionSchema,
    id: ownProps.id
  }
}

export default connect(mapStateToProps)(FilterActionList)

