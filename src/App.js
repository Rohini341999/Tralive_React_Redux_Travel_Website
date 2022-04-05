import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Tralive from "./container/tralive";
import ExploreDestinations from "./container/explore-destinations/explore-destinations.component";
import Navbar from "./components/Navbar/navbar.component";
import SignInAndSignUpPage from "./container/sign-in-and-sign-up/sign-in-and-sign-up.component";
import MoreInfo from "./container/more-info/more-info.component";
import Footer from "./components/Footer";

import { setCurrentUser } from "./redux/user/user.actions";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    // console.log(this.props, "currentuser app");
    return (
      <div>
        <Navbar
        // currentUser={this.state.currentUser}
        />

        <Switch>
          <Route exact path="/" component={Tralive} />

          <Route exact path="/explore" component={ExploreDestinations} />

          <Route exact path="/signin" component={SignInAndSignUpPage}></Route>
          <Route exact path="/moreInfo" component={MoreInfo}></Route>
          {console.log(
            this.props.currentUser ? "true" : "false",
            "this.props.currentUser"
          )}
          <Route
            exact
            path="/signin"
            render={() => {
              return this.props.currentUser ? (
                <Redirect exact from="/signin" to="/" />
              ) : (
                <SignInAndSignUpPage />
              );
            }}
          />
        </Switch>
        <div className="footer-parent">
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
