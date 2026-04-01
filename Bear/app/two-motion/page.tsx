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
    note: "2体がやさしく近づいて、ふわっと触れるようにぶつかります。",
    variant: "light_collide",
  },
  {
    title: "ぶつかって弾き返される",
    note: "衝突のあとに、それぞれが軽く跳ね返る動きです。",
    variant: "bounce_back",
  },
  {
    title: "ぴたっとくっつく",
    note: "近づいたあと、少しの間くっついたまま止まります。",
    variant: "stick_together",
  },
  {
    title: "引き寄せられる",
    note: "中央へ吸い寄せられるように近づいてから戻ります。",
    variant: "pull_toward",
  },
  {
    title: "まわりを回る",
    note: "2体が共通の中心を意識しながら、くるっと回ります。",
    variant: "orbit",
  },
  {
    title: "同時にジャンプする",
    note: "2体が同じタイミングでそろって跳ねるモーションです。",
    variant: "sync_jump",
  },
  {
    title: "追いかけながら転がる",
    note: "片方がもう片方を追いかけるように転がって動きます。",
    variant: "chase_roll",
  },
  {
    title: "同時にふくらむ",
    note: "2体がそろってふくらみ、ゆっくり元に戻ります。",
    variant: "sync_expand",
  },
  {
    title: "集まってから離れる",
    note: "中央へ寄ってから、また外側へ離れていく動きです。",
    variant: "merge_then_split",
  },
  {
    title: "一瞬重なって弾ける",
    note: "中央で一瞬重なったあと、勢いよく外側へ弾けます。",
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
          x: [0, 20, 0, -10, 0],
          y: [0, -2, -16, 0, 0],
          scale: [1, 1.04, 1.18, 1, 1],
          opacity: [1, 1, 0.88, 1, 1],
        }}
        transition={{
          duration: 1.8,
          repeat: Number.POSITIVE_INFINITY,
          times: [0, 0.32, 0.48, 0.72, 1],
          ease: "easeInOut",
        }}
      >
        <BearCharacter size={140} palette="gray" />
      </motion.div>
      <motion.div
        animate={{
          x: [0, -20, 0, 10, 0],
          y: [0, -2, -16, 0, 0],
          scale: [1, 1.04, 1.18, 1, 1],
          opacity: [1, 1, 0.88, 1, 1],
        }}
        transition={{
          duration: 1.8,
          repeat: Number.POSITIVE_INFINITY,
          times: [0, 0.32, 0.48, 0.72, 1],
          ease: "easeInOut",
        }}
      >
        <BearCharacter size={140} palette="brown" />
      </motion.div>
    </div>
  );
}

export default function TwoMotionPage() {
  return (
    <main className="bear-page flex-1">
      <section className="mx-auto w-full max-w-[1400px] px-3 py-6 sm:px-4 sm:py-8 lg:px-6 lg:py-10">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {duoMotionIdeas.map((scene) => (
            <article
              key={scene.title}
              className="overflow-hidden rounded-[1.5rem] bg-white shadow-none"
            >
              <div className="flex min-h-[20rem] items-end justify-center rounded-t-[1.5rem] bg-[#efe6da] p-4 sm:min-h-[22rem] sm:p-5">
                <div className="motion-preview motion-preview-duo">
                  <DuoPreview variant={scene.variant} />
                </div>
              </div>

              <div className="rounded-b-[1.5rem] bg-white px-5 py-4">
                <h2 className="text-xl font-semibold text-stone-900">{scene.title}</h2>
                <p className="mt-2 text-sm leading-7 text-stone-600">{scene.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
