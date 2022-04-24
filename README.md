# Rapport projet REACT
Inès TOUATI - Killyan BOUR

## Structure
```mermaid
classDiagram
      index <|-- App
      index <|-- Counter
      index <|-- BeerList
      BeerList <|-- Beer
      BeerList <|-- BeerNameChange
      BeerList <|-- BeerNamePrint
      class BeerList {
          beers
          beer_name
          remove_beer()
          add_beer()
          change_beer_name()
      }
      BeerNameChange : change_beer_name()
      BeerNamePrint : beer_name
      class Beer {
          beer
          id
      }
```

## Porblèmes avec react-router-dom

Son utilisation (l'appel de n'importe quelle de ses methodes) rajoute plusieurs erreurs soit incompréhensibles, soit à tord. L'utilisation des routes est dans le composant App.
Son appel dans index est commenté pour que l'application puisse fonctionner.

