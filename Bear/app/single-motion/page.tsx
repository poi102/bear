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
    title: "ぴょんと上に跳ねる",
    note: "軽やかなリズムで上に跳ねる、基本のジャンプモーションです。",
    variant: "bouncy_jump",
  },
  {
    title: "つぶれてから戻る",
    note: "体がぎゅっと縮んでから、やわらかく元に戻ります。",
    variant: "squash_stretch",
  },
  {
    title: "ふるふる震える",
    note: "小さな揺れと回転で、落ち着かない震え方を見せます。",
    variant: "quiver",
  },
  {
    title: "ゆっくりふくらむ",
    note: "ゆっくり大きくなって、自然に元の大きさへ戻ります。",
    variant: "slow_expand",
  },
  {
    title: "横に転がる",
    note: "ころんと横へ転がって移動する、遊びのあるモーションです。",
    variant: "roll_sideways",
  },
  {
    title: "びっくりして縮む",
    note: "驚いたように一瞬きゅっと縮んでから、元に戻ります。",
    variant: "shocked_shrink",
  },
  {
    title: "ふわっと浮いて落ちる",
    note: "やさしく浮かび上がって、やわらかく着地する動きです。",
    variant: "float_fall",
  },
  {
    title: "目線だけ左右に動く",
    note: "体はそのままで、目線だけが左右に移るモーションです。",
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
      <BearCharacter size={160} palette="brown" gazeAnimated />
    </div>
  );
}

export default function SingleMotionPage() {
  return (
    <main className="bear-page flex-1">
      <section className="mx-auto w-full max-w-[1400px] px-3 py-6 sm:px-4 sm:py-8 lg:px-6 lg:py-10">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {singleMotionIdeas.map((scene) => (
            <article
              key={scene.title}
              className="overflow-hidden rounded-[1.5rem] bg-white shadow-none"
            >
              <div className="flex min-h-[20rem] items-end justify-center rounded-t-[1.5rem] bg-[#efe6da] p-4 sm:min-h-[22rem] sm:p-5">
                <div className="motion-preview motion-preview-single">
                  <SingleMotionPreview variant={scene.variant} />
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
