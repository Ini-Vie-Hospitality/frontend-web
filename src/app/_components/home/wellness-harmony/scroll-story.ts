const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const HOLD_VIEWPORTS = 0.45;
const TRANSITION_VIEWPORTS = 0.6;

export function getScrollProgress(sectionTop: number, scrollDistance: number) {
  if (scrollDistance <= 0) return 0;
  return clamp(-sectionTop / scrollDistance, 0, 1);
}

export function getExperienceFrame(progress: number, itemCount: number) {
  const lastIndex = Math.max(itemCount - 1, 0);
  if (lastIndex === 0) return { activeIndex: 0, position: 0 };

  const timelineUnits = itemCount * HOLD_VIEWPORTS
    + lastIndex * TRANSITION_VIEWPORTS;
  let timelinePosition = clamp(progress, 0, 1) * timelineUnits;

  for (let index = 0; index <= lastIndex; index += 1) {
    if (timelinePosition <= HOLD_VIEWPORTS || index === lastIndex) {
      return { activeIndex: index, position: index };
    }

    timelinePosition -= HOLD_VIEWPORTS;
    if (timelinePosition <= TRANSITION_VIEWPORTS) {
      const transitionProgress = timelinePosition / TRANSITION_VIEWPORTS;
      const position = index + transitionProgress;

      return {
        activeIndex: clamp(
          Math.round(position + Number.EPSILON * 4),
          0,
          lastIndex,
        ),
        position,
      };
    }

    timelinePosition -= TRANSITION_VIEWPORTS;
  }

  return { activeIndex: lastIndex, position: lastIndex };
}

export function getStoryHeight(viewportHeight: number, itemCount: number) {
  if (itemCount <= 1) return viewportHeight;
  const transitions = Math.max(itemCount - 1, 0);
  const timelineUnits = itemCount * HOLD_VIEWPORTS
    + transitions * TRANSITION_VIEWPORTS;
  return viewportHeight + timelineUnits * viewportHeight;
}
