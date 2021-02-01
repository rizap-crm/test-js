function imgToBase64(img) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = img.width;
  canvas.height = img.height;

  // I think this won't work inside the function from the console
  img.crossOrigin = 'anonymous';

  ctx.drawImage(img, 0, 0);

  return canvas.toDataURL("image/jpeg", 1.0);
}

function preloadImg(img) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = img.width;
  canvas.height = img.height;

  // I think this won't work inside the function from the console
  img.crossOrigin = 'anonymous';

  ctx.drawImage(img, 0, 0);
}