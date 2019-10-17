import { connect } from 'react-redux'
import React, {Component} from 'react'
import Dialog from '../components/Dialog'
import Form from '../components/Form'
import PropTypes from 'prop-types'
import {offDialog, saveRecord} from '../actions/index'
import {mapStateToFormProps} from '../util/UtilForm'

class ExcelRowDialog extends Component{
  static propTypes = {
    readonly: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    formProps: PropTypes.object.isRequired
  }

  _saveDataDialog(action){
    this.props.dispatch(offDialog())
    if(action === 'dismiss'){
      return
    }
    this.props.dispatch(saveRecord(this.props.id, this.form.getData()))
  }

  render(){
    const {readonly, id, formProps} = this.props;
    return (
      <Dialog
        modal={true}
        header={readonly? 'Item info': 'Edit item'}
        confirmLabel={readonly? 'ok': 'Save'}
        hasCancel={!readonly}
        onAction= {this._saveDataDialog.bind(this)} 
      >
        <Form {...formProps } readonly={readonly}
          ref={elem => this.form = elem}
          />
      </Dialog>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...state.dialogReducer,
  formProps: mapStateToFormProps(state, ownProps)
})
export default connect(mapStateToProps)(ExcelRowDialog)





