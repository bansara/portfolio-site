export interface Track {
  src: string;
  title: string;
}

const arenaSrc: string = require("./arena.mp3");
const dropletsSrc: string = require("./droplets-remix.mp3");
const mandalaSrc: string = require("./mandala.mp3");
const ragaSrc: string = require("./raga-hemavati.mp3");

const arena: Track = {
  src: arenaSrc,
  title: "Arena",
};
const droplets: Track = {
  src: dropletsSrc,
  title: "Droplets (Remix)",
};
const mandala: Track = {
  src: mandalaSrc,
  title: "Mandala Live@COSM 2/8/20",
};
const raga: Track = {
  src: ragaSrc,
  title: "Raga Hemavati Live@Alpaca 8/24/19",
};

export const tracks: Track[] = [arena, droplets, mandala, raga];
