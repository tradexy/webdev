import React from 'react';
import {ActreList} from '../data/actress';
import { Link } from 'react-router-dom';

const Actress = (props) => {
    let actress = ActreList.map((actre) => {
      return (
        <div className="actre-container">
          <Link to={`/actress/${actre.url}`}><div className="actre-image" style={{ backgroundImage: "url(" + actre.img_src + ")" }}></div></Link>
          <h3>{actre.name}</h3>
        </div>
      );
    });

    return (
      <div className="main-content">
        <div><Link className="back" to="/">BACK</Link></div>
        <h2>{props.title}</h2>
        <div className="container">
          {actress}
        </div>
      </div>
    );
}

export default Actress;