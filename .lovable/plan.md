## Masalah

`OctopusMark.tsx` saat ini dibuat dari satu `<path>` panjang yang menggabungkan kepala + 6 tentakel sekaligus. Kurva tentakel ditulis manual koordinat-per-koordinat, sehingga:

- Kepala terlalu kecil dibanding area tentakel (proporsi pear-shape, bukan bulat seperti referensi)
- Tentakel panjang-pendeknya tidak konsisten, ada yang overlap aneh & melilit balik
- Mata terlalu turun & terlalu besar relatif terhadap kepala
- Bercak sucker hanya di satu sisi atas, membuat siluet asimetris

## Rencana redesign

Tulis ulang `src/components/landing/OctopusMark.tsx` dengan pendekatan **komponen terpisah** alih-alih satu path raksasa:

1. **Kepala**: satu `<ellipse>` / `<path>` bulat-membulat (proporsi ±60% tinggi viewBox), dengan sedikit lebih lebar dari tinggi supaya terlihat "menggembung" khas octopus kartun.
2. **Tentakel**: 6 buah, di-generate dari array konfigurasi `{ angle, length, curl }`. Masing-masing dirender sebagai `<path>` stroke tebal dengan `stroke-linecap="round"` — ini jauh lebih mudah dijaga proporsinya daripada filled path. Tentakel disusun simetris 3 kiri / 3 kanan, panjang menurun ke tengah supaya siluet seperti referensi.
3. **Mata**: dua lingkaran proporsional (radius ~8, bukan 13), posisi di sepertiga atas kepala. Highlight putih kecil offset kiri-atas.
4. **Sucker dots**: dipindah ke bagian dahi/atas kepala dengan pola lebih natural (cluster kecil), atau dihilangkan agar mascot lebih clean — saya pilih cluster kecil 4 titik.
5. **viewBox** tetap `0 0 240 240`, prop `size`, `className`, `monochrome` tetap kompatibel — tidak ada perubahan API, jadi `Hero`, `Nav`, `Footer` tidak perlu diubah.
6. Animasi `float` yang sudah ada di `styles.css` tetap dipakai dari sisi pemanggil.

## Verifikasi

Setelah edit, ambil screenshot preview untuk konfirmasi bentuk sudah proporsional di hero & nav (ukuran kecil).

## File yang diubah

- `src/components/landing/OctopusMark.tsx` (rewrite isi, API tetap)
