import { useState, useCallback } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Upload, Image, X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UploadFile {
  id: string;
  name: string;
  size: string;
  preview: string;
  progress: number;
  status: "uploading" | "done" | "error";
}

const UploadPage = () => {
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const simulateUpload = (file: File) => {
    const id = Math.random().toString(36).slice(2);
    const uploadFile: UploadFile = {
      id,
      name: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
      preview: URL.createObjectURL(file),
      progress: 0,
      status: "uploading",
    };
    setFiles((prev) => [...prev, uploadFile]);

    // Simulate progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setFiles((prev) => prev.map((f) => (f.id === id ? { ...f, progress: 100, status: "done" } : f)));
      } else {
        setFiles((prev) => prev.map((f) => (f.id === id ? { ...f, progress } : f)));
      }
    }, 500);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files).filter((f) =>
      ["image/jpeg", "image/png", "image/webp"].includes(f.type)
    );
    droppedFiles.forEach(simulateUpload);
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      Array.from(e.target.files).forEach(simulateUpload);
    }
  };

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <AppLayout title="Upload">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Drop Zone */}
        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
            isDragging ? "border-primary bg-primary/5 scale-[1.01]" : "border-border/70 hover:border-primary/40"
          }`}
        >
          <input
            type="file"
            multiple
            accept="image/jpeg,image/png,image/webp"
            onChange={handleFileInput}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <div className="space-y-4">
            <div className="w-16 h-16 rounded-2xl gradient-primary mx-auto flex items-center justify-center">
              <Upload className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <p className="text-lg font-heading font-medium">Drop images here or click to browse</p>
              <p className="text-sm text-muted-foreground font-ui mt-1">Supports JPG, PNG, WebP — up to 20MB each</p>
            </div>
          </div>
        </div>

        {/* File List */}
        {files.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-ui font-medium text-muted-foreground">Uploads ({files.length})</h3>
            {files.map((file) => (
              <div key={file.id} className="flex items-center gap-4 p-3 bg-card rounded-xl border border-border/50">
                <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                  <img src={file.preview} alt={file.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-ui font-medium truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{file.size}</p>
                  {file.status === "uploading" && (
                    <div className="mt-1.5 w-full h-1.5 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full gradient-primary rounded-full transition-all duration-300"
                        style={{ width: `${file.progress}%` }}
                      />
                    </div>
                  )}
                </div>
                {file.status === "done" && <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />}
                <Button variant="ghost-muted" size="icon" className="h-8 w-8 flex-shrink-0" onClick={() => removeFile(file.id)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default UploadPage;
