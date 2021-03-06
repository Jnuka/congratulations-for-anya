const FILMS = [
    "Вперёд в настоящее",
    "Конец",
    "Враги",
    "Нелюдь-муха",
    "Слабая скорлупа",
    "Большой крестьянин",
    "Раб квадратов",
    "Ничего сверх обычного",
    "Древесный зверь",
    "Стоячие живцы",    //10

    "Второстепенный разбойник",
    "Нищий пёс",
    "Тупые капюшоны",
    "Разговор львов",
    "Наступатели",
    "Отсутвие влияния гусеницы",
    "Индивидуальный живой композитор",
    "Принесённые живыми людьми",    //18

    "Десятая совокупность",
    "Жизнь табуретов",
    "Отгадка",
    "Материк благословенных",
    "Несколько в шалаше",
    "Работа чувства",
    "Красный телевизор"     //25
];

const LEVEL = [
    "Эти чуть сложнее &#129299;",
    "Пошла жара &#128520;"
]

let levelLabel = document.getElementById("level_label");
let filmLabel = document.getElementById("film_label");

filmLabel.innerHTML = FILMS[0];

function updateLabel() {
    filmLabel.innerHTML = fStage < 26 ? FILMS[fStage - 1] : FILMS[24];

    if (fStage == 11) {
        levelLabel.innerHTML = LEVEL[0];
        filmLabel.className = "puzzle_film-normal";
    } else if (fStage == 19) {
        levelLabel.innerHTML = LEVEL[1];
        filmLabel.className = "puzzle_film-hard";
    }
}
