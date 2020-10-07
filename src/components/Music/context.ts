export interface Context {
  context: AudioContext;
  audioSource: HTMLAudioElement;
  audioPlayer: MediaElementAudioSourceNode;
  masterVol: GainNode;
  canvas: HTMLCanvasElement;
}

export const createAudioContext = (): Context => {
  const context: AudioContext = new AudioContext();
  const masterVol = context.createGain();
  masterVol.connect(context.destination);
  const audioSource: HTMLAudioElement = document.createElement("audio");
  const audioPlayer: MediaElementAudioSourceNode = context.createMediaElementSource(
    audioSource
  );
  audioPlayer.connect(masterVol);
  const canvas = document.createElement("canvas");
  return {
    context,
    audioSource,
    audioPlayer,
    masterVol,
    canvas,
  };
};
