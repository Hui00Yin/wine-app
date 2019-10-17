import { connect } from 'react-redux'
import ActionIcon from '../components/ActionIcon'
import {onDialog} from '../actions/index'

const mapDispatchToProps = (dispatch, ownProps) => {
  const {id, type} = ownProps;
  return {
    onActionClick: ()=> {dispatch(onDialog(id, type))}
  }
}
  
export default connect(null, mapDispatchToProps)(ActionIcon)


