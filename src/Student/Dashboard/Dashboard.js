import React from 'react';
import './Dashboard.css';
import Carousel from 'react-material-ui-carousel'
import {Paper , Avatar} from '@material-ui/core'
import Footer from '../General/Footer';
import Header from '../General/Header';


function Dashboard(props) {
    console.log(props.location.state);
    var items = [
        {
            img : "../Images/Student/Card1.jpg"
        },
        {
            img : "../Images/Student/Card2.jpg"
        },
        {
            img : "../Images/Student/Card3.jpg"
        }
    ];
    const img_style = { height: '50%', width: '50%' , margin : 'auto' };
    return (
        <div>
            <div className="dashboard">
                <div className="dashboard__slider">
                        <Carousel  navButtonsAlwaysVisible="true" animation="slide">
                            {
                                items.map( (item, i) => {
                                    return (  
                                        <Paper>
                                            <div className="dashboard__slides">
                                                <img src={item.img} className="dashboard__slider__img" />
                                            </div>
                                        </Paper>
                                    )
                                })
                            }
                        </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
