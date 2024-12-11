// Profile object 
const profile = {
    name: "Muhammad Umair",
    age: 20, 
    hobbies: ["Coding", "Gaming", "Learning Technologies"]
};

// Visibility state
let isProfileVisible = true;

// Function to toggle profile visibility
function toggleProfileVisibility() {
    const profileCard = document.querySelector('.profile-card');
    isProfileVisible = !isProfileVisible;
    profileCard.style.display = isProfileVisible ? 'block' : 'none';
    
    // Update button text
    const toggleButton = document.querySelector('#toggleProfile');
    toggleButton.textContent = isProfileVisible ? 'Hide Profile' : 'Show Profile';
}

// Function to determine age category
function getAgeCategory() {
    if (profile.age < 13) return "Child";
    if (profile.age > 19) return "Teenager";
    return "Adult";
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add hobbies list to profile card
    const profileCard = document.querySelector('.profile-card');
    const hobbiesList = document.createElement('ul');
    hobbiesList.classList.add('hobbies-list');
    
    profile.hobbies.forEach(hobby => {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbiesList.appendChild(li);
    });
    
    profileCard.appendChild(hobbiesList);
    
    // Add age category
    const ageCategory = document.createElement('p');
    ageCategory.textContent = `Age Category: ${getAgeCategory()}`;
    ageCategory.classList.add('age-category');
    profileCard.appendChild(ageCategory);
    
    // Add toggle button
    const toggleButton = document.createElement('button');
    toggleButton.id = 'toggleProfile';
    toggleButton.textContent = 'Hide Profile';
    toggleButton.addEventListener('click', toggleProfileVisibility);
    document.body.appendChild(toggleButton);
});