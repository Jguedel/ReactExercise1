import Tweet from './Tweet.js';

function App() {
  return (
    <div className="App">
      <Tweet username='jane123' name='jane' date='10/2/99' message='this is message1'/>
      <Tweet username='bob456' name='bob' date='6/9/20' message='this is message2'/>
      <Tweet username='jim789' name='jim' date='7/8/22' message='this is message3'/>
    </div>
  );
}

export default App;
