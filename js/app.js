var game_container = querySelector(".game_container");

const CreateCharacterSelection = () => {

  var container = document.createElement("div");

  container.classList.add("container-fluid character_selection_screen");
  game_container.append(container);

  var title_row = document.createElement("div");

  title_row.innerHTML = (
    `<div class='row title_row' >
      <div class='col-4'>
        <img src = './../imgs/arrow.svg' class='rotate-180 go_back_arrow'/>
        <p class='go_back_text'> Home </p>
      </div>
      <div class='col-6'>
        <p class='go_back_title'> Choose Your Character </p>
      </div>


    </div>`
  );

  container.append(title_row);

}



const EmptyContainer = (element) =>{
  //e.firstElementChild can be used.
       var child = element.lastElementChild;

       while (child) {
           element.removeChild(child);
           child = element.lastElementChild;
       }

  }


const GenerateStartScreen = () =>{

    EmptyContainer(game_container);

    const startScreenHTML = `<div class="container-fluid witch_queen_vengence_container">

    <img class="app_background" src = "./assets/imgs/app_background.png" />
    <div class='start_screen'>
        <h1 class="app_title title_ani_1"> Sorcery <strong class="app_title  title_2 ">Arena </strong></h1>
        <p class="app_subtitle"> <strong class="purple">Can You Defeat All the Sorcerers? </p>

    </div>


  </div>`;

  var start_screen = document.querySelector(".start_screen");
  var start_game_button = document.createElement("p");
  start_game_button.classList.add("")
  start_screen.append

  game_container.innerHTML = startScreenHTML;

}
