import './App.css';
import { db } from "./firebase"
import firebase from 'firebase'


function App() {

  let correctAnswer = Math.round(Math.random())
  const coinTossRef = db.collection("guesses").doc('cointoss');
  
  const handleGuess = (guess) => {
    if (guess === correctAnswer)
    {
      console.log('Update correct');
      coinTossRef.update({
        correct:firebase.firestore.FieldValue.increment(1)
      })
    } else {
      console.log('Update incorrect');
      coinTossRef.update({
        incorrect:firebase.firestore.FieldValue.increment(1)
      })
    }
    correctAnswer = Math.round(Math.random())
  }
  return (
    <div className="App">
      <header className="App-header">
        <button value="1" onClick={() => handleGuess(1)}>Kron</button>
        <button value="0" onClick={() => handleGuess(0)}>Mynt</button>
      </header>
    </div>
  );
}

export default App;
