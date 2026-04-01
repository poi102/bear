import React from "react";

type BearPalette = {
  body: string;
  bodyMid: string;
  bodyLow: string;
  ear: string;
  snout: string;
  outline: string;
  cheek: string;
  shadow: string;
};

type BearCharacterProps = {
  size?: number;
  className?: string;
  animated?: boolean;
  gazeAnimated?: boolean;
  palette?: "brown" | "gray" | "white";
};

const palettes: Record<NonNullable<BearCharacterProps["palette"]>, BearPalette> = {
  brown: {
    body: "#f0ddcf",
    bodyMid: "#e3c1a6",
    bodyLow: "#cc9f7d",
    ear: "#ddb28f",
    snout: "#f2dfcf",
    outline: "#5f3f2a",
    cheek: "#f4e4d8",
    shadow: "#5f3f2a",
  },
  gray: {
    body: "#f6f7f9",
    bodyMid: "#e8ebf0",
    bodyLow: "#d1d7df",
    ear: "#e2e6ec",
    snout: "#f4f5f7",
    outline: "#5d6672",
    cheek: "#f3f5f8",
    shadow: "#5d6672",
  },
  white: {
    body: "#fffefb",
    bodyMid: "#f0eee9",
    bodyLow: "#dbd8d2",
    ear: "#e8e4dd",
    snout: "#ffffff",
    outline: "#8b847c",
    cheek: "#f4f1eb",
    shadow: "#8b847c",
  },
};

export default function BearCharacter({
  size = 280,
  className = "",
  animated = false,
  gazeAnimated = false,
  palette = "brown",
}: BearCharacterProps) {
  const colors = palettes[palette];

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        display: "inline-block",
        animation: animated ? "bearFloat 2.4s ease-in-out infinite" : "none",
      }}
    >
      <style>
        {`
          @keyframes bearFloat {
            0% { transform: translateY(0px) scaleY(1) scaleX(1); }
            25% { transform: translateY(-4px) scaleY(1.02) scaleX(0.99); }
            50% { transform: translateY(-8px) scaleY(0.98) scaleX(1.02); }
            100% { transform: translateY(0px) scaleY(1) scaleX(1); }
          }

          @keyframes bearGaze {
            0% { transform: translateX(-4px); }
            25% { transform: translateX(-1px); }
            50% { transform: translateX(4px); }
            75% { transform: translateX(1px); }
            100% { transform: translateX(-4px); }
          }
        `}
      </style>

      <svg
        viewBox="0 0 300 300"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id={`bearJelly-${palette}`}
            x1="84"
            y1="56"
            x2="210"
            y2="246"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor={colors.body} />
            <stop offset="0.42" stopColor={colors.bodyMid} />
            <stop offset="1" stopColor={colors.bodyLow} />
          </linearGradient>
          <linearGradient
            id={`earJelly-${palette}`}
            x1="78"
            y1="36"
            x2="114"
            y2="108"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor={colors.body} />
            <stop offset="1" stopColor={colors.ear} />
          </linearGradient>
          <linearGradient
            id={`snoutJelly-${palette}`}
            x1="118"
            y1="122"
            x2="184"
            y2="176"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor={colors.snout} />
          </linearGradient>
          <filter id={`softShadow-${palette}`} x="-20%" y="-20%" width="140%" height="160%">
            <feDropShadow
              dx="0"
              dy="12"
              stdDeviation="12"
              floodColor={colors.shadow}
              floodOpacity="0.18"
            />
          </filter>
        </defs>

        <ellipse
          cx="97"
          cy="82"
          rx="44"
          ry="28"
          fill={`url(#earJelly-${palette})`}
          stroke={colors.outline}
          strokeWidth="4"
          transform="rotate(-22 97 82)"
        />
        <ellipse cx="96" cy="82" rx="18" ry="11" fill={colors.snout} opacity="0.85" transform="rotate(-22 96 82)" />
        <ellipse cx="87" cy="72" rx="11" ry="6" fill="#ffffff" opacity="0.38" transform="rotate(-22 87 72)" />

        <ellipse
          cx="203"
          cy="82"
          rx="44"
          ry="28"
          fill={`url(#earJelly-${palette})`}
          stroke={colors.outline}
          strokeWidth="4"
          transform="rotate(22 203 82)"
        />
        <ellipse cx="204" cy="82" rx="18" ry="11" fill={colors.snout} opacity="0.85" transform="rotate(22 204 82)" />
        <ellipse cx="213" cy="72" rx="11" ry="6" fill="#ffffff" opacity="0.38" transform="rotate(22 213 72)" />

        <g filter={`url(#softShadow-${palette})`}>
          <circle
            cx="150"
            cy="154"
            r="92"
            fill={`url(#bearJelly-${palette})`}
            stroke={colors.outline}
            strokeWidth="4"
          />
        </g>

        <path
          d="M110 92
            C122 80, 136 74, 154 74
            C168 74, 182 78, 192 86"
          fill="none"
          stroke="#ffffff"
          strokeWidth="9"
          strokeLinecap="round"
          opacity="0.38"
        />
        <ellipse cx="118" cy="178" rx="17" ry="10" fill="#ffffff" opacity="0.14" />
        <ellipse cx="182" cy="194" rx="15" ry="9" fill="#ffffff" opacity="0.1" />
        <ellipse cx="150" cy="244" rx="54" ry="13" fill={colors.bodyLow} opacity="0.24" />

        <ellipse cx="112" cy="154" rx="20" ry="13" fill={colors.cheek} opacity="0.78" />
        <ellipse cx="188" cy="154" rx="20" ry="13" fill={colors.cheek} opacity="0.78" />

        <ellipse
          cx="150"
          cy="150"
          rx="36"
          ry="29"
          fill={`url(#snoutJelly-${palette})`}
          stroke={colors.bodyLow}
          strokeWidth="1.5"
          opacity="0.98"
        />
        <ellipse cx="139" cy="140" rx="11" ry="7" fill="#ffffff" opacity="0.3" />

        <g
          style={
            gazeAnimated
              ? {
                  animation: "bearGaze 2.2s ease-in-out infinite",
                  transformOrigin: "150px 126px",
                }
              : undefined
          }
        >
          <circle cx="124" cy="126" r="6.5" fill={colors.outline} />
          <circle cx="176" cy="126" r="6.5" fill={colors.outline} />
        </g>

        <ellipse cx="150" cy="137" rx="8.5" ry="6.8" fill={colors.outline} />

        <path
          d="M150 143 Q144 154 134 154"
          fill="none"
          stroke={colors.outline}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M150 143 Q156 154 166 154"
          fill="none"
          stroke={colors.outline}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
