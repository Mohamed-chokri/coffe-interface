const searchIcon = document.getElementById('search');
const searchBox = document.getElementById('searchBox');

// Add click event listener to the search icon
searchIcon.addEventListener('click', function() {
  // Toggle the visibility of the search box
  if (searchBox.style.display === 'none') {
    searchBox.style.display = 'block';
} else {
    searchBox.style.display = 'none';
  }
});