import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth/useAuth';
import './Dashboard.css';
import MyOrders from '../CommonUser/MyOrders/MyOrders.js';
import UserReview from '../CommonUser/UserReview/UserReview.js';
import Pay from '../CommonUser/Pay/Pay.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import AddAProducts from '../AddAProducts/AddAProducts';
import DashboardHome from '../DashboardHome/DashboardHome';
  

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {logOut} = useAuth()
    return (
        <div>
            <h5 className="ds-text mt-3 fw-bold text-uppercase bg-light">Dashboard</h5>
            <Container>
                <Row>
                    <Col xs={6} md={4} className="dashboard">
                      
                    
                            <Link to={`${url}`}>Dashboard</Link>
                            <Link to={`${url}/myOrders`}>My Orders</Link>
                            <Link to={`${url}/review`}>Review</Link>
                            <Link to={`${url}/pay`}>Payment</Link>
                           
                            <Link to={`${url}/makeAdmin`}>Make Admin</Link>
                            <Link to={`${url}/manageAllProducts`}>Manage All Products</Link>
                            <Link to={`${url}/addAProducts`}>Add A Products</Link>
                          

                        <button onClick={logOut} className="btn btn-dark px-3 py-2 fw-bold mt-3 w-50 text-uppercase">Log Out</button>
                    </Col>
                    <Col xs={12} md={8} className="dashboard-pages">
                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome />
                        </Route>
                        <Route path={`${path}/myOrders`}>
                                <MyOrders />
                        </Route>
                        <Route path={`${path}/review`}>
                                <UserReview />
                        </Route>
                        <Route path={`${path}/pay`}>
                                <Pay />
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                                <MakeAdmin />
                        </Route>
                        <Route path={`${path}/manageAllProducts`}>
                                <ManageAllProducts />
                        </Route>
                        <Route path={`${path}/addAProducts`}>
                                <AddAProducts />
                        </Route>
                    </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;