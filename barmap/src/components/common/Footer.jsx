import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="page-footer font-small bg-dark">
          <div className="container-fluid">
            <div className="row py-3">
              <div className="col d-flex justify-content-between">
                <h3 className="text-light">
                  BarMaps
                </h3>
                <div className="text-light">
                  Copyright &copy;
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

}

export default Footer;
