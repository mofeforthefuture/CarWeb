import React from 'react';
import AppNavbar from '../AppNavbar';

import { Icon } from 'semantic-ui-react'
import Carousel from 'react-bootstrap/Carousel'
import Table from 'react-bootstrap/Table'
import './Home.css'


function ViewPages(props) {
    return (
        <div>
            <AppNavbar />
            <div className='carousel-background'>
                <Carousel>
                    <Carousel.Item interval={1000} className='carousel'>
                        <img
                            className="d-block w-20 carousel-image"
                            src='https://img2.carmax.com/img/vehicles/20252304/1/385.jpg'
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1000} className='carousel'>
                        <img
                            className="d-block w-20 carousel-image"
                            src='https://buy.cars45.com/image/cache/catalog/Toyota-Corolla-2010_529d8103-e5ce-4340-a875-3ce067298587/dashboardPhoto-600x400.jpg?v=0'
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1000} className='carousel'>
                        <img
                            className="d-block w-20 carousel-image"
                            src='https://img2.carmax.com/img/vehicles/20252304/1/385.jpg'
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className='car-info-container'>
                    <h3>Toyota Corolla 2010</h3>
                    <h3>₦ 2 ,000,000</h3>
                </div>
                <div className='info-table'>
                    <Table responsive="lg">
                        <tbody>
                            <tr>
                                <td>Model:</td>
                                <td>Toyota</td>
                            </tr>
                            <tr>
                                <td>Condition:</td>
                                <td>NEW</td>
                            </tr>
                            <tr>
                                <td>Mileage:</td>
                                <td>83038394</td>
                            </tr>
                            <tr>
                                <td>Year:</td>
                                <td>2010</td>
                            </tr>
                            <tr>
                                <td>Location:</td>
                                <td>Lagos</td>
                            </tr>
                            <tr>
                                <td>Buyers Contact:</td>
                                <td><Icon disabled name='phone' />08146328101</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>

        </div>
    );
}

export default ViewPages;