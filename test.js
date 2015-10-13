

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

function preload() {

    //  37x45 is the size of each frame

    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load

   // game.load.spritesheet('hero', 'Full_Sheet.png', 64, 64,5);
game.load.tilemap('setup', 'C:\wamp\www\New folder\Game.json', null, Phaser.Tilemap.TILED_JSON);

    //  Next we load the tileset. This is just an image, loaded in via the normal way we load images:

    game.load.image('tiles', 'C:\wamp\www\New folder\phase-2.png');

}

function create() {
	
	game.stage.backgroundColor = '#787878';

    //  The 'mario' key here is the Loader key given in game.load.tilemap
    map = game.add.tilemap('setup');

    //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
    //  The second parameter maps this name to the Phaser.Cache key 'tiles'
    map.addTilesetImage('phase-2', 'tiles');

    
    //  Creates a layer from the World1 layer in the map data.
    //  A Layer is effectively like a Phaser.Sprite, so is added to the display list.
    layer = map.createLayer('World1');

    //  This resizes the game world to match the layer dimensions
    layer.resizeWorld();
/*
    var hero = game.add.sprite(300, 500, 'hero');

    //  Here we add a new animation called 'walk'
    //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'mummy' sprite sheet
    var walk = hero.animations.add('walk');

    //  And this starts the animation playing by using its key ("walk")
    //  30 is the frame rate (30fps)
    //  true means it will loop when it finishes
    hero.animations.play('walk', 15, true);
*/
}