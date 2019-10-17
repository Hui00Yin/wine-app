import Th from '../components/Th'
import { connect } from 'react-redux'
import {onSortExcel} from '../actions/index'

const mapStateToProps = (state, ownProps) => ({
  item: ownProps.item,
  sortby: state.recordReducer.sortby,
  descending: state.recordReducer.descending
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSort: (sortby, descending) => { dispatch(onSortExcel(sortby, descending))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Th);
