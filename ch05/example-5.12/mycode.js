var canvas = document.querySelector('#canvas')
var context = canvas.getContext('2d')

context.fillStyle = 'red'
context.fillRect(0, 0, canvas.width, canvas.height)


/**
 * FIXME:
 * 我记得好像在哪里见过，clearRect清空屏幕的原理：只是又在那个指定的区域重绘了一次，只不过颜色是“看起来白色”，实际并不是‘0xffffff’。
 * 如果是这样子那也说的通，因为在其他语言的视图显示里，clear也是用默认“空白”的去重新绘一次，显得好像把屏幕清空了。
 * 所以这里的clearRect之后，并没有清除整个屏幕，而只是清空了clip的裁剪区域内。
 * clip的裁剪区域，只允许绘制发生在这个区域内，所以clearRect重新绘制“空白”时，里面空了，而外面没空
 */

// context.beginPath()
// context.rect(100, 100, 100, 100)
// context.clip()
// context.clearRect(0, 0, canvas.width, canvas.height)