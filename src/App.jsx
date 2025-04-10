import "./App.css";
import React from "react";
import logo from "./assets/IMAGE (24).png";
import aside from "./assets/Frame (14).png"
import logoSocial from "./assets/Frame (15).png"
import input from './assets/Frame (16).png'
import social from './assets/Frame (17).png'

const App = () => {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "header",
      null,
      React.createElement(
        "nav",
        null,
        React.createElement("img", { src: logo, alt: "" }),
        React.createElement(
          "div",
          { className: "header" },
          React.createElement(
            "ul",
            null,
            React.createElement("li", null, "Business areas"),
            React.createElement("li", null, "Featured images"),
            React.createElement("li", null, "Gear cage"),
            React.createElement("li", null, "Contact")
          ),
          React.createElement(
            "button",
            { className: "btnHead" },
            "Get template"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "firstSection" },
        React.createElement(
          "p",
          { className: "photoP" },
          "Photographer & Fbutilmmaker"
        ),
        React.createElement("h1", null, "Aperture Studios"),
        React.createElement(
          "p",
          { className: "SectionP" },
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ",
          React.createElement("br"),
          "eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum ",
          React.createElement("br"),
          "nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id ",
          React.createElement("br"),
          "rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
        )
      ),
      <section className="secondSection">
        <h2 className="sectionTwoH">What we do.</h2>
        <p className="secondSectionP">The areas that we're specialized in.</p>
        <div className="forProduct">
          <div className="ProductContent">
            <h3 className="praductH">Product Photography</h3>
            <p className="productP">
              Cras commodo consequat orci, in convallis risus egestas non. Nulla
              efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero
              ac, cursus quam.
            </p>
            <button className="productButton">Read more</button>
          </div>
          <div className="ProductContent2">
            <h3 className="praductH">Architecture Photography</h3>
            <p className="productP">
              Aenean porta neque eget consequat fringilla. Vestibulum ultrices,
              orci nec egestas pharetra, ligula est semper enim, nec auctor
              sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet
              rhoncus leo imperdiet nec.
            </p>
            <button className="productButton">Read more</button>
          </div>
          <div className="ProductContent3">
            <h3 className="praductH">Drone Photography</h3>
            <p className="productP">
              Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.
              Duis tristique sed lorem a vestibulum. Cras commodo consequat
              orci, in convallis risus egestas non. Nulla efficitur auctor
              hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.
            </p>
            <button className="productButton">Read more</button>
          </div>
          <div className="ProductContent4">
            <h3 className="praductH">Wildlife Photography</h3>
            <p className="productP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros
              quis consectetur. Morbi neque ex, condimentum dapibus congue et,
              vulputate ut ligula. Vestibulum sit amet urna turpis.
            </p>
            <button className="productButton">Read more</button>
          </div>
        </div>
      </section>
      ,
      <section className="fourthSection">
        <div>
        <h2 className="fourthH">Sunset at Mount Fuji</h2>
        <p className="fourthP">Duis tristique sed lorem a vestibulum. Cras <br /> commodo consequat orci, in convallis <br /> risus egestas non.</p>
        </div>
      </section>
      ,
      <section className="fifthSection">
        <aside className="fifthAside">
          <p className="theGearCage">The Gear cage</p>
          <h2 className="fifthH">The tools that we use.</h2>
          <p className="fifthP">The say that "no place is boring if you've had a good night's sleep and have a pocket full of unexposed film". While we don't shoot (a lot) of film these days — these are the tools that we actually use everyday to capture the amazing things around us.</p>
          <button className="fifthBtn">Check it out</button>
        </aside>
        <img className="imageAside" src={aside} alt="" />
      </section>
      ,
      <section className="sixthSection">
      <div>
      <h2 className="fourthH">Monstera Leafs</h2>
      <p className="fourthP">Vestibulum sit amet urna turpis. Mauris <br /> euismod elit et nisi ultrices, ut faucibus <br /> orci tincidunt.</p>
      </div>
    </section>
    ,
    <section className="seventhSection">
      <h2 className="seventhH">Past clients</h2>
      <p className="seventhP">Trusted by your favourite companies</p>
      <img src={logoSocial} alt="" />
    </section>
    ,
    <section className="eightSection">
    <div>
    <h2 className="fourthH">Monstera Leafs</h2>
    <p className="fourthP">Nulla rhoncus feugiat eros quis <br />  consectetur. Morbi neque ex, <br /> condimentum dapibus congue et, <br /> vulputate ut ligula.</p>
    </div>
  </section>
  , 
  <section className="ninthSection">
    <h2 className="ninthH">Need help with photography or  <br /> videography?</h2>
    <p className="ninthP">We're here for you!</p>
    <button className="ninthBtn">Get in touch</button>
  </section>
  ,
  <footer>
      <article className="first">
        <aside className="foot_logo">
          <img src={logo} />
          <p>Photographers & videographers capturing the world around us.</p>
        </aside>
        <aside className="list">
          <li>
            <ul className="ss">Business areas</ul>
            <ul>Product Photography</ul>
            <ul>Architecture Photography</ul>
            <ul>Drone Photography</ul>
            <ul>Wildlife Photography</ul>
          </li>
          <li>
            <ul className="ss">Pages</ul>
            <ul>Gear cage</ul>
            <ul>Featured images</ul>
            <ul>Contact</ul>
            <ul>Style guide</ul>
            <ul>Instructions</ul>
            <ul>Changelog</ul>
          </li>
        </aside>
      </article>
      <hr className="hr" />
      <article className="second">
        <aside className="sub">
          <h1>Subscribe to our newsletter</h1>
          <h1>Read about all the things we do.</h1>
        </aside>
        <img src={input} />
      </article>
      <hr className="hr" />
      <aside className="foot">
        <p>© Aperture Photography, Inc. All rights reserved. Licensing .</p>
        <img src={social} />
      </aside>
    </footer>
    )
  );
};

export default App;
