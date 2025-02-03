//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
const root = ReactDOM.createRoot(document.getElementById('root'));

import Container from "./component/container.jsx";
import Navbar from "./component/navBar.jsx";
import Card from "./component/card.jsx";
import Footer from "./component/footer.jsx";
root.render(
  <React.StrictMode>
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Container />
      <Card />
      <Footer />
    </div>
  </React.StrictMode>
);




