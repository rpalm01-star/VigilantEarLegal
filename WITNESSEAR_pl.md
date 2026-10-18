# Witness Ear — Opcjonalny 24-godzinny dziennik dźwięków i raport PDF

**Witness Ear** to opcjonalna funkcja **Vigilant Ear**. Trzyma na telefonie krótki dziennik dźwięków, które aplikacja sklasyfikowała wokół ciebie. Eksportujesz z niego prosty **zbiorczy raport PDF**, gdy potrzebujesz zapisu na piśmie, a nie tylko mapy na żywo. Zapisuje **zdarzenia** dźwiękowe, nie audio i nie rozmowy.

**Witness Ear** jest domyślnie **wyłączone**, jest **za darmo** i ma stać z boku, dopóki nie będzie potrzebne.

---

## Co to jest

Gdy Vigilant Ear nasłuchuje, już klasyfikuje dźwięki otoczenia (syreny, alarmy, pojazdy, kategorie bliskie mowie i inne). Po włączeniu Witness Ear robi jedną rzecz więcej:

- **Zapisuje ostatnie klasyfikacje** na telefonie, do **24 godzin**.
- Możesz **wyeksportować** te zdarzenia jako **Zbiorczy raport PDF** i udostępnić go przez Pocztę, Pliki, AirDrop i tak dalej.
- Możesz **usunąć** dziennik w każdej chwili koszem. **Wyłączenie** Witness Ear tylko **wstrzymuje** zapis. To, co już jest zapisane, zostaje (i dalej wygasa po 24 godzinach). Możesz na chwilę zawiesić Witness Ear i nie stracić dnia.

**Nie ma osobnego „trybu aplikacji” Witness Ear** ani osobnego ekranu. Sterowanie jest w **Preferencje → DZIENNIK DŹWIĘKÓW**: przełącznik **Witness Ear** (z małym **koszem** obok, gdy dziennik trzyma zdarzenia) oraz wiersz **Zbiorczy raport PDF** z przyciskiem **Eksportuj**.

Raport wymienia między innymi **czas**, **pewność**, **poziom szczytowy (dBFS)**, **kierunek, gdy dało się go zmierzyć**, **który telefon to usłyszał** (to urządzenie albo połączony peer Constellation) i **etykietę dźwięku**, pogrupowaną według rodziny dźwięków. To **pomoc w wyłapywaniu wzorców i w świadomości dźwięku**, nie certyfikowany miernik hałasu.

---

## Po co ci to

Ludzie sięgają po krótki zapis na piśmie, gdy pamięć i kropki na żywo nie wystarczają:

| Sytuacja | Jak pomaga Witness Ear |
|-----------|------------------------|
| **Rozmowa z sąsiadem / HOA / wynajmującym** | Datowana lista *tego, co aplikacja oznaczyła i kiedy*, z nocy albo z dnia. Punkt startu rozmowy, nie metrologia do sądu. |
| **„Było tak co noc czy raz?”** | Kroczące 24 godziny. Sprawdzasz, jak niedawno to było, i nie trzymasz stałego archiwum. |
| **Dom z kilkoma telefonami (Constellation)** | Połączone telefony dzielą się tym, co słyszą, w **lokalnym mesh**. Wspólne wykrycia mogą trafić też do dziennika. Raport pokazuje wtedy **który telefon** usłyszał zdarzenie, nie tylko ten mikrofon. |
| **Dziennik dostępności / świadomości** | Prosty eksport, który wysyłasz komuś z rodziny albo osobie wspierającej po głośnym odcinku. |

Jeśli nigdy nie potrzebujesz PDF, zostaw Witness Ear **wyłączone**. Wykrywanie i alerty działają dokładnie tak jak wcześniej.

---

## Jak tego używać (iPhone / iPad)

### 1. Włącz

1. Otwórz **Preferencje** (dzwonek / ścieżka Customizations z wachlarza działań albo z menu).
2. Znajdź sekcję **DZIENNIK DŹWIĘKÓW**.
3. **Włącz** **Witness Ear**.  
   - Stuknij **ⓘ** obok nazwy, żeby zobaczyć krótkie wyjaśnienie w aplikacji.
4. Zostaw Vigilant Ear w nasłuchu jak zwykle (mikrofon włączony dla dźwięków, na których ci zależy).

Gdy Witness Ear jest włączone, aplikacja dopisuje do **lokalnego** dziennika klasyfikacje, które dochodzą do jej progu pewności (z krótką przerwą na każdą etykietę, żeby duplikaty nie zalały pliku).

### 2. Eksportuj PDF

1. Zostań w **DZIENNIK DŹWIĘKÓW**.
2. W wierszu **Zbiorczy raport PDF** stuknij **Eksportuj**.  
   - Stuknij **ⓘ** w tym wierszu, żeby zobaczyć, co jest w PDF.
3. Poczekaj na systemowy **arkusz udostępniania**, potem zachowaj albo wyślij plik (`WitnessEar-Report-….pdf`).

Jeśli dziennik jest pusty, Eksportuj powie, że w ostatnich 24 godzinach nie ma zdarzeń. Włącz Witness Ear i poczekaj, aż klasyfikator zadziała choć raz.

### 3. Wstrzymaj albo usuń dziennik

- **Pauza:** wyłącz przełącznik **Witness Ear**. Zapis staje. To, co już jest zapisane, **zostaje** i dalej wygasa po 24 godzinach. Włącz z powrotem, żeby wrócić do zapisu.
- **Usuń:** stuknij mały **czerwony kosz** w wierszu **Witness Ear** (widać go tylko wtedy, gdy dziennik trzyma zdarzenia). Uruchamia krótkie odliczanie **Anuluj (5)…(1)**. Stuknij jeszcze raz, żeby anulować, albo poczekaj do końca, a wszystko znika od razu.

### 4. Constellation (opcjonalnie)

Jeśli **Constellation** łączy ten telefon z innymi w twoim mesh:

- Telefony już **dzielą się wieloma wykryciami poza mową**. Służą one mapie na żywo i obrazowi z kilku telefonów.
- Gdy Witness Ear jest **włączone**, wykrycia **udostępnione przez peera** mogą **wpaść do dziennika tego telefonu** i pojawić się w PDF jako nazwa peera albo **ten telefon**.

Każdy telefon i tak trzyma **własny** plik dziennika na urządzeniu. **Nie ma archiwum Witness Ear w chmurze**. Najpełniejszy PDF z kilku telefonów powstaje na telefonie, który wtedy łączył się z resztą i zapisywał dziennik, gdy pozostałe się dzieliły.

---

## Co jest w PDF (przykładowy układ)

Dokładny układ może się zmieniać. Chodzi o czytelny raport w PDF albo na wydruku.

```
WITNESS EAR — 24-Hour Sound Journal
Generated Aug 7, 09:30  ·  Window Aug 6, 10:00 – Aug 7, 09:30
Sources: this phone + Constellation peers.  Repeats within 30 s are logged once.

[summary tiles]     classifier samples · episodes (60 s gap) · sound groups · span covered
[Activity by hour]  bar chart of samples per hour
[Sound groups]      raw labels coalesced by profile family (Music, Vehicles, …)
[Locations]         L1, L2, … — positions grouped within ~110 m, with accuracy notes
[Devices]           P1 (this phone, model · iOS · app build), P2 … (linked peers + model)

Episodes
#   Start         Length   Samples   Peak     Sounds              By
1   Aug 7, 01:44  10m 40s  17        −12 dB   Music, Animals +4   P1, P2

Episode Source Feeds (oldest first)
Time        Conf   dBFS   Dir    By   Sound
08:12:03    87%    −21    —      P1   Emergency & alarms · Siren
08:12:04    71%    −25    207°   P2   Emergency & alarms · Siren
08:14:10    64%    −34    —      P1   Household & speech · Knock

Method & Limits …

Integrity
SHA-256 of the N journal rows exported in this window (JSON, sorted keys):
a1b2c3… (full hex digest)
Location accuracy / simulated-GPS flags / device-state notes / exporting device / time base…

Attestation

I, _______________, attest that … Signature / Date lines for ink after print.
```

Na każdej stronie, za treścią, jest słaby znak wodny Wingdings. W stopce jest znak Wingdings, „© 2026 Wingdings, Inc. Wszelkie prawa zastrzeżone. · Patent w toku” i numer strony. To szybki pierwszy rzut oka, czy PDF, który ktoś ci podaje, wygląda jak prawdziwy eksport.

**Jak to czytać**

- **Próbki klasyfikatora** — liczba zapisanych okien (nie „liczba syren w mieście”).
- **Odrębne odcinki** — serie próbek rozdzielone około minutą ciszy. Długi ciągły dźwięk może dać wiele próbek, ale mało odcinków.
- **Conf** — pewność modelu (0–100%), **nie** decybele SPL.
- **dBFS** — szczytowy poziom mikrofonu blisko zdarzenia, względem pełnej skali cyfrowej tego telefonu (0 = najgłośniej, jak mikrofon potrafi nagrać). Dobry do porównywania momentów. **To nie** skalibrowane dB SPL.
- **Dir** — bezwzględny azymut kompasowy dźwięku (0° = północ). Widać go **tylko** wtedy, gdy pomiar dwoma mikrofonami naprawdę go wyznaczył. „—” znaczy, że nie zmierzono. Nigdy nie z ułożenia telefonu.
- **By** — identyfikator urządzenia z sekcji **Devices** (P1 = telefon, który eksportuje, P2… = połączeni peerzy). Zgadza się z identyfikatorami L w **Locations**.
- **Skrót integralności** — odcisk dziennika na urządzeniu, z którego powstał PDF. Pomaga wykryć edycję tabeli zdarzeń po eksporcie.
- **Poświadczenie** — opcjonalny blok podpisu po wydruku (potwierdzasz posiadanie i miejsce).

---

## Prywatność danych

| Temat | Zasada |
|-------|--------|
| **Domyślnie** | **Wyłączone.** Dziennika Witness Ear nie ma, dopóki sam go nie włączysz. |
| **Gdzie są dane** | Tylko **na tym urządzeniu**, w prywatnym sandboxie **Application Support** aplikacji (niżej). |
| **Co jest zapisane** | Metadane klasyfikacji: czas, etykieta, pewność, opcjonalna pozycja i kierunek, jeśli aplikacja już je ma, oraz opcjonalne id peera, gdy dołącza zdarzenie z mesh. **To nie** ciągłe nagranie audio dnia na potrzeby dziennika ani przepisane (albo przetłumaczone) słowa. |
| **Jak długo** | **Kroczące 24 godziny.** Aplikacja usuwa starsze wiersze. |
| **Gdy wyłączysz** | Zapis **staje**. Zapisane wpisy zostają i dalej wygasają po 24 godzinach. |
| **Usuwanie** | Kosz w wierszu Witness Ear (widać go, gdy dziennik trzyma zdarzenia), z odliczaniem, które możesz anulować. |
| **Wysyłka** | Witness Ear **nie** wysyła dziennika do Wingdings ani do chmury Witness Ear. |
| **Eksport** | **Ty** decydujesz, że udostępniasz PDF (Poczta, Pliki, AirDrop i tak dalej). Po udostępnieniu ta kopia jest poza kontrolą aplikacji. |
| **Constellation** | Dzielenie się wykryciami na żywo w mesh to funkcja **sieci lokalnej** między twoimi połączonymi telefonami. Dołączone wiersze dziennika i tak zostają na telefonie, który je dostał, dopóki ich nie wyeksportujesz albo nie wyczyścisz. |
| **Dzieci / wrażliwe użycie** | Nie używaj dziennika, żeby identyfikować albo śledzić ludzi. Służy do **miejsc, czasów i kategorii dźwięków**, nie do teczek osobowych. |

### Co znaczy „Application Support”

**Application Support** to prywatny folder samej aplikacji Vigilant Ear na tym telefonie. To **nie** dysk w chmurze, **nie** publiczny album „Pliki” i **nie** e-mail do wsparcia. Inne aplikacje nie czytają go przy zwykłych zasadach iOS.

Na iPhonie z **kodem urządzenia** (albo biometrią) iOS **szyfruje dane aplikacji w spoczynku** ochroną sprzętową. Witness Ear **nie** wysyła dziennika i **nie** dokłada drugiej, własnej warstwy szyfrowania. Gdy urządzenie jest zablokowane, dostęp idzie według standardowych klas ochrony danych Apple (zwykle ochrona do pierwszego odblokowania po uruchomieniu, chyba że masz mocniejsze ustawienia). Backup (zasady szyfrowanego backupu komputera / backupu iCloud) to coś innego niż „leży na dysku telefonu”.

---

## Ten raport w sporach

Witness Ear może zrobić **uwierzytelniony cyfrowy rejestr metadanych akustycznych** (co oznaczyły klasyfikatory na urządzeniu, kiedy i który telefon dołożył wpis). Przydaje się do **nieformalnych** rozmów z sąsiadami, wynajmującymi, HOA albo mediatorami. **Nie zastępuje** certyfikowanego badania klasy 1/2 ani porady prawnej.

**Praktyczne kroki:**

1. Zostaw **Witness Ear włączone** na czas, który cię interesuje (zapis trzyma do 24 godzin).
2. **Wyeksportuj** PDF. Zatrzymaj oryginalny plik. Nie zapisuj go ponownie w edytorze, który przepisuje PDF.
3. **Wydrukuj** kopię, jeśli papierowy ślad pomaga. Uzupełnij blok **Poświadczenie** (imię i nazwisko, miejsce, podpis, data) długopisem.
4. Pokaż odbiorcom sekcję **Integralność**: odcisk **SHA-256** wierszy dziennika. Późniejszy ponowny eksport z **tego samego, niezmienionego dziennika na urządzeniu** powinien się zgadzać. Edycja tabeli zdarzeń w edytorze PDF nie zaktualizuje tego skrótu poprawnie, chyba że atakujący przebuduje PDF z pasujących danych źródłowych.
5. Mów wprost: to **metadane z aplikacji**, czas to **zegar urządzenia**, poziomy **nie są prawnym SPL**, a etykiety mogą być błędne.
6. **Nie** prowadzimy teraz publicznej strony „wgraj PDF, żeby sprawdzić podpis”. Skrót to **notatka o integralności w samym pliku**, nie poświadczenie chmury Wingdings.

**Nie wymyślaj** zdarzeń, nie wycinaj bloku integralności i nie twierdź, że PDF to certyfikowany pomiar hałasu.

---

## Zastrzeżenia

1. **To nie certyfikowany przyrząd.** Mikrofony telefonu **nie są** miernikami poziomu dźwięku klasy 1/2. Wyniki pewności i powiązane poziomy są **względne** i nieskalibrowane. **Nie przedstawiaj** ich jako bezwzględnych dBA/dBC do egzekwowania, kar albo metrologii prawnej. Raport i tak może się przydać jako **uwierzytelniony cyfrowy rejestr metadanych akustycznych**, gdy używasz go uczciwie.

2. **To nie gwarancja kompletności.** Dziennik obejmuje tylko to, co **klasyfikatory na urządzeniu** oznaczyły, gdy nasłuch działał i Witness Ear było **włączone**. Ciche odcinki, wyciszony mikrofon, wyłączona aplikacja, niska pewność albo pominięte powtórki zostawiają luki. Brak wiersza **nie** dowodzi, że dźwięku nie było.

3. **Etykiety mogą być błędne.** Silniki uczenia maszynowego mylą klasy. Wiersz „Siren” znaczy, że w tej chwili model postawił na tę etykietę. To nie gwarantowany pojazd ratunkowy. Traktuj PDF jako **notatki pomocnicze**, nie prawdę ostateczną.

4. **To nie urządzenie bezpieczeństwa.** Vigilant Ear / Witness Ear to **pomoce świadomości i dostępności**. Nie zastępują ludzkiej oceny, certyfikowanych alarmów ani oficjalnych służb ratunkowych.

5. **Dowody i spory.** Jeśli dajesz PDF wynajmującemu, HOA albo urzędowi, mów uczciwie, czym on jest: **dziennikiem klasyfikacji z aplikacji**, z ograniczonym czasem przechowywania, eksportem z twojej ręki i skrótem integralności na urządzeniu. Nie zmieniaj tabeli zdarzeń i nie wymyślaj zdarzeń. Nie dajemy porad prawnych. Lokalne zasady nagrań i dowodów są różne. Gdy masz wątpliwość, zapytaj wykwalifikowanego specjalistę.

6. **Raporty z kilku telefonów.** Wiersze peerów zależą od połączenia Constellation i zasad udostępniania (na przykład źródła poza mową). Zegary i GPS w telefonach konsumenckich mają błąd. Zgoda kilku telefonów co do „tej samej nocy” to przydatny kontekst, nie czas z laboratorium.

7. **Podstawa czasu.** Znaczniki czasu biorą **czas zegara urządzenia**, a możesz go zmienić. PDF o tym mówi. Obecny produkt sam nie sprawdza tego czasu wobec czasu z sieci.

8. **Ty odpowiadasz za udostępnianie.** Gdy wyślesz raport przez AirDrop albo e-mail, odbiorcy mogą zatrzymać kopie. Eksportuj tylko to, czym chcesz się podzielić.

---

## Uwagi o platformie

- **iOS / iPadOS:** sterowanie Witness Ear jest w **Preferencje → DZIENNIK DŹWIĘKÓW**, tak jak wyżej.

---

## Warto wiedzieć

- Wyłączony Witness Ear nic nie dokłada do CPU telefonu ani do baterii.
- Włączenie dokłada lekki lokalny zapis i od czasu do czasu dopisuje zdarzenia, żeby dało się zbudować raport.
- **Eksportuj** buduje PDF. Osobne menu nie jest do tego potrzebne.
- Do codziennych alertów i kierunku używaj głównej mapy Vigilant Ear i HUD-ów. Witness Ear włącz, gdy potrzebujesz **przenośnej migawki na piśmie** ze zdarzeniami dźwiękowymi z ostatniego dnia.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  Wszelkie prawa zastrzeżone.<br />
  Wiele patentów w toku
</p>
