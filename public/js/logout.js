//Function to handle user logout.
//Sends a POST request to the '/api/users/logout' endpoint to log out the user.
const logout = async (event) => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      // Redirect to the homepage if the logout request is successful
      document.location.replace('/');
    } else {
      // Show an alert with the error status if there is an error with the logout request
      alert(response.statusText);
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);
  
