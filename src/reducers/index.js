import * as types from '../constants/SuggestTypes'
import Schema from '../constants/schema'
import ActionSchema from '../constants/actionSchema'
import {
  ADD_RECORD,
  DELETE_RECORD,
  EDIT_RECORD,
  OFF_DIALOG,
  ON_DIALOG,
  ON_ADD_NEW_DIALOG,
  ON_EXCEL_SORT,
  ON_EDIT_TABLE_CELL,
  SAVE_EDIT_TABLE_CELL,
} from '../actions/index'
import { combineReducers } from 'redux'

const defaultCfgReducer = (state = {
                           schema: [...Schema] ,
                           actionSchema: [...ActionSchema],
}) => state

const dialogReducer = (state = {
  addNewDialogDisplay: false,
  dialog: {display: false,}
}, action) => {
  switch(action.type){
    case ON_DIALOG:
      switch(action.dialog.type){
        case 'INFO':
          return {
            ...state,
            dialog: {...action.dialog},
            readonly: true,
          }
          break;
        case 'EDIT': 
          return {
            ...state,
            dialog: {...action.dialog},
            readonly: false,
          }
          break;
        case 'DELETE':
          return {
            ...state,
            dialog: {...action.dialog},
          }
          break;
        default:
          return state;
      }
    case ON_ADD_NEW_DIALOG:
      return {
        ...state,
        ...action
      }
  default:
      return state;
  }
}

const recordReducer = (state = {records: [],
                                sortby: 'Name',
                                descending: false}, action) => {
  switch(action.type){
    case ADD_RECORD:
      return {
        ...state,
        records: 
        [
          ...state.records,
          {
            id: state.records.length === 0? 0: state.records.reduce((maxId, record) => Math.max(record.id, maxId) - 1) + 1,
            data: action.data
          }
        ]
      }
    case DELETE_RECORD:
      return {
        ...state,
        records:state.records.filter(record => record.id !== action.id)
      }
    case EDIT_RECORD:
      return {
        ...state,
        records: state.records.map(record =>
          record.id === action.id?
          {...record, data: action.data}:
          record)
      }
    case ON_EXCEL_SORT: 
      return {
        ...state,
        sortby: action.sortby,
        descending: action.descending,
        //todo, sorting records
      }
    case ON_EDIT_TABLE_CELL: 
      return {
        ...state,
        edit: {...action.edit},
      }
    case SAVE_EDIT_TABLE_CELL:
      return {
        ...state,
        edit: null,
        records: state.records.map(record =>
          record.id === action.editdata.row?
          (Object.keys(record).map(key => {
            if(key === action.editdata.key){
              const arecord = {...record};
              arecord[key] = action.editdata.value;
              return arecord;
            }
            return record;
          })):record)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  defaultCfgReducer,
  dialogReducer,
  recordReducer,
})

export default rootReducer
