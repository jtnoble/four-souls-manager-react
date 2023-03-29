import { OpenerPage } from "./components/OpenerPage";
import { CharacterSelector } from "./components/CharacterSelector";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
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
  { key: 11, name: "The Forgotten", eternal: "The Bone", char_img: require("./characters/character_images/b2-the_forgotten.png"), eternal_img: require("./characters/eternal_images/b2-the_bone.png")}
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
