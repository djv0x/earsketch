// javascript code
//
// script_name: MiniTask - Delay Effect
//
// author: 
//
// description: Create 8 measures of music 
// and use setEffect() to add a delay effect 
// to at least one track and to set the delay 
// time on the effect.
//

//Setup

init();
setTempo(120);

//Music

fitMedia(EIGHT_BIT_ATARI_PAD_002, 1, 1, 3);
fitMedia(EIGHT_BIT_ATARI_PAD_003, 1, 3, 5);
fitMedia(EIGHT_BIT_ATARI_PAD_002, 1, 5, 7);
fitMedia(EIGHT_BIT_ATARI_PAD_003, 1, 7, 9);
fitMedia(EIGHT_BIT_ATARI_SYNTH_005, 2, 2, 4.5);
fitMedia(EIGHT_BIT_ATARI_SYNTH_004, 2, 6, 7);

//Delay/Echo

setEffect(1, DELAY, DELAY_TIME, 1000);
setEffect(1, DELAY, DELAY_FEEDBACK, -1.0);
setEffect(1, DELAY, MIX, 0.4);

setEffect(2, VOLUME, GAIN, -13.0);
setEffect(2, DELAY, DELAY_TIME, 500);
setEffect(2, DELAY, DELAY_FEEDBACK, -2.0); 
setEffect(2, DELAY, MIX, .9);

//Finish

finish();