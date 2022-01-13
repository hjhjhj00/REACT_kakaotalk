import React from "react";
import {
    Link
  } from "react-router-dom";

function Navbar(){
    return (<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <Link class="navbar-brand" to="/">Navbar</Link>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <Link class="nav-link" to="/friend">Friends</Link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item active">
          <Link class="nav-link" to="/send">Send</Link>
        </li>
      </ul>
    </div>
  </nav>);
}

export default Navbar;