import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { withRouter } from "react-router-dom";

import { setMinistries } from "../../../actions/ministriesAction";
import { viewMinistry } from "../../../actions/ministriesAction";

class MinistriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ministries: []
    };
  }

  componentDidMount() {
    this.props.setMinistries();
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.ministries != this.props.ministries) {
  //     this.setState({ ministries: this.props.ministries });
  //   }
  // }
  render() {
    const { ministries } = this.props.ministriesData;
    let ministriesData;
    if (ministries) {
      ministriesData = ministries.map((ministry, i) => {
        return (
          <div className="col-md-6 column" key={i}>
            <div className="service-block">
              <div className="service-image">
                <img src={`images/${ministry.image}`} alt="" />

                <i className="fa fa-codepen"></i>
              </div>

              <h3>{ministry.name}</h3>

              <p>{ministry.preview}</p>

              <button
                className="button center"
                onClick={() => {
                  this.props.viewMinistry(ministry.name, this.props.history);
                }}
              >
                Read More
              </button>
            </div>
          </div>
        );
      });
    }

    return (
      <div>
        <section>
          <div className="block">
            <div className="container">
              <div className="row">
                <div className="col-md-12 column">
                  <div className="row">
                    <div className="service-listing center">
                      {ministriesData}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

MinistriesList.propTypes = {
  ministriesData: PropTypes.object,
  setMinistries: PropTypes.func,
  viewMinistry: PropTypes.func
};

const mapStateToProps = state => ({
  ministriesData: state.ministriesData
});

const enhance = compose(
  connect(mapStateToProps, { setMinistries, viewMinistry })
);

export default enhance(withRouter(MinistriesList));
