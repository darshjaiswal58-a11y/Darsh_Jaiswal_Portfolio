import { portfolio } from "@/content/portfolio";
import { chapterProgress } from "@/lib/utils";

type ChapterProgressProps = {
  activeIndex: number;
};

export function ChapterProgress({ activeIndex }: ChapterProgressProps) {
  const active = portfolio.chapters[activeIndex];

  return (
    <aside className="chapter-progress" aria-label="Portfolio chapter progress">
      <span className="chapter-progress__index">{active.index}</span>
      <div className="chapter-progress__track" aria-hidden="true">
        <span style={{ blockSize: chapterProgress(activeIndex, portfolio.chapters.length) }} />
      </div>
      <span className="chapter-progress__total">06</span>
      <span className="chapter-progress__label">{active.label}</span>
    </aside>
  );
}
