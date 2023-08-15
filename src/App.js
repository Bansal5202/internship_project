import "./App.css";
import ContextProvider from "./Context/ContextProvider";
import Pages from "./pages/Pages";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ContextProvider>
        <ToastContainer/>
        <div className="App">
          <Pages />
        </div>
      </ContextProvider>
    </>
  );
}

export default App;