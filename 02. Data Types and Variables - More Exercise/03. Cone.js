function cone(radius, height) {
  let volume = (1 / 3) * Math.PI * radius * radius * height;
  let totalSurfaceArea =
    Math.PI * radius * (radius + Math.sqrt(radius * radius + height * height));
  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
}
