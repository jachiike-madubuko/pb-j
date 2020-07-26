/** @jsx jsx */

import { jsx } from '@emotion/core';
import {
    Banner,
    Content,
    LeftSidebarWithoutResize,
    Main,
    PageLayout,
    RightPanel,
    TopNavigation,
} from '@atlaskit/page-layout';
import * as React from "react";
import { RouteProps } from "../../Routes";
import { Link } from '@reach/router';
import Paper from '@material-ui/core/Paper';
import fire from '../../utils/fire';

import { useAuthState } from 'react-firebase-hooks/auth';

// import SideNav from '../organisms/';
const MainLayout: React.FC<RouteProps> = props => {
    const [user, loading, error] = useAuthState( fire.app.auth() );

    const Wrapper = ( {
        borderColor,
        children,
        minHeight,
        noOutline,
        noHorizontalScrollbar,
    }: {
        borderColor: string;
        children: React.ReactNode;
        minHeight?: string;
        noOutline?: boolean;
        noHorizontalScrollbar?: boolean;
    } ) => (
            <div
                css={{
                    outline: noOutline ? 'none' : `2px dashed ${borderColor}`,
                    outlineOffset: -4,
                    padding: 8,
                    minHeight: minHeight,
                    height: '100%',
                    boxSizing: 'border-box',
                    overflowY: 'hidden',
                    overflowX: noHorizontalScrollbar ? 'hidden' : 'auto',
                    backgroundColor: 'transparent',
                }}
            >
                {children}
            </div>
        );

    return (
        <Paper>
            <PageLayout>

                <Banner
                    testId="banner"
                    id="banner"
                    skipLinkTitle="Banner"
                    height={60}
                    isFixed={false}
                >
                    <Paper>
                        <Wrapper borderColor="gold">
                            <div css={{ flex: 1, flexDirection: 'row' }}>

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

                                <div css={{ textAlign: 'center', flex: 1 }}>

                                    <Link to="/">🏡</Link>
                                    <span css={{ margin: 25 }}>
                                        <Link to="auth">🔐</Link>
                                    </span>
                                    <Link to="dashboard">🤑</Link>
                                </div>

                            </div>
                        </Wrapper>
                    </Paper>
                </Banner>
                <TopNavigation
                    testId="topNavigation"
                    id="product-navigation"
                    skipLinkTitle="Product Navigation"
                    height={60}
                    isFixed={false}
                >
                    <Paper>
                        <Wrapper borderColor="blue">
                            <h3 css={{ textAlign: 'center' }}>Product Navigation</h3>

                        </Wrapper>
                    </Paper>
                </TopNavigation>

                <Content testId="content">

                    <LeftSidebarWithoutResize
                        testId="leftSidebar"
                        id="space-navigation"
                        skipLinkTitle="Space Navigation"
                        isFixed={false}
                        width={125}
                    >
                        <Paper>
                            <Wrapper borderColor="darkgreen">
                                {/* <SideNav /> */}
                                <h3>Side</h3>
                            </Wrapper>
                        </Paper>
                    </LeftSidebarWithoutResize>

                    <Main testId="main" id="main" skipLinkTitle="Main Content">
                        <Paper>
                            <Wrapper borderColor="black" minHeight="400px">
                                <h4 css={{ textAlign: 'center' }}>{props.location.pathname} Content</h4>
                                {props.children}
                                <p>
                                    Visit the first focusable element on the page to see the skip
                                    links menu
                            </p>
                            </Wrapper>
                        </Paper>
                    </Main>

                </Content>

                {false &&
                    <RightPanel
                        testId="rightPanel"
                        id="help-panel"
                        skipLinkTitle="Help Panel"
                        isFixed={false}
                        width={125}
                    >
                        <Paper>
                            <Wrapper borderColor="orange">
                                <h3 css={{ textAlign: 'center' }}>Help Panel</h3>
                            </Wrapper>
                        </Paper>
                    </RightPanel>
                }
            </PageLayout>
        </Paper>
    )
}

export default MainLayout