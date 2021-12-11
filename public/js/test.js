


const getUserTaskData = async (event) =>{
    event.preventDefault()
    console.log(' button clicked');
   
   const userId = document.querySelector('#userId').value.trim();

    
        // Send a POST request to the API endpoint
        const response = await fetch('/api/single', {
          method: 'GET',
          //body: JSON.stringify({ title, description }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          // If successful, redirect the browser to the profile page
          
          document.location.reload();
        } else {
          alert(response.statusText);
          console.log('please fill out both text fields');
        }
      
};



document
  .querySelector('.edit-blog-form')
  .addEventListener('submit', editBlogFormHandler);