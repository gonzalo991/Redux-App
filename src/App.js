import Navbar from "./components/Navbar";
import UsersList from "./components/UsersList";
import { Provider } from 'react-redux';
import store from "./store/Reducer";

function App() {
  return (
    <Provider store= {store}>

      <Navbar />
      <UsersList />

    </Provider>
  );
}

export default App;
