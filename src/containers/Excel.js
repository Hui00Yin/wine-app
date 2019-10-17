import ExcelTh from './ExcelTh'
import Td from '../components/Td'
import ExcelTr from './ExcelTr'
import ExcelRowDialog from './ExcelRowDialog'
import ExcelRowDeleteDialog from './ExcelRowDeleteDialog'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import {onEditTableCell} from '../actions/index'

class Excel extends Component {
  static propTypes ={
    schema: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    onDblClick: PropTypes.func.isRequired,
    dialog: PropTypes.shape({
      display: PropTypes.bool,
      id: PropTypes.number,
      type: PropTypes.string,
    })
  }

  render() {
    return (
      <div className="Excel">
        {this._renderTable()}
        {this._renderDialog()}
      </div>
    );
  }
  
  _renderDialog() {
    const {display, type, id} = this.props.dialog;
    const readonly = type === 'EDIT'? true: false;

    if(display){
      return type === 'DELETE'
        ?<ExcelRowDeleteDialog readonly={readonly} id={id} />
        :<ExcelRowDialog readonly={readonly} id={id} />
    }
  }
  
  _renderTable() {
    console.log(this.props.data);
    return (
      <table>
        <thead>
          <tr>
            {
              this.props.schema.map((item, idx) => (<ExcelTh item={item} key={idx} />))
            }
            <th className="ExcelNotSortable">Actions</th>
          </tr>
        </thead>
        <tbody onDoubleClick={e => {
          const target = e.target;
          const row = parseInt(target.dataset.row, 10);
          const key = target.dataset.key;
          this.props.onDblClick(row, key)
        }}>
          {
            this.props.data.map((row) => {
            let trprops = {
              row: row.data,
              rowidx: row.id,
              rowschema: this.props.schema,
            }
            return <ExcelTr key={row.id} {...trprops} /> 
          }, this)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  const { dialogReducer, defaultCfgReducer, recordReducer} = state
  return {
    dialog: dialogReducer.dialog,
    schema: [...defaultCfgReducer.schema],
    data: [...recordReducer.records]
  }
}

const mapDispatchToProps = dispatch => ({
  onDblClick: (row, key) => dispatch(onEditTableCell(row,key))
})

export default connect(mapStateToProps, mapDispatchToProps)(Excel)
