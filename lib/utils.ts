export function chapterProgress(index: number, count: number) {
  return `${Math.round((index / (count - 1)) * 100)}%`;
}
