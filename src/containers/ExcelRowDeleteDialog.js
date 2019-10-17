import { connect } from 'react-redux'
import React, {Component} from 'react'
import Dialog from '../components/Dialog'
import PropTypes from 'prop-types'
import {offDialog, deleteRecord} from '../actions/index'

class ExcelRowDeleteDialog extends Component{
  static propTypes = {
    id: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  _deleteConfirmationClick(action, id){
  }

  render(){
    const {id} = this.props;
    return (
      <Dialog
        modal={true}
        header="Confirm deletion"
        confirmLabel="Delete"
        onAction= {(action) => {
          this.props.dispatch(offDialog())
          if(action === 'dismiss'){
            return
          }
          this.props.dispatch(deleteRecord(this.props.id))
        }} 
      >
        {`Are you sure you want to delete ?`}
      </Dialog>
    );
  }
}

const mapStateToProps = (state) => state.dialogReducer.id
export default connect(mapStateToProps)(ExcelRowDeleteDialog)





