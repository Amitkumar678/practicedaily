import { createContext } from 'react';
import CompoA from './CompoA';

const fname=createContext()
function App() {
  return (
    <div className="App">
    <fname.Provider value="computer">
        <CompoA />
    </fname.Provider>
      
    </div>
  );
}

export default App;
export { fname }
