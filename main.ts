let Sensor_Value = 0
basic.forever(function () {
    Sensor_Value = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(Sensor_Value)
    // Shows how far the flex sensor bends
    if (Sensor_Value > 965) {
        basic.showIcon(IconNames.Happy)
    } else if (955 < Sensor_Value && Sensor_Value < 965) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
