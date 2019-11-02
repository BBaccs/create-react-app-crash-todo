import React from 'react';

function Header() {
  return (
    <header>
      <h1 style={ headerStyle }>To Scooby DoOoOo List</h1>
    </header>
  )
}

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  margin: '0px'
}

export default Header;