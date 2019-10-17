import React from 'react'
import PropTypes from 'prop-types'

const Th = ({item, sortby, descending, onSort}) => {
    if(!item.show){
       return null;
    }
    let title = item.label;
    let cssname = `schema-${item.id}`;
    if(sortby === item.id){
      title += descending ? ' \u2191' : ' \u2193';
    }
    return (
      <th
          className={cssname}
          key={item.id}
          onClick={item => onSort(item.id)}
      >
        {title}
      </th>
    );
}
Th.propTypes = {
  item: PropTypes.object.isRequired,
  sortby: PropTypes.string.isRequired,
  descending: PropTypes.bool.isRequired,
  onSort: PropTypes.func.isRequired
};

export default Th
