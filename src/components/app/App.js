import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../elements/Header/Header';
import Home from '../home/Home';
import Movie from '../movie/Movie';
import NotFound from '../elements/NotFound/NotFound';
import TvSeries from '../tvSeries/TvSeries';
import Actors from '../actors/Actors';
import Signin from '../signin/Signin';
import Signup from '../signup/Signup';

const App = () => {
   return (
    <BrowserRouter>
       <React.Fragment>
           <div>
           <Header />
           </div>
           <div>
           <Switch>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/actors">
              <Actors />
            </Route>
            <Route path="/tvSeries">
              <TvSeries />
            </Route>
            <Route path="/" component={Home} exact />
            <Route path="/:movieId" component={Movie} exact />
            <Route component={NotFound} />
           </Switch>
           </div>
       </React.Fragment>
       </BrowserRouter>
   ) 
}
export default App;