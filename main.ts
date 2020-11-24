basic.forever(function () {
    for (let x = 0; x <= 2; x++) {
        for (let y = 0; y <= x; y++) {
            led.plot(2 + x, 2)
            led.plot(2, 2 + x)
            led.plot(2, 2 - x)
            led.plot(2 - x, 2)
        }
        basic.pause(500)
    }
    basic.clearScreen()
})
