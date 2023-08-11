// import './App.css';
import Header from './components/header';
import Login from './components/login';
import ValidationForm from './components/validationForm';
import GraphChart from './components/graphChart'

import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { selectValForm } from "./features/valFormSlice";


function App() {

  const user = useSelector(selectUser);
  const valForm = useSelector(selectValForm);

  return (
    // <>
    // <Header />
    // <Login />
    // <ValidationForm />
    // </>

    <div>
      <Header />
      {!user ? <Login /> : (user && !valForm) ? <ValidationForm /> : (valForm && user) ? <GraphChart /> : <Login />}
    </div>
  );
}

export default App;
