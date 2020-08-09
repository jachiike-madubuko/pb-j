import React from "react"
import { RouteProps } from "../../Routes"
import { Counter } from "../../features/counter/Counter"
import { Paper } from "@material-ui/core"


const Dash: React.FC<RouteProps> = props => {

    return (
        <div>
            Lean Canvas
            <Paper>Problem</Paper>
            <Paper>Solution</Paper>
            <Paper>Metrics</Paper>
            <Paper>UVP</Paper>
            <Paper>Advantage</Paper>
            <Paper>Channel</Paper>
            <Paper>Customer</Paper>
            <Paper>Cost Structure</Paper>
            <Paper>Revenue Stream</Paper>
        </div>
    )
}

export default Dash