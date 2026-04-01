"use client";

import { motion } from "framer-motion";
import BearCharacter from "../bear-character";

type TrioVariant =
  | "domino_fall"
  | "stack_up"
  | "triangle_spin"
  | "one_offbeat"
  | "all_bounce"
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
    title: "ドミノのように倒れる",
    note: "3体が順番に傾いて、やわらかなドミノのように倒れていきます。",
    variant: "domino_fall",
  },
  {
    title: "積み重なる",
    note: "3体が寄り集まって、バランスを取りながら重なります。",
    variant: "stack_up",
  },
  {
    title: "三角形で回る",
    note: "三角形の並びを保ったまま、ひとまとまりで回転します。",
    variant: "triangle_spin",
  },
  {
    title: "1体だけずれる",
    note: "1体だけ少し違うリズムで動き、全体に変化をつけます。",
    variant: "one_offbeat",
  },
  {
    title: "みんなでバウンドする",
    note: "3体が同時に弾み、元気のあるまとまった動きになります。",
    variant: "all_bounce",
  },
  {
    title: "真ん中だけつぶれる",
    note: "中央の1体がつぶれ、左右の2体が少しだけ反応します。",
    variant: "middle_squash",
  },
  {
    title: "位置を入れ替える",
    note: "3体が順番に位置を入れ替えながら循環します。",
    variant: "swap_places",
  },
  {
    title: "集まってから分かれる",
    note: "中央へ集まったあと、外側へ分かれて戻ります。",
    variant: "merge_split",
  },
  {
    title: "リレーのように転がる",
    note: "動きが1体ずつ受け渡されるように、順番に転がっていきます。",
    variant: "roll_relay",
  },
  {
    title: "みんなで縮む",
    note: "3体が同時にきゅっと縮んで、そろって戻るモーションです。",
    variant: "all_shrink",
  },
];

function TrioPreview({ variant }: { variant: TrioVariant }) {
  const palettes = ["gray", "brown", "white"] as const;

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
          { palette: "brown" as const, x: [0, 0, 0] },
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
      <section className="mx-auto w-full max-w-[1400px] px-3 py-6 sm:px-4 sm:py-8 lg:px-6 lg:py-10">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {trioMotionIdeas.map((scene) => (
            <article
              key={scene.title}
              className="overflow-hidden rounded-[1.5rem] bg-white shadow-none"
            >
              <div className="flex min-h-[20rem] items-end justify-center rounded-t-[1.5rem] bg-[#efe6da] p-4 sm:min-h-[22rem] sm:p-5">
                <div className="motion-preview motion-preview-trio">
                  <TrioPreview variant={scene.variant} />
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
