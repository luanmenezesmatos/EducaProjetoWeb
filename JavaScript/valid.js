const email = document.querySelector('#email');
const password = document.querySelector('#password');
const svg = document.querySelectorAll('.layout_container_svg_input');
const password_2 = document.querySelector('#password_2')

password.addEventListener('focus', () => {
  if(password.value.length === 0) {
    password.style.borderRight = '1px solid red';
    password.style.borderTop= '1px solid red';
    password.style.borderBottom = '1px solid red';
    svg[1].style.borderLeft = '1px solid red';
    svg[1].style.borderTop = '1px solid red';
    svg[1].style.borderBottom = '1px solid red';
  } 
})
password_2.addEventListener('focus', () => {
  if(password.value.length === 0) {
    password_2.style.borderRight = '1px solid red';
    password_2.style.borderTop= '1px solid red';
    password_2.style.borderBottom = '1px solid red';
    svg[2].style.borderLeft = '1px solid red';
    svg[2].style.borderTop = '1px solid red';
    svg[2].style.borderBottom = '1px solid red';
  } 
})
email.addEventListener('focus', () => {
  if(password.value.length === 0) {
    email.style.borderRight = '1px solid red';
    email.style.borderTop= '1px solid red';
    email.style.borderBottom = '1px solid red';
    svg[0].style.borderLeft = '1px solid red';
    svg[0].style.borderTop = '1px solid red';
    svg[0].style.borderBottom = '1px solid red';
  } 
})
password.addEventListener('change', () => {
  if(password.value.length < 8) {
    password.style.borderRight = '1px solid red';
    password.style.borderTop= '1px solid red';
    password.style.borderBottom = '1px solid red';
    svg[1].style.borderLeft = '1px solid red';
    svg[1].style.borderTop = '1px solid red';
    svg[1].style.borderBottom = '1px solid red';
  } else {
    password.style.borderRight = '1px solid green';
    password.style.borderTop= '1px solid green';
    password.style.borderBottom = '1px solid green';
    svg[1].style.borderLeft = '1px solid green';
    svg[1].style.borderTop = '1px solid green';
    svg[1].style.borderBottom = '1px solid green';
  }
})
email.addEventListener('change', () => {
  let emailValue = email.value
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if(emailRegex.test(emailValue)) {
    email.style.borderRight = '1px solid green';
    email.style.borderTop= '1px solid green';
    email.style.borderBottom = '1px solid green';
    svg[0].style.borderLeft = '1px solid green';
    svg[0].style.borderTop = '1px solid green';
    svg[0].style.borderBottom = '1px solid green';
  } else {
    email.style.borderRight = '1px solid red';
    email.style.borderTop= '1px solid red';
    email.style.borderBottom = '1px solid red';
    svg[0].style.borderLeft = '1px solid red';
    svg[0].style.borderTop = '1px solid red';
    svg[0].style.borderBottom = '1px solid red';
  }
})
password_2.addEventListener('change', () => {
  if(password_2.value !== password.value) {
    password_2.style.borderRight = '1px solid red';
    password_2.style.borderTop= '1px solid red';
    password_2.style.borderBottom = '1px solid red';
    svg[2].style.borderLeft = '1px solid red';
    svg[2].style.borderTop = '1px solid red';
    svg[2].style.borderBottom = '1px solid red';
  } else if(password_2.value === password.value) {
    password_2.style.borderRight = '1px solid green';
    password_2.style.borderTop= '1px solid green';
    password_2.style.borderBottom = '1px solid green';
    svg[2].style.borderLeft = '1px solid green';
    svg[2].style.borderTop = '1px solid green';
    svg[2].style.borderBottom = '1px solid green';
  }
})