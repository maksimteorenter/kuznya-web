"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Compass, Heart, Lightning, Pause, X } from "@phosphor-icons/react";
import s from "./practice.module.css";

type Intent = "support" | "reflect" | "grow";
type Mood = "low" | "steady" | "ready";
const routes = [
  { id: "support", label: "Мне сейчас трудно", icon: Pause, time: "2 минуты", title: "Найди опору в настоящем", description: "Короткая пауза, чтобы заметить себя и выбрать посильный шаг.", prompts: ["Если ты сейчас в безопасном месте, оглянись. Какие три предмета ты видишь? Почувствуй опору под ногами, если это комфортно.", "Что могло бы поддержать тебя сейчас: спокойное место, отдых, разговор с человеком?"], action: "Какую поддержку ты можешь выбрать сейчас?" },
  { id: "reflect", label: "Хочу разобраться", icon: Compass, time: "5 минут", title: "Отдели факты от догадок", description: "Рассмотри ситуацию, свою реакцию и то, на что можешь повлиять.", prompts: ["Что произошло? Опиши наблюдаемые факты отдельно от предположений о чужих намерениях.", "Что ты почувствовал? Что для тебя важно? Какое ещё объяснение возможно и что нужно уточнить?"], action: "Какой следующий шаг поможет прояснить ситуацию?" },
  { id: "grow", label: "Хочу развиваться", icon: Lightning, time: "5 минут", title: "Преврати намерение в действие", description: "Выбери один шаг, который приблизит тебя к важной цели.", prompts: ["Какое изменение для тебя важно сейчас? По чему ты поймёшь, что продвинулся?", "Что мешает: привычная реакция, нехватка навыка, времени или поддержки? Что из этого зависит от тебя?"], action: "Что конкретно ты сделаешь и когда?" },
] as const;
type Notes = { first: string; second: string; action: string };
const emptyNotes = (): Notes => ({ first: "", second: "", action: "" });

export function DailyCompanion({ onChooseAction }: { onChooseAction: (action: string) => void }) {
  const [mood, setMood] = useState<Mood | null>(null);
  const [intent, setIntent] = useState<Intent>("grow");
  const [opened, setOpened] = useState(false);
  const [finished, setFinished] = useState(false);
  const [notes, setNotes] = useState<Record<Intent, Notes>>({ support: emptyNotes(), reflect: emptyNotes(), grow: emptyNotes() });
  const route = routes.find(item => item.id === intent)!;

  function choose(next: Intent) {
    setIntent(next);
    setOpened(false);
    setFinished(false);
  }

  function update(key: keyof Notes, value: string) {
    setNotes(previous => ({ ...previous, [intent]: { ...previous[intent], [key]: value } }));
  }

  return <section className={s.companion} aria-label="Помощь и практика под твой запрос">
    <div className={s.checkIn}>
      <div><h2>Как ты сейчас?</h2><p>Можно ответить или сразу выбрать запрос.</p></div>
      <div className={s.moodChoices} role="group" aria-label="Моё состояние">
        {([{ id: "low", label: "Тяжело", route: "support" }, { id: "steady", label: "Нормально", route: "reflect" }, { id: "ready", label: "Есть силы", route: "grow" }] as const).map(item => <button type="button" key={item.id} aria-pressed={mood === item.id} onClick={() => { setMood(item.id); choose(item.route); }}>{item.label}</button>)}
      </div>
    </div>
    <div className={s.intentChoices} role="group" aria-label="Что важно сейчас">
      {routes.map(item => <button type="button" key={item.id} aria-pressed={intent === item.id} onClick={() => choose(item.id)}><item.icon size={25} aria-hidden="true" /><span>{item.label}</span></button>)}
    </div>
    <div className={s.practiceFeature}>
      <div aria-live="polite"><span className={s.eyebrow}>ТВОЙ СЛЕДУЮЩИЙ ШАГ · {route.time}</span><h2>{route.title}</h2><p>{route.description}</p></div>
      {!opened && <button type="button" className={s.primary} aria-expanded={false} aria-controls="daily-exercise" onClick={() => { setOpened(true); setFinished(false); }}>Начать практику <ArrowRight size={20} aria-hidden="true" /></button>}
      <div id="daily-exercise" hidden={!opened}>
        {opened && <div className={s.exercise}>
          <div className={s.exerciseHeading}><span>ПРАКТИКА ВНИМАНИЯ И РАЗМЫШЛЕНИЯ</span><button type="button" className={s.iconButton} aria-label="Свернуть практику" aria-expanded={true} aria-controls="daily-exercise" onClick={() => setOpened(false)}><X size={20} aria-hidden="true" /></button></div>
          {intent === "support" && <p className={s.helper}>Если вокруг опасно, сначала позаботься о физической безопасности и обратись за доступной местной помощью. Практику можно остановить в любой момент.</p>}
          {finished ? <div className={s.completed} role="status"><CheckCircle size={32} aria-hidden="true" /><h3>Что стало яснее?</h3><p>Ты выделил время, чтобы разобраться. Следующий шаг можно включить в свой план и отметить после выполнения.</p><button type="button" className={s.secondary} onClick={() => setFinished(false)}>Вернуться к ответам</button></div> : <>
            <label className={s.field}>1. {route.prompts[0]}<textarea maxLength={1200} value={notes[intent].first} onChange={e => update("first", e.target.value)} placeholder="Можно ответить мысленно или записать здесь" /></label>
            <label className={s.field}>2. {route.prompts[1]}<textarea maxLength={1200} value={notes[intent].second} onChange={e => update("second", e.target.value)} placeholder="Твоё наблюдение" /></label>
            <label className={s.field}>3. {route.action}<textarea maxLength={1200} value={notes[intent].action} onChange={e => update("action", e.target.value)} placeholder="Один посильный шаг" /></label>
            <button type="button" className={s.secondary} onClick={() => setFinished(true)}>Завершить размышление <CheckCircle size={20} aria-hidden="true" /></button>
          </>}
          {notes[intent].action.trim() && <button type="button" className={s.textButton} onClick={() => onChooseAction(notes[intent].action.trim())}>Добавить этот шаг в мой план <ArrowRight size={18} aria-hidden="true" /></button>}
          <p className={s.helper}>Эти ответы остаются только в открытой странице и исчезнут при перезагрузке. В план переносится только выбранный тобой шаг. Это самостоятельное упражнение, не разговор с AI или наставником.</p>
        </div>}
      </div>
    </div>
    <p className={s.companionFoot}><Heart size={18} aria-hidden="true" /> Выбранное состояние — твоя отметка сейчас, а не оценка тебя. Запрос можно менять.</p>
  </section>;
}
