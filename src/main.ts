import {
  GroupLogoOffscreenCanvas,
  GroupTextOffscreenCanvas,
  BackgroundOffscreenCanvas,
  IconOffscreenCanvas,
  RowOffscreenCanvas,
  DateTextOffscreenCanvas,
  TimeTextOffscreenCanvas,
  GridOffscreenCanvas,
} from "./core";
import {
  FormGroup,
  GroupControl,
  PosterCanvas,
  BackgroundControl,
  DateControl,
  TimeControl,
  PlaceControl,
} from "./elements";
import "./style.scss";
import { Data } from "./interfaces";
import { formValue } from "./utils";
import { wooble } from "./animations";

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
  backgrounds: [
    ["Github timeline", "background/github-timeline-shadow.svg"],
    ["Bermuda circle", "background/bermuda-circle-shadow.svg"],
    ["Dragon scales", "background/dragon-scales.svg"],
    ["Endless constellation", "background/endless-constellation.svg"],
    ["Liquid cheese", "background/liquid-cheese.svg"],
    ["Wintery sunburst", "background/wintery-sunburst-shadow.svg"],
  ],
  groups: [
    ["NodeJS", "NodeJS"],
    ["php", "php"],
    ["Rust", "Rust"],
    ["TypeScript", "TypeScript"],
  ],
};

/**
 *  _____                       ____            _             _
 * |  ___|__  _ __ _ __ ___    / ___|___  _ __ | |_ _ __ ___ | |___
 * | |_ / _ \| '__| '_ ` _ \  | |   / _ \| '_ \| __| '__/ _ \| / __|
 * |  _| (_) | |  | | | | | | | |__| (_) | | | | |_| | | (_) | \__ \
 * |_|  \___/|_|  |_| |_| |_|  \____\___/|_| |_|\__|_|  \___/|_|___/
 *
 */

const control = {
  group: new GroupControl(),
  background: new BackgroundControl(),
  date: new DateControl(),
  time: new TimeControl(),
  place: new PlaceControl(),
};

control.background.setOptions(...config.backgrounds);
control.group.setOptions(...config.groups);

const form = new FormGroup<Data>();

form.addControl(
  control.group,
  control.background,
  control.date,
  control.time,
  control.place
);

/**
 *   ___   __  __                               ____
 *  / _ \ / _|/ _|___  ___ _ __ ___  ___ _ __  / ___|__ _ _ ____   ____ _ ___
 * | | | | |_| |_/ __|/ __| '__/ _ \/ _ \ '_ \| |   / _` | '_ \ \ / / _` / __|
 * | |_| |  _|  _\__ \ (__| | |  __/  __/ | | | |__| (_| | | | \ V / (_| \__ \
 *  \___/|_| |_| |___/\___|_|  \___|\___|_| |_|\____\__,_|_| |_|\_/ \__,_|___/
 *
 */

/**
 * Poster
 */
const poster = new PosterCanvas();
poster.width = config.width;
poster.height = config.height;

const background = new BackgroundOffscreenCanvas(poster.width, poster.height);

/**
 * Group
 */
const groupLogo = new GroupLogoOffscreenCanvas(config.col, config.row);
groupLogo.position.x = 10;
groupLogo.position.y = 10;

const groupText = new GroupTextOffscreenCanvas(config.col * 5, config.row);
groupText.position.x = 55;
groupText.position.y = 35;

/**
 * Date
 */
const dateIcon = new IconOffscreenCanvas(24, 24);
dateIcon.position.x = 20;
dateIcon.position.y = config.col / 8;
dateIcon.image.src = "icons/calendar.svg";

const dateText = new DateTextOffscreenCanvas(config.col * 3, config.row);
dateText.position.x = config.col / 3;
dateText.position.y = config.row / 8;
dateText.text = new Date().toLocaleDateString();

/**
 * Time
 */
const timeIcon = new IconOffscreenCanvas(24, 24);
timeIcon.position.x = 0;
timeIcon.position.x = config.col * 1.6;
timeIcon.image.src = "icons/clock.svg";

const timeText = new TimeTextOffscreenCanvas(config.col * 3, config.row);
timeText.position.x = config.col * 2;
timeText.position.y = config.col / 4;
timeText.text = new Date().toLocaleDateString();

/**
 * Place
 */
const placeIcon = new IconOffscreenCanvas(24, 24);
placeIcon.position.x = 0;
placeIcon.position.x = config.col * 2.6;
placeIcon.image.src = "icons/pin.svg";

const placeText = new DateTextOffscreenCanvas(config.col * 2, config.row);
placeText.position.x = config.col * 1;
placeText.position.y = config.col / 4;
placeText.text = "";

const row5 = new RowOffscreenCanvas(config.width, config.row);
row5.position.x = 0;
row5.position.y = config.row * 4;

row5.addOffscreen(dateIcon, dateText, timeIcon, timeText, placeIcon, placeText);

const grid = new GridOffscreenCanvas(config.width, config.height)

poster.addOffscreen(background, groupLogo, groupText, row5, grid);

const updateOffscreens = (data: Data) => {
  console.table(data)

  background.image.src = data.background;

  groupLogo.image.src = `group/${data.group}.svg`;
  groupText.text = data.group

  dateIcon.image.src = "icons/calendar.svg";
  timeIcon.image.src = "icons/clock.svg";
  placeIcon.image.src = "icons/pin.svg";

  dateText.text = data.date;
  timeText.text = data.time;
  placeText.text = data.place;
};

form.onchange = () => {
  updateOffscreens(formValue(form));

  const { keyFrames, options } = wooble;
  poster.animate(keyFrames, options);

  poster.execute();
};

form.onsubmit = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

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
  ]).then((_) => {
    document.documentElement.classList.add("fonts-loaded");

    updateOffscreens(formValue(form));

    const { keyFrames, options } = wooble;
    poster.animate(keyFrames, options);
  
    poster.execute();
  });
}
