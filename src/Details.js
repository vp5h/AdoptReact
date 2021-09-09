import { Component } from "react";
// import { useState, Component, useEffect } from "react";
// import { withRouter, useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";
import ErrorBoundry from "./ErrorBoundry";

class Details extends Component {
  state = { loading: true, showModal: false };

  async componentDidMount() {
    const res = await fetch(
      // eslint-disable-next-line react/prop-types
      `https://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();

    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  adopt = () => {
    window.location = "https://bit.ly/pet-adopt";
  };
  render() {
    if (this.state.loading) {
      return (
        <div className="details">
          <h2>Loading..</h2>
        </div>
      );
    }
    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} -${breed} -${city}, ${state}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => {
              return (
                <button
                  onClick={this.toggleModal}
                  style={{ backgroundColor: theme }}
                >
                  Adopt {name}
                </button>
              );
            }}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

// Hook Based

// const Details = () => {
//   const [loading, setLoading] = useState(true);
//   const [something, setSomething] = useState("");

//   const id = useParams();
//   useEffect(() => {
//     setLoading(true)
//     getdata();
//     async function getdata() {
//       const res = await fetch(
//         `http://pets-v2.dev-apis.com/pets?id=${id.id}`
//       );
//       const json = await res.json();

//       setSomething(Object.assign(json.pets[0]));
//       setLoading(false)
//     }
//   }, [id]);

//   return (
//     <div className="details">

//       <div>
//           <h1>{something.name}</h1>
//           <h2>{`${something.animal} - ${something.breed} - ${something.city}, ${something.state}`}</h2>
//           <button>Adopt {something.name}</button>
//           <p>{something.description}</p>
//         </div>
//     </div>
//   );
// };

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBound(props) {
  return (
    <ErrorBoundry>
      <DetailsWithRouter {...props} />
    </ErrorBoundry>
  );
}
