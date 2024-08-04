const keyframes: Keyframe[] = [
  { transform: "translateX(0%) rotate(0deg)", transformOrigin: "50% 50%" }, // 0%
  { transform: "translateX(-30px) rotate(-6deg)" }, // 15%
  { transform: "translateX(15px) rotate(6deg)" }, // 30%
  { transform: "translateX(-15px) rotate(-3.6deg)" }, // 45%
  { transform: "translateX(9px) rotate(2.4deg)" }, // 60%
  { transform: "translateX(-6px) rotate(-1.2deg)" }, // 75%
  { transform: "translateX(0%) rotate(0deg)", transformOrigin: "50% 50%" }, // 100%
];

const options = {
  duration: 400,
  iterations: 1,
};

export const wooble = { keyframes, options };
