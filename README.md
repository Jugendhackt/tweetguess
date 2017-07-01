# Tweetguesser

Das Twitter Ratespiel
------------------------------------------------------------------
## Idee
Es wird ein Tweet angezeigt und du kannst zwischen 4 bekannten Twitterusern die diesen verfasst haben könnten entscheiden.

## Score System
Für jeden Tweet hat man 30 Sekunden den Verfasser zu erraten. Ist die Antwort richtig, wird einem die verbleibende Zeit als Punkte gutgeschrieben.

## Ziel
Spielerisch auf fragwürdigen Content aufmerksam machen, der heutzutage überall auf Socialmedia Plattformen gepostet wird.

## Tech
Für Frontend wurde das Bootstrap Framework benutzt.
Die Tweets mit den meisten Retweets von, von uns ausgewählten Usern, werden alle 15 min über die Twitter-API in eine MongoDB geladen.
Dann wird der Tweet und die Auswahlmöglichkeiten aus der Datenbank ans Frontend geschickt. Die Antwort wird zurückgeschickt und abgeglichen.
Ist die Antwort richtig, wird der Timer gestoppt und die Punkte gutgeschrieben.

## Über das Projekt
Dieses Projekt ist im Rahmen des Hackathons Jugendhackt in Frankfurt 2017 entstanden.
Unter dem Thema "Echt oder Falsch" ist dies innerhalb etwa einem Tag entstanden.

## Über uns
Die 7 Autoren [Moritz Beck](https://github.com/blitze299), [Peter Heynmöller](https://github.com/PeterHeynmoeller), [Baran Peters](https://github.com/NightScap3), [Simon Pelz](https://github.com/SsimmmonN), [Tobias Klein](https://github.com/t0biium), [Marenz Schmidl](https://github.com/marenz2569) und [Paul Goldschmidt](https://github.com/PaulGoldschmidt) mit verschiedenen Interessen und Fähigkeitsstufen, haben ihre verschiedenen Fähigkeiten eingesetzt, um zu diesem Ergebnis zu kommen.

## Lizenz
Der Code darf gerne modifiziert und benutzt werden.
