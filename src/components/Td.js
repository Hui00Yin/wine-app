import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Td = ({schema, rowidx, cellidx, isRating, children}) => (
  <td 
    className={classNames({
      [`schema-${schema.id}`]: true,
      'ExcelEditable': !isRating,
      'ExcelDataLeft': schema.align === 'left',
      'ExcelDataRight': schema.align === 'right',
      'ExcelDataCenter': schema.align !== 'left' && schema.align !== 'right',
    })} 
    key={cellidx}
    data-row={rowidx}
    data-key={schema.id}>
    {children}
  </td>
)

Td.propTypes = {
  schema: PropTypes.object.isRequired,
  rowidx: PropTypes.number.isRequired,
  cellidx: PropTypes.number.isRequired,
  isRating: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

export default Td
