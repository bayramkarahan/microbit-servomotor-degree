input.onButtonPressed(Button.A, function () {
    derece += 90
    basic.pause(100)
    if (derece == 360) {
        derece = 0
    }
})
input.onButtonPressed(Button.B, function () {
    derece += -90
    basic.pause(100)
    if (derece == -360) {
        derece = 0
    }
})
let derece = 0
derece = 0
basic.forever(function () {
    basic.showNumber(derece)
    pins.servoWritePin(AnalogPin.P0, derece)
})
