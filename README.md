# Ini Vie Hospitality Frontend

Next.js 16 App Router frontend untuk homepage publik Ini Vie Hospitality.

## Struktur

- `src/app/`: route, layout, metadata, dan global styles.
- `src/app/_components/home/`: komponen khusus homepage dalam private route folder.
- `src/components/layout/`: komponen layout lintas route.
- `src/components/ui/`: primitive UI bersama.
- `public/`: aset statis.

Entrypoint homepage: `src/app/page.tsx`.

## Pengembangan

```bash
npm install
npm run dev
```

## Verifikasi

```bash
npm test
npm run lint
npm run build
```
