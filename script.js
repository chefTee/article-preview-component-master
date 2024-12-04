const shareButton = document.querySelector('.share-container');
const toolTip = document.querySelector('.tooltip');
const mobileTooltip = document.querySelector('.tooltip-mobile');
const profileSection = document.querySelector('.profile-container');

if(window.matchMedia('(min-width: 768px)').matches){
    mobileTooltip.classList.add('hide');
}

shareButton.addEventListener('mouseenter', () => {
    if(window.matchMedia('(min-width: 767px)').matches){
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

})

shareButton.addEventListener('click', (e) => {
    if(window.matchMedia('(max-width: 767px)').matches){
        profileSection.classList.toggle('hide');
        mobileTooltip.classList.toggle('hide');
    }
    e.stopPropagation()
})


mobileTooltip.addEventListener('click', (e) => {
    e.stopPropagation();
})

document.addEventListener('click', (event) => {
    if(!mobileTooltip.contains(event.target)){
        profileSection.classList.remove('hide');
        mobileTooltip.classList.add('hide');
    }
})

window.addEventListener('resize', () => {
    if(window.matchMedia('(max-width: 767px)').matches) {
        mobileTooltip.classList.add('hide');
        profileSection.classList.remove('hide');

    }
})