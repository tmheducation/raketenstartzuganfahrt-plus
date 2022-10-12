input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.setLedColor(0xff0000)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . # .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . # .
        # . # # #
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . # .
        # . # # #
        # . # # #
        `)
    basic.showLeds(`
        # . . . .
        # . . # .
        # . # # #
        # . # # #
        # . # # #
        `)
    basic.showLeds(`
        # . . # .
        # . # # #
        # . # # #
        # . # # #
        # . # # #
        `)
    basic.showLeds(`
        # . . # .
        # . # # #
        # # # # #
        # # # # #
        # . # # #
        `)
    music.playMelody("- C - C - C - C ", 120)
    basic.turnRgbLedOff()
    basic.setLedColor(0x00ff00)
    basic.showLeds(`
        # . . # .
        # . # # #
        # # # # #
        # # # # #
        # . # # #
        `)
    basic.showLeds(`
        # . . # .
        # . # # #
        # . # # #
        # . # # #
        # . # # #
        `)
    basic.showLeds(`
        # . # # #
        # . # # #
        # . # # #
        # . # # #
        # . # # #
        `)
    basic.pause(200)
    basic.showLeds(`
        # . # # #
        # . # # #
        # . # # #
        # . # # #
        # . # # #
        `)
    basic.pause(200)
    basic.showLeds(`
        # . # # #
        # . # # #
        # . # # #
        # . # # #
        # . # # #
        `)
    basic.showLeds(`
        # . # # #
        # . # # #
        # . # # #
        # . # # #
        # . . # .
        `)
    basic.showLeds(`
        # . # # #
        # . # # #
        # . # # #
        # . . # .
        # . . . .
        `)
    basic.showLeds(`
        # . # # #
        # . # # #
        # . . # .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # . # # #
        # . . # .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # . . # .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.turnRgbLedOff()
    basic.clearScreen()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
	
})
basic.forever(function () {
	
})
