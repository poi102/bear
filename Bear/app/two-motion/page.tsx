"use client";

import { motion } from "framer-motion";
import BearCharacter from "../bear-character";

type DuoVariant =
  | "light_collide"
  | "bounce_back"
  | "stick_together"
  | "pull_toward"
  | "orbit"
  | "sync_jump"
  | "chase_roll"
  | "sync_expand"
  | "merge_then_split"
  | "overlap_burst";

const duoMotionIdeas: Array<{
  title: string;
  note: string;
  variant: DuoVariant;
}> = [
  {
    title: "軽くぶつかる",
    note: "左右から近づいて、軽く触れ合うモーション。",
    variant: "light_collide",
  },
  {
    title: "ぶつかって跳ね返る",
    note: "衝突してから反対方向に飛び返る様子。",
    variant: "bounce_back",
  },
  {
    title: "ぴたっとくっつく",
    note: "お互いに引き寄せられてぴったり寄り添う。",
    variant: "stick_together",
  },
  {
    title: "引き寄せ合う",
    note: "磁力のように互いに吸い寄せられる動き。",
    variant: "pull_toward",
  },
  {
    title: "回り合う",
    note: "中心を軸に互いの周りを回転する。",
    variant: "orbit",
  },
  {
    title: "同時にジャンプする",
    note: "シンクロして上下に弾むモーション。",
    variant: "sync_jump",
  },
  {
    title: "追いかけるように転がる",
    note: "一方が他方を追うように回転しながら移動。",
    variant: "chase_roll",
  },
  {
    title: "シンクロして伸び縮みする",
    note: "同時に拡大と縮小を繰り返す。",
    variant: "sync_expand",
  },
  {
    title: "合体してから分かれる",
    note: "一度中心で合わさってから離れていく。",
    variant: "merge_then_split",
  },
  {
    title: "一瞬重なって弾ける",
    note: "重なった瞬間に反発して弾ける。",
    variant: "overlap_burst",
  },
];

function DuoPreview({ variant }: { variant: DuoVariant }) {
  if (variant === "light_collide") {
    return (
      <div className="flex items-end justify-center gap-1">
        <motion.div
          animate={{
            x: [0, 18, -5, 0],
            scaleX: [1, 1.05, 0.98, 1],
            scaleY: [1, 0.96, 1.01, 1],
          }}
          transition={{
            duration: 1.9,
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.38, 0.58, 1],
            ease: "easeInOut",
          }}
        >
          <BearCharacter size={140} palette="gray" />
        </motion.div>
        <motion.div
          animate={{
            x: [0, -18, 5, 0],
            scaleX: [1, 1.05, 0.98, 1],
            scaleY: [1, 0.96, 1.01, 1],
          }}
          transition={{
            duration: 1.9,
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.38, 0.58, 1],
            ease: "easeInOut",
          }}
        >
          <BearCharacter size={140} palette="brown" />
        </motion.div>
      </div>
    );
  }

  if (variant === "bounce_back") {
    return (
      <div className="flex items-end justify-center gap-2">
        <motion.div
          animate={{
            x: [0, 24, -10, 0],
            y: [0, 0, -14, 0],
            scaleX: [1, 1.06, 0.97, 1],
            scaleY: [1, 0.94, 1.03, 1],
          }}
          transition={{
            duration: 1.95,
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.34, 0.6, 1],
            ease: "easeInOut",
          }}
        >
          <BearCharacter size={135} palette="gray" />
        </motion.div>
        <motion.div
          animate={{
            x: [0, -24, 10, 0],
            y: [0, 0, -14, 0],
            scaleX: [1, 1.06, 0.97, 1],
            scaleY: [1, 0.94, 1.03, 1],
          }}
          transition={{
            duration: 1.95,
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.34, 0.6, 1],
            ease: "easeInOut",
          }}
        >
          <BearCharacter size={135} palette="brown" />
        </motion.div>
      </div>
    );
  }

  if (variant === "stick_together") {
    return (
      <div className="flex items-end justify-center gap-4">
        <motion.div
          animate={{ x: [0, 14, 10, 0], y: [0, -2, 0, 0] }}
          transition={{
            duration: 2.1,
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.36, 0.7, 1],
            ease: "easeInOut",
          }}
        >
          <BearCharacter size={130} palette="gray" />
        </motion.div>
        <motion.div
          animate={{ x: [0, -14, -10, 0], y: [0, -2, 0, 0], scaleX: [-1, -1, -1, -1] }}
          transition={{
            duration: 2.1,
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.36, 0.7, 1],
            ease: "easeInOut",
          }}
        >
          <BearCharacter size={130} palette="brown" />
        </motion.div>
      </div>
    );
  }

  if (variant === "pull_toward") {
    return (
      <div className="flex items-end justify-center gap-0">
        <motion.div
          animate={{ x: [-28, 0, 8, -28], scaleX: [1, 1.04, 0.98, 1] }}
          transition={{
            duration: 2.4,
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.36, 0.56, 1],
            ease: "easeInOut",
          }}
        >
          <BearCharacter size={135} palette="gray" />
        </motion.div>
        <motion.div
          animate={{ x: [28, 0, -8, 28], scaleX: [-1, -1.04, -0.98, -1] }}
          transition={{
            duration: 2.4,
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.36, 0.56, 1],
            ease: "easeInOut",
          }}
        >
          <BearCharacter size={135} palette="brown" />
        </motion.div>
      </div>
    );
  }

  if (variant === "orbit") {
    return (
      <div className="relative h-[12rem] w-full">
        <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-stone-300" />
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: [0, 360], scale: [1, 1.03, 1] }}
          transition={{ duration: 3.6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <div className="flex gap-12">
            <BearCharacter size={110} palette="gray" />
            <BearCharacter size={110} palette="brown" />
          </div>
        </motion.div>
      </div>
    );
  }

  if (variant === "sync_jump") {
    return (
      <div className="flex items-end justify-center gap-2">
        <motion.div
          animate={{
            y: [0, 10, -24, -8, 0],
            scaleX: [1, 1.06, 0.96, 1.02, 1],
            scaleY: [1, 0.9, 1.07, 0.98, 1],
          }}
          transition={{
            duration: 1.55,
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.18, 0.46, 0.72, 1],
            ease: "easeInOut",
          }}
        >
          <BearCharacter size={140} palette="gray" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 10, -24, -8, 0],
            scaleX: [1, 1.06, 0.96, 1.02, 1],
            scaleY: [1, 0.9, 1.07, 0.98, 1],
          }}
          transition={{
            duration: 1.55,
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.18, 0.46, 0.72, 1],
            ease: "easeInOut",
          }}
        >
          <BearCharacter size={140} palette="brown" />
        </motion.div>
      </div>
    );
  }

  if (variant === "chase_roll") {
    return (
      <div className="flex items-end justify-center gap-1">
        <motion.div
          animate={{ x: [-20, 18, -20], rotate: [0, 24, -6], y: [0, -6, 0] }}
          transition={{ duration: 2.1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.15 }}
        >
          <BearCharacter size={135} palette="brown" />
        </motion.div>
        <motion.div
          animate={{ x: [18, -20, 18], rotate: [0, -24, 6], y: [0, -6, 0] }}
          transition={{ duration: 2.0, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <BearCharacter size={135} palette="gray" />
        </motion.div>
      </div>
    );
  }

  if (variant === "sync_expand") {
    return (
      <div className="flex items-end justify-center gap-2">
        <motion.div
          animate={{
            scaleX: [1, 1.1, 1.18, 1.04, 1],
            scaleY: [1, 1.03, 1.12, 1.02, 1],
            y: [0, -2, -8, -2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.28, 0.52, 0.78, 1],
            ease: "easeInOut",
          }}
        >
          <BearCharacter size={135} palette="gray" />
        </motion.div>
        <motion.div
          animate={{
            scaleX: [1, 1.1, 1.18, 1.04, 1],
            scaleY: [1, 1.03, 1.12, 1.02, 1],
            y: [0, -2, -8, -2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.28, 0.52, 0.78, 1],
            ease: "easeInOut",
          }}
        >
          <BearCharacter size={135} palette="brown" />
        </motion.div>
      </div>
    );
  }

  if (variant === "merge_then_split") {
    return (
      <div className="relative h-[12rem] w-full">
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          animate={{ x: [-64, 0, -64], scale: [1, 0.92, 1], opacity: [1, 0.72, 1] }}
          transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <BearCharacter size={135} palette="gray" />
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          animate={{ x: [64, 0, 64], scale: [1, 0.92, 1], opacity: [1, 0.72, 1] }}
          transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <BearCharacter size={135} palette="brown" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex items-end justify-center gap-1">
      <motion.div
        animate={{
          y: [0, -8, -18, 0],
          x: [0, -6, 6, 0],
          scale: [1, 1.08, 1.18, 1],
        }}
        transition={{ duration: 1.7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <BearCharacter size={140} palette="gray" />
      </motion.div>
      <motion.div
        animate={{
          y: [0, -8, -18, 0],
          x: [0, 6, -6, 0],
          scale: [1, 1.08, 1.18, 1],
        }}
        transition={{ duration: 1.7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <BearCharacter size={140} palette="brown" />
      </motion.div>
    </div>
  );
}

export default function TwoMotionPage() {
  return (
    <main className="bear-page flex-1">
      <section className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-3 py-4 sm:px-4 sm:py-5 lg:px-6 lg:py-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-rose-900/70">
              Duo Animations
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
              2体のアニメーション
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-700 sm:text-lg">
              2体のキャラクターが相互に作用するモーションの見本です。
              ぶつかる、くっつく、一緒に動くなど、関係性をあらわすアニメーションを集めました。
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-4">
          <section className="rounded-[2rem] border border-white/65 bg-white/80 p-4 shadow-[0_30px_80px_rgba(88,55,24,0.12)] backdrop-blur sm:p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
                  Duo Motion Ideas
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-stone-950">
                  2体モーション例
                </h2>
              </div>
              <div className="rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-950">
                10 Ideas
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
              {duoMotionIdeas.map((scene) => (
                <article
                  key={scene.title}
                  className="relative overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-stone-50 p-4 sm:p-5"
                >
                  <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.15),_transparent_72%)]" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between text-sm text-stone-500">
                      <span>Duo Motion</span>
                      <span className="rounded-full bg-stone-900 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-stone-50">
                        2 Body
                      </span>
                    </div>

                    <div className="relative mt-4 flex min-h-[18rem] items-end justify-center overflow-hidden rounded-3xl border border-dashed border-stone-300 bg-[linear-gradient(180deg,_rgba(255,255,255,0.88),_rgba(245,240,232,0.92))] p-3 sm:min-h-[20rem] sm:p-4">
                      <div className="motion-preview motion-preview-duo">
                        <DuoPreview variant={scene.variant} />
                      </div>
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-stone-900">{scene.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-stone-600">{scene.note}</p>
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
