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

var context = document.getElementById('canvas').getContext('2d');

context.fillStyle     = 'cornflowerblue';

// context.shadowColor   = 'rgba(50, 50, 50, 1.0)';
// context.shadowOffsetX = 2;
// context.shadowOffsetY = 2;
// context.shadowBlur    = 4;

context.lineWidth = 20;
// context.lineCap = 'round';


context.beginPath();
context.moveTo(120.5, 130);
context.quadraticCurveTo(150.8, 130, 160.6, 150.5);
context.strokeStyle = 'red'
context.stroke()

context.beginPath()
context.moveTo(160.6, 150.5)
context.quadraticCurveTo(190, 250.0, 210.5, 160.5);
context.strokeStyle = 'green'
context.stroke()


context.beginPath()
context.moveTo(210.5, 160.5)
context.quadraticCurveTo(240, 100.5, 290, 70.5);
context.strokeStyle = 'blue'
context.stroke();


context.beginPath()
context.moveTo(100, 100)
context.lineTo(200, 100)
context.lineTo(200, 150)
context.lineTo(100, 150)
context.closePath()
context.lineWidth = 5.0
context.strokeStyle = 'gold'
context.stroke()


var points = [
  {
    x: 125,
    y: 125
  },
  {
    x: 150, 
    y: 120
  },
  {
    x: 80,
    y: 90
  }
]
// context.beginPath()
context.lineWidth = 1.0
for (let index = 0; index < points.length; index++) {
  
  const point = points[index];
  console.log(`${point.x} ${point.y}: ${context.isPointInPath(point.x, point.y)}`)
  // context.moveTo(point.x, point.y)
  // context.arc(point.x, point.y, 2, 0, Math.PI * 2)
  // context.strokeStyle = 'black'
  
}

context.stroke()


