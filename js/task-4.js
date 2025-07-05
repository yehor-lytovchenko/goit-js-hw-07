const formEl = document.querySelector('.login-form');

const onSubmit = e => {
  e.preventDefault();

  const userEmail = e.currentTarget.elements.email.value.trim();
  const userPassword = e.currentTarget.elements.password.value.trim();

  if (!userEmail || !userPassword) {
    return alert('All form fields must be filled in');
  }
  const userData = {
    email: userEmail,
    password: userPassword,
  };

  console.log(userData);

  e.currentTarget.reset();
};

formEl.addEventListener('submit', onSubmit);
