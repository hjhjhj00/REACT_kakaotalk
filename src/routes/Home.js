import React from "react";
import styled,{css} from "styled-components";


const FriendsList = [
    {
        id: 1,
        name: "김김김",
        age: 20,
        profileImg: "https://www.silhouettekorea.net/common/img/default_profile.png",
        backgroundImg: "https://mblogthumb-phinf.pstatic.net/MjAxODAzMTFfMjA2/MDAxNTIwNzM1ODI4MDYx.wXJgLWYEwcBEqR1QZmV0LTDgEyCLpoARxFRJaAcJmRUg.0aSNou_nS6SLdWCT5jsnhsutwDDFmG0Fu4SbGQMl474g.PNG.osy2201/14.png?type=w800",
      },
      {
        id: 2,
        name: "김나은",
        age: 22,
        profileImg: "https://www.silhouettekorea.net/common/img/default_profile.png",
        backgroundImg: "https://mblogthumb-phinf.pstatic.net/MjAxODAzMTFfMjA2/MDAxNTIwNzM1ODI4MDYx.wXJgLWYEwcBEqR1QZmV0LTDgEyCLpoARxFRJaAcJmRUg.0aSNou_nS6SLdWCT5jsnhsutwDDFmG0Fu4SbGQMl474g.PNG.osy2201/14.png?type=w800",
      },
      {
        id: 3,
        name: "홍나희",
        age: 23,
        profileImg: "https://www.silhouettekorea.net/common/img/default_profile.png",
        backgroundImg: "https://mblogthumb-phinf.pstatic.net/MjAxODAzMTFfMjA2/MDAxNTIwNzM1ODI4MDYx.wXJgLWYEwcBEqR1QZmV0LTDgEyCLpoARxFRJaAcJmRUg.0aSNou_nS6SLdWCT5jsnhsutwDDFmG0Fu4SbGQMl474g.PNG.osy2201/14.png?type=w800",
      },
    
]


//Send에서도 쓰기 위해 Friends export할 수 있나?
//border-bottom을 특정 props를 받았을 때 
//attribute로 추가할 수는 없나?
const Friends= styled.div`
display: flex;
  align-items: center;
  height: 70px;
  border-bottom: 0;
  ${props=>props.mydiv && css`
  border-bottom: 1px solid rgb(233, 230, 230);
  height: 80px;
  `}
  & img {
    border-radius: 30px;
    padding: 15px;
    width: ${props => props.imgwidth||'50px'};
  }
`;

const FriendsProfile=({name,profileImg})=>{
    return (<>
    <Friends>
    <img src = {profileImg}/>
    <span>{name}</span>
    </Friends>
    {/* <Friends>
    <img src = {profileImg}/>
    <span>{name}</span>
    </Friends>
    <Friends>
    <img src = {profileImg}/>
    <span>{name}</span>
    </Friends>
    <Friends> 
    <a href="profile.html">
    <img src = "https://www.silhouettekorea.net/common/img/default_profile.png"/>
        </a>
    </Friends>*/}
        </>
    );
}

const Home=()=>{
    return(<>
        <h2>친구</h2>
        <Friends mydiv imgwidth="60px">
            <img src = "https://www.silhouettekorea.net/common/img/default_profile.png"/>
            <span>김효진</span>
        </Friends>
        {FriendsList.map(each=><FriendsProfile name={each.name} profileImg={each.profileImg}/>)}
    </>
    )
}
export default Home;