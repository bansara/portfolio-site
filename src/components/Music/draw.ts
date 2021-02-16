export const draw = function (
  canvasCtx: CanvasRenderingContext2D | null,
  height: number | null | undefined,
  width: number | null | undefined,
  analyser: AnalyserNode,
  dataArray: Uint8Array,
  bufferLength: number,
  playing: boolean
) {
  if (canvasCtx && height && width && canvasCtx && playing) {
    analyser.getByteFrequencyData(dataArray);
    const gr: CanvasGradient = canvasCtx.createLinearGradient(0, 0, width, 0);
    gr.addColorStop(0, "rgb(39, 232, 167)");
    gr.addColorStop(1, "rgb(167,39,232)");

    // clear canvas on each frame
    canvasCtx.clearRect(0, 0, width, height);

    const barwidth: number = Math.round(width / bufferLength);
    let barheight: number;
    let x: number = 0;
    for (var i = 0; i < bufferLength; i++) {
      barheight = dataArray[i];
      canvasCtx.fillStyle = gr;
      canvasCtx.strokeStyle = gr;

      canvasCtx.fillRect(
        x,
        height - (barheight / 255) * height,
        barwidth - 1,
        height
      );

      x += barwidth + 1;
    }
  }
};
