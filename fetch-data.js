// Define an async function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // The API endpoint for user data
    const dataContainer = document.getElementById('api-data'); // Get the container where data will be displayed
    
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        
        // Convert the response to JSON
        const users = await response.json();
        
        // Clear the loading message
        dataContainer.innerHTML = '';
        
        // Create a <ul> to display the users' names
        const userList = document.createElement('ul');
        
        // Loop through each user and create a <li> for their name
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the user name in the <li>
            userList.appendChild(listItem); // Append <li> to <ul>
        });
        
        // Append the <ul> to the dataContainer
        dataContainer.appendChild(userList);
    } catch (error) {
        // If there's an error, display a failure message
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Wait for the DOM to load, then call the fetchUserData function
document.addEventListener('DOMContentLoaded', fetchUserData);
