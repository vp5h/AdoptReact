import { useState, Component, useEffect } from "react";
import { withRouter, useParams } from "react-router-dom";

class Details extends Component {
  state = { loading: true };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
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
  render() {
    if (this.state.loading) {
      return (
        <div className="details">
          <h2>Loading..</h2>
        </div>
      );
    }
    const { animal, breed, city, state, description, name } = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} -${breed} -${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
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

export default withRouter(Details);
