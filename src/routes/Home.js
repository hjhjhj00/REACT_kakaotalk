import React from "react";
import "./Friends.css";
function Home(){
    return (<><h2>친구</h2>
    <div class="friends MyDiv">
        <img src = "https://www.silhouettekorea.net/common/img/default_profile.png" class="MyImg"/>
        <span>김효진</span>
    </div>
    <div class="friends">
    <img src = "https://www.silhouettekorea.net/common/img/default_profile.png"/>
    <span>김김김</span>
    </div>
    <div class="friends">
    <img src = "https://www.silhouettekorea.net/common/img/default_profile.png"/>
    <span>김나은</span>
    </div><div class="friends">
    <img src = "https://www.silhouettekorea.net/common/img/default_profile.png"/>
    <span>홍나희</span>
    </div>
    <a href="profile.html">
    <img src = "https://www.silhouettekorea.net/common/img/default_profile.png"/>
        </a></>
    );
}

export default Home;