%16. Инвертировать список.

invert_list(List, Inverted) :-
    invert_list_helper(List, [], Inverted). % Вспомогательное правило для рекурсивного инвертирования списка

invert_list_helper([], first, first). % Если исходный список пуст
invert_list_helper([H|T], first, Inverted) :- 
    invert_list_helper(T, [H|first], Inverted).
% добавляем начало исходного списка к first и рекурсивно инвертируем хвост списка

% Пример:
% invert_list([1, 2, 3, 4, 5], Inverted).
% Inverted = [5, 4, 3, 2, 1]


