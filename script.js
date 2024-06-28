// массив флагов Ы
let flags = [
    { image: 'afganistan.png', country: 'Афганистан' },
    { image: 'australia.png', country: 'Австралия' },
    { image: 'albania.png', country: 'Албания' },
    { image: 'angola.png', country: 'Ангола' },
    { image: 'andorra.png', country: 'Андорра' },
    { image: 'antigua.png', country: 'Антигуа и Барбуда' },
    { image: 'argentina.png', country: 'Аргентина' },
    { image: 'antarqt.png', country: 'Антарктида' },
    { image: 'Armenia.png', country: 'Армения' },
    { image: 'oae.png', country: 'Объединённые Арабские Эмираты' },
    { image: 'mf.png', country: 'Франция' },
    { image: 'mg.png', country: 'Мадагаскар' },
    { image: 'mh.png', country: 'Маршалловы острова' },
    { image: 'mk.png', country: 'Македония' },
    { image: 'ml.png', country: 'Мали' },
    { image: 'mm.png', country: 'Мьянма (Бирма)' },
    { image: 'mn.png', country: 'Монголия' },
    { image: 'mo.png', country: 'Макао' },
    { image: 'mp.png', country: 'Северные Марианские острова' },
    { image: 'mq.png', country: 'Мартиника' },
    { image: 'mr.png', country: 'Мавритания' },
    { image: 'ms.png', country: 'Монтсеррат' },
    { image: 'mt.png', country: 'Мальта' },
    { image: 'mu.png', country: 'Маврикий' },
    { image: 'mv.png', country: 'Мальдивы' },
    { image: 'mw.png', country: 'Малави' },
    { image: 'mx.png', country: 'Мексика' },
    { image: 'my.png', country: 'Малайзия' },
    { image: 'mz.png', country: 'Мозамбик' },
    { image: 'na.png', country: 'Намибия' },
    { image: 'nc.png', country: 'Новая Каледония' },
    { image: 'ne.png', country: 'Нигер' },
    { image: 'nf.png', country: 'Остров Норфолк' },
    { image: 'ng.png', country: 'Нигерия' },
    { image: 'ni.png', country: 'Никарагуа' },
    { image: 'nl.png', country: 'Нидерланды' },
    { image: 'no.png', country: 'Норвегия' },
    { image: 'np.png', country: 'Непал' },
    { image: 'nr.png', country: 'Науру' },
    { image: 'nu.png', country: 'Ниуэ' },
    { image: 'nz.png', country: 'Новая Зеландия' },
    { image: 'om.png', country: 'Оман' },
    { image: 'pa.png', country: 'Панама' },
    { image: 'pe.png', country: 'Перу' },
    { image: 'pf.png', country: 'Французская Полинезия' },
    { image: 'pg.png', country: 'Папуа — Новая Гвинея' },
    { image: 'ph.png', country: 'Филиппины' },
    { image: 'pk.png', country: 'Пакистан' },
    { image: 'pl.png', country: 'Польша' },
    { image: 'pm.png', country: 'Сен-Пьер и Микелон' },
    { image: 'pn.png', country: 'Острова Питкэрн' },
    { image: 'pr.png', country: 'Пуэрто-Рико' },
    { image: 'ps.png', country: 'Государство Палестина' },
    { image: 'pt.png', country: 'Португалия' },
    { image: 'pw.png', country: 'Палау' },
    { image: 'py.png', country: 'Парагвай' },
    { image: 'qa.png', country: 'Катар' },
    { image: 're.png', country: 'Реюньон' },
    { image: 'ro.png', country: 'Румыния' },
    { image: 'rs.png', country: 'Сербия' },
    { image: 'ru.png', country: 'Святая Русь' },
    { image: 'rw.png', country: 'Руанда' },
    { image: 'sa.png', country: 'Саудовская Аравия' },
    { image: 'sb.png', country: 'Соломоновы острова' },
    { image: 'sc.png', country: 'Сейшельские острова' },
    { image: 'sd.png', country: 'Судан' },
    { image: 'se.png', country: 'Швеция' },
    { image: 'sg.png', country: 'Сингапур' },
    { image: 'sh.png', country: 'Остров Святой Елены' },
    { image: 'si.png', country: 'Словения' },
    { image: 'sj.png', country: 'Шпицберген и Ян-Майен' },
    { image: 'sk.png', country: 'Словакия' },
    { image: 'sl.png', country: 'Сьерра-Леоне' },
    { image: 'sm.png', country: 'Сан-Марино' },
    { image: 'sn.png', country: 'Сенегал' },
    { image: 'so.png', country: 'Сомали' },
    { image: 'sr.png', country: 'Суринам' },
    { image: 'ss.png', country: 'Южный Судан' },
    { image: 'st.png', country: 'Сан-Томе и Принсипи' },
    { image: 'sv.png', country: 'Сальвадор' },
    { image: 'sx.png', country: 'Синт-Мартен' },
    { image: 'sy.png', country: 'Сирия' },
    { image: 'sz.png', country: 'Эсватини' },
    { image: 'tc.png', country: 'Теркс и Кайкос' },
    { image: 'td.png', country: 'Чад' },
    { image: 'tf.png', country: 'Французские Южные и Антарктические территории' },
    { image: 'tg.png', country: 'Того' },
    { image: 'th.png', country: 'Таиланд' },
    { image: 'tj.png', country: 'Таджикистан' },
    { image: 'tk.png', country: 'Токелау' },
    { image: 'tl.png', country: 'Восточный Тимор' },
    { image: 'tm.png', country: 'Туркменистан' },
    { image: 'tn.png', country: 'Тунис' },
    { image: 'to.png', country: 'Тонга' },
    { image: 'tr.png', country: 'Турция' },
    { image: 'tt.png', country: 'Тринидад и Тобаго' },
    { image: 'tv.png', country: 'Тувалу' },
    { image: 'tw.png', country: 'Тайвань' },
    { image: 'tz.png', country: 'Танзания' },
    { image: 'ua.png', country: 'В целом - не важно' },
    { image: 'ug.png', country: 'Уганда' },
    { image: 'us.png', country: 'Соединённые Штаты Америки' },
    { image: 'uy.png', country: 'Уругвай' },
    { image: 'uz.png', country: 'Узбекистан' },
    { image: 'va.png', country: 'Страна Олега' }
];

// Пул доступных цветов
const colors = ['#ef233c', '#e053ce', '#00a693', '#ffd506', '#0effd9', '#ce001b', '#008a00', '#61cdfb'];

let currentIndex = null;

// Функция для генерации случайного числа
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    const index = getRandomInt(0, colors.length - 1);
    return colors.splice(index, 1)[0]; // Удаляем выбранный цвет из массива и возвращаем его
}

function generateFlag() {
    // Перемешиваем флаги, если все они были использованы
    if (flags.length === 0) {
        flags = [
            { image: 'afganistan.png', country: 'Афганистан' },
    { image: 'australia.png', country: 'Австралия' },
    { image: 'albania.png', country: 'Албания' },
    { image: 'angola.png', country: 'Ангола' },
    { image: 'andorra.png', country: 'Андорра' },
    { image: 'antigua.png', country: 'Антигуа и Барбуда' },
    { image: 'argentina.png', country: 'Аргентина' },
    { image: 'antarqt.png', country: 'Антарктида' },
    { image: 'Armenia.png', country: 'Армения' },
    { image: 'oae.png', country: 'Объединённые Арабские Эмираты' },
    { image: 'mf.png', country: 'Франция' },
    { image: 'mg.png', country: 'Мадагаскар' },
    { image: 'mh.png', country: 'Маршалловы острова' },
    { image: 'mk.png', country: 'Македония' },
    { image: 'ml.png', country: 'Мали' },
    { image: 'mm.png', country: 'Мьянма (Бирма)' },
    { image: 'mn.png', country: 'Монголия' },
    { image: 'mo.png', country: 'Макао' },
    { image: 'mp.png', country: 'Северные Марианские острова' },
    { image: 'mq.png', country: 'Мартиника' },
    { image: 'mr.png', country: 'Мавритания' },
    { image: 'ms.png', country: 'Монтсеррат' },
    { image: 'mt.png', country: 'Мальта' },
    { image: 'mu.png', country: 'Маврикий' },
    { image: 'mv.png', country: 'Мальдивы' },
    { image: 'mw.png', country: 'Малави' },
    { image: 'mx.png', country: 'Мексика' },
    { image: 'my.png', country: 'Малайзия' },
    { image: 'mz.png', country: 'Мозамбик' },
    { image: 'na.png', country: 'Намибия' },
    { image: 'nc.png', country: 'Новая Каледония' },
    { image: 'ne.png', country: 'Нигер' },
    { image: 'nf.png', country: 'Остров Норфолк' },
    { image: 'ng.png', country: 'Нигерия' },
    { image: 'ni.png', country: 'Никарагуа' },
    { image: 'nl.png', country: 'Нидерланды' },
    { image: 'no.png', country: 'Норвегия' },
    { image: 'np.png', country: 'Непал' },
    { image: 'nr.png', country: 'Науру' },
    { image: 'nu.png', country: 'Ниуэ' },
    { image: 'nz.png', country: 'Новая Зеландия' },
    { image: 'om.png', country: 'Оман' },
    { image: 'pa.png', country: 'Панама' },
    { image: 'pe.png', country: 'Перу' },
    { image: 'pf.png', country: 'Французская Полинезия' },
    { image: 'pg.png', country: 'Папуа — Новая Гвинея' },
    { image: 'ph.png', country: 'Филиппины' },
    { image: 'pk.png', country: 'Пакистан' },
    { image: 'pl.png', country: 'Польша' },
    { image: 'pm.png', country: 'Сен-Пьер и Микелон' },
    { image: 'pn.png', country: 'Острова Питкэрн' },
    { image: 'pr.png', country: 'Пуэрто-Рико' },
    { image: 'ps.png', country: 'Государство Палестина' },
    { image: 'pt.png', country: 'Португалия' },
    { image: 'pw.png', country: 'Палау' },
    { image: 'py.png', country: 'Парагвай' },
    { image: 'qa.png', country: 'Катар' },
    { image: 're.png', country: 'Реюньон' },
    { image: 'ro.png', country: 'Румыния' },
    { image: 'rs.png', country: 'Сербия' },
    { image: 'ru.png', country: 'Святая Русь' },
    { image: 'rw.png', country: 'Руанда' },
    { image: 'sa.png', country: 'Саудовская Аравия' },
    { image: 'sb.png', country: 'Соломоновы острова' },
    { image: 'sc.png', country: 'Сейшельские острова' },
    { image: 'sd.png', country: 'Судан' },
    { image: 'se.png', country: 'Швеция' },
    { image: 'sg.png', country: 'Сингапур' },
    { image: 'sh.png', country: 'Остров Святой Елены' },
    { image: 'si.png', country: 'Словения' },
    { image: 'sj.png', country: 'Шпицберген и Ян-Майен' },
    { image: 'sk.png', country: 'Словакия' },
    { image: 'sl.png', country: 'Сьерра-Леоне' },
    { image: 'sm.png', country: 'Сан-Марино' },
    { image: 'sn.png', country: 'Сенегал' },
    { image: 'so.png', country: 'Сомали' },
    { image: 'sr.png', country: 'Суринам' },
    { image: 'ss.png', country: 'Южный Судан' },
    { image: 'st.png', country: 'Сан-Томе и Принсипи' },
    { image: 'sv.png', country: 'Сальвадор' },
    { image: 'sx.png', country: 'Синт-Мартен' },
    { image: 'sy.png', country: 'Сирия' },
    { image: 'sz.png', country: 'Эсватини' },
    { image: 'tc.png', country: 'Теркс и Кайкос' },
    { image: 'td.png', country: 'Чад' },
    { image: 'tf.png', country: 'Французские Южные и Антарктические территории' },
    { image: 'tg.png', country: 'Того' },
    { image: 'th.png', country: 'Таиланд' },
    { image: 'tj.png', country: 'Таджикистан' },
    { image: 'tk.png', country: 'Токелау' },
    { image: 'tl.png', country: 'Восточный Тимор' },
    { image: 'tm.png', country: 'Туркменистан' },
    { image: 'tn.png', country: 'Тунис' },
    { image: 'to.png', country: 'Тонга' },
    { image: 'tr.png', country: 'Турция' },
    { image: 'tt.png', country: 'Тринидад и Тобаго' },
    { image: 'tv.png', country: 'Тувалу' },
    { image: 'tw.png', country: 'Тайвань' },
    { image: 'tz.png', country: 'Танзания' },
    { image: 'ua.png', country: 'В целом - не важно' },
    { image: 'ug.png', country: 'Уганда' },
    { image: 'us.png', country: 'Соединённые Штаты Америки' },
    { image: 'uy.png', country: 'Уругвай' },
    { image: 'uz.png', country: 'Узбекистан' },
    { image: 'va.png', country: 'Страна Олега' }
        ];
    }

    currentIndex = getRandomInt(0, flags.length - 1);
    const flag = flags[currentIndex];

    const flagImage = document.getElementById('flagImage');
    flagImage.src = flag.image;
}

function showCountryName() {
    // Проверяем, был ли сгенерирован флаг
    if (currentIndex === null) {
        alert('Сначала сгенерируй флаг, тупица!');
        return;
    }

    const flag = flags[currentIndex];

    const randomColor = getRandomColor();

    const countryName = document.getElementById('countryName');
    countryName.textContent = flag.country;
    countryName.style.backgroundColor = randomColor;
    countryName.style.display = 'block';

    setTimeout(function() {
        countryName.style.display = 'none';
        colors.push(randomColor);
    }, 1000);
}
