import auth0 from "auth0-js";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "kyoudaievents.eu.auth0.com",
    clientID: "eX75Xni5m4kaGCACq04PSpNw1iknMA4b",
    redirectUri: "http://localhost:3000/callback",
    responseType: "token id_token",
    scope: "openid"
  });

  login() {
    this.auth0.authorize();
  }
}
