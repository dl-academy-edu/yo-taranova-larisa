var modal = document.querySelector('.modal_window')
var BannerButton = document.querySelector('.banner_button')
var modalButton = document.querySelector('.modal_button')

BannerButton.addEventListener('click', function() {
    modal.classList.add('modal_window_open')
}) 

modalButton.addEventListener('click', function() {
    modal.classList.toggle('modal_window_open')
})