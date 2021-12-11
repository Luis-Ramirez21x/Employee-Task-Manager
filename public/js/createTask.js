const addTask = async (event) =>{
    event.preventDefault();
 
    //get values from form 
    const user_id = document.querySelector('#employee option:checked').value.trim();
    const title = document.querySelector('#assign-task').value.trim();
    const description = document.querySelector('#assign-task-description').value.trim();
    const due_date = document.querySelector('#due-date').value.trim();
    
    
    if (user_id && title && description && due_date) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/task', {
          method: 'POST',
          body: JSON.stringify({ user_id, title, description, due_date }),
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