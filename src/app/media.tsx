import { JSX } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import { ImageDimensions, setVideoFromCamera, getImageFromVideo } from "src/lib/media";

export function Media() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputKey] = useState(Date.now());
  const [imageData, setImageData] = useState("");

  const onClickAddPhoto = () => {
    const input = inputRef.current;
    if (input) input.click();
  };

  const onClickSavePhoto = () => {};

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
    <div>
      <input
        type="file"
        className="hidden"
        accept="image/png,image/jpeg"
        key={inputKey}
        ref={inputRef}
        onChange={onChangeFile}
      />

      <button onClick={onClickAddPhoto}>{imageData ? "Change" : "Add"} Photo</button>

      {imageData && (
        <>
          <button onClick={onClickSavePhoto}>Save Photo</button>
          <img src={imageData} />
        </>
      )}
    </div>
  );
}
