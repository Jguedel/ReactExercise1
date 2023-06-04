import FirstComponent from './FirstComponent.js'
import NamedComponent from './NamedComponent.js'
function App() {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Bob" />
    </div>
  );
}

export default App;
