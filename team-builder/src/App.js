import React, {useState} from 'react';
import Form from './Components/Form';
import Members from './Components/Members';
import './App.css';

function App() {

  const [teamMember, setNewNames] = useState([])

  const addNewName = info => {
    const teamMember = {
      name: info.name,
      email: info.email,
      role: info.role
    }
    setNewNames({...teamMember, teamMember})
  };

  return (
    <div>
      <Form addNewName={addNewName} />
      <Members teamMember={teamMember} />
    </div>
  );
}

export default App;
