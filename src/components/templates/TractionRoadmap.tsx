import React from "react"
import { RouteProps } from "../../Routes"
import { Counter } from "../../features/counter/Counter"
import { Paper } from "@material-ui/core"
import products from '../../product';
// TODO load in product json

const TractionRoadmap: React.FC<RouteProps> = props => {

    const product = products[0]
    const { lean_canvas } = product.ci

    return (
        <div>
            <h2>
            {product.name}
            </h2>
            <Paper>Problem

            {JSON.stringify(lean_canvas.problems.assumptions)}
            </Paper>
            <br />
            <Paper>
                Solution

            {JSON.stringify(lean_canvas.solutions.assumptions)}
            </Paper>
            <br />
            <Paper>Metrics

            {JSON.stringify(lean_canvas.metrics.assumptions)}
            </Paper>
            <br />
            <Paper>UVP

            {JSON.stringify(lean_canvas.values.assumptions)}
            </Paper>
            <br />
            <Paper>Advantage
            {JSON.stringify(lean_canvas.advantages.assumptions)}

            </Paper>
            <br />
            <Paper>Channel
            {JSON.stringify(lean_canvas.channels.assumptions)}

            </Paper>
            <br />
            <Paper>Customer
            {JSON.stringify(lean_canvas.customers.assumptions)}

            </Paper>
            <br />
            <Paper>Cost Structure
            {JSON.stringify(lean_canvas.costs.assumptions)}

            </Paper>
            <br />
            <Paper>Revenue Stream
            {JSON.stringify(lean_canvas.revenue.assumptions)}

            </Paper>
        </div>
    )
}

export default TractionRoadmap