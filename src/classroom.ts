export function getNumberOfGrades(grades: number[]): number {
  return grades.length;
}

export function getSumGrades(grades: number[]): number {
  let sum = 0;
  for (let grade of grades) {
    sum += grade;
  }
  return sum;
}

export function getAverageValue(grades: number[]): number {
  if (grades.length === 0) {
    return 0;
  }
  const sum = getSumGrades(grades);
  return sum / grades.length;
}

export function getPassingGrades(grades: number[]): number[] {
  return grades.filter((grade) => grade >= 10);
}

export function getFailingGrades(grades: number[]): number[] {
  return grades.filter((grade) => grade <= 9);
}

export function getRaisedGrades(grades: number[]): number[] {
  return grades.map((grade) => (grade < 20 ? grade + 1 : grade));
}
