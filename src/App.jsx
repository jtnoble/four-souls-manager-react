import { OpenerPage } from "./components/OpenerPage";
import { CharacterSelector } from "./components/CharacterSelector";
import { Routes, Route, HashRouter } from "react-router-dom";
import { CharacterPage } from "./components/CharacterPage";


const characters = [
  { key: 1, name: "Isaac", eternal: "The D6", char_img: require("./characters/character_images/b2-isaac.png"), eternal_img: require("./characters/eternal_images/b2-the_d6.png")},
  { key: 2, name: "Cain", eternal: "Sleight Of Hand", char_img: require("./characters/character_images/b2-cain.png"), eternal_img: require("./characters/eternal_images/b2-sleight_of_hand.png")},
  { key: 3, name: "Blue Baby", eternal: "Forever Alone", char_img: require("./characters/character_images/b2-blue_baby.png"), eternal_img: require("./characters/eternal_images/b2-forever_alone.png")},
  { key: 4, name: "Eden", eternal: "Eden Eternal", char_img: require("./characters/character_images/b2-eden.png"), eternal_img: require("./characters/eternal_images/b2-eden_eternal.png")},
  { key: 5, name: "Eve", eternal: "The Curse", char_img: require("./characters/character_images/b2-eve.png"), eternal_img: require("./characters/eternal_images/b2-the_curse.png")},
  { key: 6, name: "Judas", eternal: "Book Of Belial", char_img: require("./characters/character_images/b2-judas.png"), eternal_img: require("./characters/eternal_images/b2-book_of_belial.png")},
  { key: 7, name: "Lazarus", eternal: "Lazarus' Rags", char_img: require("./characters/character_images/b2-lazarus.png"), eternal_img: require("./characters/eternal_images/b2-lazarus_rags.png")},
  { key: 8, name: "Lilith", eternal: "Incubus", char_img: require("./characters/character_images/b2-lilith.png"), eternal_img: require("./characters/eternal_images/b2-incubus.png")},
  { key: 9, name: "Maggy", eternal: "Yum Heart", char_img: require("./characters/character_images/b2-maggy.png"), eternal_img: require("./characters/eternal_images/b2-yum_heart.png")},
  { key: 10, name: "Samson", eternal: "Blood Lust", char_img: require("./characters/character_images/b2-samson.png"), eternal_img: require("./characters/eternal_images/b2-blood_lust.png")},
  { key: 11, name: "The Forgotten", eternal: "The Bone", char_img: require("./characters/character_images/b2-the_forgotten.png"), eternal_img: require("./characters/eternal_images/b2-the_bone.png")},
  { key: 12, name: "Bum-Bo", eternal: "Bag-O-Trash", char_img: require("./characters/character_images/fsp2-bum_bo-308x420.png"), eternal_img: require("./characters/eternal_images/fsp2-bag_o_trash-308x420.png")},
  { key: 13, name: "Dark Judas", eternal: "Dark Arts", char_img: require("./characters/character_images/fsp2-dark_judas-308x420.png"), eternal_img: require("./characters/eternal_images/fsp2-dark_arts-308x420.png")},
  { key: 14, name: "Guppy", eternal: "Infestation", char_img: require("./characters/character_images/fsp2-guppy-308x420.png"), eternal_img: require("./characters/eternal_images/fsp2-infestation-308x420.png")},
  { key: 15, name: "Whore Of Babylon", eternal: "Gimpy", char_img: require("./characters/character_images/fsp2-whore_of_babylon-308x420.png"), eternal_img: require("./characters/eternal_images/fsp2-gimpy-308x420.png")},
  { key: 16, name: "Apollyon", eternal: "Void", char_img: require("./characters/character_images/g2-apollyon-308x420.png"), eternal_img: require("./characters/eternal_images/g2-void-308x420.png")},
  { key: 17, name: "Azazel", eternal: "Lord Of The Pit", char_img: require("./characters/character_images/g2-azazel-308x420.png"), eternal_img: require("./characters/eternal_images/g2-lord_of_the_pit-308x420.png")},
  { key: 18, name: "The Keeper", eternal: "Wooden Nickel", char_img: require("./characters/character_images/g2-the_keeper-308x420.png"), eternal_img: require("./characters/eternal_images/g2-wooden_nickel-308x420.png")},
  { key: 19, name: "The Lost", eternal: "Holy Mantle", char_img: require("./characters/character_images/g2-the_lost-308x420.png"), eternal_img: require("./characters/eternal_images/g2-holy_mantle-308x420.png")},
  { key: 20, name: "Bethany", eternal: "Book Of Virtues", char_img: require("./characters/character_images/r-bethany-308x420.png"), eternal_img: require("./characters/eternal_images/r-book_of_virtues-308x420.png")},
  { key: 21, name: "Flash Isaac", eternal: "Classic Roller", char_img: require("./characters/character_images/r-flash_isaac-308x420.png"), eternal_img: require("./characters/eternal_images/r-classic_roller-308x420.png")},
  { key: 22, name: "Jacob And Esau", eternal: "Sibling Rivalry", char_img: require("./characters/character_images/r-jacob_and_esau-308x420.png"), eternal_img: require("./characters/eternal_images/r-sibling_rivalry-308x420.png")},
  { key: 23, name: "The Baleful", eternal: "Soulbond", char_img: require("./characters/character_images/r-the_baleful-308x420.png"), eternal_img: require("./characters/eternal_images/r-soulbond-308x420.png")},
  { key: 24, name: "The Benighted", eternal: "Hemoptysis", char_img: require("./characters/character_images/r-the_benighted-308x420.png"), eternal_img: require("./characters/eternal_images/r-hemoptysis-308x420.png")},
  { key: 25, name: "The Broken", eternal: "Spindown Dice", char_img: require("./characters/character_images/r-the_broken-308x420.png"), eternal_img: require("./characters/eternal_images/r-spindown_dice-308x420.png")},
  { key: 26, name: "The Capricious", eternal: "Glitch", char_img: require("./characters/character_images/r-the_capricious-308x420.png"), eternal_img: require("./characters/eternal_images/r-glitch-308x420.png")},
  { key: 27, name: "The Curdled", eternal: "Sumptorium", char_img: require("./characters/character_images/r-the_curdled-308x420.png"), eternal_img: require("./characters/eternal_images/r-sumptorium-308x420.png")},
  { key: 28, name: "The Dauntless", eternal: "Hypercoagulation", char_img: require("./characters/character_images/r-the_dauntless-308x420.png"), eternal_img: require("./characters/eternal_images/r-hypercoagulation-308x420.png")},
  { key: 29, name: "The Deceiver", eternal: "Ceremonial Blade", char_img: require("./characters/character_images/r-the_deceiver-308x420.png"), eternal_img: require("./characters/eternal_images/r-ceremonial_blade-308x420.png")},
  { key: 30, name: "The Deserter", eternal: "Anima Sola", char_img: require("./characters/character_images/r-the_deserter-308x420.png"), eternal_img: require("./characters/eternal_images/r-anima_sola-308x420.png")},
  { key: 31, name: "The Empty", eternal: "Abyss", char_img: require("./characters/character_images/r-the_empty-308x420.png"), eternal_img: require("./characters/eternal_images/r-abyss-308x420.png")},
  { key: 32, name: "The Enigma", eternal: "Flip", char_img: require("./characters/character_images/r-the_enigma-308x420.png"), eternal_img: require("./characters/eternal_images/r-flip-308x420.png")},
  { key: 33, name: "The Fettered", eternal: "Dead Weight", char_img: require("./characters/character_images/r-the_fettered-308x420.png"), eternal_img: require("./characters/eternal_images/r-dead_weight-308x420.png")},
  { key: 34, name: "The Harlot", eternal: "Gello", char_img: require("./characters/character_images/r-the_harlot-308x420.png"), eternal_img: require("./characters/eternal_images/r-gello-308x420.png")},
  { key: 35, name: "The Hoarder", eternal: "Bag Of Crafting", char_img: require("./characters/character_images/r-the_hoarder-308x420.png"), eternal_img: require("./characters/eternal_images/r-bag_of_crafting-308x420.png")},
  { key: 36, name: "The Miser", eternal: "Keeper's Bargain", char_img: require("./characters/character_images/r-the_miser-308x420.png"), eternal_img: require("./characters/eternal_images/r-keepers_bargain-308x420.png")},
  { key: 37, name: "The Savage", eternal: "Berserk", char_img: require("./characters/character_images/r-the_savage-308x420.png"), eternal_img: require("./characters/eternal_images/r-berserk-308x420.png")},
  { key: 38, name: "The Soiled", eternal: "IBS", char_img: require("./characters/character_images/r-the_soiled-308x420.png"), eternal_img: require("./characters/eternal_images/r-ibs-308x420.png")},
  { key: 39, name: "The Zealot", eternal: "Lemegeton", char_img: require("./characters/character_images/r-the_zealot-308x420.png"), eternal_img: require("./characters/eternal_images/r-lemegeton-308x420.png")},
  { key: 40, name: "Abe", eternal: "Possession", char_img: require("./characters/character_images/rwz-abe-308x420.png"), eternal_img: require("./characters/eternal_images/rwz-possession-308x420.png")},
  { key: 41, name: "Ash", eternal: "Ball Of Tumors", char_img: require("./characters/character_images/rwz-ash-308x420.png"), eternal_img: require("./characters/eternal_images/rwz-ball_of_tumors-308x420.png")},
  { key: 42, name: "Baba", eternal: "Is You", char_img: require("./characters/character_images/rwz-baba-308x420.png"), eternal_img: require("./characters/eternal_images/rwz-is_you-308x420.png")},
  { key: 43, name: "Blind Johnny", eternal: "Johnny's Knives", char_img: require("./characters/character_images/rwz-blind_johnny-308x420.png"), eternal_img: require("./characters/eternal_images/rwz-johnnys_knives-308x420.png")},
  { key: 44, name: "Blue Archer", eternal: "Bow And Arrow", char_img: require("./characters/character_images/rwz-blue_archer-308x420.png"), eternal_img: require("./characters/eternal_images/rwz-bow_and_arrow-308x420.png")},
  { key: 45, name: "Boyfriend", eternal: "Girlfriend", char_img: require("./characters/character_images/rwz-boyfriend-308x420.png"), eternal_img: require("./characters/eternal_images/rwz-girlfriend-308x420.png")},
  { key: 46, name: "Bum-Bo The Weird", eternal: "Strange Marble", char_img: require("./characters/character_images/rwz-bum_bo_the_weird-308x420.png"), eternal_img: require("./characters/eternal_images/rwz-strange_marble-308x420.png")},
  { key: 47, name: "Captain Viridian", eternal: "Gravity", char_img: require("./characters/character_images/rwz-captain_viridian-308x420.png"), eternal_img: require("./characters/eternal_images/rwz-gravity-308x420.png")},
  { key: 48, name: "Crewmate", eternal: "Emergency Meeting!", char_img: require("./characters/character_images/rwz-crewmate-308x420.png"), eternal_img: require("./characters/eternal_images/rwz-emergency_meeting-308x420.png")},
  { key: 49, name: "Edmund", eternal: "The Real Left Hand", char_img: require("./characters/character_images/rwz-edmund-308x420.png"), eternal_img: require("./characters/eternal_images/rwz-the_real_left_hand-308x420.png")},
  { key: 50, name: "Guy Spelunky", eternal: "Spelunking Pack", char_img: require("./characters/character_images/rwz-guy_spelunky-308x420.png"), eternal_img: require("./characters/eternal_images/rwz-spelunking_pack-308x420.png")},
  { key: 51, name: "Johnny", eternal: "Football", char_img: require("./characters/character_images/rwz-johnny-308x420.png"), eternal_img: require("./characters/eternal_images/rwz-football-308x420.png")},
  { key: 52, name: "Pink Knight", eternal: "Lollypop", char_img: require("./characters/character_images/rwz-pink_knight-308x420.png"), eternal_img: require("./characters/eternal_images/rwz-lollypop-308x420.png")},
  { key: 53, name: "Psycho Goreman", eternal: "Hunky Boys", char_img: require("./characters/character_images/rwz-psycho_goreman-308x420.png"), eternal_img: require("./characters/eternal_images/rwz-hunky_boys-308x420.png")},
  { key: 54, name: "Salad Fingers", eternal: "Rusty Spoons", char_img: require("./characters/character_images/rwz-salad_fingers-308x420.png"), eternal_img: require("./characters/eternal_images/rwz-rusty_spoons-308x420.png")},
  { key: 55, name: "Steven", eternal: "Lil Steven", char_img: require("./characters/character_images/rwz-steven-308x420.png"), eternal_img: require("./characters/eternal_images/rwz-lil_steven.png")},
  { key: 56, name: "The Knight", eternal: "Focus", char_img: require("./characters/character_images/rwz-the_knight-308x420.png"), eternal_img: require("./characters/eternal_images/rwz-focus-308x420.png")},
  { key: 57, name: "The Silent", eternal: "Ring Of The Snake", char_img: require("./characters/character_images/rwz-the_silent-308x420.png"), eternal_img: require("./characters/eternal_images/rwz-ring_of_the_snake-308x420.png")},
  { key: 58, name: "Yung Venuz", eternal: "Pop Pop!", char_img: require("./characters/character_images/rwz-yung_venuz-308x420.png"), eternal_img: require("./characters/eternal_images/rwz-pop_pop-308x420.png")},
  { key: 59, name: "Tapeworm", eternal: "Pink Proglottid", char_img: require("./characters/character_images/tw-tapeworm-308x420.png"), eternal_img: require("./characters/eternal_images/tw-pink_proglottid-308x420.png")}
  
]

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<OpenerPage />}/>
        <Route exact path='/character_selection' element={<CharacterSelector characters={characters}/>}/>
        <Route exact path='/play' element={<CharacterPage/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
