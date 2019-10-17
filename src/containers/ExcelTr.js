import { connect } from 'react-redux'
import Tr from '../components/Tr'
import {saveEditTableCell} from '../actions/index'

const mapStateToProps = (state, ownProps) =>({
  ...ownProps,
  edit: state.recordReducer.edit,
})

const mapDispatchToProps = (dispatch) => ({
  onEditSubmit: (editdata) => {dispatch(saveEditTableCell(editdata))},
})

export default connect(mapStateToProps, mapDispatchToProps)(Tr)
