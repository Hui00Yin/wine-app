import Button from '../components/Button';
import AddNewDialog from './AddNewDialog';
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {onAddNewDialog} from '../actions/index' 
import '../css/components/Whinepad.css'
import Excel from './Excel'


class Whinepad extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    addNewDialogDisplay: PropTypes.bool.isRequired
  }
  render() {
    return (
      <div className="Whinepad">
        <div className="WhinepadToolbar">
          <div className="WhinepadToolbarAdd">
            <Button 
              onClick={() => { this.props.dispatch(onAddNewDialog(true))}}
              className="WhinepadToolbarAddButton">
              + add
            </Button>
          </div>
          <div className="WhinepadDatagrid">
            <Excel />
          </div>
          {
            this.props.addNewDialogDisplay && <AddNewDialog />
          }
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({addNewDialogDisplay: state.dialogReducer.addNewDialogDisplay})

export default connect(mapStateToProps)(Whinepad)
