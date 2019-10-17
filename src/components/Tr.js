import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Td from './Td'
import FilterActionList from '../containers/FilterActionList'
import FormInput from './formInput'
import Rating from './Rating'

class Tr extends Component{
  render(){
    const {row, rowidx, rowschema, edit, onEditSubmit} = this.props;
    return (
      <tr key={rowidx}>{
        Object.keys(row).map((cell, idx) => {
          const schema = rowschema[idx];
          if (!schema || !schema.show) {
            return null;
          }
          const isRating = schema.type === 'rating';
          let content = row[cell];
          if (!isRating && edit && edit.row === rowidx && edit.key === schema.id) {
            content = (
              <form onSubmit={
                (e) => {
                  e.preventDefault();
                  let editdata = { 
                    row: rowidx,
                    key: edit.key,
                    value: this.input.getValue()
                  };

                  onEditSubmit(editdata);
                }
              }
              >
                <FormInput ref={elem => this.input = elem} {...schema} defaultValue={content} />
              </form>
            );
          } else if (isRating) {
            content = <Rating readonly={true} defaultValue={Number(content)} />;
          }
          let tdprops = { schema, rowidx, cellidx:idx, isRating}
          return (
            <Td {...tdprops} key={idx}>
              {content}
            </Td>
          );
          }, this)}
          <td className="ExcelDataCenter">
            <FilterActionList id={rowidx}/>
          </td>
        </tr>
    )    
  }
}

export default Tr

  

