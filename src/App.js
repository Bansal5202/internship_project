
import Navbar from "./containers/Navbar/Navbar";
import SearchBar from "./containers/Searchbar/Searchbar";
import PageNavigation from "./component/global/pageNavigation";
import { AuthWrapper } from "./Context/auth";
import { BrowserRouter } from "react-router-dom";
import { CartWrapper } from "./Context/cart";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AppWrapper from "./component/global/AppWrapper";
function App() {
  return (
   <BrowserRouter>
   <AuthWrapper>
    <CartWrapper>
    <AppWrapper>
    <Navbar/>
    <SearchBar/>
    <PageNavigation/>
    <ToastContainer/>
    </AppWrapper>
    </CartWrapper>
   </AuthWrapper>
   </BrowserRouter>
  );
}

export default App;