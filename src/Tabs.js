import React, { useState } from 'react'
import { Container, Row, Tabs, Tab } from 'react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import './Tabs.css'

const Navbar = () => {
    return (
        <Container className='py-4'>
            <Row className="justify-content-center">
                <Tabs justify variant="pills" defaultActiveKey="tab-1" className="mb-1 p-0">
                    <Tab eventKey="tab-1" title="Tab 1">
                        <Login />
                    </Tab>
                    <Tab eventKey="tab-2" title="Tab 2">
                        <Login />
                    </Tab>
                    <Tab eventKey="tab-3" title="Tab 3">
                        <Login />
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    )
}

export default Navbar