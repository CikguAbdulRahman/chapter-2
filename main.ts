input.onButtonPressed(Button.A, function () {
    TANGAN = randint(0, 2)
    if (TANGAN == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        soundExpression.giggle.play()
    } else if (TANGAN == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        soundExpression.happy.play()
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        soundExpression.slide.play()
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(NYAWA)
})
input.onButtonPressed(Button.B, function () {
    NYAWA += -1
    basic.showNumber(NYAWA)
})
let TANGAN = 0
let NYAWA = 0
NYAWA = 3
basic.forever(function () {
    if (NYAWA <= 0) {
        while (true) {
            basic.showIcon(IconNames.Sad)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            soundExpression.sad.play()
        }
    }
})
