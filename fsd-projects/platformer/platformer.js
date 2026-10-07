$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall
    createPlatform(650,0,10,620, "orange")
    createPlatform(1060,110,10,530, "orange")
    createPlatform(480,120,180,10, "orange")
    createPlatform(650,110,450,10, "orange")
    createPlatform(380,200,100,10, "orange")
    createPlatform(200,120,180,10, "orange")
    createPlatform(0,250,190,10, "orange")
    createPlatform(190,250,10,110, "orange")
    createPlatform(380,315,100,10, "orange")
    createPlatform(200,350,180,10, "orange")
    createPlatform(500,350,60,10, "orange")
    createPlatform(250,620,410,10, "orange")
    createPlatform(950,280,10,680, "orange")
    createPlatform(850,690,100,10, "orange")
    createPlatform(660,560,100,10, "orange")
    createPlatform(850,440,100,10, "orange")
    createPlatform(660,330,100,10, "orange")
    createPlatform(1060,630,120,10, "orange")
    createPlatform(1060,500,120,10, "orange")
    createPlatform(1060,370,120,10, "orange")
    createPlatform(1060,240,120,10, "orange")
    createPlatform(1060,110,120,10, "orange")
    
    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall




    // TODO 3 - Create Collectables
    createCollectable("steve", 420, 170, 0.5, 0.7);
    createCollectable("steve", 520, 320, 0.5, 0.7);
    createCollectable("steve", 350, 580, 0.5, 0.7);
    createCollectable("steve", 550, 700, 0.5, 0.7);
    createCollectable("steve", 900, 400, 0.5, 0.7);
    createCollectable("steve", 1050, 700, 0.5, 0.7);
    createCollectable("steve", 900, 60, 0.5, 0.7);
    createCollectable("steve", 1000, 60, 0.5, 0.7);
    createCollectable("steve", 1100, 60, 0.5, 0.7);
    createCollectable("diamond", 700, 60, 0.5, 0.7);

    
    // TODO 4 - Create Cannons
    createCannon("right", 480, 2400);
    createCannon("right", 330, 2500);
    createCannon("right", 640, 2300);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
