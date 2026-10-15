"use client";

import { useEffect, type MouseEvent } from "react";
import "./kuznya.css";

/**
 * «Кузня силы» — главная страница клуба, украинская версия.
 *
 * Разметка и классы те же, что в KuznyaLanding: обе страницы собираются
 * из одного макета scratchpad/body.html, тексты подставляются из uk.json.
 * Поэтому правка вёрстки делается один раз и приезжает в оба языка.
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
export function KuznyaLandingUk() {
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
          <p className="kick">Кузня сили · закритий чоловічий клуб</p>
          <h1 className="disp">Допоможу чоловікові стати<br />невразливим і сильним</h1>
          <p className="lead"><b>Розкрию твою унікальність.</b> Позбавлю блоків і слабкостей. Навчу сексуального кунг-фу.</p>
          <div className="pillars3">
            <span>Сила</span><span>Невразливість</span><span>Проявленість</span>
          </div>
          <p className="deal1">Я збирав це тридцять років і заплатив близько ста тисяч доларів.{" "}
            <b>Ти отримуєш усе — за п'ятнадцять на місяць.</b></p>
          <p className="ctawrap"><a className="cta" href="#price">Увійти в Кузню — $15 / міс</a></p>
          <p className="micro">Скасувати можна будь-якої миті</p>
        </div>
        <div className="heroph"><img src="/images/kuznya-hero.jpg" width={680} height={850} alt="Максим Теорентер" /></div>
      </div></section>

      <div className="chain"><div className="wrap">
        <p className="chaink">Усе, що всередині — цілком, за $15</p>
        <div className="chainrow">
          <a href="#inside" title="Сексуальне кунг-фу"><img src="/images/thumb-kungfu.jpg" width={170} height={283} loading="lazy" alt="Сексуальне кунг-фу" /></a>
          <a href="#inside" title="Гіпноспас"><img src="/images/thumb-gipnospas.jpg" width={170} height={283} loading="lazy" alt="Гіпноспас" /></a>
          <a href="#inside" title="Кодекс чоловіка"><img src="/images/thumb-kodeks.jpg" width={170} height={283} loading="lazy" alt="Кодекс чоловіка" /></a>
          <a href="#inside" title="Перезавантаження"><img src="/images/thumb-perezagruzka.jpg" width={170} height={283} loading="lazy" alt="Перезавантаження" /></a>
          <a href="#inside" title="Біохакінг"><img src="/images/thumb-biohacking.jpg" width={170} height={283} loading="lazy" alt="Біохакінг" /></a>
          <a href="#inside" title="Чистилище"><img src="/images/thumb-chistilishche.jpg" width={170} height={283} loading="lazy" alt="Чистилище" /></a>
          <a href="#inside" title="ГНМ"><img src="/images/thumb-gnm.jpg" width={170} height={283} loading="lazy" alt="ГНМ" /></a>
          <a href="#inside" title="Екзорцизм"><img src="/images/thumb-ekzorcizm.jpg" width={170} height={283} loading="lazy" alt="Екзорцизм" /></a>
          <a href="#inside" title="Тіло"><img src="/images/thumb-telo.jpg" width={170} height={283} loading="lazy" alt="Тіло" /></a>
          <a href="#inside" title="1341 день у полоні"><img src="/images/thumb-plen.jpg" width={170} height={283} loading="lazy" alt="1341 день у полоні" /></a>
          <a href="#inside" title="33 мудрості Бхагавад-гіти"><img src="/images/thumb-gita.jpg" width={170} height={283} loading="lazy" alt="33 мудрості Бхагавад-гіти" /></a>
        </div>
      </div></div>

      <div className="map"><div className="wrap">
        <a className="st" href="#foes"><i className="d" /><span>Три вороги</span></a>
        <a className="st" href="#guide"><i className="d" /><span>Хто веде</span></a>
        <a className="st" href="#inside"><i className="d" /><span>Що всередині</span></a>
        <a className="st" href="#act"><i className="d" /><span>Дії</span></a>
        <a className="st" href="#faq"><i className="d" /><span>Питання</span></a>
        <a className="st" href="#price"><i className="d" /><span>Вхід</span></a>
      </div></div>

      <section className="pad alt" id="creed"><div className="wrap">
        <p className="bridge">З чого взагалі починається сила чоловіка?</p>

        <div className="creed">
          <p>Споконвіку відомо: <b>сильна потенція — це багатство тіла чоловіка.</b>{" "}
            І інструмент керування грошима та жінкою.</p>
          <p className="creed2">А проявленість і сила духу — <b>основа досягнень у житті.</b></p>
        </div>
      </div></section>

      <section className="pad" id="foes"><div className="wrap">
        <p className="bridge">Якщо це основа — чому в мене її немає?</p>

        <div className="ctr">
          <p className="kick">Чому ти слабкий і знецінений</p>
          <h2 className="sec disp">У чоловіка три вороги</h2>
        </div>

        <div className="foe">
          <p className="nn">Ворог перший</p>
          <h3>Жінка не може<br />виховати чоловіка</h3>
          <div className="body">
            <p>Згадай, хто виховував тебе з самого дитинства. Спочатку мама й бабуся. Потім дитячий садок — там теж жінки. Потім школа — і знову жінки.</p>
            <p>З тебе зробили слухняного. Слабкого. Нездатного ні до бійки, ні до захисту.{" "}
              <b>Вирвали чоловічий дух — хижака, лідера.</b> Не розкрили силу, змагальність, оскал. <b>Зробили доброго хатнього котика.</b>
              <b>Виховати чоловіка може лише чоловік, який сам має кодекс.</b></p>
          </div>
        </div>

        <div className="foe">
          <p className="nn">Ворог другий</p>
          <h3>Ти не знаєш<br />свого тіла</h3>
          <div className="body">
            <p>Ти не знаєш свого тіла і своєї потенції. Тебе не вчили кодексу чоловіка.{" "}
              <b>Ти не пройшов ініціацію.</b></p>
            <p>Тебе ніхто не навчав сексу. Ніхто не показав, як керувати тривалістю і як підсилювати потенцію. <b>А це знання є, і йому можна навчитися.</b></p>
          </div>
        </div>

        <div className="foe">
          <p className="nn">Ворог третій</p>
          <h3>Ти не знаєш<br />свою психіку</h3>
          <div className="body">
            <p>Не знаєш своїх сильних сторін. <b>Не знаєш своєї місії.</b> Не знаєш, як виходити з криз і відновлюватися після кожної поразки.</p>
            <p>Ти ділишся на частини. Блокуєш себе. Упираєшся у внутрішні стелі. Страх бере гору — і ти не доходиш до результату.{" "}
              <b>Перестаєш вірити і в себе, і в результат. І зупиняєшся.</b></p>
          </div>
        </div>
      </div></section>

      <section className="pad alt" id="guide"><div className="wrap">
        <p className="bridge">Добре. А хто мені це каже?</p>
      <div className="guide">
        <div>
          <div className="ph"><img src="/images/kuznya-guide.jpg" width={680} height={1020} alt="Максим Теорентер" /></div>
          <p className="phcap"><b>Максим Теорентер</b><span>твій коуч</span></p>
        </div>
        <div>
          <p className="kick">Хто тебе веде</p>
          <h2 className="sec disp">Я був там.<br />Я знаю всі ці болі</h2>
          <p>Я знаю, як це — відчувати слабкість у ліжку. Закінчувати швидко. Бути невдоволеним своїм розміром.</p>
          <p>Я знаю, як потрапляти в кризу і як банкрутувати. <b>Я був у полоні 1341 день.</b>{" "}
            Я знаю, як вижити в пеклі.</p>
          <p><b className="hl">І я знаю, як це перемогти.</b> Я створив чоловічий клуб «Кузня», до якого зібрав робочі інструменти. <b>Усі перевірені на мені самому.</b></p>
          <div className="theses">
            <p><b>30 років</b> у спорті</p>
            <p><b>Майстер спорту</b> України, 8× чемпіон країни</p>
            <p><b>Чемпіон України</b> з греплінгу ADCC</p>
            <p>Донецький інститут <b>фізвиховання і спорту</b></p>
            <p><b>Магістр менеджменту</b> — ХНУМГ ім. Бекетова</p>
            <p><b>Володів бізнесами:</b> фітнес-клуб, агенція, виробництво</p>
            <p><b>Гіпнотерапевт</b> — American Academy of Hypnosis</p>
            <p><b>1341 день</b> у полоні · ветеран бойових дій</p>
          </div>
          <a className="morelink" href="/about">Докладно про мене →</a>
        </div>
      </div></div></section>

      <section className="pad" id="inside"><div className="wrap">
        <p className="bridge">Чим саме я зніматиму цих ворогів?</p>

        <div className="ctr">
          <p className="kick">Що всередині</p>
          <h2 className="sec disp">Інструменти, перевірені на собі</h2>
        </div>
        <div className="mods">
          <div className="mod">
            <div className="modim"><img src="/images/mod-kungfu.jpg" width={620} height={1100} alt="" /></div>
            <h3>Сексуальне кунг-фу</h3><p className="sub">даоські практики</p>
            <ul>
            <li>Як не кінчати швидко — а тільки тоді, коли сам хочеш</li>
            <li>Як підсилювати потенцію</li>
            <li>Робота з тілом і впевненістю в собі</li>
            <li>Секрети жіночого тіла й руху</li>
            <li>Як виховувати хлопця і з якого віку</li>
            <li>Як продовжити потенцію до глибокої старості</li>
            </ul>
          </div>

          <div className="mod">
            <div className="modim"><img src="/images/mod-gipnospas.jpg" width={620} height={1100} alt="" /></div>
            <h3>Гіпноспас</h3><p className="sub">флагманський курс</p>
            <ul>
            <li>Свідомість, підсвідомість, над-Я</li>
            <li>Гіпноз, НЛП, ПЕАТ Славінського</li>
            <li>Розкрити свої таланти</li>
            <li>Зняти блоки, слабкості, обмеження</li>
            </ul>
          </div>

          <div className="mod">
            <div className="modim"><img src="/images/mod-kodeks.jpg" width={620} height={1100} alt="" /></div>
            <h3>Кодекс чоловіка</h3><p className="sub">психологія</p>
            <ul>
            <li>Те, що захистить тебе від поразки</li>
            <li>Хто я, хто вона, хто вони</li>
            <li>Фокус, поле, оскал, безцінність, очікування</li>
            </ul>
          </div>

          <div className="mod">
            <div className="modim"><img src="/images/mod-perezagruzka.jpg" width={620} height={1100} alt="" /></div>
            <h3>Перезавантаження</h3><p className="sub">чат практики</p>
            <ul>
            <li>Відпрацьовуємо інструменти один на одному і на собі</li>
            <li>Далі вони стають твоїм обладунком</li>
            </ul>
          </div>

          <div className="mod">
            <div className="modim"><img src="/images/mod-biohacking.jpg" width={620} height={1100} alt="" /></div>
            <h3>Біохакінг</h3><p className="sub">освітньо</p>
            <ul>
            <li>Атлетизм, БАДи, пептиди, гормони — як це влаштовано</li>
            <li>Про що говорити з лікарем</li>
            </ul>
          </div>

          <div className="mod">
            <div className="modim"><img src="/images/mod-chistilishche.jpg" width={620} height={1100} alt="" /></div>
            <h3>Чистилище</h3><p className="sub">очищення</p>
            <ul>
            <li>Навчишся очищати своє тіло</li>
            <li>Отрути б'ють по якості життя</li>
            </ul>
          </div>

          <div className="mod">
            <div className="modim"><img src="/images/mod-gnm.jpg" width={620} height={1100} alt="" /></div>
            <h3>ГНМ</h3><p className="sub">нова німецька медицина</p>
            <ul>
            <li>Психосоматика: суть і причина</li>
            <li>Як стан відображається в тілі</li>
            <li>Не замінює лікаря</li>
            </ul>
          </div>

          <div className="mod">
            <div className="modim"><img src="/images/mod-ekzorcizm.jpg" width={620} height={1100} alt="" /></div>
            <h3>Екзорцизм</h3><p className="sub">робота з родом</p>
            <ul>
            <li>Розв'язання родових сценаріїв</li>
            <li>Робота з тінями й сутностями</li>
            </ul>
          </div>

          <div className="mod">
            <div className="modim"><img src="/images/mod-telo.jpg" width={620} height={1100} alt="" /></div>
            <h3>Тіло</h3><p className="sub">майстер спорту</p>
            <ul>
            <li>Мої рекомендації щодо силової роботи</li>
            <li>Зберемо твоє професійне красиве тіло</li>
            </ul>
          </div>

          <div className="mod">
            <div className="modim"><img src="/images/mod-plen.jpg" width={620} height={1100} alt="" /></div>
            <h3>1341 день у полоні</h3><p className="sub">книга</p>
            <ul>
            <li>Як вижити в пеклі</li>
            <li>Реальна історія виживання, 2016–2019</li>
            </ul>
          </div>

          <div className="mod">
            <div className="modim"><img src="/images/mod-gita.jpg" width={620} height={1100} alt="" /></div>
            <h3>33 мудрості Бхагавад-гіти</h3><p className="sub">книга</p>
            <ul>
            <li>Між страхом, обов'язком і слабкістю</li>
            <li>Коли народжується твоя Бхагавад-гіта</li>
            </ul>
          </div>
        </div>
      </div></section>

      <section className="pad alt" id="act"><div className="wrap ctr">
        <p className="bridge">Інструменти є. Що мені з ними робити?</p>

        <p className="kick">Твої дії</p>
        <h2 className="sec disp">Чотири кроки</h2>
        <div className="steps4">
          <div className="s4"><p className="nn">01</p><h4>Заходиш</h4>
            <p>Оформлюєш підписку і одразу отримуєш доступ до закритого клубу. Без співбесід і очікування потоку.</p></div>
          <div className="s4"><p className="nn">02</p><h4>Дивишся</h4>
            <p>Береш той напрям, який болить найдужче. Не обов'язково поспіль — починай зі свого.</p></div>
          <div className="s4"><p className="nn">03</p><h4>Практикуєш</h4>
            <p>Відпрацьовуєш інструменти на собі і в чаті. Застряг — приносиш питання на живий розбір.</p></div>
          <div className="s4"><p className="nn">04</p><h4>Проявляєшся</h4>
            <p>Інструменти стають твоїми. Далі це вже не курс, а те, як ти живеш.</p></div>
        </div>
        <div className="inout">
          <div className="c a"><h4>Зайдеш</h4><p>Невпевненим. Сповненим сумнівів. <b>Тим, хто не знає.</b></p></div>
          <div className="arw">→</div>
          <div className="c b"><h4>Вийдеш</h4><p><b>Справжнім лідером</b> — зі знанням себе, свого тіла і жінки. З інструментами керування своїм життям.</p></div>
        </div>
      </div></section>

      <section className="pad" id="why2"><div className="wrap">
        <p className="bridge">Скільки чекати і наскільки це важко?</p>

        <div className="ctr">
          <p className="kick">Два питання, які ти поставиш собі першими</p>
          <h2 className="sec disp">Коли і наскільки важко</h2>
        </div>
        <div className="valgrid">
          <div className="val">
            <p className="vk">Швидкість</p>
            <h3 className="disp">Результат ти побачиш<br />у перші дні</h3>
            <p>Не через рік і не «колись». Уже на перших розборах тобі розкриються очі: ти побачиш, що саме тебе тримало весь цей час — і почнеш перебудовуватися.</p>
            <p>Цей матеріал одразу розширює розуміння себе і життя. А інструменти, які ти забереш, <b>залишаться з тобою назавжди.</b></p>
          </div>
          <div className="val">
            <p className="vk">Простота</p>
            <h3 className="disp">Усе дуже просто.<br />Розшифровувати нічого</h3>
            <p>Матеріал адаптований так, щоб його можна було брати і робити. Без термінів, без філософії заради філософії. Подивився — застосував.</p>
            <p>Застряг — є чат, є зворотний зв'язок, є розбори.{" "}
              <b>Тебе не залишать сам на сам із матеріалом.</b></p>
          </div>
        </div>
      </div></section>

      <section className="pad alt" id="faq"><div className="wrap">
        <p className="bridge">Що мене все ще зупиняє?</p>

        <p className="kick">Те, що ти питаєш у себе</p>
        <h2 className="sec disp">Питання перед входом</h2>
        <div className="faq">
          <div className="q"><b>А якщо мені не сподобається?</b>
            <p>Тоді <b>ти просто не продовжуєш</b> — і наступного списання не буде. Повертати тут нічого: п'ятнадцять доларів це ціна однієї вечері. Але я впевнений, що ти не зупинишся, а підеш далі — у поглиблення роботи з собою.</p></div>
          <div className="q"><b>Я вже пробував. У мене не виходило.</b>
            <p>Тому що ти пробував мотивацію, а тут інструменти. Мотивація закінчується через тиждень. <b>Інструмент працює і тоді, коли тобі ліньки.</b></p></div>
          <div className="q"><b>У мене немає часу.</b>
            <p><b>Година на день.</b> Якщо її немає — питання не до мене, а до того, на що йдуть решта двадцять три.</p></div>
          <div className="q"><b>Гіпноспас — це зі мною працюватимуть чи я вчитимуся?</b>
            <p><b>Вчитися.</b> Це професійний курс роботи з підсвідомістю, а не сеанси у фахівця. Ти розбереш власну підсвідомість і опануєш техніки гіпнозу та НЛП — так, щоб далі застосовувати їх самому. За бажання можеш пройти в нас сертифікацію: це внутрішній документ школи, а не медична ліцензія.</p></div>
          <div className="q"><b>Це езотерика? Я в таке не вірю.</b>
            <p><b>Вірити не треба.</b> Гіпноз, НЛП, психосоматика, робота з тілом — це методи, які перевіряються на практиці. Не спрацювало — не твій інструмент. Спрацювало — користуйся.</p></div>
          <div className="q"><b>Мені соромно про це говорити.</b>
            <p><b>Клуб закритий і чоловічий.</b> Туди всі прийшли рівно з тим самим. Говорити вголос необов'язково — можна просто дивитися і робити.</p></div>
          <div className="q"><b>Я не впораюся сам.</b>
            <p><b>Ти і не будеш сам.</b> Чат, живий розбір раз на тиждень і чоловіки, які йдуть тим самим шляхом і далі за тебе.</p></div>
          <div className="q"><b>Звідки я знаю, що це працює?</b>
            <p>Я перевірив усе на собі — там, де перевіряти було більше нічим. Це не теорія з книжок: тридцять років спорту, профільна освіта і чоловіки, які вже пройшли через ці інструменти на моїх програмах.</p></div>
          <div className="q"><b>Що я отримаю за $15?</b>
            <p><b>Усе, що перелічено на цій сторінці.</b> Не частину, не демо і не «базовий тариф» — клуб цілком.</p></div>
        </div>
      </div></section>

      <section className="pad" id="fit"><div className="wrap ctr">
        <p className="bridge">А це взагалі для мене?</p>

        <p className="kick">Чесно</p>
        <h2 className="sec disp">Кому сюди, а кому ні</h2>
        <div className="two">
          <div className="yes"><p className="ct">Це ти</p><ul>
            <li>Тобі від 18 років, і ти шукаєш силу</li>
            <li>Тебе покинули або покидають завжди, наче прокляття</li>
            <li>Ти вперся в стелю, у невидимі стіни. У себе</li>
            <li>Ти пережив війну, зраду, кризу — і не зміг до кінця відновитися</li>
            <li>Хочеш розкрити свою унікальність, талант, місію</li>
            <li>Рано закінчуєш або невдоволений своєю потенцією</li>
            <li>Хочеш вивчити гіпноз, НЛП, психологію</li>
            <li>Хочеш побудувати сильну родову систему з правильною структурою</li>
          </ul></div>
          <div className="no"><p className="ct">Це не ти</p><ul>
            <li>Шукаєш чарівну пігулку</li>
            <li>Не готовий відкритися перед навчанням</li>
            <li>Не готовий вкласти в себе час</li>
            <li>Не готовий практикуватися</li>
          </ul></div>
        </div>
      </div></section>

      <section className="pad alt" id="price"><div className="wrap">
        <p className="bridge">І скільки це коштує?</p>

        <p className="kick">Вхід</p>
        <h2 className="sec disp">Що входить</h2>
        <div className="deal">
          <div className="dnums">
            <div className="dn"><b>30 років</b><span>життя, спорту і практики на собі</span></div>
            <div className="dn"><b>≈ $100 000</b><span>я віддав за навчання, школи і майстрів</span></div>
            <div className="dn gold"><b>$15</b><span>на місяць платиш ти</span></div>
          </div>
          <p className="dtext">Я збирав це тридцять років і заплатив за це близько ста тисяч доларів — навчанням, школами, майстрами і власною шкурою. Ти отримуєш усе це{" "}
            <b>за п'ятнадцять доларів на місяць.</b> Думаю, угода для тебе вдала.</p>
        </div>

        <div className="price">
          <div>
            <p className="plead">Усе, що вище — цілком, без тарифів і доплат:</p>
            <ul>
              <li><b>Дев'ять напрямів</b> — кунг-фу, кодекс, Гіпноспас, ГНМ, екзорцизм, чистилище, біохакінг, тіло, перезавантаження</li>
              <li><b>Чат «Перезавантаження»</b> — практикуєте інструменти один на одному</li>
              <li><b>Живий розбір з Максимом</b> — раз на тиждень</li>
              <li><b>Закрита чоловіча спільнота</b> — чоловіки, які йдуть тим самим шляхом</li>
              <li><b>Дві мої книги</b> — «1341 день у полоні» і «33 мудрості Бхагавад-гіти»</li>
              <li><b>Усі нові матеріали</b> — поки ти в клубі, вони твої</li>
            </ul>
          </div>
          <div className="pbox">
            <p className="kick">Підписка</p>
            <p className="num">$15<span className="per"> / міс</span></p>
            <a className="cta" href="https://secure.wayforpay.com/button/b31aabf280f77" rel="noopener">Увійти в Кузню</a>
            <p className="note">Оплата карткою. Не пішло — просто не продовжуєш, і наступного списання не буде.</p>
          </div>
        </div>
      </div></section>

      <section className="final" id="final"><div className="wrap">
        <h2 className="disp">Ти зайдеш невпевненим.<br />Вийдеш — справжнім.</h2>
        <p className="ctawrap"><a className="cta" href="#price">Увійти в Кузню — $15 / міс</a></p>
        <p className="micro">Скасувати можна будь-якої миті</p>
        <p className="legal">Клуб 18+. Програма не є медичною або психотерапевтичною допомогою і не замінює лікаря. Матеріали про тіло, здоров'я, добавки та протоколи мають освітній характер: будь-які добавки і гормональна терапія — лише за призначенням вашого лікаря. Результати залежать від твоїх дій. Дохід не гарантується.</p>
      </div></section>
    </div>
  );
}
