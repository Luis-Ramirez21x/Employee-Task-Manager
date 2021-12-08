const addTask = async (event) =>{
    event.preventDefault();
 
    //get values from form 
    const user_id = document.querySelector('#employee option:checked').value.trim();
    const title = document.querySelector('#assign-task').value.trim();
    console.log(user_id);
    console.log(title);
    
    if (user_id && title) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/task', {
          method: 'POST',
          body: JSON.stringify({ user_id, title }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          // If successful, redirect the browser to the profile page
          document.location.replace('/manager');
        } else {
          alert(response.statusText);
          console.log('please fill out both text fields');
        }
      }
};

document
  .querySelector('#add-button')
  .addEventListener('click', addTask);