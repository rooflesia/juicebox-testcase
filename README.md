# Juicebox Frontend Developer Assessment

Proyek ini merupakan hasil pengerjaan untuk Juicebox Frontend Developer Assessment. Aplikasi ini dibuat menggunakan Next.js dan mengintegrasikan berbagai teknologi seperti GSAP, Lottie, dan Swiper.js guna menghasilkan animasi dan transisi yang smooth. Fokus utama proyek ini adalah pada implementasi desain pixel-perfect, aksesibilitas, dan penggunaan komponen yang dapat digunakan kembali.

## Fitur Utama

1. **Homepage (Step 1)**
   - Menampilkan Lottie animation dengan animasi GSAP dan smooth scrolling menggunakan Lenis.
   - Terdapat tombol yang mengarahkan ke form/multistep form.

2. **Walkthrough Tutorial Screens (Step 2)**
   - Tutorial yang dibangun menggunakan Swiper.js dengan transisi slide.
   - Pada slide terakhir, tombol berubah menjadi "Get started" untuk lanjut ke step selanjunnya.

3. **Multistep Form (Step 3)**
   - Form yang mengumpulkan data pengguna seperti **First Name** dan **Email Address**.
   - Input form menggunakan komponen `TextInputWithButton` yang mendukung validasi; tombol akan disable dan menampilkan ikon panah ke atas (warna putih) saat input belum valid, dan berubah menjadi aktif dengan ikon panah ke kanan (warna hitam) jika valid.
   - Transisi antar sub-step form (pertama mengisi First Name, lalu Email).

4. **Results Page (Step 5)**
   - Menampilkan ringkasan data input pengguna.

## Instalasi

Ikuti langkah-langkah berikut untuk menjalankan proyek secara lokal:

1. **Clone Repository**
   ```bash
   git clone https://github.com/rooflesia/juicebox-testcase.git
   cd juicebox-testcase

2. **Install Dependencies**
    ```bash
   npm install

3. **Jalankan Development Server**
    ```bash
   npm run dev

## Problem

Ada satu masalah pada projek ini yaitu aset terkait Lotte Animation dimana tekstur tidak sesuai dengan figma, alhasil hanya menampilkan animasi berwarna ungu tanpa tekstur gambar. 
