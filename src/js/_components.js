try {
    const button = document.querySelector('[data-js="spoilerToggle"]');

    const spoilerToggle = e => {
        console.log(e.target.dataset.targetid)
        const spoiler = document.querySelector(`[data-js="spoiler"][data-targetId="${e.target.dataset.targetid}"]`);

        const spoilerContentHeight = spoiler.children[0].clientHeight;

        spoiler.style.maxHeight = `${spoilerContentHeight}px`;

        spoiler.classList.toggle('open');
        clearTimeout(animationTimeout);

        if (spoiler.classList.contains('open')) {
            animationTimeout = setTimeout(() => {
                spoiler.style.maxHeight = 'none';
            }, 1000);
        } else {
            animationTimeout = setTimeout(() => {
                spoiler.style.maxHeight = '290px';
            }, 0);
        }
    }
    let animationTimeout = null;

    button.addEventListener('click', spoilerToggle);
} catch (error) {
    console.log('Нет блока сео')
}


const search = document.querySelectorAll('.header__search svg')
search.forEach(e => {
    e.addEventListener('click', function() {
        document.querySelector('.search_desk').classList.toggle('search_open')
    })
})
