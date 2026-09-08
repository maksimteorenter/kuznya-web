"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft, Check, CheckCircle, Target, TrendUp, Heart, Heartbeat, House, Path, Notebook, PencilSimple, Hammer } from "@phosphor-icons/react";
import s from "./practice.module.css";
import { DailyCompanion } from "./DailyCompanion";

const directions = [
  { id: "money", title: "Деньги", description: "Доход, дело и уверенность в своих решениях", icon: TrendUp, goal: "Например: обсудить повышение оплаты до конца месяца", obstacle: "Что мешает: страх отказа, нехватка навыка или внешние условия?", action: "Например: записать три результата своей работы для разговора" },
  { id: "relationships", title: "Отношения", description: "Близость, границы и взаимопонимание", icon: Heart, goal: "Например: договориться о распределении домашних дел", obstacle: "Какой разговор ты откладываешь? Что зависит от тебя, а что — от другого человека?", action: "Например: предложить время для спокойного разговора" },
  { id: "health", title: "Здоровье", description: "Забота о себе и полезные привычки", icon: Heartbeat, goal: "Например: выделять время для отдыха каждый вечер", obstacle: "Какая привычка или обстоятельство мешает заботиться о себе?", action: "Например: запланировать сегодня 15 минут спокойной прогулки" },
] as const;
type Direction = typeof directions[number]["id"];
type Plan = { id: string; direction: Direction; goal: string; obstacle: string; action: string };
type Entry = Plan & { date: string; reflection: string };
type Saved = { plan: Plan | null; entries: Entry[] };
const storageKey = "kuznya.practice.v1";
const isPlan = (v: unknown): v is Plan => {
  if (!v || typeof v !== "object") return false;
  const p = v as Record<string, unknown>;
  return directions.some(d => d.id === p.direction) && ["id", "goal", "obstacle", "action"].every(k => typeof p[k] === "string" && (p[k] as string).length <= 1200);
};
const dayKey = (date = new Date()) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
const dateLabel = (date: string) => new Date(`${date}T12:00:00`).toLocaleDateString("ru-RU", { day: "numeric", month: "long" });

export default function PracticePage() {
  const [ready, setReady] = useState(false);
  const [remember, setRemember] = useState(false);
  const [plan, setPlan] = useState<Plan | null>(null);
  const [entries, setEntries] = useState<Entry[]>([]);
  const [tab, setTab] = useState<"today" | "path" | "journal">("today");
  const [editing, setEditing] = useState(false);
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<Direction>("money");
  const [goal, setGoal] = useState("");
  const [obstacle, setObstacle] = useState("");
  const [action, setAction] = useState("");
  const [reflection, setReflection] = useState("");
  const [message, setMessage] = useState("");
  const [today, setToday] = useState("");

  useEffect(() => {
    const updateDate = () => setToday(dayKey());
    updateDate();
    const timer = window.setInterval(updateDate, 60000);
    window.addEventListener("focus", updateDate);
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const saved = JSON.parse(raw) as Saved;
        if (saved && (saved.plan === null || isPlan(saved.plan)) && Array.isArray(saved.entries) && saved.entries.every(e => isPlan(e) && /^\d{4}-\d{2}-\d{2}$/.test(e.date) && !Number.isNaN(Date.parse(e.date)) && typeof e.reflection === "string" && e.reflection.length <= 1200)) {
          setPlan(saved.plan); setEntries(saved.entries); setRemember(true);
        } else { setMessage("Сохранённые данные не удалось прочитать. Можно начать новый путь; старую запись мы не меняли."); }
      }
    } catch { setMessage("Сохранение в браузере недоступно. Сейчас можно работать до закрытия страницы."); }
    setReady(true);
    return () => { window.clearInterval(timer); window.removeEventListener("focus", updateDate); };
  }, []);

  useEffect(() => {
    if (!ready || !remember) return;
    try { localStorage.setItem(storageKey, JSON.stringify({ plan, entries })); }
    catch { setMessage("Не удалось сохранить изменения на устройстве. Не закрывай страницу, пока не скопируешь важные записи."); }
  }, [plan, entries, remember, ready]);

  const current = directions.find(d => d.id === (plan?.direction ?? direction))!;
  const chosen = directions.find(d => d.id === direction)!;
  const done = !!plan && entries.some(e => e.id === plan.id && e.date === today);
  const activeEntries = entries.filter(e => e.id === plan?.id);
  const uniqueDays = new Set(entries.map(e => e.date)).size;
  const setup = editing;

  function beginPlan(suggestedAction = "") {
    setDirection(plan?.direction ?? "money");
    setGoal(plan?.goal ?? "");
    setObstacle(plan?.obstacle ?? "");
    setAction(suggestedAction || plan?.action || "");
    setStep(plan ? 1 : 0);
    setEditing(true);
    setTab("path");
    setMessage("");
  }

  function savePlan(event: React.FormEvent) {
    event.preventDefault();
    if (!goal.trim() || !obstacle.trim() || !action.trim()) return;
    const keepId = plan && plan.direction === direction && plan.goal === goal.trim();
    setPlan({ id: keepId ? plan.id : crypto.randomUUID(), direction, goal: goal.trim(), obstacle: obstacle.trim(), action: action.trim() });
    setEditing(false); setStep(0); setTab("today"); setReflection(""); setMessage("Путь готов. Начни с одного действия сегодня.");
  }

  function editPlan() {
    if (!plan) return;
    setDirection(plan.direction); setGoal(plan.goal); setObstacle(plan.obstacle); setAction(plan.action); setStep(1); setEditing(true); setMessage("");
  }

  function complete(event: React.FormEvent) {
    event.preventDefault();
    if (!plan || done || !reflection.trim()) return;
    const entry = { ...plan, date: dayKey(), reflection: reflection.trim() };
    setEntries(previous => previous.some(e => e.id === entry.id && e.date === entry.date) ? previous : [entry, ...previous]);
    setReflection(""); setMessage("Практика завершена. Твоё наблюдение добавлено в дневник.");
  }

  function toggleRemember(enabled: boolean) {
    if (!enabled) {
      try { localStorage.removeItem(storageKey); }
      catch { setMessage("Не удалось удалить сохранение. Удали данные сайта в настройках браузера."); return; }
    }
    setRemember(enabled);
  }

  return <div className={s.app} data-page-theme="practice">
    <aside className={s.sidebar}>
      <a href="/practice" className={s.brand} aria-label="Кузня — личная практика"><img src="/images/logo-mark.svg" alt="" /><span>КУЗНЯ<small>СОЗДАВАЙ СЕБЯ</small></span></a>
      <div className={s.sideLabel}>ЛИЧНАЯ ПРАКТИКА</div>
      <nav aria-label="Разделы приложения" className={s.navigation}>
        {([{ id: "today", title: "Сегодня", icon: House }, { id: "path", title: "Мой путь", icon: Path }, { id: "journal", title: "Дневник", icon: Notebook }] as const).map(item => <button key={item.id} onClick={() => { setTab(item.id); setEditing(item.id === "path" && !plan); setStep(0); setMessage(""); }} aria-current={tab === item.id ? "page" : undefined}><item.icon size={23} weight={tab === item.id ? "fill" : "regular"} /><span>{item.title}</span></button>)}
      </nav>
      <div className={s.sideBottom}><Hammer size={26} /><p>Мне дали молот.<br />Теперь я кузнец<br />своей жизни.</p><a href="/forge">О проекте Кузня <ArrowRight size={17} /></a></div>
    </aside>
    <div className={s.workspace}>
      <header className={s.topbar}><span>МОЯ КУЗНЯ</span><span>{today ? dateLabel(today) : "Ежедневная практика"}</span></header>
      <div className={s.content}>
        {!ready ? <p role="status">Открываем твою практику…</p> : <>
          <div className={s.pageHeading}><div><p className={s.eyebrow}>{setup ? "ТОЧКА ОТСЧЁТА" : "ОДИН ДЕНЬ. ОДИН ШАГ."}</p><h1>{setup ? "Что ты хочешь изменить?" : tab === "today" ? "Что важно тебе сейчас?" : tab === "path" ? "Твой путь к цели" : "Дневник изменений"}</h1><p>{setup ? "Выбери главное сейчас. Остальное — шаг за шагом." : tab === "journal" ? "Здесь остаётся то, что ты сделал и понял о себе." : "Внимание к себе превращается в конкретное действие."}</p></div><span className={s.edition}>ПРАКТИКА / 01</span></div>
          {message && <div className={s.notice} role="status">{message}</div>}
          <div hidden={tab !== "today" || setup}><DailyCompanion onChooseAction={beginPlan} /></div>
          {setup ? <div className={s.setupGrid}>
            <section className={s.setupPanel}>
              <div className={s.steps} aria-label={`Шаг ${step + 1} из 3`}>
                {["Направление", "Цель", "Действие"].map((label, index) => <div key={label} data-active={index <= step}><span>{index < step ? <Check size={14} /> : index + 1}</span>{label}</div>)}
              </div>
              {step === 0 ? <><div className={s.directionList} role="radiogroup" aria-label="Направление работы">
                {directions.map(d => <label className={s.direction} key={d.id} data-selected={direction === d.id}><input type="radio" name="direction" value={d.id} checked={direction === d.id} onChange={() => setDirection(d.id)} /><span className={s.directionIcon}><d.icon size={28} /></span><span><strong>{d.title}</strong><small>{d.description}</small></span><span className={s.radio} aria-hidden="true">{direction === d.id && <span />}</span></label>)}
              </div><button className={s.primary} onClick={() => setStep(1)}>Выбрать направление <ArrowRight size={20} /></button></> : <form onSubmit={step === 1 ? event => { event.preventDefault(); if (goal.trim() && obstacle.trim()) setStep(2); } : savePlan}>
                <div className={s.formHeading}><chosen.icon size={25} /><span>{chosen.title}</span></div>
                {step === 1 ? <><label className={s.field}>Какого результата ты хочешь?<textarea required maxLength={1200} value={goal} onChange={e => setGoal(e.target.value)} placeholder={chosen.goal} /></label><label className={s.field}>Что сейчас мешает?<textarea required maxLength={1200} value={obstacle} onChange={e => setObstacle(e.target.value)} placeholder={chosen.obstacle} /></label><p className={s.helper}>Опиши конкретную ситуацию. Не каждое препятствие находится внутри тебя — учитывай обстоятельства и ресурсы.</p></> : <><h2>Начни с посильного шага</h2><p className={s.helper}>Выбери действие, которое зависит от тебя и которое реально выполнить сегодня.</p><label className={s.field}>Моё действие на сегодня<textarea required maxLength={1200} value={action} onChange={e => setAction(e.target.value)} placeholder={chosen.action} /></label><div className={s.goalPreview}><Target size={22} /><p>{goal}</p></div></>}
                {direction === "health" && <p className={s.helper}>Практики посвящены заботе о себе и привычкам. Они не заменяют диагностику и лечение у врача.</p>}
                <div className={s.formActions}><button type="button" className={s.secondary} onClick={() => setStep(step - 1)}><ArrowLeft size={18} /> Назад</button><button className={s.primary} type="submit">{step === 1 ? "Следующий шаг" : "Начать мой путь"}<ArrowRight size={18} /></button></div>
              </form>}
              {editing && <button className={s.textButton} onClick={() => setEditing(false)}>Отменить изменения</button>}
            </section>
            <aside className={s.intro}><span className={s.chapter}>01 — ОСОЗНАНИЕ</span><h2>У тебя есть цель.<br /><em>Начни с себя.</em></h2><p>Заметь, что тебя останавливает. Выбери инструмент. Примени его в жизни.</p><div className={s.introLine} /><ol><li><span>01</span>Назови то, чего хочешь.</li><li><span>02</span>Исследуй препятствие.</li><li><span>03</span>Сделай первый шаг.</li></ol><p className={s.introFoot}>Не ищи себя. Создавай себя.</p></aside>
          </div> : plan && <>
            <div className={s.goalBar}><div className={s.directionIcon}><current.icon size={25} /></div><div><span>{current.title} / МОЯ ЦЕЛЬ</span><h2>{plan.goal}</h2></div><button className={s.iconButton} onClick={editPlan} aria-label="Изменить цель и действие"><PencilSimple size={21} /></button></div>
            {tab === "today" ? <div className={s.dashboard}>
              <section className={s.task}><div className={s.taskTop}><span className={s.eyebrow}>ПРАКТИКА НА СЕГОДНЯ</span><span className={s.pill}>{done ? "Выполнено" : "Твой следующий шаг"}</span></div><h2>{done ? "Ты сделал шаг к цели." : "От понимания — к действию"}</h2><p className={s.action}>{plan.action}</p><div className={s.obstacle}><span>ПРЕПЯТСТВИЕ, КОТОРОЕ ТЫ ЗАМЕТИЛ</span><p>{plan.obstacle}</p></div>{done ? <div className={s.completed}><CheckCircle size={40} weight="duotone" /><p>Наблюдение уже в дневнике. Завтра можно повторить действие или изменить его под следующий шаг.</p><button className={s.secondary} onClick={() => setTab("journal")}>Открыть дневник <ArrowRight size={18} /></button></div> : <form onSubmit={complete}><label className={s.field}>После действия: что получилось и что ты заметил?<textarea required maxLength={1200} value={reflection} onChange={e => setReflection(e.target.value)} placeholder="Коротко опиши свой реальный результат…" /></label><button className={s.primary} type="submit"><Check size={21} /> Действие выполнено</button><p className={s.helper}>Отмечай практику после выполнения. Если шаг слишком большой, его можно изменить.</p></form>}</section>
              <aside className={s.summary}><span className={s.eyebrow}>ТВОЯ ПРАКТИКА</span><div className={s.stat}><strong>{uniqueDays.toString().padStart(2, "0")}</strong><span>дней с действиями</span></div><div className={s.divider} /><p>Изменения становятся заметнее, когда ты записываешь конкретные шаги.</p><button className={s.textButton} onClick={() => setTab("path")}>Посмотреть мой путь <ArrowRight size={18} /></button><blockquote>Я кузнец<br />своей жизни.</blockquote></aside>
            </div> : tab === "path" ? <section className={s.task}><span className={s.eyebrow}>ОТ ЦЕЛИ К ПРАКТИКЕ</span><h2>Три опоры твоего пути</h2><ol className={s.pathList}><li><span>01</span><div><h3>Моя цель</h3><p>{plan.goal}</p></div></li><li><span>02</span><div><h3>Что я исследую</h3><p>{plan.obstacle}</p></div></li><li><span>03</span><div><h3>Что я делаю</h3><p>{plan.action}</p></div></li></ol><p className={s.helper}>Записей по этой цели: {activeEntries.length}. Это количество практик, а не оценка достижения цели.</p><button className={s.secondary} onClick={editPlan}><PencilSimple size={19} /> Уточнить мой следующий шаг</button></section> : <section className={s.journal}>{entries.length === 0 ? <div className={s.empty}><Notebook size={48} /><h2>Здесь начнётся твоя история</h2><p>Выполни действие и запиши наблюдение — появится первая запись.</p><button className={s.primary} onClick={() => setTab("today")}>К практике на сегодня <ArrowRight size={19} /></button></div> : entries.map(e => <article className={s.entry} key={`${e.id}-${e.date}`}><div className={s.entryHeader}><span>{dateLabel(e.date)}</span><span>{directions.find(d => d.id === e.direction)?.title}</span></div><h2>{e.action}</h2><p>{e.reflection}</p><small>Цель: {e.goal}</small></article>)}</section>}
          </>}
          {!setup && !plan && (tab === "journal" ? <section className={s.empty}><Notebook size={40} aria-hidden="true" /><h2>Здесь начнётся твоя история</h2><p>Выбери цель, выполни действие и запиши наблюдение. Пока записей нет.</p><button className={s.primary} onClick={() => beginPlan()}>Выбрать мою цель <ArrowRight size={19} /></button></section> : <section className={s.firstPath}><div><span className={s.eyebrow}>МОЙ ПУТЬ</span><h2>Что ты хочешь изменить?</h2><p>Выбери одну цель и посильное действие. Короткими практиками выше можно пользоваться уже сейчас.</p></div><button className={s.secondary} onClick={() => beginPlan()}>Выбрать направление <ArrowRight size={19} /></button></section>)}
          <footer className={s.storage}><label><input type="checkbox" checked={remember} onChange={e => toggleRemember(e.target.checked)} /> Сохранять мой путь на этом устройстве</label><p>{remember ? "Записи хранятся только в этом браузере. Очистка данных сайта удалит их; синхронизация между устройствами пока не подключена." : "Без сохранения записи доступны до перезагрузки страницы. Используй личное устройство для личных записей."}</p></footer>
        </>}
      </div>
    </div>
  </div>;
}
