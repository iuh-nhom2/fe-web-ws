import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Provider } from 'react-redux';
import { history, store } from './redux/store';
import RouterComponent from './router';
import { getTokenStorage } from './utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.context = null;
    this.state={
      isAuthent: false
    }
  }

  componentDidMount() {
    this.checkAuth();
    history.listen((location, action) => {
      // event listener
    });
    
  }

  async checkAuth() {
    const token = await getTokenStorage();
    console.log('token', token);
    history.replace("", null);
    if (!token || token === null) {
      history.push("/login");
      this.setState({
        isAuthent: false,
      });
      
    }else {
      this.setState({
        isAuthent: true,
      });
    }
  }

  getContent(){
    return this.context;
  }

  render(){
    return (
      <Provider store={store}>
        
        <RouterComponent context={this.getContent.bind(this)} history={history} authent={this.state.isAuthent} />
        
      </Provider>
    )
  }
} 

export default App;