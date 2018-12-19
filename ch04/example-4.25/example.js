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
    offscreenCanvas = document.createElement('canvas'),
    offscreenContext = offscreenCanvas.getContext('2d'),
    context = canvas.getContext('2d'),
    video = document.getElementById('video'),
    controlButton = document.getElementById('controlButton'),
    flipCheckbox = document.getElementById('flipCheckbox'),
    colorCheckbox = document.getElementById('colorCheckbox'),
    imageData,
    poster = new Image();

// Functions.....................................................

function removeColor() {
   var data,
      width,
      average;

   imageData = offscreenContext.getImageData(0, 0,
                  offscreenCanvas.width, offscreenCanvas.height);

   data = imageData.data;
   width = data.width;

   for (i=0; i < data.length-4; i += 4) {
      average = (data[i] + data[i+1] + data[i+2]) / 3;
      data[i]   = average;
      data[i+1] = average;
      data[i+2] = average;
   }

   offscreenContext.putImageData(imageData, 0, 0);
}

function drawFlipped() {
   context.save();

  // //  沿着 canvas的坐标轴位置移动
  //  context.translate(canvas.width/2, canvas.height/2);
  //  context.rotate(Math.PI);
  //  // 还是沿着 canvas 的坐标轴移动，但这时候经过上面的旋转， 坐标轴也跟着旋转了。
  //  context.translate(-canvas.width/2, -canvas.height/2);

   /**
    * 下面这个跟上面实现的效果一样，就是将“屏幕”翻转。
    * 分两次移动，何不开始就旋转，然后直接移动一整个“屏”（canvas）的距离呢？
    * 也很好的验证了 context 的坐标变换，变换的是坐标轴 ！！！
    */
  context.rotate(Math.PI)
  context.translate(-canvas.width, -canvas.height)

   context.drawImage(offscreenCanvas, 0, 0);

   context.restore();
}

function nextVideoFrame() {
   if (video.ended) {
      controlButton.value = 'Play';
   }
   else {
     // 从video中绘制到离屏的canvas上
     offscreenContext.drawImage(video, 0, 0);
    // 处理图像的像素，对颜色分量进行均值，变灰了。
     if (!colorCheckbox.checked)
        removeColor();
      
     if (flipCheckbox.checked)
     // 翻转图像
        drawFlipped();
     else
     // 或者直接绘制
       context.drawImage(offscreenCanvas, 0, 0);

     requestNextAnimationFrame(nextVideoFrame);
   }
}

function startPlaying() {
   requestNextAnimationFrame(nextVideoFrame);
   video.play();
}

function stopPlaying() {
   video.pause();
}

// Event handlers...............................................

controlButton.onclick = function(e) {
   if (controlButton.value === 'Play') {
      startPlaying();
      controlButton.value = 'Pause';
   }
   else {
      stopPlaying();
      controlButton.value = 'Play';
   }
}

poster.onload = function() { 
   context.drawImage(poster, 0, 0);
};

// Initialization................................................

// 这张图片随便找的
poster.src = '../../shared/images/waterfall.png';

offscreenCanvas.width = canvas.width;
offscreenCanvas.height = canvas.height;

