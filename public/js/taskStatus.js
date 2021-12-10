const editTask = async (event) =>{
    event.preventDefault()
    var element = event.target;
    console.log(element);
    if(element.matches('i') === true){
        console.log('matching')
    }
    //get values from form 
    const taskStatus = true;
    //grab event.target.getattribute
    //const taskId = document.querySelector('#title-blog').value.trim();


    

    if (taskStatus && description) {
        // Send a POST request to the API endpoint
        ;
    
        if (response.ok) {
          // If successful, redirect the browser to the profile page
          
          document.location.replace('/dashboard');
        } else {
          alert(response.statusText);
          console.log('please fill out both text fields');
        }
      }
};

const buttons = document.querySelectorAll(".button")
for (const button of buttons) {
  button.addEventListener('click', async function(event){
    event.preventDefault()
    var element = event.target;
    console.log(element);

    if(element.matches('i') === true){
        console.log('matching');
        const taskStatus = true;
        const taskId = element.getAttribute('id');
        
        const response = await fetch('/api/task', {
          method: 'PUT',
          body: JSON.stringify({ taskStatus, taskId }),
          headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
          // If successful, redirect the browser to the profile page
          
          document.location.reload();
        } else {
          alert(response.statusText);
          console.log('please fill out both text fields');
        }


    };
  });
}

 