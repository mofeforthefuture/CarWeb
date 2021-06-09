import React from 'react';

import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './Home.css'
function my404() {
    return (
        <div>
            <h1 className='four-o-four'>404</h1>
            <div className='four-btn'>
                <Link to='/'>
                    <Button >
                        Back to home
                </Button>
                </Link>
            </div>

        </div>
    );
}

export default my404