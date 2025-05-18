"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Music, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { CLOUDINARY } from "@/config/cloudinary";

interface AudioUploadProps {
  onChange: (value: { url: string; duration: string }) => void;
  value: string;
  disabled?: boolean;
  className?: string;
}

export const AudioUpload = ({
  onChange,
  value,
  disabled,
  className,
}: AudioUploadProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    if (!file.type.includes("audio/")) {
      setError("Please upload an audio file");
      return;
    }

    setIsUploading(true);
    setError(null);
    setFileName(file.name);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY.uploadPreset);
      formData.append("folder", CLOUDINARY.folder);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY.cloudName}/${CLOUDINARY.resourceType}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      const uploadedUrl = data.secure_url;
      const audioDuration = data.duration;
      const formattedDuration = formatDuration(audioDuration);

      onChange({ url: uploadedUrl, duration: formattedDuration });
    } catch (err) {
      console.error("Error uploading file:", err);
      setError("Error uploading file. Please try again.");
    } finally {
      setIsUploading(false);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  const handleReset = () => {
    onChange({ url: "", duration: "" });
    setFileName(null);
    setError(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          disabled={disabled || isUploading}
          onClick={() => inputRef.current?.click()}
          className="flex-1"
        >
          {isUploading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Upload Audio
            </>
          )}
        </Button>
        {(value || fileName) && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            disabled={disabled || isUploading}
            onClick={handleReset}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {fileName && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Music className="h-4 w-4" />
          <span className="truncate max-w-[200px]">{fileName}</span>
        </div>
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}

      <input
        type="file"
        accept="audio/*"
        ref={inputRef}
        onChange={handleFileChange}
        className="hidden"
        disabled={disabled || isUploading}
      />
    </div>
  );
};
