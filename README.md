# Platformă de Învățare - Curs 7: Arhitectura Setului de Instrucțiuni

## Structura Platformei

```
ac/
├── index.html          # Pagina principală
├── sectiunea1.html     # Secțiunea I - Introducere în arhitectura setului de instrucțiuni
├── sectiunea2.html     # Secțiunea II - Formatul instrucțiunilor
├── sectiunea3.html     # Secțiunea III - Interdependența set de instrucțiuni
├── css/
│   └── style.css       # Stiluri CSS pentru platformă
├── js/
│   └── main.js         # JavaScript pentru interactivitate
└── README.md           # Acest fișier
```

## Caracteristici

✅ **Design Modern și Responsive**
- Interfață modernă cu Bootstrap 5
- Complet responsive pentru mobile, tabletă și desktop
- Animații și tranziții fluide

✅ **Conținut Complet**
- Toate cele 3 secțiuni din PDF
- Exemple detaliate de cod
- Tabele comparative
- Formule matematice

✅ **Funcționalități**
- Navigare intuitivă
- Buton "Back to Top"
- Indicator de progres
- Copy-to-clipboard pentru blocuri de cod
- Breadcrumb navigation

## Cum să Inserezi Imagini

### Pasul 1: Creează folderul pentru imagini
Creează un folder `images` în directorul `ac/`:
```
ac/
└── images/
```

### Pasul 2: Adaugă imaginile
Pune imaginile tale în folderul `images/`. De exemplu:
- `images/figura-4-1.png`
- `images/diagrama-asi.png`

### Pasul 3: Înlocuiește placeholder-urile
Găsește în HTML-ul paginilor secțiuni ca aceasta:

```html
<div class="image-placeholder">
    <div>
        <p class="text-muted mb-2"><strong>Figura 4.1</strong></p>
        <p class="text-muted">Descriere...</p>
        <p class="text-muted small mt-3">📷 Inserează imaginea aici</p>
    </div>
</div>
```

Și înlocuiește cu:

```html
<div class="image-placeholder">
    <img src="images/figura-4-1.png" alt="Figura 4.1 - Descriere" class="img-fluid">
    <p class="text-muted small mt-2"><strong>Figura 4.1</strong> - Descriere</p>
</div>
```

### Exemplu Complet

**Înainte:**
```html
<div class="image-placeholder">
    <div>
        <p class="text-muted mb-2"><strong>Figura 4.1</strong></p>
        <p class="text-muted">Arhitectura setului de instrucțiuni ca interfață între hardware și software</p>
        <p class="text-muted small mt-3">📷 Inserează imaginea aici</p>
    </div>
</div>
```

**După:**
```html
<div class="image-placeholder">
    <img src="images/figura-4-1.png" alt="Arhitectura setului de instrucțiuni" class="img-fluid">
    <p class="text-muted small mt-2">
        <strong>Figura 4.1</strong> - Arhitectura setului de instrucțiuni ca interfață între hardware și software
        <br><small>(adaptată după [Patterson90])</small>
    </p>
</div>
```

## Locuri unde trebuie inserate imagini

### sectiunea1.html
- **Figura 4.1**: Arhitectura setului de instrucțiuni ca interfață între hardware și software

### sectiunea3.html
- **Diagramă**: Interdependența ASI - Hardware

## Personalizare

### Culori
Poți modifica culorile în `css/style.css`:
```css
:root {
    --primary-color: #007bff;
    --gradient-start: #667eea;
    --gradient-end: #764ba2;
}
```

### Fonturi
Fonturile sunt setate în `css/style.css`:
```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

## Browser Support

Platforma funcționează pe:
- Chrome (ultimele 2 versiuni)
- Firefox (ultimele 2 versiuni)
- Safari (ultimele 2 versiuni)
- Edge (ultimele 2 versiuni)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Note

- Toate fișierele sunt direct în folderul `ac/` conform cerințelor
- Platforma este complet responsive
- Nu sunt dependențe externe (doar CDN-uri pentru Bootstrap și Bootstrap Icons)
- Codul este curat și bine comentat

## Suport

Pentru întrebări sau probleme, verifică:
1. Că toate fișierele sunt în locația corectă
2. Că serverul web rulează (XAMPP)
3. Că path-urile către imagini sunt corecte




