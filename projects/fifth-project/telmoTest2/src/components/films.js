import React from 'react';
import {FilmList} from '../data/films';
import { Link } from 'react-router-dom';

const Films = (props) => {
    let films = FilmList.map((film) => {
      return (
        <div className="Film-container">
          <Link to={`/films/${film.url}`}><div className="film-image" style={{ backgroundImage: "url(" + film.img_src + ")" }}></div></Link>
          <h3>{film.name}</h3>
        </div>
      );
    });

    return (
      <div className="main-content">
        <div><Link className="back" to="/">BACK</Link></div>
        <h2>{props.title}</h2>
        <div className="container">
          {films}
        </div>
      </div>
    );
}

export default Films;
          