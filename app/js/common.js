var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el);
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })

    })
}

allLozadImg();


//video

$(window).scroll(function (e) {
    $el = $('.header');
    $el.toggleClass('header-fixed', $(this).scrollTop() > 32);

});


let hh = $('header').outerHeight();

// control footer
function updateHeaderHeight() {
    hh = $('header').outerHeight();
    document.body.style.setProperty('--headerheight', `${hh}px`);
}

updateHeaderHeight();
// window.addEventListener('resize', updateHeaderHeight);

var burger = [...document.querySelectorAll('.burger')];
var header = document.querySelector('.header');


function burgerControl() {
    if (burger.length) {
        burger.forEach((btn) => {

            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                header.classList.toggle('active');
                document.body.classList.toggle('no-scroll')

            })
        })
    }
}

burgerControl();

let menuOption = [...document.querySelectorAll('.menu >ul li.menu-item-has-children>a')];

function controlMenuOpen() {
    if (menuOption.length) {
        menuOption.forEach((btn) => {
            let newArrMob = document.createElement('div');
            newArrMob.classList.add('arr');
            btn.appendChild(newArrMob);

            newArrMob.addEventListener('click', (e) => {
                if (window.innerWidth < 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    btn.closest('.menu-item-has-children').classList.toggle('open');
                }
            })
        })
    }
}

controlMenuOpen();

// scrollbtn
let scrlBtn = [...document.querySelectorAll('.scroll-to')];

function controlScrollBtn() {
    scrlBtn.forEach((btn) => {
        let lnk = btn.dataset.to;

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            $([document.documentElement, document.body]).animate({
                scrollTop: $(`.${lnk}`).offset().top - hh
            }, 600);

        })
    })
}

controlScrollBtn();


// sliders
let typesSlider = [...document.querySelectorAll('.products-list__slider')];

function startTypesSlider() {
    if (typesSlider.length) {
        typesSlider.forEach((sld) => {


            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let pagin = sld.querySelector('.dots');
            if (window.innerWidth < 768) {
                const swiper2 = new Swiper(sldCont, {
                    // Optional parameters
                    loop: false,
                    grabCursor: true,
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    speed: 600,
                    effect: false,
                    followFinger: true,
                    allowTouchMove: true,
                    threshold: false,

                    touchReleaseOnEdges: false,
                    resistance: true,
                    resistanceRatio: 0.3,
                    cssMode: false,

                    navigation: {
                        nextEl: sldNext,
                        prevEl: sldPrev,
                    },
                    autoplay: false,
                    spaceBetween: 10,
                    pagination: {
                        el: pagin,
                        type: 'bullets',
                        bulletActiveClass: 'active',
                        bulletClass: 'single-dot',
                        bulletElement: 'div',
                        clickable: true,
                        currentClass: 'current',
                        spaceBetween: 0,
                    },
                    breakpoints: {
                        767: {
                            spaceBetween: 20,
                            slidesPerView: 4,
                        }
                    }


                });
            }

        })
    }
}

startTypesSlider();

let recentSlider = [...document.querySelectorAll('.recent-products__slider')];

function startRecentSlider() {
    if (recentSlider.length) {
        recentSlider.forEach((sld) => {


            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let pagin = sld.querySelector('.dots');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                grabCursor: true,
                slidesPerView: 2,
                slidesPerGroup: 1,
                speed: 600,
                effect: false,
                followFinger: true,
                allowTouchMove: true,
                threshold: false,

                touchReleaseOnEdges: false,
                resistance: true,
                resistanceRatio: 0.3,
                cssMode: false,

                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 10,
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    spaceBetween: 0,
                },
                breakpoints: {
                    767: {
                        spaceBetween: 15,
                        slidesPerView: 5,
                    }
                }


            });


        })
    }
}

startRecentSlider();

let aboutSlider = [...document.querySelectorAll('.about-us__slider')];

function startAboutSlider() {
    if (aboutSlider.length) {
        aboutSlider.forEach((sld) => {


            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let pagin = sld.querySelector('.dots');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                grabCursor: true,
                slidesPerView: 2,
                slidesPerGroup: 1,
                speed: 600,
                effect: false,
                followFinger: true,
                allowTouchMove: true,
                threshold: false,

                touchReleaseOnEdges: false,
                resistance: true,
                resistanceRatio: 0.3,
                cssMode: false,

                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 10,
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    spaceBetween: 0,
                },
                breakpoints: {
                    767: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                    }
                }


            });


        })
    }
}

startAboutSlider();

let productSlider = [...document.querySelectorAll('.product-page__slider')];

function startProductSlider() {
    if (productSlider.length) {
        productSlider.forEach((sld) => {


            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let pagin = sld.querySelector('.dots');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                grabCursor: true,
                slidesPerView: 2,
                slidesPerGroup: 1,
                speed: 600,
                effect: false,
                followFinger: true,
                allowTouchMove: true,
                threshold: false,

                touchReleaseOnEdges: false,
                resistance: true,
                resistanceRatio: 0.3,
                cssMode: false,

                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 6,
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    spaceBetween: 0,
                },
                breakpoints: {
                    767: {
                        spaceBetween: 12,
                        slidesPerView: 2,
                    }
                }


            });


        })
    }
}

startProductSlider();


// sliders

let footerOpener = [...document.querySelectorAll('.footer-opener')];

function controlFooterOpener() {
    if (footerOpener.length) {
        footerOpener.forEach((block) => {
            let bt = block.querySelector('span');
            bt.addEventListener('click', () => {
                block.classList.toggle('open');
            })
        })
    }
}

controlFooterOpener()
//
//

let containerNotif = document.querySelector('.header-notification');

function controlNotif() {
    if (containerNotif) {
        let templateNotif = document.querySelector('.notif-template');
        let templateNotifFav = document.querySelector('.notif-template-fav');

        document.body.addEventListener('click', function (e) {

            const favBtn = e.target.closest('.product-card__link--fav');
            if (favBtn) {
                e.preventDefault();
                e.stopPropagation();

                const card = favBtn.closest('.product-card');
                let productId, productImage;

                if (card) {
                    productId = card.querySelector('.nm');
                    productImage = card.querySelector('.im img');
                } else {
                    const pageCont = favBtn.closest('.product-page__cont');
                    if (pageCont) {
                        productId = pageCont.querySelector('.product-page__info .name');
                        const imgs = pageCont.querySelectorAll('.product-page__slider .swiper-slide img');
                        productImage = imgs[1];
                    }
                }


                if (favBtn.classList.contains('active')) {
                    favBtn.classList.remove('active');
                    showFavNotification(productId.innerHTML, productImage.src, false);
                } else {
                    favBtn.classList.add('active');
                    showFavNotification(productId.innerHTML, productImage.src, true);
                }

                return;
            }

            const btn = e.target.closest('.add-cart-btn');
            if (!btn) return;
            e.preventDefault();
            e.stopPropagation();
            let cartState = 0;
            let productId = btn.closest('.product-card').querySelector('.nm');
            if (!productId) return;

            let productImage = btn.closest('.product-card').querySelector('.im img');
            if (!productImage) return;

            if (btn.classList.contains('active')) {
                cartState = 0;
                btn.classList.remove('active');
            } else {
                cartState = 1;
                btn.classList.add('active');
            }
            showNotification(productId.innerHTML, productImage.src, cartState);
        });

        function showNotification(name, image, cartState) {
            let clone = document.importNode(templateNotif.content, true);
            const notif = clone.querySelector('.notification-cart');
            notif.querySelector('.txt span').textContent = name;
            notif.querySelector('.im img').src = image;
            notif.querySelector('.cls').addEventListener('click', () => {
                notif.classList.add('hide');
                setTimeout(() => {
                    notif.remove();
                }, 500);
            })
            if (cartState === 1) {
                notif.querySelector('.txt p').textContent = notif.dataset.add;
            } else {
                notif.querySelector('.txt p').textContent = notif.dataset.rem;
                notif.querySelector('.notification-cart__cont').classList.add('rems');
            }

            containerNotif.appendChild(notif);

            setTimeout(() => {
                notif.classList.add('hide');
                notif.addEventListener('transitionend', () => notif.remove());
            }, 4000);
        }

        function showFavNotification(name, image, cartState) {
            let clone = document.importNode(templateNotifFav.content, true);
            const notif = clone.querySelector('.notification-cart');
            notif.querySelector('.txt span').textContent = name;
            notif.querySelector('.im img').src = image;
            notif.querySelector('.cls').addEventListener('click', () => {
                notif.classList.add('hide');
                setTimeout(() => {
                    notif.remove();
                }, 500);
            })
            if (cartState === true) {
                notif.querySelector('.txt p').textContent = notif.dataset.add;
            } else {
                notif.querySelector('.txt p').textContent = notif.dataset.rem;
                notif.querySelector('.notification-cart__cont').classList.add('rems');
            }

            containerNotif.appendChild(notif);

            setTimeout(() => {
                notif.classList.add('hide');
                notif.addEventListener('transitionend', () => notif.remove());
            }, 4000);
        }
    }
}

controlNotif();


//
$('.single-faq__head').click(function () {
    // $(this).closest('.single-faq').toggleClass(' open ');
    //$(this).siblings().removeClass(' active ');

    if ($(this).closest('.single-faq').hasClass('open')) {
        $(this).closest('.single-faq').find('.single-faq__cont').stop().slideUp();
        $(this).closest('.single-faq').removeClass('open');
    } else {
        $(this).closest('.faq-owner').find('.single-faq__cont').stop().slideUp();
        $(this).closest('.faq-owner').find('.single-faq').removeClass('open');

        $('.single-faq.open').find('.single-faq__cont').stop().slideUp();
        $('.single-faq.open').removeClass('open');

        $(this).closest('.single-faq').find('.single-faq__cont').stop().slideDown();
        $(this).closest('.single-faq').addClass('open');

    }

    return false;
});
let phoneMaskItems = [...document.querySelectorAll('.input-tel input')];
if (phoneMaskItems.length) {
    phoneMaskItems.forEach((itm) => {
        var phoneMask = IMask(
            itm, {
                mask: '+{38} (0\\00) 00-00-000'
            });
    })
}
// drop
$('.drop-top').click(function () {


    if ($(this).hasClass('open')) {
        $(this).closest('.drop-block').find('.drop-cont').stop().slideUp();
        $(this).removeClass('open');
    } else {

        $(this).closest('.drop-block').find('.drop-cont').stop().slideDown();
        $(this).addClass('open');

    }

    return false;
});
// drop
// tabs

let ownerTabs = [...document.querySelectorAll('.tabs-owner')];

function controlTabs() {
    if (ownerTabs.length) {
        ownerTabs.forEach((tab) => {
            let tabOpen = [...tab.querySelectorAll('.tab-btn')];
            let singleTab = [...tab.querySelectorAll('.single-tab')];

            tabOpen.forEach((btn, k) => {
                btn.addEventListener('click', () => {
                    if (!btn.classList.contains('active')) {
                        tabOpen.forEach((btn2) => {
                            btn2.classList.remove('active');
                        });
                        singleTab.forEach((btn3) => {
                            btn3.classList.remove('active');
                        });
                        btn.classList.add('active');
                        singleTab[k].classList.add('active');
                    }
                })
            });
            singleTab.forEach((tab, l) => {
                if (tab.querySelector('.single-tab__head')) {
                    tab.querySelector('.single-tab__head').addEventListener('click', () => {
                        tabOpen[l].click();
                    })
                }

            })
        })
    }
}

controlTabs();

// tabs

let btnMod = [...document.querySelectorAll('.btn-mod')];
let modals = [...document.querySelectorAll('.modal-window')];
let btnClose = [...document.querySelectorAll('.btn-close')];
let clsSecModal = [...document.querySelectorAll('.modal-window .cls')];
let backplates = [...document.querySelectorAll('.backplate')];

function controlModal() {
    if (btnMod.length) {
        btnMod.forEach((btn) => {
            let data = btn.dataset.mod;

            btn.addEventListener('click', (e) => {

                e.preventDefault();
                e.stopPropagation();


                modals.forEach((mod) => {

                    if (mod.dataset.modal === data) {
                        header.classList.remove('active');
                        document.body.classList.add('no-scroll');
                        if (data === 'discount') {
                            let img = btn.querySelector('.data-modal .img').innerHTML;
                            let txt = btn.querySelector('.data-modal .txt').innerHTML;
                            let bt = btn.querySelector('.txt').innerHTML;
                            let tt = btn.querySelector('.data-modal .ttl').innerHTML;
                            let lnk = btn.querySelector('.data-modal .lnk').href;

                            let modImg = mod.querySelector('.modal-cont__top .img');
                            let modTtl = mod.querySelector('.modal-discount .subttl');
                            let modTxt = mod.querySelector('.modal-discount .txt');
                            let modBt = mod.querySelector('.modal-discount .bt-block');
                            let modLnk = mod.querySelector('.modal-discount .btn');

                            modImg.innerHTML = img;
                            modTtl.innerHTML = tt;
                            modTxt.innerHTML = txt;
                            modBt.innerHTML = bt;
                            modLnk.href = lnk;

                        }
                        if (document.querySelector('.modal-window.visible')) {
                            document.querySelector('.modal-window.visible').classList.remove('visible');
                        }
                        mod.classList.add('visible');
                        burger.forEach((brg) => {
                            brg.classList.remove('active');
                        })

                    }
                });

            })
        });
    }

    if (backplates.length) {
        backplates.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');
                if (btn.closest('.modal-window').classList.contains('modal-window--video')) {
                    btn.closest('.modal-window').querySelector('.video-container').innerHTML = '';
                }

            })
        });
    }
    if (btnClose.length) {
        btnClose.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');

                if (btn.closest('.modal-window').classList.contains('modal-window--video')) {
                    btn.closest('.modal-window').querySelector('.video-container').innerHTML = '';
                }
            })
        });
    }
    if (clsSecModal.length) {
        clsSecModal.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');
                if (btn.closest('.modal-window').classList.contains('modal-window--video')) {
                    btn.closest('.modal-window').querySelector('.video-container').innerHTML = '';
                }
            })
        });


    }
}

controlModal();

$('body').on('click', '.btn-close', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.modal-window.visible').removeClass('visible');
    document.body.classList.remove('no-scroll');
});


