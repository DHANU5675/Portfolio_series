// Builds optimized portrait assets from Dhanu's master photo.
import sharp from 'sharp';
import fs from 'node:fs';

const OUT = 'public/assets';
fs.mkdirSync(OUT, { recursive: true });

async function build() {
  const W = 2048, H = 2048;

  // Prefer clean raw master source, fallback to pic-1.png or pic.png
  let srcPhoto = 'scripts/raw-portrait.jpg';
  if (!fs.existsSync(srcPhoto)) {
    srcPhoto = fs.existsSync('pic-1.png') ? 'pic-1.png' : 'pic.png';
  }

  console.log(`Processing portrait master: ${srcPhoto}`);
  const rawBuf = await sharp(srcPhoto).resize(W, H, { kernel: sharp.kernel.lanczos3 }).raw().toBuffer();

  // Find left and right silhouette boundaries for each row
  const leftEdge = new Int32Array(H).fill(W);
  const rightEdge = new Int32Array(H).fill(-1);
  const THRESH = 10;

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const idx = (y * W + x) * 3;
      if (Math.max(rawBuf[idx], rawBuf[idx + 1], rawBuf[idx + 2]) > THRESH) {
        leftEdge[y] = x;
        break;
      }
    }
    for (let x = W - 1; x >= 0; x--) {
      const idx = (y * W + x) * 3;
      if (Math.max(rawBuf[idx], rawBuf[idx + 1], rawBuf[idx + 2]) > THRESH) {
        rightEdge[y] = x;
        break;
      }
    }
  }

  // Find top boundary for each column
  const topEdge = new Int32Array(W).fill(H);
  for (let x = 0; x < W; x++) {
    for (let y = 0; y < H; y++) {
      const idx = (y * W + x) * 3;
      if (Math.max(rawBuf[idx], rawBuf[idx + 1], rawBuf[idx + 2]) > THRESH) {
        topEdge[x] = y;
        break;
      }
    }
  }

  // Build solid silhouette mask
  const solidMask = new Uint8Array(W * H);
  for (let y = 0; y < H; y++) {
    const lx = leftEdge[y];
    const rx = rightEdge[y];
    if (lx <= rx) {
      for (let x = lx; x <= rx; x++) {
        if (y >= topEdge[x]) {
          solidMask[y * W + x] = 255;
        }
      }
    }
  }

  // Smooth antialiased feather inside the boundary (preserves crisp edges without background bleed)
  const featherMask = Buffer.alloc(W * H);
  for (let y = 1; y < H - 1; y++) {
    for (let x = 1; x < W - 1; x++) {
      const idx = y * W + x;
      if (solidMask[idx] === 255) {
        let count = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (solidMask[(y + dy) * W + (x + dx)] === 255) count++;
          }
        }
        featherMask[idx] = count === 9 ? 255 : Math.round((count / 9) * 255);
      } else {
        featherMask[idx] = 0;
      }
    }
  }

  // Preserve natural, healthy warm skin tones, crisp white shirt, and rich hair.
  // NO artificial red rim lighting or red color shifts.
  const fullRgba = Buffer.alloc(W * H * 4);
  for (let i = 0; i < W * H; i++) {
    const srcIdx = i * 3;
    const dstIdx = i * 4;
    fullRgba[dstIdx] = rawBuf[srcIdx];
    fullRgba[dstIdx + 1] = rawBuf[srcIdx + 1];
    fullRgba[dstIdx + 2] = rawBuf[srcIdx + 2];
    fullRgba[dstIdx + 3] = featherMask[i];
  }

  const baseImage = sharp(fullRgba, { raw: { width: W, height: H, channels: 4 } });

  // Master cutout PNG (full head intact with natural headroom)
  await baseImage.clone().png({ compressionLevel: 8 }).toFile('pic.png');
  console.log('Saved master pic.png');

  // Responsive WebP portraits
  const sizes = [
    { w: 1100, h: 1100, name: 'portrait-1100.webp' },
    { w: 720, h: 720, name: 'portrait-720.webp' },
    { w: 420, h: 420, name: 'portrait-420.webp' },
  ];

  for (const s of sizes) {
    await baseImage
      .clone()
      .resize({ width: s.w, height: s.h })
      .webp({ quality: 92, alphaQuality: 95, effort: 6 })
      .toFile(`${OUT}/${s.name}`);
    console.log(`Saved ${OUT}/${s.name} (${s.w}x${s.h})`);
  }

  console.log('All portrait images built successfully.');
}

build().catch(console.error);
