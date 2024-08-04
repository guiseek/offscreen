export const keyframes = [
  { transform: "rotateX(0)" },
  { transform: "rotateX(-360deg)" },
];

// Definindo as opções da animação
const options: KeyframeAnimationOptions = {
  duration: 400,
  easing: "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
  fill: "both",
};

export const flip = { keyframes, options };
