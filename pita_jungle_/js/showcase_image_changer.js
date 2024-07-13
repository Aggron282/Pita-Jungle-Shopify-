var left_paper = document.querySelector(".showcase_paper--left");
var right_paper = document.querySelector(".showcase_paper--right");

var images  = [
  {
    left:"bak_new_2.png",
    right:"bak_new.png"
  },
  {
  left:"tea_new.png",
  right:"tea_new_2.png"
  }
]


var counter = 0;

setInterval(()=>{



  left_paper.classList.remove("paper_translate--left");
  right_paper.classList.remove("paper_translate--right");

  left_paper.classList.add("paper_translate--left-backward");
  right_paper.classList.add("paper_translate--right-backward");

  setTimeout(()=>{

      left_paper.setAttribute("src","./imgs/"+images[counter].left);
      right_paper.setAttribute("src","./imgs/"+images[counter].right);


  },600);

  setTimeout(()=>{

      left_paper.classList.remove("paper_translate--left-backward");
      right_paper.classList.remove("paper_translate--right-backward");

      left_paper.classList.add("paper_translate--left");
      right_paper.classList.add("paper_translate--right");

  },1000)


  counter ++;
  if(counter >= images.length){
    counter = 0;
  }





},6000);
