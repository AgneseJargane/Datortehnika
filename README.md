# Datortehnika
Izveidota datortehnikas pieprasījuma mājaslapa 
Projekta izstrādē izmantots:
back-end -  Spring Boot un Java 8, Liquibase, MySQL8 
front-end - Angular 9, dizainam izmantots prime ng 

Datubāzes konfigurācija apskaatāma `resources/application.properties failā`
Tabulas init skripts apskatāms `resurces/Uzdevums/db` 
Front-end nav parādīti `node_modules` tādēļ nepieciešams palaist `npm install`

Mājaslapā ir izstrādāti divi skati - pieprasījuma skats un  pieprasījumu saraksta skats

Pieprasījuma skatā izveidotas izvēles iespējas diviem datoru veidiem - stacionārais un portatīvais dators 
Kā arī dažas parametru iespējas, kā piemēram, ražotājs, operatīvā atmiņa un procesors. 
Pie prieprasījuma ir nepieciešams ievadīt arī pieprasījuma pamatojumu. Pieprasījumā visi lauki ir obligāti, gan izvēles, gan pamatojuma, ja netiek aizpildīts kāds lauks, tad tiek izvadīts kļūdas paziņojums, kā arī veiksmīgas saglabāšanas gadījumā apstiprinājuma paziņojums par pieprasījuma izveidi. No šī skata ir iespējams arī pārslēgties uz otru  - saraksta skatu (izveidota navigācijas josla) 

Pieprasījumu saraksta skatā ir iespējams apskatīties visus aktuālos pieprasījumus, kas nav dzēsti. Tabulā parādīts pieteikuma laiks, pieteikuma statuss un visa informācija no pieprasījuma. 
Tabulā iespējams izdzēst katru no ierakstiem, nospiežot pogu dzēst, back-end tiks nomainīts ieraksta statuss uz dzēsts, bet netiks izdzēsts no pašas datubāzes, kā arī dzēstie ieraksti neparādīsies tabulā. Tabulā ir iespējams arī akceptēt pieprasījumu, kā arī noraidīt to,  akceptējot vai noraidot pieprasījumu tiks pārlādēta lapa un būs redzams jaunais pieprasījuma status. No šī skata ir iespējams nokļūt arī uz pieprasījuma izveides skatu. 
