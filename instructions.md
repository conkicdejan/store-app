Za svaki proizvod postaviti link “Buy” koje otvara posebnu stranicu
● Dodati route-u za ovu stranicu: /products/:id
● Dodati posebnu komponentu za ovu stranicu
● Na stranici prikazati informacije o proizvodu i select box preko kojeg se bira kupac
● Postoje dugmad “Confirm” i “Cancel”
○ “Confirm” će, u slučaju da nije selektovan korisnik, prikazati poruku u alert 
modalu da je potrebno da se selektuje korisnik. Potrebno je ovu logiku 
implementirati u funkciji komponente
○ “Confirm” će, u slučaju da je selektovan korisnik, dodati proizvod u listu kupljenih
proizvoda korisnika i dekrementirati kolicinu na lageru.
■ Pozivati metodu koja će implementirati logiku dodavanja proizvoda u listu 
kupljenih proizvoda
■ Pozvati metodu iz za dekrementiranje količine na lageru (već postavljena 
u prethodnom zadatku)
○ “Cancel” će prikazati listu proizvoda
● U slučaju da ne postoji dovoljno proizvoda na lageru, na ovoj stranici će stajati 
odgovarajuća informacija sa dugmetom “Go Back to Products”