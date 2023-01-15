import { JSX } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import { ImageDimensions, setVideoFromCamera, getImageFromVideo } from "src/lib/media";

export function Media() {
  const [inputKey, setInputKey] = useState(Date.now());
  const [imageData, setImageData] = useState("");
  const [isTakingPhoto, setIsTakingPhoto] = useState(false);
  const [dimensions, setDimensions] = useState<ImageDimensions>({ height: 0, width: 320 });
  const videoRef = useRef<HTMLVideoElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isTakingPhoto && videoRef.current) {
      setVideoFromCamera(videoRef.current);
    }
  }, [isTakingPhoto]);

  const onClickUseCamera = () => {
    setIsTakingPhoto(true);
    if (inputRef.current) {
      inputRef.current.files = null;
      setInputKey(Date.now());
    }
  };

  const onClickCaptureImage = () => {
    const imageData = getImageFromVideo({ dimensions, video: videoRef.current });
    setImageData(imageData);
  };

  const onCanPlayVideo = () => {
    const video = videoRef.current;

    if (video) {
      setDimensions(({ width }) => {
        const height = video.videoHeight / (video.videoWidth / width);
        return { height, width };
      });
    }
  };

  const onChangeFile = () => {
    const input = inputRef.current;

    if (input) {
      const file = input.files?.[0];
      if (file) {
        const reader = new FileReader();

        reader.addEventListener("load", (e) => {
          const imageData = e.target?.result as string;
          setImageData(imageData);
        });

        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <input key={inputKey} ref={inputRef} type="file" accept="image/png, image/jpeg" onChange={onChangeFile} />

      <button onClick={onClickUseCamera}>Use Camera</button>

      {isTakingPhoto && (
        <>
          <video ref={videoRef} {...dimensions} onCanPlay={onCanPlayVideo} />
          <button onClick={onClickCaptureImage}>CAPTURE</button>
        </>
      )}

      {imageData && (
        <>
          <img src={imageData} />
          <button onClick={() => setIsTakingPhoto(false)}>save</button>
        </>
      )}
    </div>
  );
}
