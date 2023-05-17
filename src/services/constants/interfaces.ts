export interface ProblemCategoryItem {
  title: string;
  categoryId: string;
  details: string;
  enableStatus: boolean;
  bg: string;
  titleColor: string;
}

export interface ProblemItem {
  categoryId: string;
  problemId: string;
  title: string;
  tags: string[];
  level: string;
  target: string[];
  description: string;
}
