import React from "react";

const Nav = ({ handleLogout }) => {
  const num = Math.floor(Math.random() * 1000);

  const URL = `https://picsum.photos/id/${num}/info`;

  var userImage="";

  function getData() {
    fetch(URL)
      .then((respone) => {
        return respone.json();
      })
      .then((data) => {
        fetch(data.download_url)
          .then((response2) => {
            userImage = response2.url;
            let img = document.getElementById('userimg');
            img.src = userImage
          })
          .then((data2) => {
            //   console.log(data2)
          });
      });
  }
  getData();

  return (
    <section className="home__class">
      <nav>
        <h2>Welcome To Tasks Board</h2>
        <div className="right_nav">
          <img id="userimg" src={userImage} alt="" />
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
