function change_dots(e,slide){
    var dots = document.getElementsByClassName('dot');

    for (let index = 0; index < dots.length; index++) {
        dots[index].classList.remove('active');
    }

    e.classList.add('active');

    change_slide(slide);
}

function change_slide(slide){
    var slides = document.getElementsByClassName('slide');

    for (let index = 0; index < slides.length; index++) {
        slides[index].classList.remove('prev-slide');
        slides[index].classList.remove('active');
        slides[index].classList.remove('next-slide');
    }

    for (let index = 0; index < slides.length; index++) {
        if (index === slide) {
            slides[index].classList.add('active');
        }else if(index === slide + 1){
            slides[index].classList.add('next-slide');
        }else if(index === slide - 1){
            slides[index].classList.add('prev-slide');
        }
    }

    if(slide === 0){
        slides[slides.length - 1].classList.add('prev-slide');
    }

    if(slide === slides.length - 1){
        slides[0].classList.add('next-slide');
    }

}
