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

var canvas = document.getElementById('canvas')
  var   context = canvas.getContext('2d')
  var  video = document.getElementById('video');


  /**
   * https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
   * 直接调用play方法开始播放会报错误滴.新的chrome浏览器播放规则。
   */

  /**
   * media events
   * https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
   */

  //  video.paused

   video.addEventListener('play', function(e) {
     console.log('play')
     window.requestNextAnimationFrame(animate);
   })

   video.addEventListener('pause', function(e) {
    console.log('pause')
  })

  video.addEventListener('loadeddata', function(e) {
    console.log('loadeddata');
  })

  video.addEventListener('loadend', function(e) {
    console.log('loadend');
  })

  video.addEventListener('loadstart', function(e) {
    console.log('loadstart')
  })
  

    console.log(111)

function animate() {
   if (!video.ended && !video.paused) {
     context.drawImage(video, 0, 0, canvas.width, canvas.height);
     window.requestNextAnimationFrame(animate);
   }
}
