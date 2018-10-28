import React from 'react'
import { Link } from 'react-router-dom'
import {Container} from 'reactstrap'
import { Icon } from 'antd';

export const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <Container>
                <center>
                    <div className="error-icon">
                        <Icon type='frown' />
                    </div>
                    <div className="error-404-text">
                        <div className="text-404">
                            404
                        </div>
                        <p className="para-404">page not found</p>
                        <p className="tagline-404-error">The page you are looking for doesn't exit or another error occured. 
                            <strong>
                                <Link to='/'> Go Back</Link>
                            </strong>
                        </p>
                    </div>
                </center>
            </Container>
        </div>
    )
}