const synth1 = new Tone.PolySynth(Tone.MonoSynth);
const synth2 = new Tone.PolySynth(Tone.DuoSynth);
const bend = new Tone.PitchShift();

let mySelect;
bend.pitch = 0;

synth1.connect(bend);
bend.toDestination();
synth2.connect(bend);
bend.toDestination();

let notes = {
  'a': "C4",
  'w' : "C#4",
  's': "D4",
  'e': "D#4",
  'd': "E4",
  'f': "F4",
  'g': "G4",
  'h': "A4",
  'j' :"B4",
  'k': "C5"
}

function setup() {
  createCanvas(400, 400);

  //creating dropdown
  mySelect = createSelect();
  mySelect.position(100, 100);
  mySelect.option('Mono Synth');
  mySelect.option('Duo Synth');
  mySelect.selected('Mono Synth');

  
  pitchSlider = createSlider (-12, 12, 0, 0.01);
  pitchSlider.position (120,200);
  pitchSlider.mouseMoved(() => bend.pitch = pitchSlider.value());

}

function draw() {
  background(210, 250, 150);
  text("Play A, W, S, E, D, F, G, H, J, and K for keys. Bend pitch with slider.", 25, 150)

}

function keyPressed() {
  if (mySelect.selected() === 'Mono Synth') {
    let playNotes = notes[key];
    synth1.triggerAttackRelease(playNotes, 0.8);
  } else if (mySelect.selected() === 'Duo Synth') {
    let playNotes = notes[key];
    synth2.triggerAttackRelease(playNotes, 0.8);
  }
}