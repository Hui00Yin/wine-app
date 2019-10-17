import * as types from '../constants/SuggestTypes'
export const TABLE_ACTIONS = 'Excel Actions'
export const LOAD_FORM_FIELDS = 'LOAD_FORM_FIELDS'
export const ADD_RECORD = 'ADD_RECORD'
export const DELETE_RECORD = 'DELETE_RECORD'
export const EDIT_RECORD = 'EDIT_RECORD'
export const SAVE_RECORD = 'SAVE_RECORD'

export const OFF_DIALOG = 'OFF_DIALOG'
export const ON_DIALOG = 'ON_DIALOG'
export const ON_EXCEL_SORT = 'ON_EXCEL_SORT'
export const ON_ADD_NEW_DIALOG = 'ON_ADD_NEW_DIALOG'
export const ON_EDIT_TABLE_CELL = 'ON_EDIT_TABLE_CELL'
export const SAVE_EDIT_TABLE_CELL = 'SAVE_EDIT_TABLE_CELL'

export const offDialog = () => ({type: OFF_DIALOG, dialog: {display: false}})
export const onDialog = (id, type) => ({type: ON_DIALOG, dialog: {
  display: true,
  id,
  type}})
export const onAddNewDialog = (display) => ({type: ON_ADD_NEW_DIALOG, addNewDialogDisplay:display}) 
export const suggestItem = item => ({type: types.SUGGEST, item})
export const loadFormFields = () => ({type: LOAD_FORM_FIELDS})
export const addRecord = data => ({ type: ADD_RECORD, data })
export const deleteRecord = id => ({ type: DELETE_RECORD, id })
export const saveRecord = (id, data) => ({ type: SAVE_RECORD, id, data })
export const onEditTableCell = (row, key) => ({type: ON_EDIT_TABLE_CELL, edit: {row, key}})
export const saveEditTableCell = (editdata) => ({type: SAVE_EDIT_TABLE_CELL, editdata})
export const onSortExcel = (sortby, descending) => ({type: ON_EXCEL_SORT, sortby, descending})
