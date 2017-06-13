import React from 'react';
import BigChar from '../components/BigChar';
import Table from '../components/Table';
import { request } from '../../store/actions'
import { connect } from 'react-redux';
import {
  withRouter,
  Route,
  Link,
} from 'react-router-dom';

const mapStateToProps = state => (
  {
    chars: state.chars,
    charsIdList: state.charsIdList,
    fetchStatus: state.fetchStatus
  }
)
const mapDispatchToProps = dispatch => (
  {
    request: url => dispatch(request(url))
  }
)

class App extends React.Component {
  componentDidMount() {
    if (this.props.charsIdList.length === 0) {
      this.props.request('http://localhost:8000/api')
    }
  }

  render() {
    /*
    if (this.props.fetchStatus.status === 'fetching...') {
      return <div>Fetching...</div>
    } else if (this.props.fetchStatus.status === 'failed') {
      return <div>{this.props.fetchStatus.error}</div>
    }
    */
    return (
      <div>
        <Route exact path='/' render={ 
          () =>
            <Table chars={this.props.chars} charsIdList={this.props.charsIdList}/> 
          }
        />
        <Route path='/char/:pron' render={() => <div>PRON</div>} />
      </div>
    )
  }
}

// this will triger redux to re-render when only location changes
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
