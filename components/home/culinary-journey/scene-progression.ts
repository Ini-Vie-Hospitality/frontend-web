const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export function getSceneIndex(progress: number, sceneCount: number) {
  return Math.min(
    Math.floor(clamp(progress, 0, 1) * sceneCount),
    sceneCount - 1,
  );
}
