import React from 'react';

const Members = (props) => {
  return (
    <div>
      {props.teamMember.map(teamMember => (
        <div>
          <h1>Name: {teamMember.name}</h1>
          <h2>Email: {teamMember.email}</h2>
          <h3>Role: {teamMember.role}</h3>
        </div>
      ))}
    </div>
  );
};

export default Members;