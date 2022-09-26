input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
    basic.clearScreen()
    basic.showNumber(randint(0, 12))
})
