// Theme toggle + status (reuse dari script.js)
const themeToggle = document.getElementById('themeToggle');
const isDark = () => document.body.classList.contains('dark-mode');
function setTheme(dark) {
  if (dark) {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    document.body.classList.remove('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
  try { localStorage.setItem('theme-dark', dark ? '1' : '0'); } catch(e){}
}
themeToggle.addEventListener('click', () => setTheme(!isDark()));
try {
  const saved = localStorage.getItem('theme-dark');
  if (saved === '1') setTheme(true);
  else setTheme(false);
} catch(e){}
const statusElem = document.getElementById('netStatus');
function updateStatus() {
  if (navigator.onLine) {
    statusElem.textContent = 'ONLINE';
    statusElem.classList.add('online');
    statusElem.classList.remove('offline');
  } else {
    statusElem.textContent = 'OFFLINE';
    statusElem.classList.add('offline');
    statusElem.classList.remove('online');
  }
}
window.addEventListener('online',  updateStatus);
window.addEventListener('offline', updateStatus);
updateStatus();
// Toggle PIN visibility
document.querySelectorAll('.toggle-password').forEach(function(toggle) {
  toggle.addEventListener('click', function() {
    const input = this.parentNode.querySelector('input');
    if (input.type === "password" || input.type === "text") {
      input.type = (input.type === "password") ? "text" : "password";
      this.innerHTML = (input.type === "text") ? '<i class="fas fa-eye-slash"></i>' : '<i class="fas fa-eye"></i>';
    }
  });
});
// Error & loading animasi
function showInputError(form, msg) {
  let el = form.querySelector('.input-error.remote');
  el.textContent = msg || "";
  el.style.display = msg ? "block" : "none";
}
function showToast(msg, type) {
  if (document.querySelector('.toast')) document.querySelector('.toast').remove();
  let toast = document.createElement('div');
  toast.className = 'toast toast-' + (type||'error');
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = 0; setTimeout(()=>toast.remove(),400); }, 2500);
}
const remoteForm = document.getElementById('remoteLoginForm');
remoteForm.addEventListener('submit', function(e){
  showInputError(remoteForm,""); e.preventDefault();
  let user = remoteForm.querySelector('[name="remuser"]');
  let pin = remoteForm.querySelector('[name="pin"]');
  if (!user.value || user.value.length < 3) {
    showInputError(remoteForm,"Username minimal 3 karakter!");
    return;
  }
  if (!pin.value || pin.value.length < 4) {
    showInputError(remoteForm,"PIN/OTP minimal 4 digit!");
    return;
  }
  let btn = remoteForm.querySelector('.btn-login');
  btn.classList.add('loading');
  btn.innerHTML = '<span class="loader"></span>Login...';
  setTimeout(function(){
    btn.classList.remove('loading');
    btn.innerHTML = 'Remote Login';
    showToast("PIN/OTP salah atau kadaluarsa.", "error");
    showInputError(remoteForm,"PIN/OTP salah atau kadaluarsa.");
  }, 1300);
});