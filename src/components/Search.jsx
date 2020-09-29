import React from 'react';
import "../css/Search.css";
import Search__Card from "../components/Search__Card";
function Search() {
    return (
        <div className="search">
            <div className="search__header">
                <p>Search</p>
                <div className="input">
                    <input type="text" placeholder="Artist, song or playlist"/>
                </div> 
                

            </div>
            <div className="search__body">
                <Search__Card/>
                <Search__Card/>
                <Search__Card/>
                <Search__Card/>
                <Search__Card/>
                <Search__Card/>
                {/* <Search__Card/>
                <Search__Card/>
                <Search__Card/>
                <Search__Card/>
                <Search__Card/>
                <Search__Card/> */}
            </div>
        </div>
    )
}

export default Search
