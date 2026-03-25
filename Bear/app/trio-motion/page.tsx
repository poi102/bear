"use client";

import { motion } from "framer-motion";
import BearCharacter from "../bear-character";

type TrioVariant =
  | "sequence_jump"
  | "domino_fall"
  | "stack_up"
  | "triangle_spin"
  | "one_offbeat"
  | "all_bounce"
  | "wave_sway"
  | "middle_squash"
  | "swap_places"
  | "merge_split"
  | "roll_relay"
  | "all_shrink";

const trioMotionIdeas: Array<{
  title: string;
  note: string;
  variant: TrioVariant;
}> = [
  {
    title: "順番にジャンプする",
    note: "左から右へ順番に跳ねて、リズム感を見せるモーションです。",
    variant: "sequence_jump",
  },
  {
    title: "ドミノのように倒れる",
    note: "1体ずつ傾いていく、コミカルな倒れ方の見本です。",
    variant: "domino_fall",
  },
  {
    title: "積み上がる",
    note: "3体が縦に重なって、協力しているように見える構図です。",
    variant: "stack_up",
  },
  {
    title: "三角配置で回転する",
    note: "三角形を保ったまま回って、グループ感を出します。",
    variant: "triangle_spin",
  },
  {
    title: "1体だけズレる",
    note: "2体はそろって動き、1体だけ少し遅れて外す演出です。",
    variant: "one_offbeat",
  },
  {
    title: "全員同時にバウンドする",
    note: "3体が同時に弾んで、シンプルに気持ちよく見せます。",
    variant: "all_bounce",
  },
  {
    title: "波のように順番に揺れる",
    note: "左から右へ揺れが伝わる、波打つような流れです。",
    variant: "wave_sway",
  },
  {
    title: "真ん中がつぶれる",
    note: "両端に挟まれて中央だけがむにっとつぶれる表現です。",
    variant: "middle_squash",
  },
  {
    title: "位置を入れ替える",
    note: "3体が横位置を交換して、にぎやかに見せる動きです。",
    variant: "swap_places",
  },
  {
    title: "合体して大きくなってから分かれる",
    note: "中心へ寄って一瞬まとまり、再び3体へ戻る演出です。",
    variant: "merge_split",
  },
  {
    title: "順番に転がる",
    note: "回転と横移動を組み合わせて、リレーのように流れます。",
    variant: "roll_relay",
  },
  {
    title: "全員同時に縮む",
    note: "驚いたように全員がきゅっと縮むリアクションです。",
    variant: "all_shrink",
  },
];

function TrioPreview({ variant }: { variant: TrioVariant }) {
  const palettes = ["gray", "brown", "white"] as const;

  if (variant === "sequence_jump") {
    return (
      <div className="flex items-end justify-center gap-2">
        {palettes.map((palette, index) => (
          <motion.div
            key={palette}
            animate={{
              y: [0, 10, -30, -10, 0],
              scaleX: [1, 1.05, 0.96, 1.02, 1],
              scaleY: [1, 0.91, 1.07, 0.98, 1],
            }}
            transition={{
              duration: 1.6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              times: [0, 0.18, 0.46, 0.74, 1],
              delay: index * 0.18,
            }}
          >
            <BearCharacter size={132} palette={palette} />
          </motion.div>
        ))}
      </div>
    );
  }

  if (variant === "domino_fall") {
    return (
      <div className="flex items-end justify-center gap-1">
        {palettes.map((palette, index) => (
          <motion.div
            key={palette}
            animate={{
              rotate: [0, index === 0 ? 24 : index === 2 ? -18 : 16, index === 0 ? 6 : index === 2 ? -4 : 4, 0],
              y: [0, -4, -1, 0],
            }}
            transition={{
              duration: 1.9,
              repeat: Number.POSITIVE_INFINITY,
              times: [0, 0.34, 0.56, 1],
              ease: "easeInOut",
              delay: index * 0.14,
            }}
            style={{ transformOrigin: "50% 100%" }}
          >
            <BearCharacter size={128} palette={palette} />
          </motion.div>
        ))}
      </div>
    );
  }

  if (variant === "stack_up") {
    return (
      <div className="relative h-[15rem] w-full">
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 10, -8, 0],
            scaleX: [1, 1.08, 0.98, 1],
            scaleY: [1, 0.9, 1.03, 1],
          }}
          transition={{ duration: 2.1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <BearCharacter size={142} palette="brown" />
        </motion.div>
        <motion.div
          className="absolute bottom-[4.8rem] left-[32%]"
          animate={{ y: [0, -6, -12, 0], rotate: [0, -2, 1, 0] }}
          transition={{ duration: 2.1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.12 }}
        >
          <BearCharacter size={108} palette="gray" />
        </motion.div>
        <motion.div
          className="absolute bottom-[4.8rem] right-[32%]"
          animate={{ y: [0, -6, -12, 0], rotate: [0, 2, -1, 0] }}
          transition={{ duration: 2.1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.24 }}
        >
          <BearCharacter size={108} palette="white" />
        </motion.div>
      </div>
    );
  }

  if (variant === "triangle_spin") {
    return (
      <motion.div
        className="relative h-[15rem] w-full"
        animate={{ rotate: [0, 360], scale: [1, 1.03, 1] }}
        transition={{ duration: 8.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <div className="absolute left-1/2 top-[10%] -translate-x-1/2">
          <BearCharacter size={104} palette="brown" />
        </div>
        <div className="absolute bottom-[10%] left-[18%]">
          <BearCharacter size={104} palette="gray" />
        </div>
        <div className="absolute bottom-[10%] right-[18%]">
          <BearCharacter size={104} palette="white" />
        </div>
      </motion.div>
    );
  }

  if (variant === "one_offbeat") {
    return (
      <div className="flex items-end justify-center gap-2">
        <motion.div
          animate={{ y: [0, 8, -18, 0], scaleY: [1, 0.94, 1.04, 1] }}
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <BearCharacter size={126} palette="gray" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 4, -8, 0],
            rotate: [0, 10, -5, 0],
            scaleX: [1, 1.04, 0.98, 1],
          }}
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.2 }}
        >
          <BearCharacter size={138} palette="brown" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 8, -18, 0], scaleY: [1, 0.94, 1.04, 1] }}
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <BearCharacter size={126} palette="white" />
        </motion.div>
      </div>
    );
  }

  if (variant === "all_bounce") {
    return (
      <div className="flex items-end justify-center gap-2">
        {palettes.map((palette) => (
          <motion.div
            key={palette}
            animate={{
              y: [0, 12, -22, -6, 0],
              scaleX: [1, 1.08, 0.97, 1.02, 1],
              scaleY: [1, 0.89, 1.06, 0.99, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              times: [0, 0.2, 0.48, 0.74, 1],
              ease: "easeInOut",
            }}
          >
            <BearCharacter size={130} palette={palette} />
          </motion.div>
        ))}
      </div>
    );
  }

  if (variant === "wave_sway") {
    return (
      <div className="flex items-end justify-center gap-2">
        {palettes.map((palette, index) => (
          <motion.div
            key={palette}
            animate={{
              rotate: [-8, 8, -8],
              y: [0, -8, 0],
              scaleY: [1, 1.02, 1],
            }}
            transition={{
              duration: 2.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: index * 0.16,
            }}
          >
            <BearCharacter size={128} palette={palette} />
          </motion.div>
        ))}
      </div>
    );
  }

  if (variant === "middle_squash") {
    return (
      <div className="flex items-end justify-center gap-1">
        <motion.div animate={{ x: [0, -4, 0] }} transition={{ duration: 1.7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}>
          <BearCharacter size={122} palette="gray" />
        </motion.div>
        <motion.div
          animate={{
            scaleX: [1, 1.24, 0.98, 1],
            scaleY: [1, 0.68, 1.02, 1],
            y: [0, 16, -4, 0],
          }}
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <BearCharacter size={140} palette="brown" />
        </motion.div>
        <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}>
          <BearCharacter size={122} palette="white" />
        </motion.div>
      </div>
    );
  }

  if (variant === "swap_places") {
    return (
      <div className="relative h-[15rem] w-full">
        {[
          { palette: "gray" as const, x: [-92, 0, 92, -92] },
          { palette: "brown" as const, x: [0, 92, -92, 0] },
          { palette: "white" as const, x: [92, -92, 0, 92] },
        ].map((item) => (
          <motion.div
            key={item.palette}
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
            animate={{ x: item.x, y: [0, -10, -2, 0], rotate: [0, -4, 4, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <BearCharacter size={126} palette={item.palette} />
          </motion.div>
        ))}
      </div>
    );
  }

  if (variant === "merge_split") {
    return (
      <div className="relative h-[15rem] w-full">
        {[
          { palette: "gray" as const, x: [-64, 0, -64] },
          { palette: "brown" as const, x: [0, 0, 0], size: [118, 156, 118] },
          { palette: "white" as const, x: [64, 0, 64] },
        ].map((item) => (
          <motion.div
            key={item.palette}
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
            animate={{
              x: item.x,
              scale: item.palette === "brown" ? [1, 1.06, 1.22, 1] : [1, 0.94, 0.84, 1],
              opacity: item.palette === "brown" ? [1, 1, 1, 1] : [1, 0.7, 0.42, 1],
            }}
            transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <BearCharacter size={item.palette === "brown" ? 150 : 116} palette={item.palette} />
          </motion.div>
        ))}
      </div>
    );
  }

  if (variant === "roll_relay") {
    return (
      <div className="flex items-end justify-center gap-2">
        {palettes.map((palette, index) => (
          <motion.div
            key={palette}
            animate={{
              y: [0, -12, 0],
              rotate: [0, 22, 0],
              x: [0, 10, 0],
              scaleX: [1, 1.03, 1],
            }}
            transition={{
              duration: 1.9,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            <BearCharacter size={126} palette={palette} />
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-end justify-center gap-2">
      {palettes.map((palette) => (
        <motion.div
          key={palette}
          animate={{
            scaleX: [1, 0.78, 1.04, 1],
            scaleY: [1, 0.78, 1.01, 1],
            y: [0, 14, -2, 0],
          }}
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <BearCharacter size={128} palette={palette} />
        </motion.div>
      ))}
    </div>
  );
}

export default function TrioMotionPage() {
  return (
    <main className="bear-page flex-1">
      <section className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-3 py-4 sm:px-4 sm:py-5 lg:px-6 lg:py-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-900/70">
              Trio Animations
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
              3体のアニメーション
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-700 sm:text-lg">
              3体のキャラクターが組み合わさって見せるモーションの見本です。
              リズム感や協力感、グループとしてのまとまり感を表現するアニメーション例を集めました。
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-4">
          <section className="rounded-[2rem] border border-white/65 bg-white/80 p-4 shadow-[0_30px_80px_rgba(88,55,24,0.12)] backdrop-blur sm:p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
                  Trio Motion Ideas
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-stone-950">
                  3体モーション例
                </h2>
              </div>
              <div className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-950">
                12 Ideas
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
              {trioMotionIdeas.map((scene) => (
                <article
                  key={scene.title}
                  className="relative overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-stone-50 p-4 sm:p-5"
                >
                  <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),_transparent_72%)]" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between text-sm text-stone-500">
                      <span>Trio Motion</span>
                      <span className="rounded-full bg-stone-900 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-stone-50">
                        3 Body
                      </span>
                    </div>

                    <div className="relative mt-4 flex min-h-[18rem] items-end justify-center overflow-hidden rounded-3xl border border-dashed border-stone-300 bg-[linear-gradient(180deg,_rgba(255,255,255,0.88),_rgba(245,240,232,0.92))] p-3 sm:min-h-[20rem] sm:p-4">
                      <div className="motion-preview motion-preview-trio">
                        <TrioPreview variant={scene.variant} />
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
