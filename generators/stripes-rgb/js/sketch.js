function setup() {
  createCanvas(4096, 4096);
  pixelDensity(1);


  loadPixels();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pixel = (x + y * width);


      const A = pixel % 256;
      const B = ((pixel - A) / 256) % 256;
      const C = ((pixel - A - B * 256) / 256 / 256) % 256;

      // if (pixel == 1) console.log(red, green, blue);
      // if (pixel == 1024) console.log(red, green, blue);
      // if (pixel == 65538) console.log(red, green, blue);
      // if (pixel == 16777215) console.log(red, green, blue);

      const index = pixel * 4;

      // // stripes-red-green-blue
      // pixels[index + 0] = C;
      // pixels[index + 1] = B;
      // pixels[index + 2] = A;
      // pixels[index + 3] = 255;

      // // stripes-blue-green-red
      // pixels[index + 0] = A;
      // pixels[index + 1] = B;
      // pixels[index + 2] = C;
      // pixels[index + 3] = 255;

      // // stripes-green-blue-red
      // pixels[index + 0] = C;
      // pixels[index + 1] = A;
      // pixels[index + 2] = B;
      // pixels[index + 3] = 255;

      // // stripes-blue-red-green
      // pixels[index + 0] = B;
      // pixels[index + 1] = C;
      // pixels[index + 2] = A;
      // pixels[index + 3] = 255;

      // // stripes-green-red-blue
      // pixels[index + 0] = B;
      // pixels[index + 1] = A;
      // pixels[index + 2] = C;
      // pixels[index + 3] = 255;

      // // stripes-red-blue-green
      // pixels[index + 0] = A;
      // pixels[index + 1] = C;
      // pixels[index + 2] = B;
      // pixels[index + 3] = 255;
    }
  }
  updatePixels();

  noLoop();
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('myCanvas', 'png');
  }
}