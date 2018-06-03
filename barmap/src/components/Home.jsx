import React, { Component } from 'react';
import RegisterForm from './RegisterForm'



class Home extends Component {

  render() {
    return (
      <div>
        <div className="main"></div>
        <div className="container welcome">
          <div className="row">
              <div className="col-xl-8 col-md-8">
                <h2 className="display-3 text-light">
                  Welcome To BarMaps
                </h2>
              </div>
              <div className="col-xl-4 col-md-4">
                <RegisterForm />
              </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <h2 className="display-4">All In One Place</h2>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-xl-4">
              <div className="card">
                <div className="card-header pb-4">
                  <h4>Find A Bar</h4>
                  <div className="icon-wrap">
                  <i className="fas fa-beer icon-top-card"></i>
                  </div>
                </div>
                <div className="card-body">
                  <p className="lead pt-4">
                    Lorem ipsum dolor amet cred wayfarers hoodie iceland celiac tumblr. Biodiesel semiotics pork belly shabby chic hashtag coloring book tbh disrupt portland readymade everyday carry godard glossier hella. XOXO fanny pack scenester kitsch yr man braid coloring book kickstarter ennui +1 echo park edison bulb. Next level chillwave deep v, fixie af fashion axe raclette literally locavore polaroid woke fanny pack.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card">
                <div className="card-header pb-4">
                  <h4>Get Directions</h4>
                  <div className="icon-wrap">
                  <i className="fas fa-map-pin icon-top-card"></i>
                  </div>
                </div>
                <div className="card-body">
                  <p className="lead pt-4">
                    Lorem ipsum dolor amet cred wayfarers hoodie iceland celiac tumblr. Biodiesel semiotics pork belly shabby chic hashtag coloring book tbh disrupt portland readymade everyday carry godard glossier hella. XOXO fanny pack scenester kitsch yr man braid coloring book kickstarter ennui +1 echo park edison bulb. Next level chillwave deep v, fixie af fashion axe raclette literally locavore polaroid woke fanny pack.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card">
                <div className="card-header pb-4">
                  <h4>Go Party</h4>
                  <div className="icon-wrap">
                  <i className="fas fa-users icon-top-card"></i>
                  </div>
                </div>
                <div className="card-body">
                  <p className="lead pt-4">
                    Lorem ipsum dolor amet cred wayfarers hoodie iceland celiac tumblr. Biodiesel semiotics pork belly shabby chic hashtag coloring book tbh disrupt portland readymade everyday carry godard glossier hella. XOXO fanny pack scenester kitsch yr man braid coloring book kickstarter ennui +1 echo park edison bulb. Next level chillwave deep v, fixie af fashion axe raclette literally locavore polaroid woke fanny pack.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Home;
