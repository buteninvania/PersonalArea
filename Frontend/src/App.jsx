import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux"
import store from "./Redux/redux-store";
import {compose} from "redux";
import PersonalAreaContainer from "./Components/PersonalArea/PersonalAreaContainer";
import LoginPage from "./Components/LoginPage/LoginPage";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./Utils/Preloader/Preloader";
import HeaderContainer from "./Components/HeaderContainer/HeaderContainer";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to={"/personal"}/>}/>
                        <Route path="/personal" render={() => <PersonalAreaContainer/>}/>
                        <Route path="/login" render={() => <LoginPage/>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.appPage.initialized
    }
}

const AppContainer = compose(withRouter, connect(mapStateToProps, {initializeApp}))(App)

const FrontEndPractice = () => {
  return (
       <BrowserRouter>
           <Provider store={store}>
               <AppContainer />
           </Provider>
       </BrowserRouter>
  )
}

export default FrontEndPractice;


