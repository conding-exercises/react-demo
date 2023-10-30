
import './App.css';
import Login from './components/Auth/Login';
import DropdownMenu from './components/DropDownMenu/DropdownMenu';
import FormSubmission from './components/FormSubmission';

function App() {
  return (
    <div className="App">
      <Login/>
      
      <DropdownMenu/>

      <FormSubmission/>
    </div>
  );
}

export default App;
