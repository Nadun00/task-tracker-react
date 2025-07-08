import React from "react"

const Header = ({title ='Task Tracker'}) => {
  return( 
  <header style= {{ backgroundColor: 'lightblue', padding: '20px' }}>
      <h1>{title}</h1>
  </header>
  );
}

Header.defaultProps = {
  title: 'Task Tracker',
}

export default Header;
