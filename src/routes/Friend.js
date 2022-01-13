import React from "react";

const friends = [
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

function FriendProfile({ids, names, ages, images, background}){
    return (
        <div>
            <span>id: {ids}</span>
            <span>name: {names}</span>
            <span>age:{ages}</span>
            <img src = {images}/>
            <img src = {background}/>
            {/* */}
        </div>
    )
}

function Friend(){
    return (<>
        {friends.map(each => <FriendProfile ids={each.id} names={each.name} ages={each.age} images={each.profileImg} background={each.backgroundImg}/>)}
    </>);
}

export default Friend;