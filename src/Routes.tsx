import { Router, Link, RouteComponentProps, } from "@reach/router"
import {Main} from "./components/templates"
import React from "react"
import { Counter } from "./features/counter/Counter"
import Auth from "./components/organisms/Auth";

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

const Dash: React.FC<RouteProps> = props => (
    <div>
        Dash
         <Counter/>
    </div>
)
const Routes = () => {

    return (
        <Router>
            <Main path="/">
                <Home path="/" />
                <Auth path="auth"  />
                <Dash path="dashboard" />
            </Main>
        </Router>
    )
}

export default Routes