## Instalatie
Download en installeer:

GIT (https://git-scm.com/downloads)

Node (https://nodejs.org/en/)

Slider project

## Afbeeldingen
1) Kies afbeeldingen (resolutie `1920x1080` aangeraden voor het beste resultaat), het maakt niet uit hoeveel.
2) Zet de afbeeldingen in `/public/images` (en geef ze bijv de naam 'image1', 'image2' ect.)
3) Ga naar `/public` en open `slider.js` met een text editor (bijv. nodepad++ (https://notepad-plus-plus.org/downloads/))
4) Verander de links/routes binnen `slider.js` (je kan zoveel afbeeldingen gebruiken als je maar wilt)

Ex: 

```
    imgsource = [
        './images/thiswouldbeimage1.jpg',
        './images/thiswouldbeimage2.jpg',
        './images/thiswouldbeimage3.jpg',
        './images/thiswouldbeimage4.jpg',
        './images/thiswouldbeimage5.jpg'
    ]
```

5) Sla je wijzigingen op

## Opzeten slider

1) Open `'image-slider'` met verkenner en rechter muisklik op het witte vlak van verkenner
en kies 'Git Bash here'.
2) Type `npm i --save` en dan `'node app.js'` in GIT bash en druk op enter. Dit start de web server op.
3) Je ziet nu een url in beeld kome binnen Git bash. Open de link en de slider begint met je eigen afbeeldingen.
(Ex: http://localhost:3000). Om dan vervolgens volledig scherm in te gaan druk op `F11`.