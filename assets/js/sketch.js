function _(selector){
    return document.querySelector(selector);
  }
  function setup(){
    let canvas = createCanvas(500, 400);
    canvas.parent("canvas-wrapper");
    background(255);
  }
  _("#reset-canvas").addEventListener("click", function(){
    background(255);
  });
  _("#save-canvas").addEventListener("click",function(){
    saveCanvas(canvas, "sketch", "png");
  });