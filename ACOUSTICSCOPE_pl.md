# Acoustic Scope — profesjonalny widok analizy dźwięku

**Acoustic Scope** zamienia Vigilant Ear w kieszonkowy przyrząd do analizy dźwięku: żywy widok wszystkiego, co słyszy mikrofon, na sześć sposobów. Użyj go, żeby *zobaczyć* kształt dźwięku, zmierzyć jego wysokość i poziom, zamrozić obraz i przewinąć ostatnią minutę oraz zebrać klipy do treningu własnego pakietu dźwięków.

Otwórz go z **Wachlarza działań** (wirujący rozbłysk na górnej listwie): stuknij rozbłysk, potem stuknij **korektor** (animowane zielone i cyjanowe słupki). Acoustic Scope jest **bezpłatny dla każdego**. Żywe widoki poniżej nie wymagają zakupu. Tylko narzędzia nagrywania **Train** (niżej), które zapisują klipy do twoich własnych pakietów dźwięków, są częścią Power Pack+.

---

## Nagłówek

- **Pole dB** — poziom szerokopasmowy na żywo. Kwadraty **A / C / Z** wybierają ważenie częstotliwości (A ≈ jak głośno słyszy to ludzkie ucho; C zostawia więcej basu; Z jest płaskie, bez ważenia). To samo ważenie napędza widok ⅓ oktawy.
- **korzeń** (tylko widok Barwa) — najsilniejsza klasa wysokości w pomieszczeniu, odświeżana na żywo.
- **✕** zamyka Acoustic Scope. Wykrywanie i alerty działają przez cały czas, gdy jest otwarty. To okno, nie tryb.

## Sześć widoków

Przełączasz paskiem na dole.

| Widok | Co pokazuje |
|---|---|
| **Widmo** | Poziom według częstotliwości, teraz — żywa krzywa z białą linią podtrzymania szczytu. |
| **Spektrogram** | Częstotliwość w **czasie** — przewija się ostatnia minuta, kolor = poziom. Większość dźwięków ma tu rozpoznawalny kształt. |
| **RTA ⅓ okt.** | 28 standardowych pasm ISO, jak sprzętowy analizator czasu rzeczywistego. Pomarańczowe kreski to podtrzymanie szczytu. |
| **Barwa** | 12 muzycznych klas wysokości — które nuty są obecne, z najsilniejszą podświetloną. |
| **Składowe** | Wyraźne tony śledzone w czasie jako kolorowe linie, każda z etykietą nuty. Nazwy nut i szereg harmoniczny mają własne kolumny, a wyższe dźwięki, takie jak czujniki dymu, dostają nazwę przy swojej prawdziwej wysokości. Wybierz jedną lub więcej **nut docelowych** — z krzyżykami, bemolami i oktawami — a każda rysuje się jako linia, do której śpiewasz albo stroisz, z widokiem powiększonym do ich zakresu. Dobre do gwizdów, syren, śpiewu ptaków, buczenia maszyn. |
| **Wizualizator** | Muzyka w pomieszczeniu jako pokaz świateł na żywo — bity odpalają pierścienie, bas nadyma scenę, wysokie tony sypią iskrami. Ma własną, pełną sekcję niżej. |

Pomarańczowe **chorągiewki** na Spektrogramie znaczą chwile, w których odpalił klasyfikator dźwięku, z jego etykietą i pewnością. Widzisz dokładnie kształt, na który zareagował model.

## Czytanie i pomiar

- **Suwak po lewej** — skala wyświetlania. Ściągnij w dół widok, który uderzył w sufit, albo podnieś cichy (tylko obraz; na wykrywanie to nigdy nie wpływa).
- **Stuknij** Spektrogram — odczyt z krzyżykiem: częstotliwość, poziom i jak dawno.
- **Przeciągnij** prostokąt — statystyki tego obszaru: zakres częstotliwości, czas trwania, szczyt, centroid, energia, współczynnik szczytu.
- **Ściśnij palcami** — powiększasz oś częstotliwości. Przycisk ⤢ zeruje zoom.
- **ⓘ** — panel telemetrii (szczegóły FFT, częstotliwość dominująca, centroid widmowy) oraz krokowy regulator **kalibracji**, który przesuwa wszystkie odczyty poziomu, gdy porównasz je z miernikiem referencyjnym.

## Zatrzymanie i przegląd

Przycisk **pauzy** zamraża obraz (mikrofon i alerty dalej działają). Na zamrożonym obrazie pojawia się pasek odtwarzania:

- **▶** odtwarza bufor wizualnie. Przycisk prędkości przełącza 1× / 2× / 0,5×.
- **🔍− / 🔍+** powiększają okno czasu. **Minimapa** po prawej pokazuje cały bufor — przeciągnij ją, żeby przewinąć.
- Spektrogram i Składowe mają jeden zegar, więc przełączasz je na tej samej zamrożonej chwili.

## Nagrywanie dźwięków do własnego pakietu

To supermoc Acoustic Scope: bierzesz prawdziwe przykłady dźwięku *w chwili, gdy go słyszysz*, prosto z żywego widoku.

1. Stuknij magentowy przycisk **Train** (przerywany kwadrat). Widok się zamraża i pojawia się magentowy **pas**.
2. Przeciągnij krawędzie pasa wokół jednego czystego przykładu dźwięku. Etykieta pokazuje wybraną długość. Kilka sekund wokół dźwięku jest w sam raz.
3. Stuknij **Zachowaj** (przycisk ze strzałką wpadającą do tacki). Audio pod pasem trafia do klipu i pojawia się numerowane pole. Pas zostaje gotowy. Przewiń do następnego przykładu i stuknij Zachowaj jeszcze raz (do 6 na sesję). Stuknij numerowane pole dwa razy, żeby usunąć ten klip.
4. Stuknij **młotek**, żeby otworzyć panel **Build**:
   - **Nazwa modelu** — pakiet (np. *Sowy z ogrodu*).
   - **Nazwa dźwięku** — to, co widać na mapie.
   - **Etykieta klasy** — dokładna etykieta, którą wypisze wytrenowany model (powstaje sama; małe litery i podkreślniki).
   - **Po wykryciu** — *tylko mapa* (kropka, samo rozpoznanie) albo *w ruchu* (śledzenie jak pojazd). Własne dźwięki pokazują, co to jest. Nie podnoszą alertów alarmowych. Wbudowane wykrywanie bezpieczeństwa zawsze zajmuje się tym samo.
   - Ikona, kolor, próg pewności i maksymalny zasięg. Karta podglądu na żywo pokazuje dokładnie, jak będzie wyglądać wykrycie.
5. Stuknij **Utwórz i eksportuj**. Dostajesz zip z klipami (już w układzie folderów Create ML) i plikami pakietu, gotowy do udostępnienia na Maca.
6. Na Macu wytrenuj **Sound Classifier** w Create ML z folderu `clips/`, wrzuć wyeksportowany `model.mlpackage` do folderu pakietu, spakuj zip ponownie i zaimportuj go na telefonie w **Źródła alertów → Paczki dźwięków**.

Przewodnik **[Własne pakiety dźwięków](https://vigilantear.com/pl/byom/)** prowadzi krok po kroku przez trening i import, w tym przez obowiązkową klasę **Background** i bramkę, która nie puszcza fałszywych alarmów.

## Karta Wizualizator — muzyka jako światło

Karta **Wizualizator** zamienia muzykę w pomieszczeniu w pokaz świateł, który osoba Głucha, słabosłysząca albo CODA
może *poczuć oczami*. Nic tu nie jest ozdobą. Każdy element napędza prawdziwa
cecha akustyczna, na żywo z mikrofonów:

- **Każdy bit odpala pierścień** — detektor ataku odpala wybuchy pierścieni i błysk
  ekranu dokładnie wtedy, gdy osoba słysząca poczułaby uderzenie stopy.
- **Bas oddycha** — centralny pierścień kotwicy i dryfujące pierścienie z teksturą puchną
  wraz z energią niskich częstotliwości.
- **Wysokie tony sypią iskrami** — talerze i hi-haty spadają jako jasne krople.
- **Tytuł utworu jedzie na globie** — gdy utwór jest rozpoznany, tytuł owija równik
  niewidzialnego globu, który dryfuje przez scenę, a artysta trzyma prawy górny róg.

Ustaw **Nazwę DJ** (i jej kolor) w **Preferencje → Wizualizator akustyczny**. Trzyma
lewy górny róg, w stylu metki artysty.

**Na telewizor:** stuknij **przycisk tv** w nagłówku Acoustic Scope, podłącz kabel USB-C–HDMI
albo Klonowanie ekranu AirPlay i naciśnij **Powiel**. Duży ekran pokazuje samą
grafikę, a ten telefon zostaje sterowaniem i mikrofonem. Przełącz karty Acoustic Scope na
telefonie, a telewizor idzie za tobą, więc to samo Powiel kładzie Spektrogram albo Wizualizator na ścianie.

## Warto wiedzieć

- Zamknięty Acoustic Scope nic nie kosztuje. Dodatkowa analiza leci tylko wtedy, gdy jest na ekranie.
- Otwarty też mało kosztuje. Spektrogram kosztuje prawie nic, więc nie rozgrzeje telefonu, niezależnie od tego, jak długo patrzysz. Spektrogram i Składowe rysują się równym, czytelnym tempem i nie gubią tego, co słyszą.
- Kalibrujemy poziomy od startu. Porównaliśmy je z referencyjnym miernikiem poziomu dźwięku (ważenie A) i na iPhonie 16 Pro Max zmieściliśmy się w około ±1 dB. iPhone 17 różnił się od niego o mniej niż pół decybela. Inne modele mogą pokazywać lekko inny wynik. To nasza własna kalibracja, nie pomiar certyfikowany. Masz miernik referencyjny? Krokowy regulator kalibracji pod ⓘ dostraja każdy odczyt poziomu. Przesunięcie kalibracji sprzed wersji 1.1.9 wyzerowaliśmy, bo domyślna wartość, którą korygowało, się zmieniła.
- Acoustic Scope czyta główny kanał mikrofonu. Nic, co tu robisz, nie zmienia wykrywania, wyznaczania kierunku ani alertów.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  Wszelkie prawa zastrzeżone.<br />
  Wiele patentów w toku
</p>
