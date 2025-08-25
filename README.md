##  Aprašymas 
Programuotojų paieškai pagal lokaciją. 
Sistema leidžia:
- **GET** - Ieškoti programuotojų pagal koordinates
- **POST** - Pridėti naują programuotoją
- **PUT** - Redaguoti programuotojo duomenis  
- **DELETE** - Ištrinti programuotoją

##  Paleidimas lokaliai (Local Deployment)

### 1. Įdiegti priklausomybes
```bash
npm install
```

### 2. Paleisti serverį (Start server):

**Produkcijai :**
```bash
npm start
```

**Vystymo režimas :**
```bash
npm run dev
```

### 3. Atidaryti naršyklėje
```
http://localhost:3002
```

##  Naudojimas 

### Koordinačių pavyzdžiai testavimui:
- **Vilnius**: Ilguma: 54.68916, Platuma: 25.2798
- **Kaunas**: Ilguma: 54.8985, Platuma: 23.9036
- **Klaipėda**: Ilguma: 55.7033, Platuma: 21.1443

### Funkcionalumas:
1. **Paieška** - Įveskite koordinates ir spauskite "Rasti programuotojus"
2. **Pridėjimas** - Spauskite "Pridėti naują programuotoją" mygtuką
3. **Redagavimas** - Spauskite "Redaguoti" prie norimo programuotojo
4. **Trynimas** - Spauskite "Ištrinti" prie norimo programuotojo

##  Technologijos (Technologies)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (su Mongoose ODM)
- **Frontend**: React (legacy version), EJS templates
- **Styling**: Custom CSS

##  Projekto struktūra 
```
rest-api-1/
├── app.js              # Pagrindinis serverio failas
├── models/
│   └── programuotojas.js   # Programuotojo modelis
├── controllers/
│   └── controller.js   # API kontroleriai
├── routes/
│   └── apiRoutes.js   # API maršrutai
├── views/
│   ├── home.ejs      # Pagrindinis puslapis
│   └── partials/     # EJS dalys
├── public/
│   └── style.css     # Stiliai
└── package.json      # Projekto konfigūracija
```
## API Endpoints

| Metodas | Kelias | Aprašymas |
|---------|--------|-----------|
| GET | `/api/programuotojai/?lng=X&lat=Y` | Gauti programuotojus pagal koordinates |
| POST | `/api/programuotojai` | Pridėti naują programuotoją |
| PUT | `/api/programuotojai/:id` | Atnaujinti programuotoją |
| DELETE | `/api/programuotojai/:id` | Ištrinti programuotoją |

##  Duomenų struktūra 
```javascript
{
    vardas: String,        // Programuotojo vardas
    tech: [String],        // Technologijų masyvas
    laisvas: Boolean,      // Ar laisvas (true/false)
    location: {
        type: 'Point',
        coordinates: [lng, lat]  // [ilguma, platuma]
    }
}
```

## Dėmesio 
- MongoDB Atlas duomenų bazė jau sukonfigūruota 
- Autentifikacija nereikalinga 


## Atliktos užduotys 
POST forma ir funkcionalumas - pridėti programuotoją  
PUT forma ir funkcionalumas - redaguoti duomenis  
DELETE mygtukas - ištrinti programuotoją  
Vartotojo sąsajos (UI) implementacija  
Lietuvių kalbos išlaikymas kode  

## Problemų sprendimas 

### Porto Konfliktai ir Sprendimai

####  Pakeisti PORT

Jei 3002 portas užimtas, galite pakeisti į kitą (3003, 3004)

1. **Atidarykite `app.js` failą**
2. **Raskite eilutę:**
```
const PORT = process.env.PORT || 3002
```
3. **Pakeiskite į norimą portą:**
.const PORT = process.env.PORT || 3002  // arba 3003, 3004
```
4. **Išsaugokite failą ir paleiskite serverį iš naujo**


