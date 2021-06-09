import React from 'react';
import './index.css'
import { Link } from 'react-router-dom'


function AppCard({ image, name, price, year, condition, mileage }) {
    return (
        <Link to='/id/toyota'>
            <div className='card'>
                <img src={image} alt='car' className='card-photo' />
                <h3 style={{ marginLeft: '5px', }}>{name}</h3>
                <h4 style={{ marginLeft: '5px', fontSize: 'large' }}> ₦ {price}</h4>
                <div className='card-extra'>
                    <h6> Year: {year}</h6>
                    <h6>Condition: {condition}</h6>
                    <h6>Mileage: {mileage}km </h6>
                </div>
            </div>
        </Link>
    );
}

export default AppCard;