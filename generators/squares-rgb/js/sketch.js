function setup() {
  createCanvas(4096, 4096);
  pixelDensity(1);

  // RGB-ordered squares
  // loadPixels();
  // for (let sy = 0; sy < 16; sy++) {
  //   for (let sx = 0; sx < 16; sx++) {
  //     for (let y = 0; y < 256; y++) {
  //       for (let x = 0; x < 256; x++) {
  //         const pixel = (x + sx * 256 + (y + sy * 256) * width);

  //         const r = x;
  //         const g = y;
  //         const b = sx + 16 * sy;

  //         const index = pixel * 4;
  //         pixels[index + 0] = r;
  //         pixels[index + 1] = g;
  //         pixels[index + 2] = b;
  //         pixels[index + 3] = 255;
  //       }
  //     }
  //   }
  // }
  // updatePixels();

  // // Randomized squares
  // const nums256 = [];
  // for (let i = 0; i < 256; i++) {
  //   nums256.push(i);
  // }
  // const randomized256 = shuffle(nums256); 
  // loadPixels();
  // for (let sy = 0; sy < 16; sy++) {
  //   for (let sx = 0; sx < 16; sx++) {
  //     for (let y = 0; y < 256; y++) {
  //       for (let x = 0; x < 256; x++) {
  //         const pixel = (x + sx * 256 + (y + sy * 256) * width);

  //         const r = x;
  //         const g = y;
  //         const b = randomized256[sx + 16 * sy];

  //         const index = pixel * 4;
  //         pixels[index + 0] = r;
  //         pixels[index + 1] = g;
  //         pixels[index + 2] = b;
  //         pixels[index + 3] = 255;
  //       }
  //     }
  //   }
  // }
  // updatePixels();

  // // Randomized squares with random rots
  // const nums256 = [];
  // const rots256 = [];
  // for (let i = 0; i < 256; i++) {
  //   nums256.push(i);
  //   rots256.push(randomInt(4));
  // }
  // const randomized256 = shuffle(nums256);
  // loadPixels();
  // for (let sy = 0; sy < 16; sy++) {
  //   for (let sx = 0; sx < 16; sx++) {
  //     const b = randomized256[sx + 16 * sy];
  //     let rp, rf, gp, gf;
  //     switch (rots256[b]) {
  //       case 0:
  //         rp = 0;
  //         rf = -1;
  //         gp = 0;
  //         gf = -1;
  //         break;
  //       case 1:
  //         rp = 255;
  //         rf = 1;
  //         gp = 0;
  //         gf = -1;
  //         break;
  //       case 2:
  //         rp = 255;
  //         rf = 1;
  //         gp = 255;
  //         gf = 1;
  //         break;
  //       case 3:
  //         rp = 0;
  //         rf = -1;
  //         gp = 255;
  //         gf = 1;
  //         break;
  //     }

  //     for (let y = 0; y < 256; y++) {
  //       for (let x = 0; x < 256; x++) {
  //         const pixel = (x + sx * 256 + (y + sy * 256) * width);

  //         const r = rp - rf * x;
  //         const g = gp - gf * y;

  //         const index = pixel * 4;
  //         pixels[index + 0] = r;
  //         pixels[index + 1] = g;
  //         pixels[index + 2] = b;
  //         pixels[index + 3] = 255;
  //       }
  //     }
  //   }
  // }
  // updatePixels();

  noLoop();
}


function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('myCanvas', 'png');
  }
}

function randomInt(max) {
  return Math.floor(Math.random() * max);
}