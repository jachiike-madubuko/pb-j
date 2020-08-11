/** @jsx jsx */

import { jsx } from '@emotion/core';
import { Link } from "@reach/router"
import * as React from 'react';
import { Paper } from '@material-ui/core';

const TopNav = () => {

    return (
        <Paper css={{ flex: 1, flexDirection: 'row' }}>
            <div >
                {/*
                    <div css={{ textAlign: 'center', flex: 1 }}>
                        {user ? (
                            <p>
                                Hi {user.email}
                                </p>

                        ) : (
                                <p>
                                    Login
                                    </p>
                            )}
                    </div>
                */}

                <div css={{ textAlign: 'center', flex: 1 }}>

                    <h1>

                        <Link to="/">🏡</Link>
                        <span css={{ margin: 25 }}>
                            <Link to="auth">🔐 Auth</Link>
                        </span>
                        <Link to="dashboard">🤑 Dash</Link>
                        <span css={{ margin: 25 }}>
                            <Link to="canvas">🧨 Canvas</Link>
                        </span>
                    </h1>
                </div>

            </div>
        </Paper>

    )
}

export default TopNav