"use client";

import { motion } from "framer-motion";
import BearCharacter from "../bear-character";

type SingleMotionVariant =
  | "bouncy_jump"
  | "squash_stretch"
  | "quiver"
  | "slow_expand"
  | "roll_sideways"
  | "shocked_shrink"
  | "float_fall"
  | "eye_gaze";

const singleMotionIdeas: Array<{
  title: string;
  note: string;
  variant: SingleMotionVariant;
}> = [
  {
    title: "ぽよんと上下に跳ねる",
    note: "弾むような軽い動きで、何度も上下に弾む。",
    variant: "bouncy_jump",
  },
  {
    title: "つぶれて元に戻る",
    note: "着地時に縦方向を圧縮して、その後元に戻る動き。",
    variant: "squash_stretch",
  },
  {
    title: "ぷるぷる震える",
    note: "小さな振動を繰り返して、震えている様子を表現。",
    variant: "quiver",
  },
  {
    title: "ゆっくり膨らんで戻る",
    note: "じっくり時間をかけて大きくなり、ゆっくり元に戻る。",
    variant: "slow_expand",
  },
  {
    title: "横に転がる",
    note: "横方向へ回転しながら移動する動き。",
    variant: "roll_sideways",
  },
  {
    title: "びっくりして縮む",
    note: "目にも止まらぬ速さで急激に小さくなる。",
    variant: "shocked_shrink",
  },
  {
    title: "ふわっと浮いて落ちる",
    note: "軽く浮き上がって、ゆっくり落ちてくる動き。",
    variant: "float_fall",
  },
  {
    title: "目線だけ左右に動く",
    note: "体は動かず、目線だけが左右にきょろきょろ動く。",
    variant: "eye_gaze",
  },
];

function SingleMotionPreview({ variant }: { variant: SingleMotionVariant }) {
  if (variant === "bouncy_jump") {
    return (
      <div className="flex items-end justify-center">
        <motion.div
          animate={{
            y: [0, 12, -34, -10, 0],
            scaleX: [1, 1.08, 0.95, 1.03, 1],
            scaleY: [1, 0.88, 1.08, 0.97, 1],
          }}
          transition={{
            duration: 1.05,
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.18, 0.48, 0.76, 1],
            ease: "easeInOut",
          }}
        >
          <BearCharacter size={160} palette="brown" />
        </motion.div>
      </div>
    );
  }

  if (variant === "squash_stretch") {
    return (
      <div className="flex items-end justify-center">
        <motion.div
          animate={{
            scaleX: [1, 1.2, 0.96, 1],
            scaleY: [1, 0.68, 1.08, 1],
            y: [0, 16, -6, 0],
          }}
          transition={{
            duration: 1.35,
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.24, 0.5, 1],
            ease: "easeInOut",
          }}
        >
          <BearCharacter size={160} palette="brown" />
        </motion.div>
      </div>
    );
  }

  if (variant === "quiver") {
    return (
      <div className="flex items-end justify-center">
        <motion.div
          animate={{
            x: [0, -5, 6, -6, 5, -3, 0],
            rotate: [0, -2, 2, -2, 1.5, -1, 0],
            scaleX: [1, 1.02, 0.99, 1.01, 1, 1, 1],
          }}
          transition={{
            duration: 0.7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <BearCharacter size={160} palette="brown" />
        </motion.div>
      </div>
    );
  }

  if (variant === "slow_expand") {
    return (
      <div className="flex items-end justify-center">
        <motion.div
          animate={{
            scaleX: [1, 1.08, 1.14, 1.06, 1],
            scaleY: [1, 1.04, 1.1, 1.03, 1],
            y: [0, -4, -8, -3, 0],
          }}
          transition={{
            duration: 3.2,
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.34, 0.56, 0.8, 1],
            ease: "easeInOut",
          }}
        >
          <BearCharacter size={160} palette="brown" />
        </motion.div>
      </div>
    );
  }

  if (variant === "roll_sideways") {
    return (
      <div className="flex items-end justify-center">
        <motion.div
          animate={{
            x: [-10, 36, -4, 0],
            rotate: [0, 150, 320, 360],
            y: [0, -6, -2, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.46, 0.82, 1],
            ease: "easeInOut",
          }}
        >
          <BearCharacter size={160} palette="brown" />
        </motion.div>
      </div>
    );
  }

  if (variant === "shocked_shrink") {
    return (
      <div className="flex items-end justify-center">
        <motion.div
          animate={{
            scaleX: [1, 0.72, 1.06, 0.98, 1],
            scaleY: [1, 0.72, 1.02, 0.99, 1],
            y: [0, 4, -2, 0, 0],
          }}
          transition={{
            duration: 0.95,
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.22, 0.42, 0.7, 1],
            ease: "easeInOut",
          }}
        >
          <BearCharacter size={160} palette="brown" />
        </motion.div>
      </div>
    );
  }

  if (variant === "float_fall") {
    return (
      <div className="flex items-end justify-center">
        <motion.div
          animate={{
            y: [0, -26, -34, 8, 0],
            scaleX: [1, 1.01, 1.02, 1.08, 1],
            scaleY: [1, 1.02, 1.03, 0.9, 1],
          }}
          transition={{
            duration: 2.4,
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.28, 0.48, 0.82, 1],
            ease: "easeInOut",
          }}
        >
          <BearCharacter size={160} palette="brown" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex items-end justify-center">
      <motion.div
        animate={{
          x: [-8, -2, 8, 2, -8],
          y: [0, -2, 0, -2, 0],
          rotate: [-1.5, -0.5, 1.5, 0.5, -1.5],
        }}
        transition={{
          duration: 2.0,
          repeat: Number.POSITIVE_INFINITY,
          times: [0, 0.24, 0.5, 0.76, 1],
          ease: "easeInOut",
        }}
      >
        <BearCharacter size={160} palette="brown" />
      </motion.div>
    </div>
  );
}

export default function SingleMotionPage() {
  return (
    <main className="bear-page flex-1">
      <section className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-3 py-4 sm:px-4 sm:py-5 lg:px-6 lg:py-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="hero-copy max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-900/70">
              Single Character
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
              1体のアニメーション
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-700 sm:text-lg">
              1体のキャラクターが単独で表現するリアクションやモーションの見本です。
              リズミカルな動きから感情表現まで、様々なアニメーション効果を集めました。
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-4">
          <section className="rounded-[2rem] border border-white/65 bg-white/80 p-4 shadow-[0_30px_80px_rgba(88,55,24,0.12)] backdrop-blur sm:p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
                  Single Motion Ideas
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-stone-950">
                  1体モーション例
                </h2>
              </div>
              <div className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-950">
                8 Ideas
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
              {singleMotionIdeas.map((scene) => (
                <article
                  key={scene.title}
                  className="relative overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-stone-50 p-4 sm:p-5"
                >
                  <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_72%)]" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between text-sm text-stone-500">
                      <span>Single Motion</span>
                      <span className="rounded-full bg-stone-900 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-stone-50">
                        1 Body
                      </span>
                    </div>

                    <div className="relative mt-4 flex min-h-[18rem] items-end justify-center overflow-hidden rounded-3xl border border-dashed border-stone-300 bg-[linear-gradient(180deg,_rgba(255,255,255,0.88),_rgba(245,240,232,0.92))] p-3 sm:min-h-[20rem] sm:p-4">
                      <div className="motion-preview motion-preview-single">
                        <SingleMotionPreview variant={scene.variant} />
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
