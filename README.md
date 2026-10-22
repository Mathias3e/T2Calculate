# T2Calculate

Chrome-Erweiterung, die in Time2Learn den Notendurchschnitt für BMS, BFS und ÜK pro Semester automatisch **lokal** berechnet und anzeigt.

> **Hinweis:** Dies ist ein privates Projekt. Es steht in keiner Verbindung zu Time2Learn oder dessen Betreiber.

---

## Screenshot



## Installation

Die Erweiterung kann über den Chrome Web Store installiert werden.



## Verwendung

Nach der Installation ist nichts weiter zu tun. Sobald du in Time2Learn deine Noten anschaust, wird der Durchschnitt autmatisch anzeigt.

## Datenschutz-Hinweis

- Die Verarbeitung erfolgt ausschliesslich **lokal** im Browser.
- Es werden keine Daten gespeichert.

## Bekannte Einschränkungen

- Es handelt sich um einen **einfachen, ungewichteten Durchschnitt**. Er kann vom Zeugnis abweichen.
- Es ist gedacht für **8 Semester**.
- Die Erweiterung hängt vom Aufbau der Time2learn ab. Ändert Time2Learn die Struktur, kann die Berechnung fehlerhaft sein oder ausfallen.
- Sie unterstützt nur BMS/BFS/ÜK  und basiert auf der Fachbezeichnung.

## Projektstruktur

```
T2Calculate/
├── manifest.json     # Konfiguration der Erweiterung (Manifest V3)
├── logic.js          # Content Script: Berechnung und Anzeige
└── images/           # Icons der Erweiterung
```

## Lizenz

Dieses Projekt steht unter der [MIT-Lizenz](LICENSE).
