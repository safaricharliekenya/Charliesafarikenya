[README.txt](https://github.com/user-attachments/files/32770305/README.txt)
# Catalogo sfogliabile

## Come usarlo

1. Metti il tuo PDF nella stessa cartella di `index.html`.
2. Rinomina il PDF in `brochure.pdf`.
3. Apri `index.html` nel browser per fare una prova.
4. Per pubblicarlo gratis usa GitHub Pages.

Struttura:

catalogo_sfogliabile/
├── index.html
└── brochure.pdf

Il modello utilizza PDF.js per leggere il PDF e StPageFlip per l'effetto sfoglio.
Le librerie vengono caricate online tramite CDN, quindi non devi scaricarle.

Per GitHub Pages:
- crea un repository pubblico;
- carica `index.html` e `brochure.pdf`;
- vai in Settings > Pages;
- seleziona Deploy from a branch;
- scegli `main` e `/root`;
- salva.

Dopo la pubblicazione il catalogo sarà raggiungibile dal relativo indirizzo GitHub Pages.
