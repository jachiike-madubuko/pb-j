
import * as React from 'react'
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

import { assumption } from '../organisms/LeanCanvasSection';
interface LeanCanvasSectionListProps {
    data: assumption[]

}

const LeanCanvasSectionList: React.FC<LeanCanvasSectionListProps> = props => {

    const { data } = props
    return (
        <List>
            {data.map( item => (
                <ListItem>
                    <Card>
                    <ListItemText>
                        {item.title}
                    </ListItemText>
                    </Card>
                </ListItem>
            ) )}
            <ListItem>
                <Card>
                    <ListItemText>
                        <TextField
                            id="standard-helperText"
                            defaultValue="Default Value"
                            variant="outlined"
                        />
                    </ListItemText>
                </Card>
            </ListItem>
        </List>
    )
}

export default LeanCanvasSectionList