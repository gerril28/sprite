input.onGesture(Gesture.LogoUp, function () {
    Pic.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    Pic.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.TiltRight, function () {
    Pic.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    Pic.change(LedSpriteProperty.Y, 1)
})
let Pic: game.LedSprite = null
Pic = game.createSprite(2, 2)
