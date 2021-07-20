var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["30f2b5ba-6f1d-4224-886b-863906897483"],"propsByKey":{"30f2b5ba-6f1d-4224-886b-863906897483":{"name":"diamond","sourceUrl":null,"frameSize":{"x":191,"y":264},"frameCount":1,"looping":true,"frameDelay":12,"version":"GjY_iMgZiEggZt4Y8t84BfRaQsFFbWuC","loadedFromSource":true,"saved":true,"sourceSize":{"x":191,"y":264},"rootRelativePath":"assets/30f2b5ba-6f1d-4224-886b-863906897483.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var thief = createSprite(10,385,10,10)
thief.shapeColor="black"

var laser1=createSprite(298,32,200,5)
laser1.shapeColor="red"
laser1.velocityY=5

var laser2=createSprite(100,310,200,5)
laser2.shapeColor="red"
laser2.velocityY=-5

var diamond=createSprite(380,30)
diamond.setAnimation( "diamond")
diamond.scale=0.3




function draw() {
  background("white")
 createEdgeSprites();
 
 thief.velocityX=0
 thief.velocityX=0
 
 
  thief.bounceOff(edges)
  laser1.bounceOff(edges)
  laser2.bounceOff(edges)
  
  if (keyDown("up")) {
    thief.velocityY=-3
  }
 if (keyDown("down")) {
    thief.velocityY=3
  }
 if (keyDown("right")) {
     thief.velocityX=3
   }
 if (keyDown("left")) {
     thief.velocityX=-3  
  
}
   if (thief.isTouching(diamond)) {
      textSize(20)
      stroke("black")
      text("DIAMON IS CAUGHT!!!",100,200)
      laser1.setVelocity(0,0)
      laser2.setVelocity(0,0)
      thief.setVelocity(0,0)
    }
   if (laser1.isTouching(thief)|| laser2.isTouching(thief)) {
     textSize(20)
     stroke("black")
     text("THIEF IS CAUGHT!!",100,200)
     laser1.setVelocity(0,0)
     laser2.setVelocity(0,0)
     thief.setVelocity(0,0)
     
     }
       
  
  
  
  
  
  
  drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
