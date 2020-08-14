import React from "react"
import { RouteProps } from "../../Routes"
import { Counter } from "../../features/counter/Counter"
import { Paper } from "@material-ui/core"
import products from './../../product';
import LeanCanvasSection from "../organisms/LeanCanvasSection";
// TODO load in product json

const leanCanvas: React.FC<RouteProps> = props => {

    const product = products[0]
    const { lean_canvas } = product.ci

    return (
        <div>
            <h2>
            {product.name}
            </h2>
            <Paper>


                <LeanCanvasSection name={'Problem'} data={lean_canvas.problems.assumptions}/>
            </Paper>
            <br />
            <Paper>

            <LeanCanvasSection name={'Solution'} data={lean_canvas.solutions.assumptions}/>
            </Paper>
            <br />
            <Paper>

            <LeanCanvasSection name={'Metrics'} data={lean_canvas.metrics.assumptions}/>
            </Paper>
            <br />
            <Paper>

            <LeanCanvasSection name={'UVP'} data={lean_canvas.values.assumptions}/>
            </Paper>
            <br />
            <Paper>
            <LeanCanvasSection name={'Advantage'} data={lean_canvas.advantages.assumptions}/>

            </Paper>
            <br />
            <Paper>
            <LeanCanvasSection name={'Channel'} data={lean_canvas.channels.assumptions}/>

            </Paper>
            <br />
            <Paper>
            <LeanCanvasSection name={'Customer'} data={lean_canvas.customers.assumptions}/>

            </Paper>
            <br />
            <Paper>
            <LeanCanvasSection name={'Cost Structure'} data={lean_canvas.costs.assumptions}/>

            </Paper>
            <br />
            <Paper>
            <LeanCanvasSection name={'Revenue Stream'} data={lean_canvas.revenue.assumptions}/>

            </Paper>
        </div>
    )
}

export default leanCanvas