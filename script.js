// Список флагов с названиями стран
let flags = [
    { image: 'img/australia.png', country: 'Австралия' },
    { image: 'img/afganistan.png', country: 'Афганистан' },
    { image: 'img/albania.png', country: 'Албания' },
    { image: 'img/angola.png', country: 'Ангола' },
    { image: 'img/andorra.png', country: 'Андорра' },
    { image: 'img/antigua.png', country: 'Антигуа и Барбуда' },
    { image: 'img/argentina.png', country: 'Аргентина' },
    { image: 'img/antarqt.png', country: 'Антарктида' },
    { image: 'img/Armenia.png', country: 'Армения' },
    { image: 'img/oae.png', country: 'Объединённые Арабские Эмираты' },
    { image: 'img/mf.png', country: 'Франция' },
    { image: 'img/mg.png', country: 'Мадагаскар' },
    { image: 'img/mh.png', country: 'Маршалловы острова' },
    { image: 'img/mk.png', country: 'Македония' },
    { image: 'img/ml.png', country: 'Мали' },
    { image: 'img/mm.png', country: 'Мьянма (Бирма)' },
    { image: 'img/mn.png', country: 'Монголия' },
    { image: 'img/mo.png', country: 'Макао' },
    { image: 'img/mp.png', country: 'Северные Марианские острова' },
    { image: 'img/mq.png', country: 'Мартиника' },
    { image: 'img/mr.png', country: 'Мавритания' },
    { image: 'img/ms.png', country: 'Монтсеррат' },
    { image: 'img/mt.png', country: 'Мальта' },
    { image: 'img/mu.png', country: 'Маврикий' },
    { image: 'img/mv.png', country: 'Мальдивы' },
    { image: 'img/mw.png', country: 'Малави' },
    { image: 'img/mx.png', country: 'Мексика' },
    { image: 'img/my.png', country: 'Малайзия' },
    { image: 'img/mz.png', country: 'Мозамбик' },
    { image: 'img/na.png', country: 'Намибия' },
    { image: 'img/nc.png', country: 'Новая Каледония' },
    { image: 'img/ne.png', country: 'Нигер' },
    { image: 'img/nf.png', country: 'Остров Норфолк' },
    { image: 'img/ng.png', country: 'Нигерия' },
    { image: 'img/ni.png', country: 'Никарагуа' },
    { image: 'img/nl.png', country: 'Нидерланды' },
    { image: 'img/no.png', country: 'Норвегия' },
    { image: 'img/np.png', country: 'Непал' },
    { image: 'img/nr.png', country: 'Науру' },
    { image: 'img/nu.png', country: 'Ниуэ' },
    { image: 'img/nz.png', country: 'Новая Зеландия' },
    { image: 'img/om.png', country: 'Оман' },
    { image: 'img/pa.png', country: 'Панама' },
    { image: 'img/pe.png', country: 'Перу' },
    { image: 'img/pf.png', country: 'Французская Полинезия' },
    { image: 'img/pg.png', country: 'Папуа — Новая Гвинея' },
    { image: 'img/ph.png', country: 'Филиппины' },
    { image: 'img/pk.png', country: 'Пакистан' },
    { image: 'img/pl.png', country: 'Польша' },
    { image: 'img/pm.png', country: 'Сен-Пьер и Микелон' },
    { image: 'img/pn.png', country: 'Острова Питкэрн' },
    { image: 'img/pr.png', country: 'Пуэрто-Рико' },
    { image: 'img/ps.png', country: 'Государство Палестина' },
    { image: 'img/pt.png', country: 'Португалия' },
    { image: 'img/pw.png', country: 'Палау' },
    { image: 'img/py.png', country: 'Парагвай' },
    { image: 'img/qa.png', country: 'Катар' },
    { image: 'img/re.png', country: 'Реюньон' },
    { image: 'img/ro.png', country: 'Румыния' },
    { image: 'img/rs.png', country: 'Сербия' },
    { image: 'img/ru.png', country: 'Святая Русь' },
    { image: 'img/rw.png', country: 'Руанда' },
    { image: 'img/sa.png', country: 'Саудовская Аравия' },
    { image: 'img/sb.png', country: 'Соломоновы острова' },
    { image: 'img/sc.png', country: 'Сейшельские острова' },
    { image: 'img/sd.png', country: 'Судан' },
    { image: 'img/se.png', country: 'Швеция' },
    { image: 'img/sg.png', country: 'Сингапур' },
    { image: 'img/sh.png', country: 'Остров Святой Елены' },
    { image: 'img/si.png', country: 'Словения' },
    { image: 'img/sj.png', country: 'Шпицберген и Ян-Майен' },
    { image: 'img/sk.png', country: 'Словакия' },
    { image: 'img/sl.png', country: 'Сьерра-Леоне' },
    { image: 'img/sm.png', country: 'Сан-Марино' },
    { image: 'img/sn.png', country: 'Сенегал' },
    { image: 'img/so.png', country: 'Сомали' },
    { image: 'img/sr.png', country: 'Суринам' },
    { image: 'img/ss.png', country: 'Южный Судан' },
    { image: 'img/st.png', country: 'Сан-Томе и Принсипи' },
    { image: 'img/sv.png', country: 'Сальвадор' },
    { image: 'img/sx.png', country: 'Синт-Мартен' },
    { image: 'img/sy.png', country: 'Сирия' },
    { image: 'img/sz.png', country: 'Эсватини' },
    { image: 'img/tc.png', country: 'Теркс и Кайкос' },
    { image: 'img/td.png', country: 'Чад' },
    { image: 'img/tf.png', country: 'Французские Южные и Антарктические территории' },
    { image: 'img/tg.png', country: 'Того' },
    { image: 'img/th.png', country: 'Таиланд' },
    { image: 'img/tj.png', country: 'Таджикистан' },
    { image: 'img/tk.png', country: 'Токелау' },
    { image: 'img/tl.png', country: 'Восточный Тимор' },
    { image: 'img/tm.png', country: 'Туркменистан' },
    { image: 'img/tn.png', country: 'Тунис' },
    { image: 'img/to.png', country: 'Тонга' },
    { image: 'img/tr.png', country: 'Турция' },
    { image: 'img/tt.png', country: 'Тринидад и Тобаго' },
    { image: 'img/tv.png', country: 'Тувалу' },
    { image: 'img/tw.png', country: 'Тайвань' },
    { image: 'img/tz.png', country: 'Танзания' },
    { image: 'img/ua.png', country: 'В целом - не важно' },
    { image: 'img/ug.png', country: 'Уганда' },
    { image: 'img/us.png', country: 'Соединённые Штаты Америки' },
    { image: 'img/uy.png', country: 'Уругвай' },
    { image: 'img/uz.png', country: 'Узбекистан' },
    { image: 'img/va.png', country: 'Страна Олега' }
];

// Пул доступных цветов для фона плашки с ответом
const colors = ['#ef233c', '#e053ce', '#00a693', '#ffd506', '#0effd9', '#ce001b', '#008a00', '#61cdfb'];

// Переменная для хранения текущего индекса флага
let currentIndex = null;

// Функция для генерации случайного числа в заданном диапазоне
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для выбора случайного цвета из массива и его удаления из списка
function getRandomColor() {
    const index = getRandomInt(0, colors.length - 1);
    return colors.splice(index, 1)[0]; // Удаляем выбранный цвет из массива и возвращаем его
}

// Функция для генерации случайного флага и его отображения
function generateFlag() {
    // Перемешиваем флаги, если все они были использованы
    if (flags.length === 0) {
        flags = [
            { image: 'img/australia.png', country: 'Австралия' },
    { image: 'img/afganistan.png', country: 'Афганистан' },
    { image: 'img/albania.png', country: 'Албания' },
    { image: 'img/angola.png', country: 'Ангола' },
    { image: 'img/andorra.png', country: 'Андорра' },
    { image: 'img/antigua.png', country: 'Антигуа и Барбуда' },
    { image: 'img/argentina.png', country: 'Аргентина' },
    { image: 'img/antarqt.png', country: 'Антарктида' },
    { image: 'img/Armenia.png', country: 'Армения' },
    { image: 'img/oae.png', country: 'Объединённые Арабские Эмираты' },
    { image: 'img/mf.png', country: 'Франция' },
    { image: 'img/mg.png', country: 'Мадагаскар' },
    { image: 'img/mh.png', country: 'Маршалловы острова' },
    { image: 'img/mk.png', country: 'Македония' },
    { image: 'img/ml.png', country: 'Мали' },
    { image: 'img/mm.png', country: 'Мьянма (Бирма)' },
    { image: 'img/mn.png', country: 'Монголия' },
    { image: 'img/mo.png', country: 'Макао' },
    { image: 'img/mp.png', country: 'Северные Марианские острова' },
    { image: 'img/mq.png', country: 'Мартиника' },
    { image: 'img/mr.png', country: 'Мавритания' },
    { image: 'img/ms.png', country: 'Монтсеррат' },
    { image: 'img/mt.png', country: 'Мальта' },
    { image: 'img/mu.png', country: 'Маврикий' },
    { image: 'img/mv.png', country: 'Мальдивы' },
    { image: 'img/mw.png', country: 'Малави' },
    { image: 'img/mx.png', country: 'Мексика' },
    { image: 'img/my.png', country: 'Малайзия' },
    { image: 'img/mz.png', country: 'Мозамбик' },
    { image: 'img/na.png', country: 'Намибия' },
    { image: 'img/nc.png', country: 'Новая Каледония' },
    { image: 'img/ne.png', country: 'Нигер' },
    { image: 'img/nf.png', country: 'Остров Норфолк' },
    { image: 'img/ng.png', country: 'Нигерия' },
    { image: 'img/ni.png', country: 'Никарагуа' },
    { image: 'img/nl.png', country: 'Нидерланды' },
    { image: 'img/no.png', country: 'Норвегия' },
    { image: 'img/np.png', country: 'Непал' },
    { image: 'img/nr.png', country: 'Науру' },
    { image: 'img/nu.png', country: 'Ниуэ' },
    { image: 'img/nz.png', country: 'Новая Зеландия' },
    { image: 'img/om.png', country: 'Оман' },
    { image: 'img/pa.png', country: 'Панама' },
    { image: 'img/pe.png', country: 'Перу' },
    { image: 'img/pf.png', country: 'Французская Полинезия' },
    { image: 'img/pg.png', country: 'Папуа — Новая Гвинея' },
    { image: 'img/ph.png', country: 'Филиппины' },
    { image: 'img/pk.png', country: 'Пакистан' },
    { image: 'img/pl.png', country: 'Польша' },
    { image: 'img/pm.png', country: 'Сен-Пьер и Микелон' },
    { image: 'img/pn.png', country: 'Острова Питкэрн' },
    { image: 'img/pr.png', country: 'Пуэрто-Рико' },
    { image: 'img/ps.png', country: 'Государство Палестина' },
    { image: 'img/pt.png', country: 'Португалия' },
    { image: 'img/pw.png', country: 'Палау' },
    { image: 'img/py.png', country: 'Парагвай' },
    { image: 'img/qa.png', country: 'Катар' },
    { image: 'img/re.png', country: 'Реюньон' },
    { image: 'img/ro.png', country: 'Румыния' },
    { image: 'img/rs.png', country: 'Сербия' },
    { image: 'img/ru.png', country: 'Святая Русь' },
    { image: 'img/rw.png', country: 'Руанда' },
    { image: 'img/sa.png', country: 'Саудовская Аравия' },
    { image: 'img/sb.png', country: 'Соломоновы острова' },
    { image: 'img/sc.png', country: 'Сейшельские острова' },
    { image: 'img/sd.png', country: 'Судан' },
    { image: 'img/se.png', country: 'Швеция' },
    { image: 'img/sg.png', country: 'Сингапур' },
    { image: 'img/sh.png', country: 'Остров Святой Елены' },
    { image: 'img/si.png', country: 'Словения' },
    { image: 'img/sj.png', country: 'Шпицберген и Ян-Майен' },
    { image: 'img/sk.png', country: 'Словакия' },
    { image: 'img/sl.png', country: 'Сьерра-Леоне' },
    { image: 'img/sm.png', country: 'Сан-Марино' },
    { image: 'img/sn.png', country: 'Сенегал' },
    { image: 'img/so.png', country: 'Сомали' },
    { image: 'img/sr.png', country: 'Суринам' },
    { image: 'img/ss.png', country: 'Южный Судан' },
    { image: 'img/st.png', country: 'Сан-Томе и Принсипи' },
    { image: 'img/sv.png', country: 'Сальвадор' },
    { image: 'img/sx.png', country: 'Синт-Мартен' },
    { image: 'img/sy.png', country: 'Сирия' },
    { image: 'img/sz.png', country: 'Эсватини' },
    { image: 'img/tc.png', country: 'Теркс и Кайкос' },
    { image: 'img/td.png', country: 'Чад' },
    { image: 'img/tf.png', country: 'Французские Южные и Антарктические территории' },
    { image: 'img/tg.png', country: 'Того' },
    { image: 'img/th.png', country: 'Таиланд' },
    { image: 'img/tj.png', country: 'Таджикистан' },
    { image: 'img/tk.png', country: 'Токелау' },
    { image: 'img/tl.png', country: 'Восточный Тимор' },
    { image: 'img/tm.png', country: 'Туркменистан' },
    { image: 'img/tn.png', country: 'Тунис' },
    { image: 'img/to.png', country: 'Тонга' },
    { image: 'img/tr.png', country: 'Турция' },
    { image: 'img/tt.png', country: 'Тринидад и Тобаго' },
    { image: 'img/tv.png', country: 'Тувалу' },
    { image: 'img/tw.png', country: 'Тайвань' },
    { image: 'img/tz.png', country: 'Танзания' },
    { image: 'img/ua.png', country: 'В целом - не важно' },
    { image: 'img/ug.png', country: 'Уганда' },
    { image: 'img/us.png', country: 'Соединённые Штаты Америки' },
    { image: 'img/uy.png', country: 'Уругвай' },
    { image: 'img/uz.png', country: 'Узбекистан' },
    { image: 'img/va.png', country: 'Страна Олега' }
        ];
    }

    currentIndex = getRandomInt(0, flags.length - 1);
    const flag = flags[currentIndex];

    const flagImage = document.getElementById('flagImage');
    flagImage.src = flag.image;
}

// Функция для отображения названия страны текущего флага с рандомным цветом фона
function showCountryName() {
    // Проверяем, был ли сгенерирован флаг
    if (currentIndex === null) {
        alert('Сначала сгенерируй флаг, тупица!');
        return;
    }

    const flag = flags[currentIndex];

    // Выбираем и устанавливаем случайный цвет фона
    const randomColor = getRandomColor();

    const countryName = document.getElementById('countryName');
    countryName.textContent = flag.country;
    countryName.style.backgroundColor = randomColor;
    countryName.style.display = 'block';

    setTimeout(function() {
        countryName.style.display = 'none';

        // Возвращаем использованный цвет обратно в массив
        colors.push(randomColor);
    }, 1000);
}
