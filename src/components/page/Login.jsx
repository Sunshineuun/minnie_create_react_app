import React from 'react';

class Login extends React.Component{
  state = {
    name: 'Login'
  };
  render(){
    return(
      <div>
        <div id={this.state}>
          敏敏是傻宝宝！
        </div>
      </div>
    )
  }
}

export default Login;
