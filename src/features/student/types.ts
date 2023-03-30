export type StudentSlice = {
  username: string;
  grade: string;
  id: string;
  gradeUpdatedAt?: Date;
  totalVisitCount: number;
  visitCountOfMonth: number;

  setStudent: (props: {
    username: string;
    grade: string;
    id?: string;
    gradeUpdatedAt: Date;
    totalVisitCount?: number;
    visitCountOfMonth?: number;
  }) => void;
  setStudentId: (id: string) => void;
  setVisitCounts: (props: {
    totalVisitCount: number;
    visitCountOfMonth: number;
  }) => void;
};
