import React from 'react';
import {FilmList} from '../data/films';
import Film from './film';
import Films from './films';
import { Route} from 'react-router-dom';

const FilmsContainer = (props) => {
    let filmUrl = FilmList.map((film,i) => {
        return (
          <Route key={i} path={`/films/${film.url}`} render={() => <Film name={film.name} image={film.profile_img} details={film.description}/>} />
        );
      });

    return (
        <React.Fragment>
          <Route exact path="/films" render={() => <Films title="Best Films"/>} />
          {filmUrl}
          {/* <Route path="/films/hello" render={() => <Film />} /> */}
        </React.Fragment>
    );
}

export default FilmsContainer;