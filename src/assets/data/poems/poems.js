import { alienCourtship } from "./poemTexts/alien_courtship";
import { andFlourish } from "./poemTexts/and_flourish";
import { artHistory } from "./poemTexts/art_history";
import { badTaste } from "./poemTexts/bad_taste";
import { california } from "./poemTexts/california";
import { cavedIn } from "./poemTexts/caved_in";
import { cloudFloater } from "./poemTexts/cloud_floater";
import { create } from "./poemTexts/create";
import { dethrone } from "./poemTexts/dethrone";
import { escapism } from "./poemTexts/escapism";
import { forest } from "./poemTexts/forest";
import { hibernation } from "./poemTexts/hibernation";
import { laundryDay } from "./poemTexts/laundry_day";
import { lethal } from "./poemTexts/lethal";
import { mindReader } from "./poemTexts/mind_reader";
import { officeHours } from "./poemTexts/office_hours";
import { outTheWindow } from "./poemTexts/out_the_window";
import { paperBoat } from "./poemTexts/paper_boat";
import { reality } from "./poemTexts/reality";
import { releaseMe } from "./poemTexts/release_me";
import { ropes } from "./poemTexts/ropes";
import { sharpshooter } from "./poemTexts/sharpshooter";
import { solarDeath } from "./poemTexts/solar_death";
import { spaceDebris } from "./poemTexts/space_debris";
import { talentless } from "./poemTexts/talentless";
import { theUnnamed } from "./poemTexts/the_unnamed";
import { thrills } from "./poemTexts/thrills";
import { timePeriod } from "./poemTexts/time_period";
import { tooMetaTooLate } from "./poemTexts/too_meta_too_late";
import { underStreetlamps } from "./poemTexts/under_streetlamps";
import { untitled } from "./poemTexts/untitled";
import { untitled2 } from "./poemTexts/untitled_2";
import { vampires } from "./poemTexts/vampires";
export const poems = [
  {
    id: 1,
    img: require("../../images/paperboat.jpg"),
    imgAlt: "paper boat",
    title: "a paper boat and being meta again",
    collection: "about creating",
    color: "yellow",
    text: paperBoat,
  },
  {
    id: 2,
    img: require("../../images/paintings.jpg"),
    imgAlt: "painting",
    title: "oh, and this is from her loss of reality period",
    collection: "about creating",
    color: "yellow",
    text: timePeriod,
  },
  {
    id: 3,
    img: require("../../images/smoke.jpg"),
    imgAlt: "woman smoking",
    title: "too meta, too late",
    collection: "definitely not above board",
    color: "purple",
    text: tooMetaTooLate,
  },
  {
    id: 4,
    img: require("../../images/california.jpg"),
    imgAlt: "palm trees",
    title: "are you feeling california?",
    collection: "drabbles",
    color: "orange",
    text: california,
  },
  {
    id: 5,
    img: require("../../images/stars.jpg"),
    imgAlt: "stars",
    title: "escapism expired",
    collection: "of love, light and dust",
    color: "red",
    text: escapism,
  },
  {
    id: 6,
    img: require("../../images/windows.jpg"),
    imgAlt: "windows",
    title: "i threw the structure out the window",
    collection: "of love, light and dust",
    color: "red",
    text: outTheWindow,
  },
  {
    id: 7,
    img: require("../../images/laundry.jpg"),
    imgAlt: "laundromat",
    title: "laundry day",
    collection: "drabbles",
    color: "orange",
    text: laundryDay,
  },
  {
    id: 8,
    img: require("../../images/alien_heart.jpg"),
    imgAlt: "foil heart",
    title: "alien courtship",
    collection: "of love, light and dust",
    color: "red",
    text: alienCourtship,
  },
  {
    id: 9,
    img: require("../../images/solar.jpg"),
    imgAlt: "solar",
    title: "a solar death (and other nonsense)",
    collection: "of love, light and dust",
    color: "red",
    text: solarDeath,
  },
  {
    id: 10,
    img: require("../../images/archer.jpg"),
    imgAlt: "archer",
    title: "heartthrob sharpshooter",
    collection: "of love, light and dust",
    color: "red",
    text: sharpshooter,
  },
  {
    id: 11,
    img: require("../../images/snake.jpg"),
    imgAlt: "snake",
    title: "lethal",
    collection: "color theory",
    color: "blue",
    text: lethal,
  },
  {
    id: 12,
    img: require("../../images/skull_flower.jpg"),
    imgAlt: "skull flower",
    title: "and flourish",
    collection: "drabbles",
    color: "orange",
    text: andFlourish,
  },

  {
    id: 13,
    img: require("../../images/fire.jpg"),
    imgAlt: "fire",
    title: "caved in",
    collection: "about creating",
    color: "yellow",
    text: cavedIn,
  },
  {
    id: 14,
    img: require("../../images/cloud.jpg"),
    imgAlt: "clouds",
    title: "cloud floater",
    collection: "of love, light and dust",
    color: "red",
    text: cloudFloater,
  },
  {
    id: 15,
    img: require("../../images/desert.jpg"),
    imgAlt: "desert",
    title: "create",
    collection: "about creating",
    color: "yellow",
    text: create,
  },
  {
    id: 16,
    img: require("../../images/forest.jpg"),
    imgAlt: "forest",
    title: "forest pt.1",
    collection: "drabbles",
    color: "orange",
    text: forest,
  },
  {
    id: 17,
    img: require("../../images/hostess.jpg"),
    imgAlt: "yellow dress",
    title: "hibernation / i dream about giving notice",
    collection: "drabbles",
    color: "orange",
    text: hibernation,
  },

  {
    id: 18,
    img: require("../../images/office_hours.jpg"),
    imgAlt: "laptop clock",
    title: "note my office hours",
    collection: "of love, light and dust",
    color: "red",
    text: officeHours,
  },
  {
    id: 19,
    img: require("../../images/siren_sea.jpg"),
    imgAlt: "sea",
    title: "ropes / lies pt.1 ",
    collection: "lies",
    color: "black",
    text: ropes,
  },

  {
    id: 20,
    img: require("../../images/junk.jpg"),
    imgAlt: "junk",
    title: "space debris",
    collection: "color theory",
    color: "blue",
    text: spaceDebris,
  },
  {
    id: 21,
    img: require("../../images/drinking.jpg"),
    imgAlt: "woman drinking",
    title: "talentless",
    collection: "drabbles",
    color: "orange",
    text: talentless,
  },
  {
    id: 22,
    img: require("../../images/tarot.jpg"),
    imgAlt: "tarot cards",
    title: "the unnamed / lies pt. 2",
    collection: "lies",
    color: "black",
    text: theUnnamed,
  },
  {
    id: 23,
    img: require("../../images/thrill.jpg"),
    imgAlt: "bridge jumping",
    title: "thrills / lies pt. 3",
    collection: "lies",
    color: "black",
    text: thrills,
  },
  {
    id: 24,
    img: require("../../images/streetlamp.jpg"),
    imgAlt: "street lamp",
    title: "under some streetlamps, somewhere around midnight",
    collection: "color theory",
    color: "blue",
    text: underStreetlamps,
  },
  {
    id: 25,
    img: require("../../images/loveclub.jpg"),
    imgAlt: "woman next to neon lights",
    title: "untitled",
    collection: "color theory",
    color: "blue",
    text: untitled,
  },
  {
    id: 26,
    img: require("../../images/eye.jpg"),
    imgAlt: "eye",
    title: "untitled pt. 2",
    collection: "color theory",
    color: "blue",
    text: untitled2,
  },
  {
    id: 27,
    img: require("../../images/crown.jpg"),
    imgAlt: "woman taking off crown",
    title: "dethrone",
    collection: "of love, light and dust",
    color: "red",
    text: dethrone,
  },

  {
    id: 28,
    img: require("../../images/house.jpg"),
    imgAlt: "house",
    title: "how's that for art history?",
    collection: "of love, light and dust",
    color: "red",
    text: artHistory,
  },
  {
    id: 29,
    img: require("../../images/locked.jpg"),
    imgAlt: "sword",
    title: "reality is what we make it to be",
    collection: "of love, light and dust",
    color: "red",
    text: reality,
  },
  {
    id: 30,
    img: require("../../images/stairs.jpg"),
    imgAlt: "staircase",
    title: "release me",
    collection: "of love, light and dust",
    color: "red",
    text: releaseMe,
  },
  {
    id: 31,
    img: require("../../images/books.jpg"),
    imgAlt: "books",
    title: "vampires & French books",
    collection: "drabbles",
    color: "orange",
    text: vampires,
  },
  {
    id: 32,
    img: require("../../images/ghost.jpg"),
    imgAlt: "ghost",
    title: "mind reading escapist",
    collection: "drabbles",
    color: "orange",
    text: mindReader,
  },
  {
    id: 33,
    img: require("../../images/lollipop.jpg"),
    imgAlt: "lollipop",
    title: "bad taste",
    collection: "of love, light and dust",
    color: "red",
    text: badTaste,
  },
];
