
  function changeSlide(index) {
    var slides = document.querySelectorAll('.slide');
    var dots = document.querySelectorAll('.dot');
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
      dots[i].classList.remove('active');
    }
    slides[index].style.display = 'block';
    dots[index].classList.add('active');
  }



        // Get the modal elements
const loginModal = document.getElementById('loginModal');
const signUpModal = document.getElementById('signupModal');

// Get the forms
const loginForm = loginModal.querySelector('form');
const signUpForm = signUpModal.querySelector('form');

// Add event listeners to the forms
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginForm.querySelector('#floatingInput').value;
  const password = loginForm.querySelector('#floatingPassword').value;

  // Client-side validation
  if (email && password) {
    // Send a request to the server to login
    // Replace with your actual API endpoint
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.success) {
          // Login successful, close the modal and redirect to the dashboard
          loginModal.classList.remove('show');
          window.location.href = '/dashboard';
        } else {
          // Login failed, display an error message
          alert('Invalid email or password');
        }
      })
    .catch((error) => {
        console.error(error);
      });
  } else {
    alert('Please fill in all the fields');
  }
});
  


signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = signUpForm.querySelector('#exampleInputEmail1').value;
  const password = signUpForm.querySelector('#exampleInputPassword1').value;
  const confirmPassword = signUpForm.querySelector('#exampleInputPassword2').value;

  // Client-side validation
  if (email && password && confirmPassword) {
      if (password === confirmPassword) {
          // Send a request to the server to sign up
          // Replace with your actual API endpoint
          fetch('/api/signup', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, password }),
          })
              .then((response) => response.json())
              .then((data) => {
                  if (data.success) {
                      // Sign up successful, close the modal and redirect to the login page
                      signUpModal.classList.remove('show');
                      window.location.href = '/login';
                  } else {
                      // Sign up failed, display an error message
                      alert('Email already exists');
                  }
              })
              .catch((error) => {
                  console.error(error);
              });
      } else {
          alert('Passwords do not match');
      }
  } else {
      alert('Please fill in all the fields');
  }
});
  