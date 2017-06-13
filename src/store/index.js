import configStore from './store';
import {
  fetchError,
  fetchOK,
  fetchStart,
  request,
} from './actions'
import {
  charSchema,
  charListSchema,
} from './schemas'

const actions =  {
    fetchError,
    fetchOK,
    fetchStart,
    request,
}

export {
  actions,
  configStore,
  charSchema,
  charListSchema,
}