import { normalize } from 'normalizr';
import * as schema from './schemas'

export const FETCH_START = 'FETCH_START';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_OK = 'FETCH_OK';

export const fetchStart = () => (
  {
    type: FETCH_START,
    status: 'fetching'
  }
)
export const fetchOK = payload => (
  {
    type: FETCH_OK,
    payload,
    status: 'fetched',
  }
)
export const fetchError = error => (
  {
    type: FETCH_ERROR,
    status: 'failed',
    error,
  }
)
export const request = url => {
  return dispatch => {
    dispatch(fetchStart())
    fetch(url)
      .then(response => {
        if (response.status >= 400) {
          throw response.error
        }
        return response.json()
      })
      .then(data => {
        dispatch(fetchOK(normalize(data, schema.charListSchema)))
      })
      .catch(e => {
        dispatch(fetchError(e))
      })
  }
}
