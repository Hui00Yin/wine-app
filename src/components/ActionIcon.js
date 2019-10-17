import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const ActionIcon = ({title, iconVal, cssClass, onActionClick}) => (
  <span
    tabIndex="0"
    className = {classnames(cssClass)}
    title={title}
    onClick={ () => onActionClick()}>
      {iconVal}
  </span>
)

export default ActionIcon
