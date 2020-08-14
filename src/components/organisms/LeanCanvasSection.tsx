
import * as React from 'react'
import { Card, CardHeader } from '@material-ui/core'
import LeanCanvasSectionList from '../molecules/LeanCanvasSectionList'

export interface assumption {
    id: number
    title: string
}
interface LeanCanvasSectionProps {
    data: assumption[]
    name?: string
}

const LeanCanvasSection: React.FC<LeanCanvasSectionProps> = props => {
    const { data, name } = props

    return (
        <Card>
            <CardHeader title={name}></CardHeader>
            <LeanCanvasSectionList data={data}/>
        </Card>
    )
}

export default LeanCanvasSection