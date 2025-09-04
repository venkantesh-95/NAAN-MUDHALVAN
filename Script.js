document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('formMsg').textContent = "Thank you for contacting!";
});
