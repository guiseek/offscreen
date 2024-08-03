export {};

self.addEventListener('message', (event: MessageEvent) => {
  const { msg, canvas } = event.data;

  if (msg === 'init' && canvas instanceof OffscreenCanvas) {
    const ctx = canvas.getContext('2d');

    function draw() {
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.font = '48px Mukta';
        ctx.fillText('Hello, Worker!', 50, 100);
      }

      if (isAnimating) {
        requestAnimationFrame(draw);
      }
    }

    draw();
  } else if (msg === 'slow') {
    isSlow = event.data.shouldSlow;
  }
});

let isAnimating = true;
let isSlow = false;


// const msPerFrame = 1000 / 60;
// const squareSize = 50;
// const margin = 1;

// let canvas: OffscreenCanvas;
// let ctx: OffscreenCanvasRenderingContext2D;
// let shouldSlow: number | boolean = false;

// function animate() {
//   const totalSize = squareSize + (margin) * 2;

//   const frameNo = Math.floor(performance.now() / msPerFrame);
//   const moveBy = frameNo % totalSize;

//   const across = Math.ceil(canvas.width / squareSize);
//   const down = Math.ceil(canvas.height / squareSize);

//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   for(let a = -3; a <= across; a++) {
//     for(let d = -3; d <= down; d++) {
//       const x = a * totalSize + moveBy;
//       const y = d * totalSize;

//       ctx.fillStyle = d % 2 === 0 ? '#fa8520' : '#2fbee9';
//       ctx.fillRect(x, y, squareSize, squareSize);
//     }
//   }

//   // Do a big loop to slow down the thread
//   if(shouldSlow) {
//     for(let i=0; i < 500000000; i++) {
//       // slow ...
//     }
//   }

//   self.canvasRafId = self.requestAnimationFrame(animate);
// }

// function slow(slow: number) {
//   shouldSlow = slow;
// }

// self.onmessage = function(ev) {
//   if(ev.data.msg === 'init') {
//     canvas = ev.data.canvas || window.canvas;
//     ctx = canvas.getContext('2d')!;
//     animate();
//   } else if(ev.data.msg === 'slow') {
//     slow(ev.data.shouldSlow);
//   }
// }
