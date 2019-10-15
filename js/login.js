window.loggedIn = localStorage.getItem('user')
if (!window.loggedIn) {
  document.getElementById('loginContainer').style.display = 'none'
}