function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1> Hello!!!</h1>
      <Food fav="Kimchi" />
      <Food fav="ramen" />
      <Food fav="pizza" />
      <Food fav="bulgogi" />
    </div>
  );
}

export default App;
