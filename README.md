projetkin tarkoitus on harjoitella kännykkäsovelluksien ohjelmointia.
Expolla totetutettuna sovellus toimiii Androidilla ja IOS:llä, mutta tähän mennessä sovellusta on testtu vain androidilla.

## Tietomallit

### Trip (Matka)
- `vehicle` (*)- ajoneuvo
- `odomoterAtBegin` - matkamittarin lukmea matkan alussa
- `odomoterAtEnd` - matkamittarin lukema matkan lopussa
- `timestampAtBegin` - aikaleima matkan alssa
- `timestampAtEnd` - aikalaleima matkan lopussa
- `description` - matkan kuvaus
- `track` - "jälki", johon tallenetaan matkan kulku * Lista GPS-koordinaateista ja aikaleimoista
- `routeDescription` - reitin kuvaus (tyyliin: "Turku-Raisio-Turku")