// Profile object
const profile = {
  name: "Muhammad Umair",
  age: 20,
  hobbies: ["Coding", "Gaming", "Learning Technologies"],
};

// Visibility state
let isProfileVisible = true;

// Fuction to toggle the profile
toggleProfileVisibility = () => {
    let profileCard = document.querySelector(".profile-card");
    profileCard.style.display = isProfileVisible ? "none" : "block";
    
    // Updating the button text
    let toggleButton = document.querySelector("#toggleButton");
    toggleButton.innerText = isProfileVisible ?  "Show Profile" : "Hide Profile";

  //   to change the boolean value when the fuction call
  isProfileVisible = !isProfileVisible;
};

// Event Listener to add elements
document.addEventListener("DOMContentLoaded", () => {
  let profileCard = document.querySelector(".profile-card");
  let hobbiesList = document.createElement("ul");
  hobbiesList.classList.add("hobbies-list");

  //   to enter append the hobbies in profile card
  profile.hobbies.forEach((i) => {
    let list = document.createElement("li");
    list.textContent = i;
    hobbiesList.appendChild(list);
  });
  profileCard.appendChild(hobbiesList);

  //   fuction for age catagory
  let getAgeCategory = () => {
    let profileCard = document.querySelector(".profile-card");
    let ageCategory = document.createElement("p");
    ageCategory.classList.add("age-category");
    ageCategory.innerText = `Age Catagory : ${
      profile.age > 18 ? "Adult" : "Teenager"
    }`;
    profileCard.appendChild(ageCategory);
  };

  getAgeCategory();

  // toggleButton
  //   const body = document.querySelector("body");
  const toggleButton = document.createElement("button");
  toggleButton.innerText = `Hide Profile`;

  toggleButton.id = "toggleButton";
  document.body.appendChild(toggleButton);

  toggleButton.addEventListener("click", toggleProfileVisibility);
});
