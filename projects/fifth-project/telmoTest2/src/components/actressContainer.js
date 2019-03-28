import React from 'react';
import {ActreList} from '../data/actress';
import Actre from './actre';
import Actress from './actress';
import { Route} from 'react-router-dom';

const ActressContainer = (props) => {
    let actreUrl = ActreList.map((actre,i) => {
        return (
          <Route key={i} path={`/actress/${actre.url}`} render={() => <Actre name={actre.name} image={actre.profile_img} details={actre.description}/>} />
        );
      });

    return (
        <React.Fragment>
          <Route exact path="/actress" render={() => <Actress title="Best Actress"/>} />
          {actreUrl}
          {/* <Route path="/actress/hello" render={() => <Actre />} /> */}
        </React.Fragment>
    );
}

export default ActressContainer;