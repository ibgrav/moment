import { useEffect, useRef, useState } from "preact/hooks";
import { setVideoFromCamera } from "src/lib/media";
import { imageData, updateImage } from "src/lib/signals";
import { navHeight } from "./nav";

export function Media() {
  const [inputKey] = useState(Date.now());
  const inputRef = useRef<HTMLInputElement>(null);

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
          updateImage(e.target?.result as string);
        });

        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <div
      style={{ height: `${window.innerHeight - navHeight}px` }}
      className="h-screen w-screen flex justify-center items-center fixed top-0 left-0"
    >
      <input
        type="file"
        className="hidden"
        accept="image/png,image/jpeg"
        key={inputKey}
        ref={inputRef}
        onChange={onChangeFile}
      />

      {!imageData.value && (
        <div className="flex flex-col gap-2">
          <span>Upload your best moment of the day!</span>
          <button className="border px-4 py-2 rounded-md" onClick={onClickAddPhoto}>
            Select Photo
          </button>
        </div>
      )}

      {imageData.value && (
        <>
          <button onClick={onClickSavePhoto} className="bg-white absolute bottom-2 left-2 border px-4 py-2 rounded-md">
            Save Photo
          </button>
          <img src={imageData.value} className="h-full w-full object-cover" />
        </>
      )}
    </div>
  );
}
