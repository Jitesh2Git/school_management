"use client";

import { Image } from "lucide-react";
import { useEffect, useState } from "react";

const FileUpload = ({
  label,
  id,
  accept,
  registerProps,
  error,
  maxSize = "10MB",
  allowedTypes = "PNG, JPEG, WEBP, AVIF",
  onReset,
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
      setImagePreview(null);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setImagePreview(null);
    const fileInput = document.getElementById(id);
    if (fileInput) fileInput.value = "";
  };

  useEffect(() => {
    if (onReset) onReset.current = removeFile;
  }, [onReset]);

  return (
    <div className="col-span-full">
      <label htmlFor={id} className="block text-sm/6 font-medium text-copy">
        {label}
      </label>
      <div className="mt-2">
        {imagePreview ? (
          <div className="relative rounded-lg border border-border p-4">
            <div className="flex flex-wrap items-center gap-4">
              <img
                src={imagePreview}
                alt="Preview"
                className="h-20 w-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-copy">
                  {selectedFile?.name}
                </p>
                <p className="text-xs text-copy-light">
                  {(selectedFile?.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
              <button
                type="button"
                onClick={removeFile}
                className="rounded-md bg-secondary px-2.5 py-1.5 text-sm font-semibold text-secondary-content
                border border-border cursor-pointer"
              >
                Remove
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center rounded-lg border-2 border-dashed border-border px-6 py-10">
            <div className="text-center flex flex-wrap items-center gap-2 justify-center">
              <Image className="mx-auto h-12 w-12 text-primary-light stroke-[1.5]" />
              <div className="text-sm/6 text-copy-light">
                <label
                  htmlFor={id}
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-primary"
                >
                  <span>Upload a file</span>
                  <input
                    id={id}
                    type="file"
                    accept={accept}
                    {...registerProps}
                    onChange={(e) => {
                      handleFileChange(e);
                      registerProps.onChange?.(e);
                    }}
                    className="sr-only"
                  />
                </label>
                <p className="text-xs/5 text-copy-light">
                  {allowedTypes} up to {maxSize}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      {error && <p className="mt-2 text-sm text-error">{error.message}</p>}
    </div>
  );
};

export default FileUpload;
