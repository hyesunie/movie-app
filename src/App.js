import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  };
  plus = () => {
    console.log("Plus");
  };
  minus = () => {
    console.log("Minus");
  };
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.plus}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <h1> Hello!!!</h1>
//       {foodILike.map((dish) => (
//         <Food
//           key={dish.id}
//           name={dish.name}
//           picture={dish.image}
//           rating={dish.rating}
//         ></Food>
//       ))}
//     </div>
//   );
// }

export default App;
