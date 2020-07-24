import React, {Component} from 'react';
import { API_URL, API_KEY } from '../../config';
import TvInfo from '../../shared/tvInfo/TvInfo';
import Spinner from '../../shared/spinner/Spinner';
import CommentBox from '../../shared/commentBox/CommentBox';
import './TvSeriesDetails.css';
// import FourColGrid from '../elements/FourColGrid/FourColGrid';
// import Navigation from '../elements/Navigation/Navigation';

export const TvSeriesDetailsView = ({state})=>{
    // console.log(state);
    return (
        <div className="rmdb-movie">
            {state.tv ?
                <div>
                    <TvInfo tv={state.tv} directors={state.directors} />
                </div>
            : null}
            {state.loading ? <Spinner /> : null}
            <CommentBox/>
        </div>
        );
    }