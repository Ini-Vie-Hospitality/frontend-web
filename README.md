# Ini Vie Hospitality Frontend

Frontend website publik Ini Vie Hospitality. Stack: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS, dan Node.js.

## Persyaratan

- Node.js `20+`
- npm
- Backend CMS Laravel dapat diakses melalui `CMS_API_URL`

## Instalasi

```bash
cd frontend-web
npm ci
```

Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Linux/macOS:

```bash
cp .env.example .env
```

Sesuaikan `.env` dengan alamat CMS lokal atau production.

## Environment

| Variabel | Kegunaan |
| --- | --- |
| `CMS_API_URL` | Base URL Laravel CMS; dipakai loader homepage dan AI Concierge |
| `CMS_MEDIA_HOST` | Host media CMS pada `/storage/**`; fallback ke `CMS_API_URL` |
| `CMS_APP_ORIGIN` | Origin CMS untuk `Content-Security-Policy` frame ancestors |
| `HOMEPAGE_PREVIEW_SECRET` | Secret validasi preview; harus sama dengan CMS |
| `FRONTEND_REVALIDATE_SECRET` | Secret endpoint revalidate; harus sama dengan CMS |

Contoh lokal:

```dotenv
CMS_API_URL=http://localhost:8000
CMS_MEDIA_HOST=http://localhost:8000
CMS_APP_ORIGIN=http://localhost:8000
HOMEPAGE_PREVIEW_SECRET=
FRONTEND_REVALIDATE_SECRET=
```

Variabel ini digunakan server-side. Jangan commit `.env`, credential production, atau mengekspose secret melalui `NEXT_PUBLIC_`.

## Menjalankan Aplikasi

```bash
npm run dev
```

Buka `http://localhost:3000`.

| Command | Kegunaan |
| --- | --- |
| `npm run dev` | Development server port `3000` |
| `npm run build` | Build production Next.js |
| `npm start` | Menjalankan build production |
| `npm test` | Unit test Node.js |
| `npm run lint` | Lint TypeScript dan React |

## Fitur

### Homepage Berbasis CMS

Homepage memuat konten published dari Laravel CMS, lalu menggunakan fallback konten lokal jika CMS tidak tersedia. Section tersedia:

- Hero dan booking bar
- Navbar dan mobile menu
- Homepage popup
- Brand Introduction
- Featured Properties
- Culinary Journey
- Wellness Harmony
- Membership
- Our Story
- Special Offers
- What's New / journal
- Featured In
- FAQ
- Footer

Interaksi mencakup scroll animation, scroll-scrub story, reveal motion, booking flow, FAQ accordion, dan navigasi responsif.

### Integrasi CMS dan Revalidation

Data homepage diambil dari:

```text
GET ${CMS_API_URL}/api/homepage
```

CMS memanggil endpoint berikut setelah publikasi:

```text
POST /api/revalidate
```

Request wajib membawa header `Authorization: Bearer <FRONTEND_REVALIDATE_SECRET>`. Endpoint membersihkan cache homepage melalui tag dan path `/`.

### Preview Homepage

CMS mengarahkan preview ke:

```text
/preview?expires=<timestamp>&signature=<signature>
```

Route memvalidasi signature menggunakan `HOMEPAGE_PREVIEW_SECRET`, lalu memuat data draft dari CMS.

### AI Concierge

Frontend menyediakan proxy server-side:

```text
POST /api/concierge
```

Request diteruskan ke `${CMS_API_URL}/api/concierge/chat`. Credential provider AI tetap berada di backend CMS, bukan browser.

### Google Analytics

Google Analytics dimuat setelah interaksi browser melalui `next/script`. Measurement ID berada pada komponen analytics frontend. Dashboard Analytics dan credential Google dikelola backend CMS.

### Media CMS

Next.js Image menerima host yang dikonfigurasi melalui `CMS_MEDIA_HOST` atau `CMS_API_URL`, beserta host statis yang telah didaftarkan pada `next.config.ts`.

## Struktur Direktori

- `src/app/`: route App Router, layout, metadata, dan API route.
- `src/app/_components/home/`: komponen homepage.
- `src/components/layout/`: layout lintas route.
- `src/components/ui/`: UI shared, Concierge, dan reveal motion.
- `src/content/homepage/`: loader, type, fallback, dan preview validation.
- `public/`: aset statis.

Entrypoint homepage: `src/app/page.tsx`.

## Production

```bash
npm ci
npm run build
npm start
```

Pastikan environment production tersedia sebelum build, reverse proxy meneruskan domain ke Next.js, dan `CMS_API_URL` dapat dijangkau server frontend.

## Verifikasi

```bash
npm test
npm run lint
npm run build
```

Test mencakup loader homepage, konfigurasi Next.js, booking flow, animasi, navigasi, FAQ, membership, journal, dan Concierge.

## Troubleshooting

### Homepage menampilkan fallback

Periksa `CMS_API_URL`, koneksi server ke CMS, route `/api/homepage`, dan log Next.js.

### Gambar CMS gagal dimuat

Pastikan `CMS_MEDIA_HOST` benar dan file tersedia pada `/storage/**`.

### Preview menghasilkan 404

Pastikan `HOMEPAGE_PREVIEW_SECRET` sama antara frontend dan CMS serta parameter preview masih valid.

### Publish CMS belum memperbarui homepage

Pastikan `FRONTEND_REVALIDATE_SECRET` sama pada kedua aplikasi dan CMS dapat mengakses `/api/revalidate`.
