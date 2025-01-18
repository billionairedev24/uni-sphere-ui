import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { mockStorageService, UploadedDocument } from "@/services/mockStorage";

interface DocumentUploadProps {
  onUploadComplete: (document: UploadedDocument) => void;
  acceptedTypes?: string;
}

export const DocumentUpload = ({ onUploadComplete, acceptedTypes = ".pdf,.doc,.docx" }: DocumentUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setProgress(0);

    try {
      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 10, 90));
      }, 200);

      const document = await mockStorageService.uploadDocument(file);
      
      clearInterval(progressInterval);
      setProgress(100);
      onUploadComplete(document);
      
      toast({
        title: "Document uploaded",
        description: `${file.name} has been uploaded successfully.`
      });
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error uploading your document.",
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="file"
        accept={acceptedTypes}
        onChange={handleFileChange}
        className="hidden"
        id="document-upload"
        disabled={uploading}
      />
      <label htmlFor="document-upload">
        <Button variant="outline" className="w-full" asChild>
          <span>{uploading ? "Uploading..." : "Upload Document"}</span>
        </Button>
      </label>
      {uploading && (
        <Progress value={progress} className="w-full" />
      )}
    </div>
  );
};