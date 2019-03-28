import React from 'react';
import { Link } from 'react-router-dom';

const Film = (props) => {
    return (
      
            <div className="main-content">
                <div><Link className="back" to="/films">BACK</Link></div>
                <h2>{props.id}</h2>
                <div className="container">
                    <div className="film-profile-image" style={{ backgroundImage: "url(" + props.image + ")" }}></div>
                    <h2>{props.name}</h2>
                    <p>{props.details}</p>
                </div>
            </div>
        
    );
}

export default Film;