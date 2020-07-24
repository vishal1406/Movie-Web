import React, {Component} from 'react';
import ActorInfo from '../../shared/actorInfo/ActorInfo';
import Spinner from '../../shared/spinner/Spinner';
import CommentBox from '../../shared/commentBox/CommentBox';
import './ActorDetails.css';
// import FourColGrid from '../elements/FourColGrid/FourColGrid';
// import Navigation from '../elements/Navigation/Navigation';

export const ActorDetailsView = ({state})=>{
    // console.log(state);
    return (
        <div className="rmdb-movie">
            {state.person ?
                <div>
                    <ActorInfo person={state.person} directors={state.directors} />
                </div>
            : null}
            {state.loading ? <Spinner /> : null}
            <CommentBox/>
        </div>
        );
    }