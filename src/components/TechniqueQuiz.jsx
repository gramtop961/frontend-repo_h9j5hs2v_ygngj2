import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const questions = [
  {
    q: 'What fuels your fighting style?',
    options: [
      { label: 'Raw instinct', tag: 'itadori' },
      { label: 'Careful planning', tag: 'megumi' },
      { label: 'Effortless dominance', tag: 'gojo' },
    ],
  },
  {
    q: 'Pick a battlefield advantage',
    options: [
      { label: 'Unpredictable momentum', tag: 'itadori' },
      { label: 'Summoned allies', tag: 'megumi' },
      { label: 'Absolute control of space', tag: 'gojo' },
    ],
  },
  {
    q: 'Your motto in a crisis',
    options: [
      { label: 'If I can move, I can win', tag: 'itadori' },
      { label: 'I only need one opening', tag: 'megumi' },
      { label: 'Limit? Never heard of it', tag: 'gojo' },
    ],
  },
];

const results = {
  itadori: {
    title: 'Black Flash Specialist',
    desc: 'Explosive timing, relentless heart. You strike when it counts most.',
    color: 'from-rose-500/30 to-orange-500/30',
  },
  megumi: {
    title: 'Ten Shadows Tactician',
    desc: 'You orchestrate the field with shikigami and quiet genius.',
    color: 'from-indigo-500/30 to-sky-500/30',
  },
  gojo: {
    title: 'Limitless Domain Master',
    desc: 'Infinity bends to your will. You are the calm in the storm.',
    color: 'from-teal-400/30 to-emerald-500/30',
  },
};

export default function TechniqueQuiz() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const score = useMemo(() => {
    const tally = { itadori: 0, megumi: 0, gojo: 0 };
    answers.forEach((a) => {
      if (a && tally[a]) tally[a] += 1;
      else if (a) tally[a] = 1;
    });
    return Object.entries(tally).sort((a, b) => b[1] - a[1])[0][0];
  }, [answers]);

  function choose(qIdx, tag) {
    const next = [...answers];
    next[qIdx] = tag;
    setAnswers(next);
  }

  function reveal() {
    if (answers.some((a) => a === null)) return;
    setShowResult(true);
  }

  const result = results[score];

  return (
    <section id="quiz" className="relative">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="mb-8 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-white" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Find Your Cursed Technique</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            {questions.map((item, qIdx) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: qIdx * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <p className="font-medium text-white">{item.q}</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {item.options.map((opt) => {
                    const active = answers[qIdx] === opt.tag;
                    return (
                      <button
                        key={opt.label}
                        onClick={() => choose(qIdx, opt.tag)}
                        className={`rounded-xl border px-4 py-2 text-left text-sm transition focus:outline-none focus:ring-2 focus:ring-white/40 ${
                          active
                            ? 'border-white bg-white text-gray-900 shadow'
                            : 'border-white/15 bg-white/5 text-white/85 hover:bg-white/10'
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ))}

            <button
              onClick={reveal}
              className="mt-2 w-full rounded-xl bg-white px-5 py-3 font-semibold text-gray-900 shadow transition hover:translate-y-[-2px] hover:shadow-lg disabled:opacity-60"
              disabled={answers.some((a) => a === null)}
            >
              Reveal My Technique
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className={`rounded-2xl border border-white/10 bg-gradient-to-br ${
              showResult ? result.color : 'from-white/10 to-white/5'
            } p-6 backdrop-blur`}
          >
            {!showResult ? (
              <div className="h-full min-h-[220px]">
                <p className="text-white/80">Answer the questions to reveal your technique alignment.</p>
                <p className="mt-2 text-sm text-white/60">Your dominant choice decides the result.</p>
              </div>
            ) : (
              <div className="h-full">
                <p className="text-sm uppercase tracking-wide text-white/70">Your Result</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{result.title}</h3>
                <p className="mt-2 text-white/85">{result.desc}</p>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {['Control', 'Power', 'Resolve'].map((k, i) => (
                    <div key={k} className="rounded-xl bg-black/30 p-3 text-white/85">
                      <p className="text-xs">{k}</p>
                      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-2 rounded-full bg-white"
                          style={{ width: `${70 + i * 10}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
