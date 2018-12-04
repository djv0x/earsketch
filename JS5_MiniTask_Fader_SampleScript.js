// javascript code
//
// script_name: MiniTask - Fade In, Fade Out
//
// author: 
//
// description: Create 16 measures of music and use 
// setEffect() to create a fade in and a fade out on 
// at least one track
//

//Setup

init();
setTempo(120);

//Music

fitMedia(EIGHT_BIT_ATARI_PAD_002, 1, 1, 3);
fitMedia(EIGHT_BIT_ATARI_PAD_003, 1, 3, 5);
fitMedia(EIGHT_BIT_ATARI_PAD_002, 1, 5, 7);
fitMedia(EIGHT_BIT_ATARI_PAD_003, 1, 7, 9);
fitMedia(EIGHT_BIT_ATARI_PAD_002, 1, 9, 11);
fitMedia(EIGHT_BIT_ATARI_PAD_003, 1, 11, 17);

fitMedia(EIGHT_BIT_ATARI_SYNTH_005, 2, 6, 8.5);
fitMedia(EIGHT_BIT_ATARI_SYNTH_004, 2, 10, 11);

//Delay Effects

setEffect(1, DELAY, DELAY_TIME, 1000);
setEffect(1, DELAY, DELAY_FEEDBACK, -1.0);
setEffect(1, DELAY, MIX, 0.4);

setEffect(2, VOLUME, GAIN, -13.0);
setEffect(2, DELAY, DELAY_TIME, 500);
setEffect(2, DELAY, DELAY_FEEDBACK, -2.0); 
setEffect(2, DELAY, MIX, .9);

//Fade in/Fade out

setEffect(1, VOLUME, GAIN, -60, 1, 0, 3);
setEffect(1, VOLUME, GAIN, 0, 14, -60, 17);

setEffect(2, VOLUME, GAIN, -60, 1, 0, 9);
setEffect(2, VOLUME, GAIN, 0, 9, -60, 17);

//Finish

finish();