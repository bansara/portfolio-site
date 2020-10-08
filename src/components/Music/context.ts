export interface Context {
  context: AudioContext;
  audioSource: HTMLAudioElement;
  audioPlayer: MediaElementAudioSourceNode;
  analyser: AnalyserNode;
  masterVol: GainNode;
  id: number;
}

export const createAudioContext = (handleNext: () => void): Context => {
  const context: AudioContext = new AudioContext();
  const masterVol = context.createGain();
  masterVol.connect(context.destination);
  const audioSource: HTMLAudioElement = document.createElement("audio");
  const audioPlayer: MediaElementAudioSourceNode = context.createMediaElementSource(
    audioSource
  );
  audioPlayer.connect(masterVol);

  audioSource.onended = () => {
    handleNext();
  };
  const analyser: AnalyserNode = context.createAnalyser();
  analyser.fftSize = 64;
  audioPlayer.connect(analyser);
  const id: number = Math.random();
  return {
    context,
    audioSource,
    audioPlayer,
    analyser,
    id,
    masterVol,
  };
};
