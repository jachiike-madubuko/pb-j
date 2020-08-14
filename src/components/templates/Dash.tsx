import React from "react"
import { RouteProps } from "../../Routes"
import { Counter } from "../../features/counter/Counter"


const Dash: React.FC<RouteProps> = props =>  {

    return (
        <div>
            Dash
            <Counter />
            </div>
        )
}

export default Dash