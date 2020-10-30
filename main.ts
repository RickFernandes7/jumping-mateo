controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Mateo.vy == 0) {
        Mateo.vy = -123
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.over(true)
})
let Mateo: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`15000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000202000000000000000000000000000000020200000002000000000000000000000000020002020201010102000000000202000002020000000002020201010102000000000000000202020101010102020201010102020202010101010202020101010102020201010102020202010101010202020101010102020201010102`, img`
    . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . 2 2 
    . . . . . . . . . . . . . . . 2 2 . . . 2 
    . . . . . . . . . . . . 2 . 2 2 2 . . . 2 
    . . . . 2 2 . . 2 2 . . . . 2 2 2 . . . 2 
    . . . . . . . 2 2 2 . . . . 2 2 2 2 2 2 2 
    2 2 2 . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.dungeon.hazardLava1,sprites.castle.tileGrass3,sprites.dungeon.collectibleInsignia], TileScale.Sixteen))
scene.setBackgroundColor(6)
Mateo = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(Mateo)
Mateo.startEffect(effects.confetti)
effects.confetti.endScreenEffect()
Mateo.ay = 200
tiles.placeOnTile(Mateo, tiles.getTileLocation(0, 6))
game.onUpdate(function () {
    Mateo.x += controller.dx()
})
