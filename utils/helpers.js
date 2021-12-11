module.exports = {
  task_is_due: (date) => {
     
    let taskDate = date.trim();
    let todaysDate = new Date();
    var dd = String(todaysDate.getDate()).padStart(2, '0');
    var mm = String(todaysDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = todaysDate.getFullYear();

    todaysDate = yyyy + '-' + mm + '-' + dd;

    if( (new Date(todaysDate).getTime() < new Date(taskDate).getTime()))
    {
    //task is not due
    return 'pending';
    }else if ( (new Date(todaysDate).getTime() > new Date(taskDate).getTime())) {
    //task is past due
    return 'past-due';
    } else {
      //task is due today
    return 'today!';
    }
  },
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    //return date.toLocaleDateString();
    let taskDate = date.trim();
    let todaysDate = new Date();
    var dd = String(todaysDate.getDate()).padStart(2, '0');
    var mm = String(todaysDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = todaysDate.getFullYear();
    todaysDate = yyyy + '-' + mm + '-' + dd;
    dateFormat = date;
    dateFormat = dateFormat.substr(5);
    dateFormat = dateFormat.replace('-', '/');

    if( (new Date(todaysDate).getTime() < new Date(taskDate).getTime()))
    {
    
    return dateFormat;
    }else if ( (new Date(todaysDate).getTime() > new Date(taskDate).getTime())) {
    
    return dateFormat;
    } else {
      
    return 'Today!';
    }
    
  },
  

};
