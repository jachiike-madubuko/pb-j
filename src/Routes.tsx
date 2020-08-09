import { Router, Link, RouteComponentProps, } from "@reach/router"
import {Main} from "./components/templates"
import React from "react"
import { Counter } from "./features/counter/Counter"
import Auth from "./components/organisms/Auth";
import Dash from './components/templates/Dash';
import LeanCanvas from './components/templates/LeanCanvas';

export interface RouteProps  {
    children?: React.ReactNode
    path: String
    uri?: any
    location?: any
    navigate?: any
}


const Home: React.FC<RouteProps> = props => (
    <div>
        Home
    </div>
)


const Routes = () => {

    return (
        <Router>
            <Main path="/">
                <Home path="/" />
                <Auth path="auth"  />
                <Dash path="dashboard" />
                <LeanCanvas path="lean" />
            </Main>
        </Router>
    )
}

export default Routes