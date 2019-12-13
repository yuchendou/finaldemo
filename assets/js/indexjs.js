

var slideindex,slides,dots,captiontext;
function initgallery(){
  slideindex=0;
  slides=document.getElementsByClassName("imageholder");
  slides[slideindex].style.opacity=1;

  captiontext=document.querySelector(".captionholder .captiontext")
  captiontext.innerText=slides[slideindex].querySelector(".captiontext").innerText;

  dots=[];
  var dotscontainer=document.getElementById("dotscontainer");

  for(var i=0; i<slides.length;i++)
  {
    var dot=document.createElement("span");
    dot.classList.add("dots");
    
    dotscontainer.append(dot);
    dots.push(dot);
  }
  dots[slideindex].classList.add("active");

}
initgallery();
function plusSlides(n)
{
  moveslide(slideindex+n);
}

function moveslide(n)
{
  var i,current,next;
  var moveslideanimclass={
    forcurrent:"",
    fornext:""
  }
  var slidetextanimclass;
  if(n>slideindex)
  {
    if(n>=slides.length){n=0}
    moveslideanimclass.forcurrent="moveleftcurrentslide";
    moveslideanimclass.fornext="moveleftnextslide";
    slidetextanimclass="slidetextfromtop";
  }
  else if(n<slideindex)
  {
    if(n<0){
      n=slides.length-1
    }
    moveslideanimclass.forcurrent="moverighttcurrentslide";
    moveslideanimclass.fornext="moverightnextslide";  
    slidetextanimclass="slidetextfrombutton";
  }
  if(n!=slideindex)
  {
    next=slides[n];
    current=slides[slideindex];
    for(i=0;i<slides.length;i++)
    {
      slides[i].className="imageholder";
      slides[i].style.opacity=0;
      dots[i].classList.remove("active");
    }
    current.classList.add(moveslideanimclass.forcurrent);
    next.classList.add(moveslideanimclass.fornext);
    dots[n].classList.add("active");
    slideindex=n;
  }
  captiontext.style.display="none";
  captiontext.className="captiontext" + slidetextanimclass;
  captiontext.innerText= slides[n].querySelector(".captiontext").innerText;
  captiontext.style.display="block";


}
var timer=null;
function settimer()
{
  timer=setInterval(function()
    {plusSlides(1);}
    ,3000)
}  
settimer();

function playpauseslide()
{
  var playpbutton=document.getElementById("playpbutton");
  if(timer==null)
  {
    settimer();
    playpbutton.style.backgroundPosition="0px";
  }
  else{
    clearInterval(timer);
    timer=null;
    playpbutton.style.backgroundPositionY="-33px";
  }
}