import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../shared/header/Header';
import Home from '../screens/home/Home';
import Movie from '../movieDetails/Movie';
import NotFound from '../shared/notFound/NotFound';
import TvSeries from '../screens/tvSeries/TvSeries';
import Actors from '../screens/actors/Actors';
import Signin from '../screens/signin/Signin';
import Signup from '../screens/signup/Signup';

const App = () => {
   return (
    <BrowserRouter basename="Home">
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