import Person from './Person.js';


function App() {
  return (
    <div className="App">
      <Person age='23' name='jim' hobbies={['hiking','camping']}/>
      <Person age='12' name='bob' hobbies={['swimming','running']}/>
      <Person age='18' name='jane' hobbies={['shopping','driving']}/>
    </div>
  );
}

export default App;
