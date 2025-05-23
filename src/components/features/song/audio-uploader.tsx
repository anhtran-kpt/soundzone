"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Music, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import axios from "axios";

interface AudioUploaderProps {
  onChange: (value: { url: string; duration: number }) => void;
  value: string;
  disabled?: boolean;
  className?: string;
}

export const AudioUploader = ({
  onChange,
  value,
  disabled,
  className,
}: AudioUploaderProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

      const response = await axios.post("/api/upload/audio", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status !== 200) {
        throw new Error("Upload failed");
      }

      const data = response.data.data;
      const uploadedUrl = data.secure_url;
      const duration = data.duration;

      onChange({ url: uploadedUrl, duration: duration });
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
    onChange({ url: "", duration: 0 });
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

export default AudioUploader;
