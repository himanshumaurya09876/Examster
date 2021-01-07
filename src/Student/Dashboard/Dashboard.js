import React from 'react';
import './Dashboard.css';
import Carousel from 'react-material-ui-carousel'
import {Paper , Avatar} from '@material-ui/core'


function Dashboard() {
    var items = [
        {
            img : "Images/Student/Card1.jpg"
        },
        {
            img : "Images/Student/Card2.jpg"
        },
        {
            img : "Images/Student/Card3.jpg"
        }
    ];
    const img_style = { height: '50%', width: '50%' , margin : 'auto' };
    return (
        <div className="dashboard">
            <div className="slider">
                    <Carousel  navButtonsAlwaysVisible="true" animation="slide">
                        {
                            items.map( (item, i) => {
                                return (  
                                    <Paper>
                                        <div className="slides">
                                            <img src={item.img} className="slider__img" />
                                        </div>
                                    </Paper>
                                )
                            })
                        }
                    </Carousel>
            </div>
        </div>
    )
}

export default Dashboard
