import React from "react";
import {
    Link
  } from "react-router-dom";
// import styled from "styled-components";
import './Navbar.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faEllipsisH, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

// styled.div`background-color: yellow;`;
function Navbar(){
    return (<>
    <nav class="nav">
              <ul class="nav_list">
                    <Link to='/'>
                        <div  className="nav_each" >
                    <FontAwesomeIcon icon={faUser}/>
                    </div>
                    </Link>
                    <Link to='/friend' class="nav_each">
                    <div  className="nav_each" >
                    <FontAwesomeIcon icon={faSearch}/>
                    </div>
                      </Link>
                      <Link to='/send' class="nav_each">
                      <div  className="nav_each" >
                      <FontAwesomeIcon icon={faComment} className="nav_each" />
                      </div>
                      </Link>
                      <Link to='/menu'>
                      <FontAwesomeIcon icon={faEllipsisH} className="nav_each" />
                      </Link>
              </ul>
      </nav>
      <script
      src="https://kit.fontawesome.com/b2a7e4c847.js"
      crossorigin="anonymous"
    ></script>
      </>);
}

export default Navbar;