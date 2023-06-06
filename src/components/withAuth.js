import React, { useEffect } from 'react';

const withAuth = (WrappedComponent) => {
    console.log("inside withauth");
  const ComponentWithAuth = (props) => {
    console.log("inside comp");
    useEffect(() => {
      const token = sessionStorage.getItem('token');
        console.log(token)
      if (!token) {
        // Redirect the user to the login page if the token is missing
        props.history.push('/login');
      } else {
        // You can also send the token to the server for verification if needed
        // Make an API call to validate the token and handle the response accordingly
      }
    }, [props.history]);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default withAuth;
