const container = document.querySelector('.team-details')
container.onmouseover = () => {
    document.querySelector('.people-details').style.display = "flex"
    document.querySelectorAll('.people-details .person img').forEach(img => {
        img.style.zIndex = "1"
    })
}

container.onmouseout = () => {
    document.querySelector('.people-details').style.display = "none "
}

const images = document.querySelectorAll('.people-details .person a img')
images.forEach((image, i) => {
    image.style.animationDelay = `${i * .2}s`
})