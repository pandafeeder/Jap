import React from 'react';
import ThumChar from './ThumChar';

const Table = props => {
  let UI = props.charsIdList.map(v => (
    <li key={v}>{props.chars[v]['pron']}</li>
  ))
  return <div>{UI}</div>
}

export default Table