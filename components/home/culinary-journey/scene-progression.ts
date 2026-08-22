const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export function getSceneIndex(progress: number, sceneCount: number) {
  return Math.min(
    Math.floor(clamp(progress, 0, 1) * sceneCount),
    sceneCount - 1,
  );
}

export function getDesktopDestinationIndexes(scene: number) {
  return [
    scene >= 1 ? 3 : 0,
    scene >= 2 ? 4 : 1,
    scene >= 3 ? 5 : 2,
  ];
}
