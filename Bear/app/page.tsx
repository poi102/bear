"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BearCharacter from "./bear-character";

type HomeMotionStage = {
  title: string;
  note: string;
  mood: string;
  family: "1 Body" | "2 Body" | "3 Body";
  render: () => React.JSX.Element;
};

function SingleJumpPreview() {
  return (
    <div className="flex items-end justify-center">
      <motion.div
        animate={{
          y: [0, 10, -34, -10, 0],
          scaleX: [1, 1.08, 0.95, 1.03, 1],
          scaleY: [1, 0.9, 1.08, 0.97, 1],
        }}
        transition={{
          duration: 1.05,
          repeat: Number.POSITIVE_INFINITY,
          times: [0, 0.18, 0.48, 0.76, 1],
          ease: "easeInOut",
        }}
      >
        <BearCharacter size={170} palette="brown" />
      </motion.div>
    </div>
  );
}

function SingleSquashPreview() {
  return (
    <div className="flex items-end justify-center">
      <motion.div
        animate={{
          scaleY: [1, 0.7, 1.06, 1],
          scaleX: [1, 1.18, 0.96, 1],
          y: [0, 14, -4, 0],
        }}
        transition={{
          duration: 1.35,
          repeat: Number.POSITIVE_INFINITY,
          times: [0, 0.24, 0.48, 1],
          ease: "easeInOut",
        }}
      >
        <BearCharacter size={170} palette="gray" />
      </motion.div>
    </div>
  );
}

function DuoCollidePreview() {
  return (
    <div className="flex items-end justify-center gap-2">
      <motion.div
        animate={{
          x: [0, 18, -6, 0],
          scaleX: [1, 1.04, 0.98, 1],
          scaleY: [1, 0.97, 1.01, 1],
        }}
        transition={{
          duration: 1.9,
          repeat: Number.POSITIVE_INFINITY,
          times: [0, 0.36, 0.56, 1],
          ease: "easeInOut",
        }}
      >
        <BearCharacter size={145} palette="gray" />
      </motion.div>
      <motion.div
        animate={{
          x: [0, -18, 6, 0],
          scaleX: [1, 1.04, 0.98, 1],
          scaleY: [1, 0.97, 1.01, 1],
        }}
        transition={{
          duration: 1.9,
          repeat: Number.POSITIVE_INFINITY,
          times: [0, 0.36, 0.56, 1],
          ease: "easeInOut",
        }}
      >
        <BearCharacter size={145} palette="brown" />
      </motion.div>
    </div>
  );
}

function DuoSyncJumpPreview() {
  return (
    <div className="flex items-end justify-center gap-2">
      {(["gray", "brown"] as const).map((palette) => (
        <motion.div
          key={palette}
          animate={{
            y: [0, 8, -24, -8, 0],
            scaleX: [1, 1.06, 0.96, 1.02, 1],
            scaleY: [1, 0.92, 1.06, 0.98, 1],
          }}
          transition={{
            duration: 1.55,
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.16, 0.46, 0.72, 1],
            ease: "easeInOut",
          }}
        >
          <BearCharacter size={145} palette={palette} />
        </motion.div>
      ))}
    </div>
  );
}

function TrioSequencePreview() {
  return (
    <div className="flex items-end justify-center gap-2">
      {(["gray", "brown", "white"] as const).map((palette, index) => (
        <motion.div
          key={palette}
          animate={{
            y: [0, 8, -28, -9, 0],
            scaleX: [1, 1.04, 0.97, 1.02, 1],
            scaleY: [1, 0.93, 1.07, 0.98, 1],
          }}
          transition={{
            duration: 1.55,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            times: [0, 0.18, 0.46, 0.72, 1],
            delay: index * 0.16,
          }}
        >
          <BearCharacter size={126} palette={palette} />
        </motion.div>
      ))}
    </div>
  );
}

function TrioBouncePreview() {
  return (
    <div className="flex items-end justify-center gap-2">
      {(["gray", "brown", "white"] as const).map((palette) => (
        <motion.div
          key={palette}
          animate={{
            y: [0, 12, -18, -6, 0],
            scaleX: [1, 1.08, 0.97, 1.02, 1],
            scaleY: [1, 0.9, 1.05, 0.99, 1],
          }}
          transition={{
            duration: 1.4,
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.2, 0.48, 0.72, 1],
            ease: "easeInOut",
          }}
        >
          <BearCharacter size={124} palette={palette} />
        </motion.div>
      ))}
    </div>
  );
}

const motionStages: HomeMotionStage[] = [
  {
    title: "ぽよんと上下に跳ねる",
    note: "1体だけでも生命感が出しやすい、基本のジャンプ表現です。",
    mood: "Single",
    family: "1 Body",
    render: SingleJumpPreview,
  },
  {
    title: "つぶれて元に戻る",
    note: "球体らしいやわらかさを見せる、定番のスクワッシュです。",
    mood: "Single",
    family: "1 Body",
    render: SingleSquashPreview,
  },
  {
    title: "軽くぶつかる",
    note: "2体の距離感だけで、あいさつのようなやり取りを作れます。",
    mood: "Duo",
    family: "2 Body",
    render: DuoCollidePreview,
  },
  {
    title: "同時にジャンプする",
    note: "タイミングがそろうだけで、仲の良さや気持ちよさが出ます。",
    mood: "Duo",
    family: "2 Body",
    render: DuoSyncJumpPreview,
  },
  {
    title: "順番にジャンプする",
    note: "3体になると、順番のズレだけでリズム感を作れます。",
    mood: "Trio",
    family: "3 Body",
    render: TrioSequencePreview,
  },
  {
    title: "全員同時にバウンドする",
    note: "3体が同時に弾むことで、まとまりのある集団感が出ます。",
    mood: "Trio",
    family: "3 Body",
    render: TrioBouncePreview,
  },
];

export default function Home() {
  return (
    <main className="bear-page flex-1">
      <section className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-2 py-3 sm:px-3 sm:py-4 lg:px-4 lg:py-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-900/70">
              Bear Motion Collection
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
              クマが動くモーション集
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-8 text-stone-700 sm:text-lg">
              基本モーションには、1体・2体・3体の見せ方を2つずつ並べました。
              まずはここで代表的な動きを比べて、詳しい一覧は各ページで増やしていけます。
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/single-motion"
              className="rounded-full border border-stone-300 bg-white/70 px-5 py-3 text-sm font-semibold text-stone-800 transition hover:bg-white"
            >
              1体モーション
            </Link>
            <Link
              href="/two-motion"
              className="rounded-full border border-stone-300 bg-white/70 px-5 py-3 text-sm font-semibold text-stone-800 transition hover:bg-white"
            >
              2体モーション
            </Link>
            <Link
              href="/trio-motion"
              className="rounded-full border border-stone-300 bg-white/70 px-5 py-3 text-sm font-semibold text-stone-800 transition hover:bg-white"
            >
              3体モーション
            </Link>
          </div>
        </div>

        <div className="mt-4 grid gap-3">
          <section className="rounded-[2rem] border border-white/65 bg-white/80 p-4 shadow-[0_30px_80px_rgba(88,55,24,0.12)] backdrop-blur sm:p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
                  Motion Stage
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-stone-950">
                  基本モーションの代表6枠
                </h2>
              </div>
              <div className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-950">
                6 Scenes
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
              {motionStages.map((stage, index) => (
                <article
                  key={stage.title}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-stone-50 p-4 sm:p-5"
                >
                  <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.28),_transparent_72%)]" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between text-sm text-stone-500">
                      <span>Scene {index + 1}</span>
                      <div className="flex gap-2">
                        <span className="rounded-full bg-stone-200 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-stone-700">
                          {stage.family}
                        </span>
                        <span className="rounded-full bg-stone-900 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-stone-50">
                          {stage.mood}
                        </span>
                      </div>
                    </div>

                    <div className="relative mt-4 flex min-h-[18rem] items-end justify-center overflow-hidden rounded-[1.5rem] border border-dashed border-stone-300 bg-[linear-gradient(180deg,_rgba(255,255,255,0.88),_rgba(245,240,232,0.92))] p-3 sm:min-h-[20rem] sm:p-4">
                      <div
                        className={`motion-preview ${
                          stage.family === "1 Body"
                            ? "motion-preview-single"
                            : stage.family === "2 Body"
                              ? "motion-preview-duo"
                              : "motion-preview-trio"
                        }`}
                      >
                        <stage.render />
                      </div>
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-stone-900">
                      {stage.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-stone-600">
                      {stage.note}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
