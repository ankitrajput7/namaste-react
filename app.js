import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <>
      <div className="header">
        <a href="/">
          <img
            className="logo"
            src="https://img.freepik.com/premium-photo/cartoon-character-holding-hamburger-his-hands_894855-1943.jpg?w=740"
            alt="logo"
          ></img>
        </a>

        <div className="nav-bar">
          <ul>
            <li>Home </li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const Body = () => {
  return <h1>body</h1>;
};

const Footer = () => {
  return <h1>Footer</h1>;
};

const IndexFunction = () => {
  return (
    <>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<IndexFunction />);
