export const preloadAssets = (images: string[]): Promise<void> => {
  return new Promise((resolve) => {
    let toGo = images.length;
    for (let i = 0; i < images.length; i++) {
      const img = new Image();
      img.onload = function () {
        toGo--;
        if (toGo <= 0) {
          resolve();
        }
      };
      img.src = images[i];
    }
  });
};
