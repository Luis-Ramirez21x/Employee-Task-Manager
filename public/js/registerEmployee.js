const registerEmployee = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const role = document.querySelector('#role-signup').value.trim();
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(role);
  
    if (name && email && password && role) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password, role }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/manager');
      } else {
        alert(response.statusText);
        console.log('not good');
      }
    }
  };

  document
  .querySelector('#add-user')
  .addEventListener('click', registerEmployee);