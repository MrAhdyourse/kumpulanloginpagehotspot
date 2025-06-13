# Kumpulan Login Page Hotspot Mikrotik

Selamat datang di **Kumpulan Login Page Hotspot Mikrotik**!  
Repositori ini menyediakan berbagai template halaman login (login page) untuk Hotspot Mikrotik yang modern, responsif, dan mudah dikustomisasi.  
Cocok untuk kebutuhan personal, bisnis, sekolah, cafe, hotel, dan berbagai tempat publik lainnya.

---

## 🚀 Fitur Unggulan

- **Desain Modern & Responsif**  
  Setiap template menggunakan HTML5, CSS3, dan JavaScript modern, serta mendukung tampilan mobile.
- **Mudah Dikustomisasi**  
  Struktur kode yang rapi dan mudah dipahami, sehingga Anda dapat mengubah logo, warna, dan teks sesuai kebutuhan.
- **Integrasi Otomatis dengan Mikrotik**  
  Sudah disesuaikan dengan parameter login Mikrotik, sehingga langsung bisa digunakan.
- **Gratis & Open Source**  
  Silakan gunakan, modifikasi, dan distribusikan sesuai kebutuhan Anda.

---

## 📂 Struktur Direktori

```
kumpulanloginpagehotspot/
│
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
│
├── template1/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── template2/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── template3/
│   └── ...
│
├── README.md
└── LICENSE
```

---

## 📸 Preview Template

| Template | Preview | Keterangan |
|----------|---------|------------|
| Template 1 | ![Preview 1](assets/images/preview1.png) | Minimalis, cocok untuk cafe & sekolah |
| Template 2 | ![Preview 2](assets/images/preview2.png) | Modern, cocok untuk hotel & kantor |
| Template 3 | ![Preview 3](assets/images/preview3.png) | Elegan, cocok untuk publik & event |

---

## ⚙️ Cara Penggunaan

1. **Clone repositori ini**
   ```bash
   git clone https://github.com/username/kumpulanloginpagehotspot.git
   ```
2. **Pilih template yang diinginkan**
3. **Edit file `index.html` dan `style.css` sesuai kebutuhan**
4. **Upload ke Mikrotik**
   - Masuk ke Winbox/WebFig
   - Buka menu `Files`
   - Upload seluruh folder template ke direktori `hotspot`
5. **Set halaman login**
   - Pastikan file `login.html` pada Mikrotik mengarah ke template yang diupload

---

## 📝 Contoh Kustomisasi

**Mengganti Logo:**
```html
<!-- index.html -->
<img src="assets/images/logo.png" alt="Logo Hotspot">
```
Ganti `logo.png` dengan logo Anda.

**Mengubah Warna Tema:**
```css
/* style.css */
:root {
  --primary-color: #1e90ff;
  --secondary-color: #ffffff;
}
```
Ubah kode warna sesuai branding Anda.

---

## 🔒 Integrasi dengan Mikrotik

Pastikan form login menggunakan parameter berikut:
```html
<form action="$(link-login-only)" method="post">
  <input type="hidden" name="dst" value="$(link-orig)">
  <input type="hidden" name="popup" value="true">
  <input type="text" name="username" placeholder="Username">
  <input type="password" name="password" placeholder="Password">
  <button type="submit">Login</button>
</form>
```

---

## 💡 Tips & Trik

- Gunakan gambar dengan ukuran kecil agar loading lebih cepat.
- Tambahkan pesan selamat datang atau promosi pada halaman login.
- Gunakan favicon untuk tampilan lebih profesional.
- Cek kompatibilitas di berbagai perangkat (PC, tablet, smartphone).

---

## 🛠️ Tools yang Digunakan

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Bootstrap](https://getbootstrap.com/) *(opsional pada beberapa template)*

---

## 🤝 Kontribusi

Kontribusi sangat terbuka!  
Silakan fork, buat branch, dan pull request untuk menambahkan template baru atau memperbaiki bug.

---

## 📄 Lisensi

Repositori ini menggunakan lisensi [MIT](LICENSE).

---

## 📬 Kontak & Dukungan

Jika ada pertanyaan, saran, atau ingin request template khusus, silakan hubungi:

- Email: yourname@email.com
- Telegram: [@yourtelegram](https://t.me/yourtelegram)
- Instagram: [@yourinstagram](https://instagram.com/yourinstagram)

---

## ⭐ Jangan lupa untuk memberi bintang pada repositori ini jika bermanfaat!

---

## 🔗 Referensi

- [Dokumentasi Hotspot Mikrotik](https://wiki.mikrotik.com/wiki/Manual:IP/Hotspot)
- [Forum Mikrotik Indonesia](https://mikrotik.id/)
- [Stack Overflow](https://stackoverflow.com/)

---

## 📢 Catatan

- Pastikan selalu backup konfigurasi Mikrotik sebelum melakukan perubahan.
- Template ini hanya untuk halaman login, bukan untuk bypass keamanan.
- Kustomisasi sepenuhnya menjadi tanggung jawab pengguna.

---

Terima kasih telah menggunakan **Kumpulan Login Page Hotspot Mikrotik**!  
Semoga bermanfaat untuk kebutuhan jaringan Anda.

---
