import React from 'react'

const AppTitle = ({ children, ...props }) => {
    return (
      <h3
        {...props}
        style={{
          color: "white",
          fontSize: "1.5rem",
          fontWeight: "bold",
          margin: "0 0 0.5rem 0",
          ...props.style,
        }}
      >
        {children}
      </h3>
    );
  };
  
  export default AppTitle;