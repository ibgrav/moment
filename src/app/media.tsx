import { useRef, useState } from "preact/hooks";
import { imageData, updateImage } from "src/lib/signals";

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
    <div>
      <input
        type="file"
        className="hidden"
        accept="image/png,image/jpeg"
        key={inputKey}
        ref={inputRef}
        onChange={onChangeFile}
      />

      <button onClick={onClickAddPhoto}>{imageData.value ? "Change" : "Add"} Photo</button>

      {imageData.value && (
        <>
          <button onClick={onClickSavePhoto}>Save Photo</button>
          <img src={imageData.value} />
        </>
      )}
    </div>
  );
}
