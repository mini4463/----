let 거리_위치 = 0
let 가속도_속도_변환용 = 0
basic.forever(function () {
    거리_위치 = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.MicroSeconds
    )
    basic.showNumber(거리_위치)
    basic.pause(100)
})
basic.forever(function () {
    가속도_속도_변환용 = 0
})
