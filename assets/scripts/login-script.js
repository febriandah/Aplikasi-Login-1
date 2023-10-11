/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/*coment :membuat variabel untuk menyimpan informasi dan password. */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/* coment : menambhakan aksi klik dalam button. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /* coment :  mendapatkan nllai dari masing masing input (email dan password) ketika tombol di tekan. */
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;

  /* coment : memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
  if (email == expectedEmail && password == expectedPassword) {

    /* coment : jika sesuai maka program akan berpindah ke halaman home */
    goToHome();
    
  } else {

    /* coment : namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah. */ 
    showPopUp();
  }
});
