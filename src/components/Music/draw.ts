export const draw = function (
  canvasCtx: CanvasRenderingContext2D | null,
  height: number | null,
  width: number | null,
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
    // const gr2: CanvasGradient = canvasCtx.createLinearGradient(0, 0, width, 0);
    // gr2.addColorStop(1, "rgb(39, 232, 167)");
    // gr2.addColorStop(0, "rgb(167,39,232)");

    // controls overlay color on each frame
    canvasCtx.fillStyle = "rgb(36, 41, 56)";
    canvasCtx.fillRect(0, 0, width, height);

    const barwidth: number = Math.round(width / bufferLength);
    let barheight: number;
    let x: number = 0;
    // canvasCtx.beginPath();
    for (var i = 0; i < bufferLength; i++) {
      barheight = dataArray[i];
      canvasCtx.fillStyle = gr;
      canvasCtx.strokeStyle = gr;

      // canvasCtx.moveTo(x, height - (barheight / 255) * height);
      // canvasCtx.arc(
      //   x,
      //   height - 10 - (barheight / 255) * height,
      //   10,
      //   0,
      //   2 * Math.PI
      // );
      // canvasCtx.fill();
      canvasCtx.fillRect(
        x,
        height - (barheight / 255) * height,
        barwidth - 1,
        -10
      );

      x += barwidth + 1;
    }
    // canvasCtx.lineTo(width, height);
    // canvasCtx.lineTo(0, height);
    // canvasCtx.fill();
  }
};
