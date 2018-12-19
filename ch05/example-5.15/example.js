/*
 * Copyright (C) 2012 David Geary. This code is from the book
 * Core HTML5 Canvas, published by Prentice-Hall in 2012.
 *
 * License:
 *
 * Permission is hereby granted, free of charge, to any person 
 * obtaining a copy of this software and associated documentation files
 * (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * The Software may not be used to create training material of any sort,
 * including courses, books, instructional videos, presentations, etc.
 * without the express written consent of David Geary.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
*/

var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    controls = document.getElementById('controls'),
    animateButton = document.getElementById('animateButton'),
    sky = new Image(),

    paused = true,
    lastTime = 0,
    fps = 0,

    skyOffset = 0,
    SKY_VELOCITY = 30; // 30 pixels/second

// Functions.....................................................

function erase() {
   context.clearRect(0,0,canvas.width,canvas.height);
}

function draw() {
   context.save();

   skyOffset = skyOffset < canvas.width ?
               skyOffset + SKY_VELOCITY/fps : 0;

   context.save();
   context.translate(-skyOffset, 0);

   context.drawImage(sky, 0, 0);

   /**
    * 这里 -2， 是因为原图的边上有间隙，去掉就很明显的看出来.
    * drawImage 参数数量不同时候表示的意思是不一样的。
    * context.drawImage(sky, 0, 0); 在坐标原点处开始画sky
    * context.drawImage(sky, sky.width-2, 0); 在sky.width-2处开始画sky。因为sky图片的右边有间隙，所以不是在sky.width处而是往左一点的地方就开始画
    * 这样图就是连起来的了。
    */
   context.drawImage(sky, sky.width-2, 0);

   context.restore();
}

function calculateFps(now) {
   var fps = 1000 / (now - lastTime);
   lastTime = now;
   return fps; 
}

function animate(now) {
   if (now === undefined) {
      now = +new Date;
   }

   fps = calculateFps(now);

   if (!paused) {
      erase();
	   draw();
   }

   requestNextAnimationFrame(animate);
}

// Event handlers................................................

animateButton.onclick = function (e) {
   paused = paused ? false : true;
   if (paused) {
      animateButton.value = 'Animate';
   }
   else {
      animateButton.value = 'Pause';
   }
};

// Initialization................................................

canvas.width = canvas.width;
canvas.height = canvas.height;

sky.src = '../../shared/images/sky.png';
sky.onload = function (e) {
   draw();


  // context.save()
  // context.drawImage(sky, 0, 0)
  // context.restore()


  // context.save()
  // context.drawImage(sky, sky.width/2, 0)
  // context.restore()
};

requestNextAnimationFrame(animate);
