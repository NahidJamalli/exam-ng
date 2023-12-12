export interface ILesson {
  lessonCode: string;
  title: string;
  classNumber: number;
  teacherName: string;
  teacherSurname: string;
}

export type LessonKeys = keyof ILesson;
