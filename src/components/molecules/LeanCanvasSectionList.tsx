
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import { assumption } from '../organisms/LeanCanvasSection';

interface LeanCanvasSectionListProps {
    data: assumption[]

}

const LeanCanvasSectionList: React.FC<LeanCanvasSectionListProps> = props => {

    const { data } = props

    const enterPress = (evt: any) => {
        alert(JSON.stringify(Object(evt)))

    }
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
                            onKeyPress={enterPress}
                        />

                    </ListItemText>
                </Card>
            </ListItem>
        </List>
    )
}

export default LeanCanvasSectionList