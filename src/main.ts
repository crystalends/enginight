import { Engine } from "./engine";
import { Example } from "./game/scripts/example";
import { Renderer } from "./renderer";
import "./style.css";
import { Time } from "./time";

const main = document.getElementById("main") as HTMLCanvasElement;

const time = new Time();
const renderer = new Renderer(main, "2d", {
  x: window.innerWidth,
  y: window.innerHeight,
});
const engine = new Engine(time, renderer, [new Example()]);

engine.start();
engine.gameLoop();
