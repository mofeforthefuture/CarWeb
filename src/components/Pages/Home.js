import React from 'react';
import AppNavbar from '../AppNavbar';
import AppCard from '../Custom/AppCard';

function Home() {
    return (
        <div>
            <AppNavbar />

            <div className='card-display'>
                <AppCard
                    image='https://img2.carmax.com/img/vehicles/20252304/1/385.jpg'
                    name='Toyota Corolla'
                    price=' 2 ,000,000'
                    year='2010'
                    condition='New'
                    mileage='15,000'
                />
                <AppCard
                    image='https://img2.carmax.com/img/vehicles/20252304/1/385.jpg'
                    name='Toyota Corolla'
                    price=' 2 ,000,000'
                    year='2010'
                    condition='New'
                    mileage='15,000'
                />
                <AppCard
                    image='https://img2.carmax.com/img/vehicles/20252304/1/385.jpg'
                    name='Toyota Corolla'
                    price=' 2 ,000,000'
                    year='2010'
                    condition='New'
                    mileage='15,000'
                />
                <AppCard
                    image='https://img2.carmax.com/img/vehicles/20252304/1/385.jpg'
                    name='Toyota Corolla'
                    price=' 2 ,000,000'
                    year='2010'
                    condition='New'
                    mileage='15,000'
                />
                <AppCard
                    image='https://img2.carmax.com/img/vehicles/20252304/1/385.jpg'
                    name='Toyota Corolla'
                    price=' 2 ,000,000'
                    year='2010'
                    condition='New'
                    mileage='15,000'
                />

            </div>
        </div>
    );
}

export default Home;