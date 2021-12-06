import React, { Suspense } from "react";
import { connect } from "react-redux";
import { Route, Switch, BrowserRouter, Redirect, withRouter } from "react-router-dom";
import ChatList from "../pages/chatList";
import { getTokenStorage, lazyImport } from "../utils";
import routers from "./routers";

class RouterComponent extends React.Component {
  
  componentDidUpdate(preProps) {
    const { context, authent, user } = this.props;
    const isAuthenticated = user?.token || authent;

  }

  render() {
    const { context, authent, user } = this.props;
    console.log('authent', authent);
    console.log('user', this.props.user);
    const isAuthenticated = user?.token || authent;
    console.log('isAuthent', isAuthenticated)
    return (
      <BrowserRouter history={this.props.history}>
        <Suspense fallback={<div />}>
        <Switch>
          {isAuthenticated && isAuthenticated !== '' ? (
            <>
              {routers.map((item, index) => {
                return (
                  <Route
                    path={item.path}
                    key={item.menuKey}
                    component={item.component}
                    exact={item.extract}
                  />
                );
              })}
            </>
          ) : (
            <Route
              path={"/login"}
              key={`login`}
              component={lazyImport(`login`)}
              exact={true}
            />
          )}
          <Route 
            exact={true}
            path={'/'}
            render={props => (
              authent ? <ChatList /> : <Redirect to={{pathname: '/login'}} />
            )}
          />
        </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
} 

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouterComponent);