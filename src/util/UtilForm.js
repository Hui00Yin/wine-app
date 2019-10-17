export const mapStateToFormProps = (state, ownProps) => {
  const { defaultCfgReducer, recordReducer} = state
  
  if(ownProps && ('id' in ownProps)){
    const props = {
      fields: [...defaultCfgReducer.schema],
      initialData: recordReducer.records[ownProps.id].data,
      readonly: recordReducer.records[ownProps.id].readonly,
    }
    return props
  }
  
  return {
      fields: defaultCfgReducer.schema,
      readonly: false,
  }
}

