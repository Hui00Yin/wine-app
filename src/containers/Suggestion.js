import {connect} from 'react-redux'
import Suggest from '../components/Suggestion'
import {suggestItem} from '../actions/index'

const mapStateToProps = state =>  {
  console.log('state is:', state);
  const {suggestReducer} = state;
  const {dValue, options} = suggestReducer;

  return {
    dValue,
    options
    }
}
const mapDispatchToProps = dispatch => ({
  onChange: item => dispatch(suggestItem(item))})

export default connect(mapStateToProps, mapDispatchToProps)(Suggest);
