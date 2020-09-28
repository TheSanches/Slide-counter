function countSlider(slidContainer, slides, flipL, flipR) {
    let countSlid = 1;
    const div = document.createElement('div');
    div.classList.add('count-slides');
    div.innerHTML = `
        <span>1</span>
        <span>/</span>
        <span></span>
      `;

      slidContainer.append(div);

    let slidCountWrite = div.querySelectorAll('span');

    slidCountWrite[2].textContent = slides.length;

    flipL.addEventListener('click', () => {
        if(countSlid > 1){
            countSlid--;
        } else {
            countSlid = slides.length;
        }
        slidCountWrite[0].textContent = countSlid;
    });

    flipR.addEventListener('click', () => {
        if(countSlid <= slides.length - 1){
            countSlid++;
        } else {
            countSlid = 1;
        }
        slidCountWrite[0].textContent = countSlid;
    });

}
