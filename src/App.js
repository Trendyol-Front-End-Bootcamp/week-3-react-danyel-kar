import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/ui/Header'
import Home from './pages/Home'
import InfoPage from './pages/InfoPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/character/:id">
            <Header />
            <InfoPage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

