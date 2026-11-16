# NT-Partner

NT-Partner – internetinė darbo erdvė nekilnojamojo turto (NT) specialistams. Sistema skirta savininkų kontaktams, bendradarbiavimo įrašams, susitikimams ir pastaboms tvarkyti vienoje vietoje.

## Nuorodos

- **Veikianti aplikacija:** https://nt-partner-hzoedyqjj-alina-berdovska.vercel.app/
- **Projekto dokumentacija (Notion):** https://app.notion.com/p/41ab3d8e8ed48141866cea6dd65b6110?pvs=204
- **GitHub saugykla:** https://github.com/alinaberdovska/NT-Partner
- **Zapier automatizacija:** https://zapier.com/editor/00000000-0000-c000-8000-000386843667/published

> Supabase projekto nuoroda dokumentacijoje dar nepatikslinta. Įrašyk tikrą Supabase Dashboard arba projekto URL, o ne Vercel aplikacijos adresą.

## Funkcionalumas

### Autentifikacija
- Registracija el. paštu ir slaptažodžiu.
- Prisijungimas ir atsijungimas.
- Slaptažodžio atkūrimo nuorodos užklausa.

### Sistemos skiltys
- **Apžvalga** – savininkų, bendradarbiavimų, artėjančių susitikimų ir sutarčių statistika.
- **Savininkai** – kontaktų sąrašas, paieška, įrašų kūrimas, redagavimas ir šalinimas.
- **Bendradarbiavimas** – NT objekto adresas, prašoma kaina, prioritetas, susitikimo data, pastabos ir būsena.
- **Susitikimai** – susitikimų datos ir susijusi informacija.
- **Užrašai** – bendradarbiavimo įrašų pastabų peržiūra.

## Technologijos

- React 19
- Vite 8
- JavaScript (ES modules)
- Supabase (Auth ir duomenų saugojimas)
- @supabase/supabase-js
- Vercel (diegimas)
- Zapier (Webhook → Filter → Paths → Gmail)
- GitHub (versijų kontrolė)

## Duomenų struktūra

Programoje naudojamos dvi pagrindinės Supabase lentelės:

| Lentelė | Paskirtis |
|---|---|
| owners | Savininkų kontaktinė informacija: vardas, telefonas, el. paštas |
| cooperations | Bendradarbiavimo duomenys: savininko ID, objekto adresas, prašoma kaina, prioritetas, susitikimo data, pastabos ir būsena |

Bendradarbiavimo įrašas susiejamas su savininku per owner_id. Naudojamos būsenos: pending (laukiama) ir signed (pasirašyta). Prioritetai: normal ir urgent.

Duomenų prieiga turi būti apsaugota Supabase Row Level Security (RLS) politikomis. Prieš diegimą patikrink, kad RLS įjungtas abiejose lentelėse ir politikos atitinka numatytą naudotojų prieigos modelį.

## Paleidimas lokaliai

### Reikalavimai
- Node.js (rekomenduojama LTS versija)
- npm
- Supabase projektas ir jo aplinkos kintamieji

### 1. Nuklonuokite saugyklą

```bash
git clone https://github.com/alinaberdovska/NT-Partner.git
cd NT-Partner
```

### 2. Įdiekite priklausomybes

```bash
npm install
```

### 3. Sukonfigūruokite aplinkos kintamuosius

Sukurkite .env failą projekto šakniniame kataloge, remdamiesi .env.example:

```env
VITE_SUPABASE_URL=https://<project-ref>.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=<your-supabase-publishable-key>
```

Naudokite savo Supabase projekto reikšmes. Niekada nekelkite slaptų raktų ar tikro .env failo į viešą GitHub saugyklą. Kliento pusėje naudokite tik viešą publishable/anon raktą ir užtikrinkite duomenų apsaugą RLS politikomis.

### 4. Paleiskite kūrimo serverį

```bash
npm run dev
```

Vite pateiks vietinį adresą terminale.

## Naudingos komandos

| Komanda | Paskirtis |
|---|---|
| npm run dev | Paleidžia kūrimo serverį |
| npm run build | Sukuria produkcinę versiją |
| npm run preview | Peržiūri produkcinį build lokaliai |
| npm run lint | Paleidžia ESLint kodo patikrą |

## Diegimas

Aplikacija publikuojama per Vercel. Vercel projekto nustatymuose turi būti sukonfigūruoti šie aplinkos kintamieji:

- VITE_SUPABASE_URL
- VITE_SUPABASE_PUBLISHABLE_KEY

Pakeitus aplinkos kintamuosius, prireikus atlikite naują diegimą (redeploy).

## Automatizacija

Zapier scenarijaus struktūra:

1. Webhook – priima pradinį įvykį.
2. Filter – patikrina sąlygas.
3. Paths – parenka atitinkamą vykdymo šaką.
4. Gmail – atlieka el. laiško veiksmą.

Automatizacijos nuoroda pateikta skiltyje „Nuorodos“. Faktinį scenarijaus veikimą ir laiškų siuntimą patvirtinkite Zapier Task History įrašais.

## Dokumentacija ir veiklos žurnalas

Išsamesnė projekto dokumentacija, technologijų aprašymas, duomenų modelis, diegimo informacija, veiklos žurnalo ir testavimo lentelės pateiktos [Notion projekto dokumentacijoje](https://app.notion.com/p/41ab3d8e8ed48141866cea6dd65b6110?pvs=204).

## Projekto struktūra

```text
NT-Partner/
├── public/
├── src/
│   ├── assets/
│   ├── lib/
│   │   └── supabase.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```
