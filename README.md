# Tweetguesser

Das Twitter Ratespiel
------------------------------------------------------------------
## Idee
Es wird ein Tweet angezeigt und du kannst zwischen 4 bekannten Twitterusern die diesen verfasst haben könnten entscheiden.

## Score System
Für jeden Tweet hat man 30 Sekunden den Verfasser zu erraten. Ist die Antwort richtig, wird einem die verbleibende Zeit als Punkte gutgeschrieben.

## Ziel
Spielerisch auf fragwürdigen Content aufmerksam machen, der heutzutage überall auf Socialmedia Plattformen gepostet wird und der Einfluss den er auf uns hat.

## Über das Projekt
Dieses Projekt ist im Rahmen des Hackathons Jugendhackt in Frankfurt 2017 entstanden.
Unter dem Thema "Echt oder Falsch" ist dies innerhalb etwa einem Tag entstanden.

## Über uns
Die 7 Autoren Moritz Beck, Peter Heynmöller, Baran Peters, Simon Pelz, Tobias Klein, Marenz Schmidl und Paul Goldschmidt mit verschiedenen Interessen und Fähigkeitsstufen, haben ihre verschiedenen Fähigkeiten eingesetzt, um zu diesem Ergebnis zu kommen.

## Lizenz
Jeder darf alles.

## Tech
Für Frontend wurde das Bootstrap Framework benutzt.
Die Tweets mit den meisten Retweets von, von uns ausgewählten Usern, werden alle 15 min über die Twitter-API in eine MogoDB geladen.
Dann wird der Tweet und die Auswahlmöglichkeiten aus der Datenbank ans Frontend geschickt. Die Antwort wird zurückgeschickt und abgeglichen.
Ist sie richtig, wird der Timer gestoppt und die Punkte gutgeschrieben.
