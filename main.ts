let Test1 = 0
for (let index = 0; index < 2; index++) {
    basic.showString(":)")
    music.setTempo(157)
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(622, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(740, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(622, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Double))
    music.setTempo(250)
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Double))
    music.setTempo(120)
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.setTempo(157)
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(622, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(740, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(622, music.beat(BeatFraction.Whole))
    music.playTone(740, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Double))
    music.setTempo(199)
    music.playTone(740, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(622, music.beat(BeatFraction.Whole))
    music.playTone(740, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(622, music.beat(BeatFraction.Whole))
    music.setTempo(120)
    music.playTone(262, music.beat(BeatFraction.Double))
}
