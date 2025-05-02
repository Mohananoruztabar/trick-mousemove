const body = document.querySelector('body')
body.addEventListener('mousemove', function(e){
    let span = document.createElement('span')
    span.style.left = -50 + e.offsetX + 'px'
    span.style.top = -50 + e.offsetY + 'px'
    body.appendChild(span)
})