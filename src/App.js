import logo from './logo.svg';
import './App.css';
import './perks_applicationForm/perks';
import Perks from './perks_applicationForm/perks'
import ApplicationForm from './perks_applicationForm/application_form'
import TechstackAndInterns from './techstack_interns/TechstackAndInterns';



function App() {
  return (
    <div className="App">
      
      <Perks/>
      <TechstackAndInterns/>

    </div>
  );
}

export default App;
