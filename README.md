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

## **main.js**:

1. ### Il **main.js** contiene la funzione primaria **main()** che si occupa di eseguire il codice di "_alto livello_" e comprende tutte le variabili globali condivise con i moduli.

</br>

2. ### Sotto alla dichiarazione di **main()** si trovano tutte le funzioni "_interne_":
    </br>

    * ### le funzioni **refresh**, **seeMore** e **requireMoreNews** che gestiscono il pulsante che carica più notizie.
    * ### le funzioni per la gestione specifica degli errori.
</br>

## **news-function-library.js**:

* ### Si occupa di tutto ciò che riguarda le news e contiene le funzioni che gestiscono le richieste di rete ad Hacker News come la richiesta degli id delle topnews al recupero delle notizie stesse tramite quegli id. Ognuna di queste funzioni cattura eventuali errori. 

* ### Ci sono funzioni addette a creare la grafica a partire dalle news richiamando l'opportuno metodo dalla classe Notice

* ### Funzioni che creano un'animazione quando le card (contenenti le notizie) vengono inserite nel documento HTML.