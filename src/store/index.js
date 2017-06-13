import configStore from './store';
import {
  fetchError,
  fetchOK,
  fetchStart,
  request,
} from './actions'


export default {
  configStore,
  actions: {
    fetchError,
    fetchOK,
    fetchStart,
    request,
  }
}