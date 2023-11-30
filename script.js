const signupBtn = document.getElementById('signupBtn');
const signinBtn = document.getElementById('signinBtn');
const title = document.getElementById('title');
const email = document.getElementById('emailField');
const forgot = document.getElementById('forgot');

signupBtn.addEventListener('click', () =>{

    title.innerHTML = "Sign Up";
    email.style.display = 'block';
    signupBtn.classList.remove('active');
    signinBtn.classList.add('active');
    forgot.style.display = 'none';
})

signinBtn.addEventListener('click', () =>{

    title.innerHTML = "Sign In"
    email.style.display = 'none';
    signupBtn.classList.add('active');
    signinBtn.classList.remove('active');
    forgot.style.display = 'block';
})