export interface ImageDimensions {
  width: number;
  height: number;
}

export interface CaptureImageOpts {
  video: HTMLVideoElement | null;
  dimensions?: ImageDimensions;
}

export function getImageFromVideo({ video, dimensions }: CaptureImageOpts) {
  if (video) {
    const { height, width } = dimensions || { height: 300, width: 300 };

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext("2d")!;
    context.drawImage(video, 0, 0, width, height);

    const data = canvas.toDataURL("image/png");

    canvas.remove();

    return data;
  }

  throw new Error("missing video element");
}

export async function setVideoFromCamera(video: HTMLVideoElement) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    video.srcObject = stream;
    video.play();
    console.log(video);
  } catch (e) {
    console.error(e);
  }
}
