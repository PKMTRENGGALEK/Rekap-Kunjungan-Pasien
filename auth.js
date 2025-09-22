// auth.js
(function () {
  // Ambil data login dari sessionStorage
  const savedData = sessionStorage.getItem("userCredential");

  // Daftar email yang diizinkan
  const allowedEmails = [
    "harapan.triple.x@gmail.com",
       
        "baaltazard89@gmail.com",
       
        "marjiantomarjianto91@gmail.com",
       
  ];

  // Jika belum login → lempar balik ke index.html
  if (!savedData) {
    window.location.href = "index.html";
    return;
  }

  // Parse data login
  let data;
  try {
    data = JSON.parse(savedData);
  } catch (e) {
    sessionStorage.removeItem("userCredential");
    window.location.href = "index.html";
    return;
  }

  // Jika email tidak ada di whitelist → logout & redirect
  if (!allowedEmails.includes(data.email)) {
    sessionStorage.removeItem("userCredential");
    window.location.href = "index.html";
  }
})();
