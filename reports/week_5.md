### Meno, Priezvisko:
Matej, Novota

### Názov projektu:
Kockatykalendar.sk

### Tag v GitHube:
version_week_5

### Týždeň, za ktorý sa robí:
18.3.2024 – 24.3.2024

### Čo som plánoval spraviť tento týždeň:
- [x] Django init (2 hodiny)
- [x] setup developer environmentu (2 hodiny)
- [x] napísanie Dockerfile-ov, docker-compose (8 hodín)
- [x] automatizacia pomocou GitHub-CI (3 hodiny)

### Čo som spravil tento týždeň:
- [x] Django init (1 hodina)
- [x] setup developer environmentu (5 hodiny)
- [x] napísanie Dockerfile-ov, docker-compose (4 hodín)
- [x] automatizacia pomocou GitHub-CI (3 hodiny)

### Vysvetlenie rozdielov medzi plánom a realitou:
Pri nastavovani developer environmentu som narazil na problemy s konfiguraciou,
ktore som neocakaval.
Zbytok úloh trval zhruba toľko ako som očakával.

### Plány na budúci týždeň:
- [ ] doladenie developer environmentu (2 hodín)
- [ ] refactoring frontendu (13 hodín)
- [ ] update Tailwind CSS (2 hodiny)
- [ ] vyriešiť infinite scroll (3 hodiny)

### S čím som mal problémy:
S konfiguráciou developer environmentu. Napríklad Poetry namietalo na verzie projektu
vo formáte `version_week_(číslo)`, ktoré som musel zmeniť na `YYYY.[INC1]`.
Ale naštastie `bumpver` s tým problém nemá.

Tiež bolo pomerne náročné vytvoriť funkčný Dockerfile a docker-compose,
zo začiatku nechcel bežať kontajner s webom, doteraz som nepochopil úplne prečo,
keďže všetko čo som zmenil som znemil opäť nazad a stále to funguje.
