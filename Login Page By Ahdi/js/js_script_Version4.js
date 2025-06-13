// Theme toggle with soft transition
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

// Tab switch login method (Siswa/Guru)
const tabSiswa = document.getElementById('tab-siswa');
const tabGuru = document.getElementById('tab-guru');
const formSiswa = document.getElementById('loginFormSiswa');
const formGuru = document.getElementById('loginFormGuru');
tabSiswa.addEventListener('click', () => {
  tabSiswa.classList.add('active');
  tabGuru.classList.remove('active');
  formSiswa.classList.add('active');
  formGuru.classList.remove('active');
});
tabGuru.addEventListener('click', () => {
  tabGuru.classList.add('active');
  tabSiswa.classList.remove('active');
  formGuru.classList.add('active');
  formSiswa.classList.remove('active');
});

// Password visibility toggle (untuk dua form, auto detect)
document.querySelectorAll('.toggle-password').forEach(function(toggle) {
  toggle.addEventListener('click', function() {
    const input = this.parentNode.querySelector('input[type="password"], input[type="text"]');
    if (input.type === "password") {
      input.type = "text";
      this.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
      input.type = "password";
      this.innerHTML = '<i class="fas fa-eye"></i>';
    }
  });
});

// Online/offline status
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

// --- UX/Animasi tambahan ---
// Floating label: autofill support (untuk browser autofill)
window.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.float-label-group input').forEach(function(input){
    if (input.value) input.classList.add('has-val');
    input.addEventListener('input', function(){
      if (this.value) this.classList.add('has-val');
      else this.classList.remove('has-val');
    });
  });
});

// Dummy error validation & loading animasi
function showInputError(form, selector, msg) {
  let el = form.querySelector(selector);
  if (!el) return;
  el.textContent = msg || "";
  el.style.display = msg ? "block" : "none";
}
function clearInputError(form, selector) {
  let el = form.querySelector(selector);
  if (el) { el.textContent = ""; el.style.display = "none"; }
}
function showToast(msg, type) {
  if (document.querySelector('.toast')) document.querySelector('.toast').remove();
  let toast = document.createElement('div');
  toast.className = 'toast toast-' + (type||'error');
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = 0; setTimeout(()=>toast.remove(),400); }, 2500);
}

// Siswa login
formSiswa.addEventListener('submit', function(e){
  clearInputError(formSiswa, '.input-error');
  e.preventDefault();
  // Dummy validasi
  let user = formSiswa.querySelector('[name="username"]');
  let pass = formSiswa.querySelector('[name="password"]');
  let error = false;
  if (!user.value || user.value.length < 3) {
    showInputError(formSiswa, '.input-error.user', "Username minimal 3 karakter!");
    error = true;
  }
  if (!pass.value || pass.value.length < 4) {
    showInputError(formSiswa, '.input-error.pass', "Password minimal 4 karakter!");
    error = true;
  }
  if (error) return;
  // Loading animasi
  let btn = formSiswa.querySelector('.btn-login');
  btn.classList.add('loading');
  btn.innerHTML = '<span class="loader"></span>Login...';
  setTimeout(function(){
    btn.classList.remove('loading');
    btn.innerHTML = 'Login';
    // Dummy: selalu gagal
    showToast("Login gagal! Username atau password salah.", "error");
    showInputError(formSiswa, '.input-error.pass', "Username/password salah.");
  }, 1400);
});
// Guru login
formGuru.addEventListener('submit', function(e){
  clearInputError(formGuru, '.input-error');
  e.preventDefault();
  let pass = formGuru.querySelector('[name="guru_password"]');
  if (!pass.value || pass.value.length < 6) {
    showInputError(formGuru, '.input-error.guru', "Password minimal 6 karakter!");
    return;
  }
  let btn = formGuru.querySelector('.btn-login');
  btn.classList.add('loading');
  btn.innerHTML = '<span class="loader"></span>Login...';
  setTimeout(function(){
    btn.classList.remove('loading');
    btn.innerHTML = 'Login Guru';
    // Dummy: selalu sukses
    showToast("Login Guru berhasil!", "success");
    //window.location = "/dashboard"; // contoh redirect
  }, 1300);
});

// Input error element (inject jika belum ada)
['formSiswa','formGuru'].forEach(function(id){
  let form = document.getElementById(id==='formSiswa'?'loginFormSiswa':'loginFormGuru');
  if (form) {
    if (id==='formSiswa') {
      // Untuk username dan password
      let inp1 = document.createElement('div');
      inp1.className = 'input-error user'; form.querySelector('.float-label-group:nth-child(1)').after(inp1);
      let inp2 = document.createElement('div');
      inp2.className = 'input-error pass'; form.querySelector('.float-label-group:nth-child(2)').after(inp2);
    } else {
      let inp1 = document.createElement('div');
      inp1.className = 'input-error guru'; form.querySelector('.float-label-group').after(inp1);
    }
  }
});