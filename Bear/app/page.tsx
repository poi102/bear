"use client";

import { motion } from "framer-motion";
import BearCharacter from "./bear-character";

type HomeMotionStage = {
  title: string;
  note: string;
  previewClass: "motion-preview-single" | "motion-preview-duo" | "motion-preview-trio";
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
    title: "ぴょんと上に跳ねる",
    note: "1体のくまが軽やかなリズムで上に跳ねる、基本のモーションです。",
    previewClass: "motion-preview-single",
    render: SingleJumpPreview,
  },
  {
    title: "つぶれてから戻る",
    note: "体がぎゅっと縮んでから、やわらかく元に戻る動きを見せます。",
    previewClass: "motion-preview-single",
    render: SingleSquashPreview,
  },
  {
    title: "2体が軽くぶつかる",
    note: "2体のくまが近づいて、やさしく触れるようにぶつかるモーションです。",
    previewClass: "motion-preview-duo",
    render: DuoCollidePreview,
  },
  {
    title: "そろってジャンプする",
    note: "2体が同じタイミングで跳ねて、そろったリズムを作ります。",
    previewClass: "motion-preview-duo",
    render: DuoSyncJumpPreview,
  },
  {
    title: "順番にジャンプする",
    note: "3体が少しずつずれて跳ね、流れのある連続モーションになります。",
    previewClass: "motion-preview-trio",
    render: TrioSequencePreview,
  },
  {
    title: "みんなでバウンドする",
    note: "3体が同時に弾み、まとまりのある元気な印象を見せます。",
    previewClass: "motion-preview-trio",
    render: TrioBouncePreview,
  },
];

export default function Home() {
  return (
    <main className="bear-page flex-1">
      <section className="mx-auto w-full max-w-350 px-3 py-6 sm:px-4 sm:py-8 lg:px-6 lg:py-10">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {motionStages.map((stage) => (
            <article
              key={stage.title}
              className="overflow-hidden rounded-3xl bg-white shadow-none"
            >
              <div className="flex min-h-80 items-end justify-center rounded-t-3xl bg-[#efe6da] p-4 sm:min-h-88 sm:p-5">
                <div className={`motion-preview ${stage.previewClass}`}>
                  <stage.render />
                </div>
              </div>

              <div className="rounded-b-3xl bg-white px-5 py-4">
                <h2 className="text-xl font-semibold text-stone-900">{stage.title}</h2>
                <p className="mt-2 text-sm leading-7 text-stone-600">{stage.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
