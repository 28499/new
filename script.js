// Code for your portfolio website

// Function to display a welcome message
function displayWelcomeMessage() {
    console.log("Welcome to my portfolio website!");
  }
  
  // Function to calculate the years of work experience
  function calculateExperience(startYear) {
    var currentYear = new Date().getFullYear();
    var experience = currentYear - startYear;
    return experience;
  }
  
  // Function to display the years of work experience
  function displayExperience() {
    var startYear = 2010; // Update with your actual start year
    var experience = calculateExperience(startYear);
    console.log("I have " + experience + " years of work experience in hardware and software repair and troubleshooting.");
  }
  
  // Function to handle portfolio item click
  function handlePortfolioItemClick(portfolioItem) {
    console.log("You clicked on the portfolio item: " + portfolioItem);
  }
  
  // Call the functions to display the welcome message and experience
  displayWelcomeMessage();
  displayExperience();
  
  // Add event listeners to portfolio items
  var portfolioItems = document.getElementsByClassName("portfolio-item");
  for (var i = 0; i < portfolioItems.length; i++) {
    portfolioItems[i].addEventListener("click", function() {
      handlePortfolioItemClick(this.innerText);
    });
  }