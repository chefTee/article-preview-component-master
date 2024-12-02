const shareButton = document.querySelector('.share-container');
const toolTip = document.querySelector('.tooltip');

shareButton.addEventListener('mouseenter', () => {
    toolTip.classList.toggle('hide');
})

shareButton.addEventListener('mouseleave', () => {
    toolTip.classList.toggle('hide');
})