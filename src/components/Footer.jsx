import React from 'react';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ReorderRoundedIcon from '@material-ui/icons/ReorderRounded';
import TrackChangesRoundedIcon from '@material-ui/icons/TrackChangesRounded';
import "../css/Footer.css";
import {NavLink} from 'react-router-dom';

 const Footer=()=> {
    return (
        <div className="footer">
           
            <div className="footer__home">
            <NavLink to="/" className="navlink">
                <div className="icon"><HomeRoundedIcon/> </div>
                <div className="label">Home</div>
                </NavLink>
            </div>
            

            <div className="footer__search">
                <NavLink to="/search" className="navlink">
                <div className="icon"> <SearchRoundedIcon/></div>
                <div className="label">Search</div>
                </NavLink>
            </div>

            <div className="footer__playlist">
                <NavLink to="/playlist" className="navlink">
                <div className="icon"><ReorderRoundedIcon/></div>
                <div className="label" style={{textDecoration:"none"}}>Playlist</div>
                </NavLink>
            </div>

            <div className="footer__premium">
                <NavLink to="/premium" className="navlink">
                <div className="icon"> <TrackChangesRoundedIcon/></div>
                <div className="label">Premium</div>
                </NavLink>
            </div>

           
            
           
        </div>
    )
}
export default Footer;