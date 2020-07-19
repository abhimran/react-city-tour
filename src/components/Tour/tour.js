import React, { Component } from 'react'
import './tour.css';

export default class tour extends Component {

    state ={
        showInfo : false
    }
    handleInfo = ()=>{
        this.setState({
          showInfo: !this.state.showInfo,
        });
    }

    render() {
        const {id, city, img, name, info} = this.props.tour;
        const {removeTour} = this.props;

        return (
          <article className="tour">
            <div className="img-container">
              <img src={img} alt="" />
              <span className="close-btn" onClick={() => removeTour(id)}>
                <i className="fas fa-times"></i>
              </span>
            </div>

            <div className="tour-info">
              <h3>{city}</h3>
              <h4>{name}</h4>
              <h5>
                info{" "}
                <span onClick={this.handleInfo}>
                  <i className="far fa-caret-square-down"></i>
                </span>
                {this.state.showInfo && <p>{info}</p>}
              </h5>
            </div>
          </article>
        );
    }
}
