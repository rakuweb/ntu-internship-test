export type StudentSlice = {
  username: string;
  grade: string;
  id: string;
  gradeUpdatedAt?: Date;
  totalVisitCount: number;
  visitCountOfMonth: number;
  registeredAt?: Date;

  setStudent: (props: {
    username: string;
    grade: string;
    id?: string;
    gradeUpdatedAt: Date;
    totalVisitCount?: number;
    visitCountOfMonth?: number;
    registeredAt?: Date;
  }) => void;
  setStudentId: (id: string) => void;
  setVisitCounts: (props: {
    totalVisitCount: number;
    visitCountOfMonth: number;
  }) => void;
};
