import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Layout from '../layout/default'
import { withContainer } from '../context'
import { Home, List, Detail } from './page'

class App extends React.PureComponent {
  render () {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/:catId' component={List} />
              {/* <Route exact path='/list' component={List} /> */}
              <Route path='/:catId/:postlink' component={Detail} />
            </Switch>
          </Layout>
        </Suspense>
      </Router>
    )
  }
}

export default withContainer(App, (c) => ({}))
