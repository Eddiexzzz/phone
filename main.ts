input.onButtonPressed(Button.A, function () {
    if (A == 2) {
        A = 0
    } else {
        A += 1
    }
})
let A = 0
A = 0
music.setVolume(255)
basic.forever(function () {
    if (A == 0) {
        while (A == 0) {
            music.playTone(932, music.beat(BeatFraction.Sixteenth))
            music.playTone(831, music.beat(BeatFraction.Sixteenth))
        }
    } else if (A == 1) {
        music.playTone(784, music.beat(BeatFraction.Sixteenth))
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.playTone(523, music.beat(BeatFraction.Sixteenth))
        basic.clearScreen()
    } else if (A == 2) {
        while (A == 2) {
            music.playTone(988, music.beat(BeatFraction.Whole))
        }
    } else {
    	
    }
})
