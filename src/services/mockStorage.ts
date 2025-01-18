export interface UploadedDocument {
  id: string;
  name: string;
  url: string;
  type: string;
  uploadedAt: Date;
}

export const mockStorageService = {
  uploadDocument: async (file: File): Promise<UploadedDocument> => {
    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return {
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      url: URL.createObjectURL(file),
      type: file.type,
      uploadedAt: new Date()
    };
  }
};