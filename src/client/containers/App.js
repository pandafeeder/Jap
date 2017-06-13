import React from 'react';
import ThumChar from '../components/ThumChar';
import BigChar from '../components/BigChar';
import { request } from '../../store/actions'
import { connect } from 'react-redux';
import {
  withRouter,
  Route,
  Link,
} from 'react-router-dom';

const mapStateToProps = state => (
  {
    chars: state.entities,
    charsIndexList: state.result,
    fetchStatus: state.fetchStatus
  }
)
const mapDispatchToProps = dispatch => (
  {
    request: url => dispatch(request(url))
  }
)

class App extends React.Component {
  componentWillMount() {
    if (this.props.result.length === 0) {
      this.props.request('http://localhost:8000/api')
    }
  }  
  render() {
    if (this.props.fetchStatus.status === 'fetching...') {
      return <div>Fetching...</div>
    } else if (this.props.fetchStatus.status === 'failed') {
      return <div>{this.props.fetchStatus.error}</div>
    }
    let charList = this.props.charsIndexList.map( v => (
      <li key={v}>{this.props.chars[v]}</li>
    ))
    return (
      <div>
        <Route exact path='/' render={charList} />
        <Route path='/char/:pron' render={() => <div>PRON</div>} />
      </div>
    )
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))

