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

                    <Link to="/">🏡</Link>
                    <span css={{ margin: 25 }}>
                        <Link to="auth">🔐</Link>
                    </span>
                    <Link to="dashboard">🤑</Link>
                    <span css={{ margin: 25 }}>
                        <Link to="lean">🧨</Link>
                    </span>
                </div>

        </div>
            </Paper>

    )
}

export default TopNav