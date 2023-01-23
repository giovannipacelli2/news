# **Flash news to Hacker News**
## **Prerequisiti:** 
#### - Avere un browser recente ( Chrome, Firefox, Safari...ecc ).

</br>

---

## **Funzioni principali:** 

</br>

* #### VIsualizzare le ultime notizie tramite le API di Hacker News dalla sezione *Top news*

* #### Funzione di aggiornamento automatico delle ultime notizie

* #### Possibilità di caricare le notizie meno recenti

</br>

---

</br>


## **Visita la pagina:** 

* ### [_Flash news_](https://giovannipacelli2.github.io/news/src)

</br>

## **Organizzazione dei file:** 
----
</br>

### Nella _root_ sono presenti:

* ### Il file _index.html_
* ### La cartella _assets_

### La cartella _assets_ a sua volta contiene:

* ### la cartella **css** : contenente i fogli di stile

* ### la cartella **img** : contenente tutte le immagini

* ### la cartella **js** : che contiene il file main.js (entry point) e la cartella _modules_ che contiene le librerie.

</br>

## Suddivisione dei file JavaScript:
</br>

1. ### Il **main.js** contiene la funzione primaria **main()** che si occupa di eseguire il codice di "_alto livello_" e comprende tutte le variabili globali condivise con i moduli.

</br>

2. ### Sotto alla dichiarazione di **main()** si trovano tutte le funzioni "_interne_" come la funzione di **refresh** o **seeMore** e **requireMoreNews** che gestiscono il pulsante e in aggiunta la gestione specifica degli errori.
