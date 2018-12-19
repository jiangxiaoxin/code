/**
 * 简单的刮刮乐的效果
 */

var canvas = document.querySelector('#canvas')
var context = canvas.getContext('2d')


var image = new Image()
image.src = '/shared/images/sky.png'

var dragging = false
var loaded = false

canvas.addEventListener('mousedown', function(e) {
  if (loaded === false) {
    return
  }
  dragging = true
})

canvas.addEventListener('mouseup', function(e) {
  dragging = false
})

var rect = canvas.getBoundingClientRect()
function windowToCanvas(x, y) {
  return {
    x: x - rect.left,
    y: y - rect.top
  }
}

canvas.addEventListener('mousemove', function(e) {
  if (dragging === false) {
    return
  }

  var loc = windowToCanvas(e.clientX, e.clientY)

  context.save()
  
  context.beginPath()

  context.arc(loc.x, loc.y, 20, 0, Math.PI * 2, true)

  context.clip()

  context.drawImage(image, 0, 0)
  context.restore()

})

image.onload = function(e) {
  loaded = true
}