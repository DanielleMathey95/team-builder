import React, {useState} from 'react';

const Form = ({addNewName}) => {
  const [teamMember, setTeamMember] = useState({
    name: '',
    email: '',
    role: '',
  })

  const changeHandler = event => {
    setTeamMember({...teamMember, [event.target.name] : [event.target.value]})
  }

  const submit = event => {
    event.preventDefault()
    addNewName(teamMember)
  };

  return (
    <div>
      <form onSubmit = {submit}>
        <label>Name:</label>
        <input
          onChange={changeHandler}
          type='text'
          name="name"
          value={teamMember.name}
          />
        <label>Email:</label>
        <input
          onChange={changeHandler}
          type='text'
          name="email"
          value={teamMember.email}
          />
        <label>Role:</label>
        <input
          onChange={changeHandler}
          type='text'
          name="role"
          value={teamMember.role}
          />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form;