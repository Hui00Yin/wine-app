import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Dialog from '../components/Dialog'
import Form from '../components/Form'
import {mapStateToFormProps} from '../util/UtilForm'
import { connect } from 'react-redux'
import {onAddNewDialog, addRecord} from '../actions/index'

class AddNewDialog extends Component{
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }
  _addNew(){
    this.props.dispatch(onAddNewDialog(false));
    this.props.dispatch(addRecord(this.form.getData()))
  }

  render(){
    return (
      <Dialog 
        modal={true}
        header="Add new item"
        confirmLabel="Add"
        onAction={this._addNew.bind(this)}
      >
        <Form {...this.props} ref={(elem) => {this.form = elem}}/>
      </Dialog>
    )
  }
}

const mapStateToProps = (state) => mapStateToFormProps(state)
export default connect(mapStateToProps)(AddNewDialog)
