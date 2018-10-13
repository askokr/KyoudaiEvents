import React from "react";
import { GoogleLogin } from "react-google-login-component";

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  responseGoogle(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var googleId = googleUser.getId();

    console.log({ googleId });
    console.log({ accessToken: id_token });
    //anything else you want to do(save to localStorage)...
  }

  render() {
    return (
      <div>
        <GoogleLogin
          socialId="64126451358-mmmraa7mnlsjktmbptde0v3fe5p6ns2g.apps.googleusercontent.com"
          className="google-login"
          scope="profile"
          fetchBasicProfile={false}
          responseHandler={this.responseGoogle}
          buttonText="Login With Google"
        />
      </div>
    );
  }
}

export default Login;
