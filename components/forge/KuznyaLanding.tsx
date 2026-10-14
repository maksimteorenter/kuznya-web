"use client";

import { useEffect, type MouseEvent } from "react";
import "./kuznya.css";

/**
 * «Кузня силы» — главная страница клуба.
 *
 * Разметка один в один повторяет макет, утверждённый Максимом
 * (claude.ai/artifact/XDhJEZciUAgu8mmHcVt8KV, версия 13). Поэтому здесь обычный
 * JSX с классами из kuznya.css, а не Tailwind: перевод на утилиты увёл бы
 * вёрстку от согласованного вида, а правки приходят в терминах макета.
 *
 * Порядок экранов — путь читателя, вопрос → ответ: оффер → с чего начинается
 * сила → три врага → кто ведёт → инструменты → четыре шага → скорость и
 * простота → возражения → кому сюда → цена → дверь. Курсивные вопросы между
 * секциями (.bridge) — та самая «нить карты», по которой он идёт вниз.
 */
export function KuznyaLanding() {
  // Подсветка текущей станции на карте. IntersectionObserver, а не scroll:
  // не дёргает layout на каждом кадре.
  useEffect(() => {
    const stations = Array.from(document.querySelectorAll<HTMLAnchorElement>(".kz .st"));
    if (!stations.length) return;

    const byId = new Map<string, HTMLAnchorElement>();
    for (const a of stations) {
      const href = a.getAttribute("href");
      if (href) byId.set(href.slice(1), a);
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          for (const a of stations) a.classList.remove("on");
          // У #top своей станции нет: на первом экране карта гаснет целиком.
          byId.get(e.target.id)?.classList.add("on");
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    for (const id of ["top", ...byId.keys()]) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  // Плавная прокрутка по станциям — один обработчик на контейнер вместо
  // шести одинаковых на ссылках.
  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>(".st");
    const href = a?.getAttribute("href");
    if (!href?.startsWith("#")) return;
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="kz" onClick={onClick}>
      <section className="hero" id="top"><div className="wrap g">
        <div>
          <p className="kick">Кузня силы · закрытый мужской клуб</p>
          <h1 className="disp">Помогу мужчине стать<br />неуязвимым и сильным</h1>
          <p className="lead"><b>Раскрою твою уникальность.</b> Избавлю от блоков и слабостей.
            Научу сексуальному кунг-фу.</p>
          <div className="pillars3">
            <span>Сила</span><span>Неуязвимость</span><span>Проявленность</span>
          </div>
          <p className="ctawrap"><a className="cta" href="#price">Войти в Кузню — $15 / мес</a></p>
          <p className="micro">Отменить можно в любой момент</p>
        </div>
        <div className="heroph"><img src="/images/kuznya-hero.jpg" width={680} height={850} alt="Максим Теорентер" /></div>
      </div></section>

      <div className="map"><div className="wrap">
        <a className="st" href="#foes"><i className="d" /><span>Три врага</span></a>
        <a className="st" href="#guide"><i className="d" /><span>Кто ведёт</span></a>
        <a className="st" href="#inside"><i className="d" /><span>Что внутри</span></a>
        <a className="st" href="#act"><i className="d" /><span>Действия</span></a>
        <a className="st" href="#faq"><i className="d" /><span>Вопросы</span></a>
        <a className="st" href="#price"><i className="d" /><span>Вход</span></a>
      </div></div>

      <section className="pad alt" id="creed"><div className="wrap">
        <p className="bridge">С чего вообще начинается сила мужчины?</p>

        <div className="creed">
          <p>Испокон веков известно: <b>сильная потенция — это богатство тела мужчины.</b>{" "}
            И инструмент управления деньгами и женщиной.</p>
          <p className="creed2">А проявленность и сила духа — <b>основа достигательства в жизни.</b></p>
        </div>
      </div></section>

      <section className="pad" id="foes"><div className="wrap">
        <p className="bridge">Если это основа — почему у меня её нет?</p>

        <div className="ctr">
          <p className="kick">Почему ты слабый и обесцененный</p>
          <h2 className="sec disp">У мужчины три врага</h2>
        </div>

        <div className="foe">
          <p className="nn">Враг первый</p>
          <h3>Женщина не может<br />воспитать мужчину</h3>
          <div className="body">
            <p>Вспомни, кто воспитывал тебя с самого детства. Сначала мама и бабушка.
              Потом детский сад — там тоже женщины. Потом школа — и снова женщины.</p>
            <p>Из тебя сделали послушного. Слабого. Неспособного к драке и к защите.{" "}
              <b>Вырвали мужской дух — хищника, лидера.</b> Не раскрыли силу,
              соревновательность, оскал. <b>Сделали хорошего домашнего котика.</b>
              <b>Воспитать мужчину может только мужчина, который сам обладает кодексом.</b></p>
          </div>
        </div>

        <div className="foe">
          <p className="nn">Враг второй</p>
          <h3>Ты не знаешь<br />своего тела</h3>
          <div className="body">
            <p>Ты не знаешь своего тела и своей потенции. Тебя не учили кодексу мужчины.{" "}
              <b>Ты не прошёл инициацию.</b></p>
            <p>Тебя никто не обучал сексу. Никто не показал, как управлять
              продолжительностью и как усиливать потенцию. <b>А это знание есть.</b>
              <b>Мы изучали его у даосов шесть лет.</b></p>
          </div>
        </div>

        <div className="foe">
          <p className="nn">Враг третий</p>
          <h3>Ты не знаешь<br />свою психику</h3>
          <div className="body">
            <p>Не знаешь своих сильных сторон. <b>Не знаешь своей миссии.</b> Не знаешь, как
              выходить из кризисов и восстанавливаться после каждого поражения.</p>
            <p>Ты делишься на части. Блокируешь себя. Упираешься во внутренние потолки.
              Страх одолевает — и ты не доходишь до результата.{" "}
              <b>Перестаёшь верить и в себя, и в результат. И останавливаешься.</b></p>
          </div>
        </div>
      </div></section>

      <section className="pad alt" id="guide"><div className="wrap">
        <p className="bridge">Хорошо. А кто мне это говорит?</p>
      <div className="guide">
        <div>
          <div className="ph"><img src="/images/kuznya-guide.jpg" width={680} height={1020} alt="Максим Теорентер" /></div>
          <p className="phcap"><b>Максим Теорентер</b><span>твой коуч</span></p>
        </div>
        <div>
          <p className="kick">Кто тебя ведёт</p>
          <h2 className="sec disp">Я был там.<br />Я знаю все эти боли</h2>
          <p>Я знаю, как это — чувствовать слабость в постели. Заканчивать быстро.
            Быть недовольным своим размером.</p>
          <p>Я знаю, как попадать в кризис и как банкротиться. <b>Я был в плену 1341 день.</b>{" "}
            Я знаю, как выжить в аду.</p>
          <p><b className="hl">И я знаю, как это победить.</b> Я создал мужской клуб
            «Кузня», в который собрал работающие инструменты. <b>Все проверены на мне самом.</b></p>
          <div className="theses">
            <p><b>30 лет</b> в спорте</p>
            <p><b>Мастер спорта</b> Украины, 8× чемпион страны</p>
            <p><b>Чемпион Украины</b> по грэпплингу ADCC</p>
            <p>Донецкий институт <b>физвоспитания и спорта</b></p>
            <p><b>Магистр менеджмента</b> — ХНУГХ им. Бекетова</p>
            <p><b>Владел бизнесами:</b> фитнес-клуб, агентство, производство</p>
            <p><b>Гипнотерапевт</b> — American Academy of Hypnosis</p>
            <p><b>1341 день</b> в плену · ветеран боевых действий</p>
          </div>
          <a className="morelink" href="/about">Подробно обо мне →</a>
        </div>
      </div></div></section>

      <section className="pad" id="inside"><div className="wrap">
        <p className="bridge">Чем именно я буду снимать этих врагов?</p>

        <div className="ctr">
          <p className="kick">Что внутри</p>
          <h2 className="sec disp">Инструменты, проверенные на себе</h2>
        </div>
        <div className="mods">
          <div className="mod">
            <div className="modim"><img src="/images/mod-kungfu.jpg" width={620} height={1100} alt="" /></div>
            <h3>Сексуальное кунг-фу</h3><p className="sub">шесть лет у даосов</p>
            <ul>
            <li>Как не кончать быстро — а только тогда, когда сам хочешь</li>
            <li>Как усиливать потенцию</li>
            <li>Работа с телом и уверенностью в себе</li>
            <li>Секреты женского тела и движения</li>
            <li>Как воспитывать мальчика и с какого возраста</li>
            <li>Как продлить потенцию до глубокой старости</li>
            </ul>
          </div>

          <div className="mod">
            <div className="modim"><img src="/images/mod-gipnospas.jpg" width={620} height={1100} alt="" /></div>
            <h3>Гипноспас</h3><p className="sub">флагманский курс</p>
            <ul>
            <li>Сознание, подсознание, сверх-Я</li>
            <li>Гипноз, НЛП, ПЭАТ Славинского</li>
            <li>Раскрыть свои таланты</li>
            <li>Снять блоки, слабости, ограничения</li>
            </ul>
          </div>

          <div className="mod">
            <div className="modim"><img src="/images/mod-kodeks.jpg" width={620} height={1100} alt="" /></div>
            <h3>Кодекс мужчины</h3><p className="sub">психология</p>
            <ul>
            <li>То, что защитит тебя от поражения</li>
            <li>Кто я, кто она, кто они</li>
            <li>Фокус, поле, оскал, бесценность, ожидания</li>
            </ul>
          </div>

          <div className="mod">
            <div className="modim"><img src="/images/mod-perezagruzka.jpg" width={620} height={1100} alt="" /></div>
            <h3>Перезагрузка</h3><p className="sub">чат практики</p>
            <ul>
            <li>Отрабатываем инструменты друг на друге и на себе</li>
            <li>Дальше они становятся твоими доспехами</li>
            </ul>
          </div>

          <div className="mod">
            <div className="modim"><img src="/images/mod-biohacking.jpg" width={620} height={1100} alt="" /></div>
            <h3>Биохакинг</h3><p className="sub">образовательно</p>
            <ul>
            <li>Атлетизм, БАДы, пептиды, гормоны — как это устроено</li>
            <li>О чём говорить с врачом</li>
            </ul>
          </div>

          <div className="mod">
            <div className="modim"><img src="/images/mod-chistilishche.jpg" width={620} height={1100} alt="" /></div>
            <h3>Чистилище</h3><p className="sub">очищение</p>
            <ul>
            <li>Научишься очищать своё тело</li>
            <li>Яды бьют по качеству жизни</li>
            </ul>
          </div>

          <div className="mod">
            <div className="modim"><img src="/images/mod-gnm.jpg" width={620} height={1100} alt="" /></div>
            <h3>ГНМ</h3><p className="sub">новая германская медицина</p>
            <ul>
            <li>Психосоматика: суть и причина</li>
            <li>Как состояние отражается в теле</li>
            <li>Не заменяет врача</li>
            </ul>
          </div>

          <div className="mod">
            <div className="modim"><img src="/images/mod-ekzorcizm.jpg" width={620} height={1100} alt="" /></div>
            <h3>Экзорцизм</h3><p className="sub">работа с родом</p>
            <ul>
            <li>Решение родовых сценариев</li>
            <li>Работа с тенями и сущностями</li>
            </ul>
          </div>

          <div className="mod">
            <div className="modim"><img src="/images/mod-telo.jpg" width={620} height={1100} alt="" /></div>
            <h3>Тело</h3><p className="sub">мастер спорта</p>
            <ul>
            <li>Мои рекомендации по силовой работе</li>
            <li>Соберём твоё профессиональное красивое тело</li>
            </ul>
          </div>

          <div className="mod">
            <div className="modim"><img src="/images/mod-plen.jpg" width={620} height={1100} alt="" /></div>
            <h3>1341 день в плену</h3><p className="sub">книга</p>
            <ul>
            <li>Как выжить в аду</li>
            <li>Реальная история выживания, 2016–2019</li>
            </ul>
          </div>

          <div className="mod">
            <div className="modim"><img src="/images/mod-gita.jpg" width={620} height={1100} alt="" /></div>
            <h3>33 мудрости Бхагавад-гиты</h3><p className="sub">книга</p>
            <ul>
            <li>Между страхом, долгом и слабостью</li>
            <li>Когда рождается твоя Бхагавад-гита</li>
            </ul>
          </div>
        </div>
      </div></section>

      <section className="pad alt" id="act"><div className="wrap ctr">
        <p className="bridge">Инструменты есть. Что мне с ними делать?</p>

        <p className="kick">Твои действия</p>
        <h2 className="sec disp">Четыре шага</h2>
        <div className="steps4">
          <div className="s4"><p className="nn">01</p><h4>Заходишь</h4>
            <p>Оформляешь подписку и сразу получаешь доступ в закрытый клуб. Без собеседований и ожидания потока.</p></div>
          <div className="s4"><p className="nn">02</p><h4>Смотришь</h4>
            <p>Берёшь то направление, которое болит сильнее всего. Не обязательно подряд — начинай с твоего.</p></div>
          <div className="s4"><p className="nn">03</p><h4>Практикуешь</h4>
            <p>Отрабатываешь инструменты на себе и в чате. Застрял — приносишь вопрос на живой разбор.</p></div>
          <div className="s4"><p className="nn">04</p><h4>Проявляешься</h4>
            <p>Инструменты становятся твоими. Дальше это уже не курс, а то, как ты живёшь.</p></div>
        </div>
        <div className="inout">
          <div className="c a"><h4>Зайдёшь</h4><p>Неуверенным. Сомневающимся. <b>Не знающим.</b></p></div>
          <div className="arw">→</div>
          <div className="c b"><h4>Выйдешь</h4><p><b>Настоящим лидером</b> — со знанием себя, своего тела
            и женщины. С инструментами управления своей жизнью.</p></div>
        </div>
      </div></section>

      <section className="pad" id="why2"><div className="wrap">
        <p className="bridge">Сколько ждать и насколько это тяжело?</p>

        <div className="ctr">
          <p className="kick">Два вопроса, которые ты задашь себе первыми</p>
          <h2 className="sec disp">Когда и насколько тяжело</h2>
        </div>
        <div className="valgrid">
          <div className="val">
            <p className="vk">Скорость</p>
            <h3 className="disp">Результат ты увидишь<br />в первые дни</h3>
            <p>Не через год и не «когда-нибудь». Уже на первых разборах тебе раскроются глаза:
              ты увидишь, что именно тебя держало всё это время — и начнёшь перестраиваться.</p>
            <p>Этот материал сразу расширяет понимание себя и жизни. А инструменты, которые ты
              заберёшь, <b>останутся с тобой навсегда.</b></p>
          </div>
          <div className="val">
            <p className="vk">Простота</p>
            <h3 className="disp">Всё очень просто.<br />Расшифровывать нечего</h3>
            <p>Материал адаптирован так, чтобы его можно было брать и делать. Без терминов,
              без философии ради философии. Посмотрел — применил.</p>
            <p>Застрял — есть чат, есть обратная связь, есть разборы.{" "}
              <b>Тебя не бросят один на один с материалом.</b></p>
          </div>
        </div>
      </div></section>

      <section className="pad alt" id="faq"><div className="wrap">
        <p className="bridge">Что меня всё ещё останавливает?</p>

        <p className="kick">То, что ты спрашиваешь у себя</p>
        <h2 className="sec disp">Вопросы перед входом</h2>
        <div className="faq">
          <div className="q"><b>А если мне не понравится?</b>
            <p>Тогда <b>ты просто не продлеваешь</b> — и следующего списания не будет. Возвращать тут
              нечего: пятнадцать долларов это цена одного ужина. Но я уверен, что ты не остановишься,
              а пойдёшь дальше — в углубление работы с собой.</p></div>
          <div className="q"><b>Я уже пробовал. У меня не получалось.</b>
            <p>Потому что ты пробовал мотивацию, а здесь инструменты. Мотивация кончается через
              неделю. <b>Инструмент работает и тогда, когда тебе лень.</b></p></div>
          <div className="q"><b>У меня нет времени.</b>
            <p><b>Час в день.</b> Если его нет — вопрос не ко мне, а к тому, на что уходят остальные
              двадцать три.</p></div>
          <div className="q"><b>Это эзотерика? Я в такое не верю.</b>
            <p><b>Верить не надо.</b> Гипноз, НЛП, психосоматика, работа с телом — это методы, которые
              проверяются на практике. Не сработало — не твой инструмент. Сработало — пользуйся.</p></div>
          <div className="q"><b>Мне стыдно про это говорить.</b>
            <p><b>Клуб закрытый и мужской.</b> Туда все пришли ровно с тем же самым. Говорить вслух
              необязательно — можно просто смотреть и делать.</p></div>
          <div className="q"><b>Я не справлюсь один.</b>
            <p><b>Ты и не будешь один.</b> Чат, живой разбор раз в неделю и мужчины, которые идут тем же
              путём и дальше тебя.</p></div>
          <div className="q"><b>Откуда я знаю, что это работает?</b>
            <p>Я проверил всё на себе — там, где проверять было больше нечем. Это не теория из книжек: тридцать лет спорта, профильное образование и мужчины, которые уже прошли через эти инструменты на моих программах.</p></div>
          <div className="q"><b>Что я получу за $15?</b>
            <p><b>Всё, что перечислено на этой странице.</b> Не часть, не демо и не «базовый тариф» — клуб целиком.</p></div>
        </div>
      </div></section>

      <section className="pad" id="fit"><div className="wrap ctr">
        <p className="bridge">А это вообще для меня?</p>

        <p className="kick">Честно</p>
        <h2 className="sec disp">Кому сюда, а кому нет</h2>
        <div className="two">
          <div className="yes"><p className="ct">Это ты</p><ul>
            <li>Тебе от 18 лет, и ты ищешь силу</li>
            <li>Тебя бросили или бросают всегда, будто проклятие</li>
            <li>Ты упёрся в потолок, в невидимые стены. В себя</li>
            <li>Ты пережил войну, предательство, кризис — и не смог до конца восстановиться</li>
            <li>Хочешь раскрыть свою уникальность, талант, миссию</li>
            <li>Рано заканчиваешь или недоволен своей потенцией</li>
            <li>Хочешь изучить гипноз, НЛП, психологию</li>
            <li>Хочешь построить сильную родовую систему с правильной структурой</li>
          </ul></div>
          <div className="no"><p className="ct">Это не ты</p><ul>
            <li>Ищешь волшебную таблетку</li>
            <li>Не готов открыться перед учением</li>
            <li>Не готов вложить в себя время</li>
            <li>Не готов практиковаться</li>
          </ul></div>
        </div>
      </div></section>

      <section className="pad alt" id="price"><div className="wrap">
        <p className="bridge">И сколько это стоит?</p>

        <p className="kick">Вход</p>
        <h2 className="sec disp">Что входит</h2>
        <div className="deal">
          <div className="dnums">
            <div className="dn"><b>30 лет</b><span>жизни, спорта и практики на себе</span></div>
            <div className="dn"><b>≈ $100 000</b><span>я отдал за обучение, школы и мастеров</span></div>
            <div className="dn gold"><b>$15</b><span>в месяц платишь ты</span></div>
          </div>
          <p className="dtext">Я собирал это тридцать лет и заплатил за это порядка ста тысяч долларов —
            обучением, школами, мастерами и собственной шкурой. Ты получаешь всё это{" "}
            <b>за пятнадцать долларов в месяц.</b> Думаю, сделка для тебя удачная.</p>
        </div>

        <div className="price">
          <div>
            <p className="plead">Все девять направлений выше — целиком, без тарифов и доплат:</p>
            <ul>
              <li><b>Девять направлений</b> — кунг-фу, кодекс, Гипноспас, ГНМ, экзорцизм, чистилище, биохакинг, тело, перезагрузка</li>
              <li><b>Чат «Перезагрузка»</b> — практикуете инструменты друг на друге</li>
              <li><b>Живой разбор с Максимом</b> — раз в неделю</li>
              <li><b>Закрытое мужское сообщество</b> — мужчины, которые идут тем же путём</li>
              <li><b>Все новые материалы</b> — пока ты в клубе, они твои</li>
            </ul>
          </div>
          <div className="pbox">
            <p className="kick">Подписка</p>
            <p className="num">$15<span className="per"> / мес</span></p>
            <a className="cta" href="https://secure.wayforpay.com/button/b31aabf280f77" rel="noopener">Войти в Кузню</a>
            <p className="note">Оплата картой. Не пошло — просто не продлеваешь, и следующего списания не будет.</p>
          </div>
        </div>
      </div></section>

      <section className="final" id="final"><div className="wrap">
        <h2 className="disp">Ты зайдёшь неуверенным.<br />Выйдешь — настоящим.</h2>
        <p className="ctawrap"><a className="cta" href="#price">Войти в Кузню — $15 / мес</a></p>
        <p className="micro">Отменить можно в любой момент</p>
        <p className="legal">Клуб 18+. Программа не является медицинской или психотерапевтической помощью
          и не заменяет врача. Материалы о теле, здоровье, добавках и протоколах носят образовательный
          характер: любые добавки и гормональная терапия — только по назначению вашего лечащего врача.
          Результаты зависят от твоих действий. Доход не гарантируется.</p>
      </div></section>
    </div>
  );
}
