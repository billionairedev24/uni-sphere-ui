export interface ApplicationData {
  id: string;
  userId: string;
  department: string;
  status: 'draft' | 'submitted' | 'paid';
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  education: {
    level: string;
    background: string;
  };
  documents: {
    id: string;
    name: string;
    url: string;
  }[];
  statement: string;
  lastUpdated: Date;
}

const applications: ApplicationData[] = [];

export const mockApplicationService = {
  saveProgress: async (data: Partial<ApplicationData>): Promise<ApplicationData> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const existingIndex = applications.findIndex(app => app.id === data.id);
    if (existingIndex >= 0) {
      applications[existingIndex] = {
        ...applications[existingIndex],
        ...data,
        lastUpdated: new Date()
      };
      return applications[existingIndex];
    }

    const newApplication: ApplicationData = {
      id: Math.random().toString(36).substr(2, 9),
      userId: data.userId || '',
      department: data.department || '',
      status: 'draft',
      personalInfo: data.personalInfo || {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      },
      education: data.education || {
        level: '',
        background: ''
      },
      documents: data.documents || [],
      statement: data.statement || '',
      lastUpdated: new Date()
    };
    
    applications.push(newApplication);
    return newApplication;
  },

  getApplication: async (userId: string, department: string): Promise<ApplicationData | null> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return applications.find(app => app.userId === userId && app.department === department) || null;
  }
};