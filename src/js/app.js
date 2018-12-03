import { TimelineMax, Power0 } from 'gsap';

const tl = new TimelineMax();
const t2 = new TimelineMax();

t2
    .to('.loader', 14, {
        right: 0,
        ease: Power0.easeNone
    })
    .to('.loader', 0.5, {
        height: 0
    });

tl
    .set('.container', {
        opacity: 1
    })
    .from('.title__m', 1.5, {
        x: -250,
        opacity: 0
    }, 1)
    .from('.title__o', 1.5, {
        rotation: 30,
        transformOrigin: '100% 50%'
    }, '-=0.5')
    .from('.title__s', 1.5, {
        y: '100%',
        opacity: 0
    }, '-=1')
    .from('.title__b', 2, {
        width: '60%'
    }, '-=0.5')
    .from('.title__y', 1.5, {
        x: '100%'
    }, '-=1.5')
    .from('.description', 1.5, {
        y: '100%'
    }, '-=0.5')
    .from('.logo-container', 2, {
        height: '100vh'
    }, '+=2')
    .from('.facebook', 1, {
        opacity: 0,
        y: 100
    })
    .from('.twitter', 1, {
        opacity: 0,
        y: 100
    }, '-=0.5')
    .from('.linkedin', 1, {
        opacity: 0,
        y: 100
    }, '-=0.5')
    .from('.github', 1, {
        opacity: 0,
        y: 100
    }, '-=0.5')
    .from('.telegram', 1, {
        opacity: 0,
        y: 100
    }, '-=0.5')
    .from('.mail', 1, {
        opacity: 0,
        y: 100
    }, '-=0.5');
