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
    basic.setLedColor(0xff0000)
    basic.showNumber(5)
    basic.showNumber(4)
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("los!")
    music.playMelody("C D E F G A B C5 ", 1193)
    music.playMelody("C D E F G A B C5 ", 1193)
    music.playMelody("C D E F G A B C5 ", 1193)
    music.playMelody("C D E F G A B C5 ", 1193)
    music.playMelody("C D E F G A B C5 ", 1193)
    music.playMelody("C D E F G A B C5 ", 1193)
    basic.turnRgbLedOff()
    basic.setLedColor(0x00ff00)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . # # # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(2000)
    music.playMelody("C5 B A G F E D C ", 9991)
    music.playMelody("C D E F G A B C5 ", 1193)
    music.playMelody("C D E F G A B C5 ", 1193)
    music.playMelody("C D E F G A B C5 ", 1193)
    music.playMelody("C D E F G A B C5 ", 1193)
    music.playMelody("C D E F G A B C5 ", 1193)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . # # # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        `)
    basic.clearScreen()
    basic.turnRgbLedOff()
})
basic.forever(function () {
	
})
