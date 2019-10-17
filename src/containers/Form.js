import Form from '../components/Form'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  const { defaultCfgReducer, recordReducer} = state
  
  if('id' in ownProps){
    const props = {
      fields: defaultCfgReducer.schema,
      initialData: recordReducer.filter(record => record.id !== action.id).data,
      readonly: ownProps.readonly,
    }
    console.log(props);
    return props
  }
  
  return {
      fields: defaultCfgReducer.schema,
      readonly: false,
  }
}

export default connect(mapStateToProps)(Form)
