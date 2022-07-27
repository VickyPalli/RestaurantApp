import React from 'react'
import Vigitirian from '../../Images/Vigitirian.jpg';
import NonVigitirian from "../../Images/NonVigitirian.jpg"
import "./Style.css"
import Vigi1 from "../../Images/Vigi1.jpg"
import Vigi2 from "../../Images/Vigi2.jpg"
import Vigi3 from "../../Images/Vigi3.jpg"
import Non1 from "../../Images/Non1.jpg"
import Non2 from "../../Images/Non2.jpg"
import Non3 from "../../Images/Non3.jpeg"
import { Link } from 'react-router-dom';

const Second = () => {
    return (
        <>
            <div className='Second'>
                <h1>Vegetarian Cuisine Collections</h1>
                <div className='second-images'>
                    <div className='second-images-part'>
                        <img src={Vigi1} alt="" />
                        <img src={Vigi2} alt="" />
                    </div>
                    <div className='second-images-part'>
                        <img src={Vigi3} alt="" />
                        <img src={Vigitirian} alt="" />
                    </div>
                </div>
                <div className='second-message'>
                    <p>“My weaknesses have always been food and men in that order.”</p>
                    <p>“If you really want to make a friend, go to someone’s house and eat with him… The people who give you their food give you their heart.”</p>
                  <Link to="/vegetarian"><button>Vegetarian Order Now</button></Link>  
                </div>
            </div>
            <div className='Second'>
                <h1>Non-Vegetarian Cuisine Collections</h1>
                <div className='second-images'>
                    <div className='second-images-part'>
                        <img src={NonVigitirian} alt="" />
                        <img src={Non1} alt="" />
                    </div>
                    <div className='second-images-part'>
                        <img src={Non2} alt="" />
                        <img src={Non3} alt="" />
                    </div>
                </div>
                <div className='second-message'>
                    <p>“A recipe has no soul. You, as the cook, must bring soul to the recipe.”</p>
                    <p>“Food for us comes from our relatives, whether they have wings or fins or roots. That is how we consider food. Food has a culture. It has a history. It has a story. It has relationships.”</p>
                    <Link to="/nonvegetarian"><button>Non-Vegetarian Order Now</button></Link> 
                </div>
            </div>
        </>
    )
}

export default Second
