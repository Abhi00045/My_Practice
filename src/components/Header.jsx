import { useState } from "react";


const Header = ()=>{

// const [loader , setLoading ]= useState(true);
// if(loader)
//     return <>
//     <Div className="loadr"></Div>
//     </>
// else return <Div className="fetching"></Div>
    return <>



    <div id="navBar">
        <div id="main-one">
            <div id="search-bar">
                <input type="text" placeholder="find Movie" />
            </div>
        </div>
        <div id="main-two">
            <div id="list-movies">
                <ul>
                    <li>Trending</li>
                    <li>Top Imbd</li>
                    <li><select name="genre" id="genre">
                        <option value="Romance">Romance</option>
                        <option value="Horror">Horror</option>
                        <option value="comedy">Comedy</option>
                        </select></li>
                </ul>
            </div>
        </div>
    </div>

    
    
    </>
} 
export default Header;