containers = document.querySelectorAll(".slider-container");
sliders = [];

for (let i = 0; i < containers.length; i++){
    sliders[i] = {
        position: 0,
        slidesToShow: 6.2,
        slidesToScroll: 4,
        container: containers[i],
        track: containers[i].querySelector(".slider-track"),
        btnPrev: containers[i].querySelector(".btn-prev"),
        btnNext: containers[i].querySelector(".btn-next"),
        items: containers[i].querySelectorAll(".slider-item"),
        itemsCount: containers[i].querySelectorAll(".slider-item").length,
        itemWidth: (containers[i].clientWidth) / 6.2,
        movePosition: 4 * ((containers[i].clientWidth) / 6.2),
        setPosition(){
            this.track.style.transform = `translateX(${this.position}px)`;
        },
        checkBtns(){
            this.btnPrev.disabled = this.position === 0;
            this.btnNext.disables = this.position <= -(this.itemsCount - this.slidesToShow) * this.itemWidth;
        },
    };
    
    sliders[i].items.forEach((item) => {
        item.style.minWidth = `${sliders[i].itemWidth}px`;
    });
    
    sliders[i].btnNext.addEventListener('click' , () => {
        const itemsLeft = sliders[i].itemsCount - (Math.abs(sliders[i].position) + sliders[i].slidesToShow * sliders[i].itemWidth) / sliders[i].itemWidth;
        
        sliders[i].position -= itemsLeft >= sliders[i].slidesToScroll? sliders[i].movePosition : itemsLeft * sliders[i].itemWidth;

        sliders[i].setPosition();
        sliders[i].checkBtns();
    });
    
    sliders[i].btnPrev.addEventListener('click', () => {
        const itemsLeft = Math.abs(sliders[i].position) / sliders[i].itemWidth;
        sliders[i].position += itemsLeft >= sliders[i].slidesToScroll ? sliders[i].movePosition : itemsLeft * sliders[i].itemWidth;

        sliders[i].setPosition();
        sliders[i].checkBtns();
    });
    
    sliders[i].checkBtns();
}