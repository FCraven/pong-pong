import { Canvas } from '@react-three/fiber';
import './App.css';

function App() {

  const styles = {
    canvasContainer: {
      border: '5px solid gold'
    }
  }


  return (
    <div className="App">
      <div id='canvas-container' style={styles.canvasContainer}>
        <Canvas>
          <mesh />
        </Canvas>
      </div>
    </div>
  );
}

export default App;

