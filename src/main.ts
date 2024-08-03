import {
  FormGroup,
  GroupControl,
  PosterCanvas,
  BackgroundControl,
  DateControl,
} from "./elements";
import {
  GridOffscreenCanvas,
  GroupLogoOffscreenCanvas,
  GroupTextOffscreenCanvas,
  BackgroundOffscreenCanvas,
  IconOffscreenCanvas,
  RowOffscreenCanvas,
} from "./core";
import "./style.scss";
import { Data } from "./interfaces";

const config = {
  width: 540,
  height: 540,
  rows: 6,
  cols: 6,
  get row() {
    return this.width / this.rows;
  },
  get col() {
    return this.height / this.cols;
  },
};

const control = {
  group: new GroupControl(),
  background: new BackgroundControl(),
  date: new DateControl()
};

control.background.setOptions(
  ["Bermuda circle", "background/bermuda-circle-shadow.svg"],
  ["Dragon scales", "background/dragon-scales.svg"],
  ["Endless constellation", "background/endless-constellation.svg"],
  ["Github timeline", "background/github-timeline-shadow.svg"],
  ["Liquid cheese", "background/liquid-cheese.svg"],
  ["Wintery sunburst", "background/wintery-sunburst-shadow.svg"]
);

control.group.setOptions(
  ["NodeJS", "group/NodeJS.svg"],
  ["php", "group/php.svg"],
  ["Rust", "group/Rust.svg"],
  ["TypeScript", "group/TypeScript.svg"]
);

const form = new FormGroup<Data>();

form.addControl(control.group, control.background, control.date);

const poster = new PosterCanvas();
poster.width = config.width;
poster.height = config.height;

const background = new BackgroundOffscreenCanvas(poster.width, poster.height);

const grid = new GridOffscreenCanvas(poster.width, poster.height);

const groupLogo = new GroupLogoOffscreenCanvas(config.col, config.row);
groupLogo.position.x = 10;
groupLogo.position.y = 10;

const groupText = new GroupTextOffscreenCanvas(config.col * 5, config.row);
groupText.position.x = 55;
groupText.position.y = 35;

const iconCalendar = new IconOffscreenCanvas(24, 24);
iconCalendar.position.x = 0;
iconCalendar.position.x = config.col / 3;
iconCalendar.image.src = "icons/calendar.svg";

const iconClock = new IconOffscreenCanvas(24, 24);
iconClock.position.x = 0;
iconClock.position.x = config.col * 1.6;
iconClock.image.src = "icons/clock.svg";

const iconPin = new IconOffscreenCanvas(24, 24);
iconPin.position.x = 0;
iconPin.position.x = config.col * 2.6;
iconPin.image.src = "icons/pin.svg";

const row5 = new RowOffscreenCanvas(config.width, config.row);
row5.position.x = 0;
row5.position.y = config.row * 5;

row5.addOffscreen(iconCalendar, iconClock, iconPin);

console.log(config);

poster.addOffscreen(background, grid, groupLogo, groupText, row5);

const keyFrames: Keyframe[] = [
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

form.onchange = () => {
  const value = form.getValue();

  const animation = poster.animate(keyFrames, options);

  background.image.src = value.background;
  groupLogo.image.src = value.group;
  groupText.text = control.group.normalizeName(value.group);

  poster.execute();

  animation.onfinish = () => {};
};

addEventListener("DOMContentLoaded", () => {
  console.log(form.getValue());

  Promise.all([
    // document.fonts.load("48px Mukta"),
    document.fonts.load("200 48px Mukta"),
    document.fonts.load("300 48px Mukta"),
    document.fonts.load("400 48px Mukta"),
    document.fonts.load("500 48px Mukta"),
    document.fonts.load("600 48px Mukta"),
    document.fonts.load("700 48px Mukta"),
    document.fonts.load("800 48px Mukta"),
  ]).then(() => {
    const value = form.getValue();
    background.image.src = value.background;
    groupLogo.image.src = value.group;
    groupText.text = control.group.normalizeName(value.group);
    poster.execute();
  });
});

// control.group.onchange = () => {
//   const option = control.group.options[control.group.selectedIndex];
//   console.log(option);

//   groupText.text = option.text;
//   groupLogo.image.src = option.value;
//   console.log(option.value);

//   poster.execute();
// };

// for (let x = 0; x < config.rows; x++) {
//   for (let y = 0; y < config.cols; y++) {
//     const offscreen = new GridOffscreenCanvas(
//       poster.width / config.rows,
//       poster.height / config.cols
//     );

//     const dx = x * offscreen.width;
//     const dy = y * offscreen.width;
//     offscreen.position.set(dx, dy);

//     poster.addOffscreen(offscreen);
//   }
// }

app.append(poster, form);

if ("fonts" in document) {
  Promise.all([
    // document.fonts.load("48px Mukta"),
    document.fonts.load("200 48px Mukta"),
    document.fonts.load("300 48px Mukta"),
    document.fonts.load("400 48px Mukta"),
    document.fonts.load("500 48px Mukta"),
    document.fonts.load("600 48px Mukta"),
    document.fonts.load("700 48px Mukta"),
    document.fonts.load("800 48px Mukta"),
    // document.fonts.load("48px Mukta"),
    // document.fonts.load("200 48px Mukta"),
    // document.fonts.load("italic 48px Mukta"),
    // document.fonts.load("italic 200 48px Mukta"),
    // document.fonts.load("300 48px Mukta"),
    // document.fonts.load("italic 300 48px Mukta"),
    // document.fonts.load("400 48px Mukta"),
    // document.fonts.load("italic 400 48px Mukta"),
    // document.fonts.load("500 48px Mukta"),
    // document.fonts.load("italic 500 48px Mukta"),
    // document.fonts.load("600 48px Mukta"),
    // document.fonts.load("italic 600 48px Mukta"),
    // document.fonts.load("700 48px Mukta"),
    // document.fonts.load("italic 700 48px Mukta"),
    // document.fonts.load("800 48px Mukta"),
    // document.fonts.load("italic 800 48px Mukta"),
  ]).then((_) => {
    console.log(_.flat().length);

    document.documentElement.classList.add("fonts-loaded");
  });
  //   _ => () {
  //   document.documentElement.classList.add('fonts-loaded')
  // })
}

// let currentThread: "main" | "worker" = "main";
// let isAnimating = false; // start with animation stopped
// let isSlow = false;
// let worker: Worker | null = null;
// let canvas: HTMLCanvasElement;

// interface InitMessage {
//   msg: "init";
//   canvas?: OffscreenCanvas;
// }

// interface SlowMessage {
//   msg: "slow";
//   shouldSlow: boolean;
// }

// function animateOnWorker() {
//   init();

//   const offscreenCanvas = (canvas as any).transferControlToOffscreen();
//   worker = new Worker(new URL("./worker.ts", import.meta.url), {
//     type: "module",
//   });

//   const initMessage: InitMessage = { msg: "init", canvas: offscreenCanvas };
//   worker.postMessage(initMessage, [offscreenCanvas]);
// }

// function animateOnMain() {
//   init();
//   const initMessage: InitMessage = { msg: "init" };
//   window.postMessage(initMessage, "*");
// }

// function init() {
//   stopAnimation();

//   document.getElementById("canvas-container")!.innerHTML =
//     '<canvas id="canvas"></canvas>';
//   canvas = document.getElementById("canvas") as HTMLCanvasElement;
//   canvas.width = canvas.clientWidth;
//   canvas.height = canvas.clientHeight;

//   (window as any).canvas = canvas;

//   tickTimer();
// }

// function setThread(thread: "main" | "worker") {
//   currentThread = thread;

//   if (currentThread === "main") {
//     animateOnMain();
//   } else if (currentThread === "worker") {
//     animateOnWorker();
//   }

//   toggleSlow(false);

//   document.querySelector("#toggle-thread")!.innerHTML =
//     currentThread === "main" ? "Worker" : "Main";
//   document.querySelector("#canvas-info .thread")!.innerHTML = currentThread;
// }

// function toggleThread() {
//   if (typeof currentThread !== "undefined" && currentThread === "main") {
//     setThread("worker");
//   } else {
//     setThread("main");
//   }
// }

// function toggleAnimation() {
//   isAnimating = !isAnimating;

//   if (isAnimating) {
//     setThread(currentThread);
//   } else {
//     stopAnimation();
//   }

//   document.querySelector("#toggle-animation")!.innerHTML = isAnimating
//     ? "Stop"
//     : "Start";
// }

// function stopAnimation() {
//   if (worker) {
//     worker.terminate();
//     worker = null;
//   }

//   [window.canvasRafId, window.timerRafId].forEach(
//     (rafId: number | undefined) => {
//       if (rafId) {
//         window.cancelAnimationFrame(rafId);
//       }
//     }
//   );
// }

// function toggleSlow(shouldSlow?: boolean) {
//   isSlow = typeof shouldSlow === "boolean" ? shouldSlow : !isSlow;

//   const slowMessage: SlowMessage = { msg: "slow", shouldSlow: isSlow };

//   if (worker) {
//     worker.postMessage(slowMessage);
//   } else {
//     slow(isSlow);
//   }

//   document.querySelector("#toggle-slow")!.innerHTML = isSlow
//     ? "Unslow"
//     : "Slow";
//   document.querySelector("#canvas-info .slow")!.innerHTML = isSlow
//     ? "(slow)"
//     : "";
// }

// const timeEl = document.getElementById("time")!;
// function tickTimer() {
//   timeEl.innerText = Date.now().toString();
//   (window as any).timerRafId = window.requestAnimationFrame(tickTimer);
// }

// if (typeof window.OffscreenCanvas !== "function") {
//   document.getElementById("unsupported-warning")!.style.display = "";
//   document
//     .getElementById("toggle-thread")!
//     .setAttribute("disabled", "disabled");
// }

// declare global {
//   interface Window {
//     canvasRafId: number;
//     timerRafId: number;
//   }
// }

// function slow(isSlow: boolean) {
//   if (isSlow) {
//     console.log("Main thread slowed down");
//   } else {
//     console.log("Main thread normal speed");
//   }
// }

// window.addEventListener("DOMContentLoaded", () => {
//   document
//     .getElementById("toggle-thread")!
//     .addEventListener("click", toggleThread);
//   document
//     .getElementById("toggle-animation")!
//     .addEventListener("click", toggleAnimation);
//   document
//     .getElementById("toggle-slow")!
//     .addEventListener("click", () => toggleSlow());
// });

// export {};
