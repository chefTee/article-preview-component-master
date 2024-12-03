const shareButton = document.querySelector('.share-container');
const toolTip = document.querySelector('.tooltip');
const mobileTooltip = document.querySelector('.tooltip-mobile');
const profileSection = document.querySelector('.profile-container');

shareButton.addEventListener('mouseenter', () => {
    if(window.matchMedia('(min-width: 768px)').matches){
        toolTip.classList.toggle('hide');
    }
    // }else{
    //     profileSection.classList.toggle('hide');
    //     mobileTooltip.classList.toggle('hide');
    // }
    
})

shareButton.addEventListener('mouseleave', () => {
    if(window.matchMedia('(min-width: 768px)').matches){
        toolTip.classList.toggle('hide');
    }
    // else{
    //     mobileTooltip.classList.toggle('hide');
    //     profileSection.classList.remove('hide');
    // }

})

shareButton.addEventListener('click', () => {
    if(window.matchMedia('(max-width: 767px)').matches){
        profileSection.classList.toggle('hide');
        mobileTooltip.classList.toggle('hide');
    }
})


// mobileTooltip.addEventListener('click', (e) => {
//     e.stopPropagation();
// })

// document.addEventListener('click', (event) => {
//     if(!mobileTooltip.contains(event.target)){
//         profileSection.classList.remove('hide');
//         mobileTooltip.classList.add('hide');
//     }
// })