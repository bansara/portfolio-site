export interface Context {
  context: AudioContext;
  audioSource: HTMLAudioElement;
  audioPlayer: MediaElementAudioSourceNode;
  analyser: AnalyserNode;
  masterVol: GainNode;
  id: number;
}

export const createAudioContext = (): Context => {
  // typescript doesn't recognize webKitAudioContext, but it's necessary for iOS
  // @ts-ignore
  const audioContext = window.AudioContext || window.webkitAudioContext;
  const context: AudioContext = new audioContext();
  const masterVol = context.createGain();
  masterVol.gain.value = 0;
  masterVol.connect(context.destination);
  const audioSource: HTMLAudioElement = document.createElement("audio");
  const audioPlayer: MediaElementAudioSourceNode = context.createMediaElementSource(
    audioSource
  );
  audioPlayer.connect(masterVol);

  // audioSource.onended = () => {
  //   handleNext();
  // };
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
