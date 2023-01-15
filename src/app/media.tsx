import { useEffect, useRef, useState } from "preact/hooks";
import { ImageDimensions, setVideoFromCamera, getImageFromVideo } from "src/lib/media";

export function Media() {
  const [imageData, setImageData] = useState("");
  const [isTakingPhoto, setIsTakingPhoto] = useState(false);
  const [dimensions, setDimensions] = useState<ImageDimensions>({ height: 0, width: 320 });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isTakingPhoto && videoRef.current) {
      setVideoFromCamera(videoRef.current);
    }
  }, [isTakingPhoto]);

  if (isTakingPhoto) {
    const onClickCaptureImage = () => {
      const imageData = getImageFromVideo({ dimensions, video: videoRef.current });
      console.log(imageData);
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

    return (
      <div>
        <video ref={videoRef} {...dimensions} onCanPlay={onCanPlayVideo} />

        <button onClick={onClickCaptureImage}>Take photo</button>

        {imageData && (
          <>
            <img src={imageData} />
            <button onClick={() => setIsTakingPhoto(false)}>save</button>
          </>
        )}
      </div>
    );
  }

  return <button onClick={() => setIsTakingPhoto(true)}>take photo</button>;
}
