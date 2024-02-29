%Вариант6
%Медведь большой. Слон большой. Кот маленький. Медведь
%коpичневый. Кот чеpный. Слон серый.
%Любой черный или коричневый пpедмет является темным.
%Запросы:
%• Кто одновpеменно большой и темный?
%• Есть ли коpичневые маленькие слоны?
%• Есть ли большие и темные медведи?
%• Есть ли чеpный кот?

big(bear).
big(elephant).
small(cat).
color(bear, brown).
color(cat, black).
color(elephant, gray).

dark(X) :- color(X, black).
dark(X) :- color(X, brown).

% Кто одновременно большой и темный?
big_and_dark(X) :- big(X), dark(X).

% Есть ли коричневые маленькие слоны?
brown_small_elephants(X) :- small(X), color(X, brown), big(X).

% Есть ли большие и темные медведи?
big_and_dark_bear(X) :- big(X), dark(X).

% Есть ли черные коты??
black_cat(X) :- color(X, black), small(X).

% Запросы:
% big_and_dark(X).
% Ответ: X = bear ; X = elephant.

% brown_small_elephants(X).
% Ответ: no.

% big_and_dark_bear(X).
% Ответ: X = bear.

% black_cat(X).
% Ответ: X = cat.
