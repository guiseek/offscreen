import { BackgroundControl, GroupControl, PosterCanvas } from "./elements";
import RenderWorker from "./render.worker?worker";
import {
  BackgroundOffscreenCanvas,
  GridOffscreenCanvas,
  GroupTextOffscreenCanvas,
} from "./core";
import "./style.scss";

const config = {
  width: 540,
  height: 540,
  rows: 6,
  cols: 6,
};

const data = {
  backgrounds: [
    "bermuda-circle.svg",
    "dragon-scales.svg",
    "endless-constellation.svg",
    "github-timeline.svg",
    "liquid-cheese.svg",
    "wintery-sunburst.svg",
  ],
};

// const canvas = create("canvas", config);

// const ctx = canvas.getContext("2d");
// if (!ctx) throw `Canvas context`;

const poster = new PosterCanvas();
poster.width = config.width;
poster.height = config.height;

const background = new BackgroundOffscreenCanvas(poster.width, poster.height);

poster.addOffscreen(background);

const group = new GroupTextOffscreenCanvas(poster.width, 180);
group.position.x = 40;
group.position.y = 50;

const control = {
  group: new GroupControl(),
  background: new BackgroundControl(),
};

control.background.onchange = () => {
  const { value } = control.background;
  background.image.src = `background/${value}`;
  poster.execute();
};

control.background.setOptions(...data.backgrounds);

control.group.onchange = () => {
  group.name = control.group.value;
  poster.execute();
};

for (let x = 0; x < config.rows; x++) {
  for (let y = 0; y < config.cols; y++) {
    const offscreen = new GridOffscreenCanvas(
      poster.width / config.rows,
      poster.height / config.cols
    );

    const dx = x * offscreen.width;
    const dy = y * offscreen.width;
    offscreen.position.set(dx, dy);

    poster.addOffscreen(offscreen);
  }
}

poster.addOffscreen(group);

app.append(poster, ...Object.values(control));

/*___   __  __                               ____                          
 / _ \ / _|/ _|___  ___ _ __ ___  ___ _ __  / ___|__ _ _ ____   ____ _ ___ 
| | | | |_| |_/ __|/ __| '__/ _ \/ _ \ '_ \| |   / _` | '_ \ \ / / _` / __|
| |_| |  _|  _\__ \ (__| | |  __/  __/ | | | |__| (_| | | | \ V / (_| \__ \
 \___/|_| |_| |___/\___|_|  \___|\___|_| |_|\____\__,_|_| |_|\_/ \__,_|___/
                                                                           
__        __   _  __        __         _             
\ \      / /__| |_\ \      / /__  _ __| | _____ _ __ 
 \ \ /\ / / _ \ '_ \ \ /\ / / _ \| '__| |/ / _ \ '__|
  \ V  V /  __/ |_) \ V  V / (_) | |  |   <  __/ |   
   \_/\_/ \___|_.__/ \_/\_/ \___/|_|  |_|\_\___|_|*/

// const worker = new RenderWorker()

// console.log(worker);

// worker.onmessage = (ev) => {

// }

// document.fonts.ready.then((ffs) => {
//   for (const font of ffs.entries()) {
//     console.log(font);
//   }
// });

// document.fonts.load("38px Mukta").then((fonts) => {
//   console.log(fonts);
// });
