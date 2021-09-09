/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { Component } from "react";

export default class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaulprops = {
    images: ["https://pets-image.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick= (event) =>{
    this.setState({
      active: +event.target.dataset.index,
    });
  }

  render() {
    //state are mutable while props flow in one direction
    const { active } = this.state;

    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <img
              key={photo}
              src={photo}
              data-index={index}
              onClick={this.handleIndexClick}
              className={index === active ? active : ""}
              alt="animal-thubnail"
            />
          ))}
        </div>
      </div>
    );
  }
}
