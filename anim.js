const header = document.querySelector('header');
const leftPanel = document.querySelector('.left-panel');
const rightPanel = document.querySelector('.right-panel');
const illustration = document.getElementById('illustration');

const tl = new TimelineMax();

tl.fromTo(
    illustration,
    1,
    { y: "100%" },
    { y: "0%", ease: Power2.easeInOut }
)

    .fromTo(
        header,
        1,
        { x: "-100%" },
        { x: "0%", ease: Power2.easeInOut }
    )

    .fromTo(
        leftPanel,
        2,
        { x: "-100%" },
        { x: "0%", ease: Power2.easeInOut }
    )