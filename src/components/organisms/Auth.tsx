import * as React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { RouteProps } from '../../Routes';
import fire from '../../utils/fire';
import { Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Input from '../atoms/Input';
import Btn  from "../atoms/Button";
const Auth: React.FC<RouteProps> = props => {
    const [user, loading, error] = useAuthState( fire.app.auth() );


    const [username, setusername] = React.useState( "" );
    const [password, setpassword] = React.useState( "" );
    const [passwordMask, setpasswordMask] = React.useState( "" );

    React.useEffect( () => {

        setpasswordMask("*".repeat(password.length))
    },[password])


    const login = () => {
        try {
            fire.app.auth().createUserWithEmailAndPassword(username,password)
        } catch ( error ) {
            fire.app.auth().signInWithEmailAndPassword (username,password)

        }
    }
    return (
        <div>
            Auth
            {props.children}
            {!loading && !error && (
                <div>
                    {user ? (
                        <p>
                            Hi {user.email}
                        </p>
                    ) :
                        (
                            <Card
                                elevation={3}
                            >
                                <CardContent >
                                    <Input update={setusername} value={username}/>
                                    <Input update={setpassword} value={passwordMask}/>
                                    <Btn onClick={login} >Login</Btn>
                                </CardContent>
                            </Card>
                        )}
                </div>
            )}
        </div>
    )
}

export default Auth