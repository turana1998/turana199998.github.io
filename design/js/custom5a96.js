/*jslint browser: true*/
/*jslint nomen: true*/
/*global $, document, enquire, FastClick*/

var offset = 300,
    offset_opacity = 1200,
    scroll_top_duration = 700,
    back_to_top;

$(function () {
    "use strict";

    var styler = $(".styler"), fancy = $(".fancybox");

    //Mobile browser detection

    if ($.browser.mobile) {
        document.getElementsByTagName("html")[0].className += "mobile";
    }

    if (styler.length) {
        //Form Styler
        styler.styler();
    }

    $(".scrollable").mCustomScrollbar({
        theme: "gray"
    });

    //Fancybox

    $.fancybox.defaults.lang = "ru";
    $.fancybox.defaults.loop = true;
    $.fancybox.defaults.i18n = {
        'ru': {
            CLOSE: 'Закрыть',
            NEXT: 'Следующее изображение',
            PREV: 'Предыдущее изображение',
            ERROR: 'Запрос не может быть выполнен. <br/> Пожалуйста, попробуйте позже.',
            PLAY_START: 'Начать слайдщоу',
            PLAY_STOP: 'Остановить слайдшоу',
            FULL_SCREEN: 'Развернуть на весь экран',
            THUMBS: 'Эскизы',
            DOWNLOAD: 'Загрузить',
            SHARE: 'Поделиться',
            ZOOM: 'Увеличить'
        }
    };
    //Phone input mask

    $(".tel-input").inputmask({
        mask: "+9 (999) 999-99-99",
        placeholder: '',
        showMaskOnHover: false,
        showMaskOnFocus: false
    });

    //Homepage slider

    $(".homepage-slider").slick({
        autoplay: true,
        autoplaySpeed: 9000,
        dots: true,
        infinite: true,
        prevArrow: '<button type="button" aria-label="Назад" class="slick-prev btn-reset"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 93" width="25" height="47" fill="currentColor"><path d="M44.16,91.92a3.282,3.282,0,0,0,4.641,0,3.29,3.29,0,0,0,0-4.641L8,46.478l40.8-40.8A3.282,3.282,0,0,0,44.16,1.041L.961,44.158a3.283,3.283,0,0,0,0,4.641Zm0,0"/></svg></button>',
        nextArrow: '<button type="button" aria-label="Вперед" class="slick-next btn-reset"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 93" width="25" height="47" fill="currentColor"><path d="M48.8,48.639A3.283,3.283,0,0,0,48.8,44L5.6.881A3.282,3.282,0,0,0,.959,5.518l40.8,40.8-40.8,40.8A3.282,3.282,0,1,0,5.6,91.76Z"/></svg></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }]
    });

    $(".img-slider").slick({
        slidesToShow: 2,
        infinite: true,
        prevArrow: '<button type="button" aria-label="Назад" class="slick-prev btn-reset"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 93" width="16" height="30" fill="currentColor"><path d="M44.16,91.92a3.282,3.282,0,0,0,4.641,0,3.29,3.29,0,0,0,0-4.641L8,46.478l40.8-40.8A3.282,3.282,0,0,0,44.16,1.041L.961,44.158a3.283,3.283,0,0,0,0,4.641Zm0,0"/></svg></button>',
        nextArrow: '<button type="button" aria-label="Вперед" class="slick-next btn-reset"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 93" width="16" height="30" fill="currentColor"><path d="M48.8,48.639A3.283,3.283,0,0,0,48.8,44L5.6.881A3.282,3.282,0,0,0,.959,5.518l40.8,40.8-40.8,40.8A3.282,3.282,0,1,0,5.6,91.76Z"/></svg></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $("#patner-slider").slick({
        prevArrow: '<button type="button" aria-label="Назад" class="slick-prev btn-reset"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 93" width="16" height="30" fill="currentColor"><path d="M44.16,91.92a3.282,3.282,0,0,0,4.641,0,3.29,3.29,0,0,0,0-4.641L8,46.478l40.8-40.8A3.282,3.282,0,0,0,44.16,1.041L.961,44.158a3.283,3.283,0,0,0,0,4.641Zm0,0"/></svg></button>',
        nextArrow: '<button type="button" aria-label="Вперед" class="slick-next btn-reset"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 93" width="16" height="30" fill="currentColor"><path d="M48.8,48.639A3.283,3.283,0,0,0,48.8,44L5.6.881A3.282,3.282,0,0,0,.959,5.518l40.8,40.8-40.8,40.8A3.282,3.282,0,1,0,5.6,91.76Z"/></svg></button>',
        slidesToShow: 6,
        slidesToScroll: 6,
        adaptiveHeight: true,
        infinite: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 544,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    });

    $("#softusers-slider").slick({
        prevArrow: '<button type="button" aria-label="Назад" class="slick-prev btn-reset"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 93" width="16" height="30" fill="currentColor"><path d="M44.16,91.92a3.282,3.282,0,0,0,4.641,0,3.29,3.29,0,0,0,0-4.641L8,46.478l40.8-40.8A3.282,3.282,0,0,0,44.16,1.041L.961,44.158a3.283,3.283,0,0,0,0,4.641Zm0,0"/></svg></button>',
        nextArrow: '<button type="button" aria-label="Вперед" class="slick-next btn-reset"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 93" width="16" height="30" fill="currentColor"><path d="M48.8,48.639A3.283,3.283,0,0,0,48.8,44L5.6.881A3.282,3.282,0,0,0,.959,5.518l40.8,40.8-40.8,40.8A3.282,3.282,0,1,0,5.6,91.76Z"/></svg></button>',
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        infinite: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 544,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    });

    $(".dip-slider").slick({
        slidesToShow: 3,
        infinite: true,
        prevArrow: '<button type="button" aria-label="Назад" class="slick-prev btn-reset"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 93" width="16" height="30" fill="currentColor"><path d="M44.16,91.92a3.282,3.282,0,0,0,4.641,0,3.29,3.29,0,0,0,0-4.641L8,46.478l40.8-40.8A3.282,3.282,0,0,0,44.16,1.041L.961,44.158a3.283,3.283,0,0,0,0,4.641Zm0,0"/></svg></button>',
        nextArrow: '<button type="button" aria-label="Вперед" class="slick-next btn-reset"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 93" width="16" height="30" fill="currentColor"><path d="M48.8,48.639A3.283,3.283,0,0,0,48.8,44L5.6.881A3.282,3.282,0,0,0,.959,5.518l40.8,40.8-40.8,40.8A3.282,3.282,0,1,0,5.6,91.76Z"/></svg></button>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 544,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $(".navbar-toggler").on("click", function () {
        $(this).siblings(".collapsible-panel").toggle();
    });
    $(".event-content").dotdotdot({watch: true});
    $(".roll").on("mouseover", function () {
        $(this).stop().animate({
            opacity: 0.7
        }, 200);
        $(this).find(".cross").stop().addClass("crosshover");
        $(this).parent().find(".roll-image").stop().addClass("img-scale");
    }).on("mouseout", function () {
        $(this).stop().animate({
            opacity: 0
        }, 200);
        $(this).find(".cross").stop().removeClass("crosshover");
        $(this).parent().find(".roll-image").stop().removeClass("img-scale");
    });
    var $menu = $("#mmenu").mmenu({
            navbar: {
                title: " ",
                titleLink: "none"
            },
            extensions: [
                "border-full",
                "multiline",
                "pagedim-black",
                "shadow-page",
                "shadow-panels"
            ]
        }, {
            offCanvas: {
                pageSelector: "#content"
            }
        }),
        $icon = $("#hamb-icon"),
        API = $menu.data("mmenu");
    $icon.on("click", function () {
        API.open();
    });
    API.bind("open:start", function () {
        setTimeout(function () {
            $icon.addClass("is-active");
        }, 100);
    });
    API.bind("close:start", function () {
        setTimeout(function () {
            $icon.removeClass("is-active");
        }, 100);
    });
    enquire.register("screen and (min-width: 62em)", {
        match: function () {
            API.close();
        }
    });
    $('.smooth').on("click", function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 50
                }, 1000);
                return false;
            }
        }
    });
    // if($('.btn-loader').length){
    //   // Create a new instance of ladda for the specified button
    //   var l = Ladda.create( document.querySelector( '.btn-loader' ));
    // }
    function filterCheckbox(input, type) {
        var checked = $(input).prop("checked"),
            container = $(input).closest(".checkbox-group"),
            checkbox = container.find(".checkbox-group--all .e-checkbox--checkbox");
        switch (type) {
            case "single":
                if (!container.find(".checkbox-group--item .e-checkbox--checkbox:checked").length && !checked) {
                    checkbox.prop({
                        indeterminate: false,
                        checked: false
                    }).removeClass("e-checkbox--checkbox--indeterminate");
                    container.find(".filter-btn").prop("disabled", true);
                } else if (!container.find(".checkbox-group--item .e-checkbox--checkbox").not(":checked").length && checked) {
                    checkbox.prop({
                        indeterminate: false,
                        checked: true
                    }).removeClass("e-checkbox--checkbox--indeterminate");
                    container.find(".filter-btn").prop("disabled", false);
                } else {
                    checkbox.prop({
                        indeterminate: true
                    }).addClass("e-checkbox--checkbox--indeterminate");
                    container.find(".filter-btn").prop("disabled", false);
                }
                break;
            case "all":
                $(input).prop("indeterminate", false).removeClass("e-checkbox--checkbox--indeterminate");
                if ($(input).prop("checked")) {
                    container.find(".e-checkbox--checkbox").prop("checked", true);
                    container.find(".filter-btn").prop("disabled", false);
                } else {
                    container.find(".e-checkbox--checkbox").prop("checked", false);
                    container.find(".filter-btn").prop("disabled", true);
                }
                break;
        }
    }

    $(".checkbox-group--item").on("change", ".e-checkbox--checkbox", function () {
        filterCheckbox(this, "single");
    });
    $(".checkbox-group--all").on("change", ".e-checkbox--checkbox", function () {
        filterCheckbox(this, "all");
    });
    $(".e-text-field--entity").on("focusout", function () {
        if ($(this).val().length > 0) {
            $(this).parent(".e-text-field").addClass("e-text-field---not-empty");
        } else {
            $(this).parent(".e-text-field").removeClass("e-text-field---not-empty");
        }
    });
    $(".e-textarea--entity").on("focusout", function () {
        if ($(this).val().length > 0) {
            $(this).parent(".e-textarea").addClass("e-textarea---not-empty");
        } else {
            $(this).parent(".e-textarea").removeClass("e-textarea---not-empty");
        }
    });
    $(".b-links-widget--toggler").on("click", function () {
        $(this).toggleClass("opened").parent().next(".b-links-widget--toggle-box").slideToggle();
    });
    $('.toggler').toggleSwitch({
        size: "small"
    });
    $('.select').select2({
        language: "ru",
        minimumResultsForSearch: Infinity
    });
    FastClick.attach(document.body);
    $(".superfilter-panel").on("click", function () {
        $(this).next().toggle();
    });
    //smooth scroll to top
    $("#back-to-top").on('click', function () {
        $('body, html').animate({
            scrollTop: 0
        }, scroll_top_duration);
    });
});
$(window).on("load scroll resize", function () {
    "use strict";
    var mainHeader = $(".main-header");
    if ($(this).scrollTop() > mainHeader.outerHeight()) {
        mainHeader.addClass("fixed");
    } else {
        mainHeader.removeClass("fixed");
    }
    back_to_top = $("#back-to-top");
    if ($(this).scrollTop() > offset) {
        back_to_top.addClass('cd-is-visible');
    } else {
        back_to_top.removeClass('cd-is-visible cd-fade-out');
    }
    if ($(this).scrollTop() > offset_opacity) {
        back_to_top.addClass('cd-fade-out');
    }
});
$(window).on("load", function () {
    $(".twentytwenty-container").twentytwenty({
        no_overlay: true
    });
});
$(function () {
    "use strict";
    var dropdownlink = $(".b-additional-menu--link"),
        dropdownitem = $(".b-additional-menu--item---dropdown"),
        dropdown = $(".b-additional-menu--dropdown");
    dropdownitem.on("mouseenter", function () {
        $(this).parent(dropdownitem).addClass("b-additional-menu--item---open");
    });
    dropdownitem.on("mouseleave", function () {
        $(this).parent(dropdownitem).removeClass("b-additional-menu--item---open");
    });
});
$(function () {
    "use strict";
    $(".b-backg-anim--article").each(function () {
        $(this).addClass("b-backg-anim--article---visible");
    });
});
/*global $*/
var tabwidth,
    taboffsetX,
    etabsection = $(".b-tabs--section"),
    etabsline = $(".e-tabs--line"),
    etabsitem = $(".e-tabs--item"),
    etabsitemCurr = $(".e-tabs--item---current");

function setLine() {
    tabwidth = etabsitemCurr.outerWidth();
    taboffsetX = etabsitemCurr.position().left;
    etabsline.css({
        width: tabwidth - 50,
        left: taboffsetX + 25
    });
    lazy_run('tabs', etabsitemCurr);
}

$(function () {
    "use strict";
    etabsitem.on("click", function () {
        etabsitem.removeClass("e-tabs--item---current");
        $(this).addClass("e-tabs--item---current");
        etabsitemCurr = $(this);
        etabsection.removeClass("b-tabs--section---current").eq($(this).data("section")).addClass("b-tabs--section---current");
        setLine();

    });
});
$(window).on("load resize", function () {
    "use strict";
    if (etabsline.length) {
        setLine();
    }
});
/*global $*/
$(function () {
    "use strict";
    // var timer,
    //   menuwidth,
    //   menuleft,
    //   menuheader = $(".main-header"),
    //   menu = $(".b-primary-menu"),
    //   menuLine = $(".b-primary-menu--active-line"),
    //   menuLink = $(".b-primary-menu--inside"),
    //   menuoverlay = $(".b-dropdown-menu--overlay"),
    //   menuSection = $(".b-dropdown-menu--section"),
    //   dropdown = $(".b-dropdown-menu"),
    //   menuclose = $(".b-dropdown-menu--close"),
    //   menuvisbility = false;
    //
    // function closeMenu() {
    //   dropdown.removeClass("b-dropdown-menu---show");
    //   menu.removeClass("b-primary-menu---show");
    //   menuLine.removeClass("b-primary-menu--active-line---show");
    //   menuoverlay.removeClass("b-dropdown-menu--overlay---show");
    //   menuSection.removeClass("b-dropdown-menu--section---show");
    //   menuheader.removeClass("active");
    //   menuvisbility = false;
    // }
    //
    //     menuLink.on("mouseenter", function () {
    //       var $this = $(this);
    //       menuSection.removeClass("b-dropdown-menu--section---show").eq($(this).data("section")).addClass("b-dropdown-menu--section---show");
    //       if (!menuvisbility) {
    //         timer = setTimeout(function () {
    //           dropdown.addClass("b-dropdown-menu---show");
    //           menu.addClass("b-primary-menu---show");
    //           menuoverlay.addClass("b-dropdown-menu--overlay---show");
    //           menuwidth = $this.innerWidth();
    //           menuleft = $this.position().left;
    //           menuLine.css({
    //             width: menuwidth,
    //             left: menuleft
    //           }).addClass("b-primary-menu--active-line---show");
    //           menuheader.addClass("active");
    //           menuvisbility = true;
    //         }, 300);
    //       } else {
    //         menuSection.removeClass("b-dropdown-menu--section---show").eq($(this).data("section")).addClass("b-dropdown-menu--section---show");
    //         menuwidth = $this.innerWidth();
    //         menuleft = $this.position().left;
    //         menuLine.css({
    //           width: menuwidth,
    //           left: menuleft
    //         }).addClass("b-primary-menu--active-line---show");
    //       }
    //     });
    //
    //     menuLink.on("mouseleave", function () {
    //       clearTimeout(timer);
    //     });
    //
    //     menuoverlay.on("mouseenter", function () {
    //       closeMenu();
    //     });
    //
    //     menuclose.on("click", function () {
    //       closeMenu();
    //     });
    //
    //     $(".b-header-search--icon").on("click", function () {
    //       closeMenu();
    //     });
    var menuheader = $(".main-header"),
        timer,
        time = 300,
        menuwidth,
        menuleft,
        menuContainer = $(".b-header--dropdown-menu"),
        menu = $(".b-primary-menu"),
        menuLine = $(".b-primary-menu--active-line"),
        menuLink = $(".b-primary-menu--inside"),
        //menuSubList = $(".b-primary-menu--sublist"),
        menuoverlay = $(".b-dropdown-menu--overlay"),
        menuSection = $(".b-dropdown-menu--section"),
        dropdown = $(".b-dropdown-menu"),
        menuclose = $(".b-dropdown-menu--close"),
        menuvisibility = false;

    function closeMenu() {
        dropdown.removeClass("b-dropdown-menu---show");
        menu.removeClass("b-primary-menu---show");
        menuoverlay.removeClass("b-dropdown-menu--overlay---show");
        menuSection.removeClass("b-dropdown-menu--section---show");
        menuheader.removeClass("active");
        // menuSubList.hide();
        menuvisibility = false;
    }

    menuLink.on("mouseenter", function () {
        var $this = $(this);
        timer = setTimeout(function () {
            if (!menuSection.filter("[data-section=" + $this.data("section") + "]").length) {
                menuContainer.hide();
                menuoverlay.addClass("b-dropdown-menu--overlay---transparent");
            } else {
                menuContainer.show();
                menuoverlay.removeClass("b-dropdown-menu--overlay---transparent");
            }
            menuSection.removeClass("b-dropdown-menu--section---show").filter("[data-section=" + $this.data("section") + "]").addClass("b-dropdown-menu--section---show");
            dropdown.addClass("b-dropdown-menu---show");
            menu.addClass("b-primary-menu---show");
            // $this.next(menuSubList).show();
            menuwidth = $this.innerWidth();
            menuleft = $this.position().left;
            menuoverlay.addClass("b-dropdown-menu--overlay---show");
            menuLine.css({
                width: menuwidth,
                left: menuleft
            }).addClass("b-primary-menu--active-line---show");
            menuheader.addClass("active");
            menuvisibility = true;
            lazy_run('menu', $this);
        }, time);
    });
    menuLink.on("mouseleave", function () {
        clearTimeout(timer);
    });
    menuoverlay.on("mouseenter", function () {
        closeMenu();
    });
    menuclose.on("click", function () {
        menuLine.removeClass("b-primary-menu--active-line---show");
        closeMenu();
    });
    $(".b-header-search--icon").on("click", function () {
        closeMenu();
    });
});
/*global $*/
$(function () {
    "use strict";
    var search = $(".b-header-search"),
        searchbutton = $(".b-header-search--form--btn"),
        searchfield = $(".b-header-search--form--field"),
        searchclose = $(".b-header-search--form--close"),
        searchicon = $(".b-header-search--icon"),
        searchoverlay = $(".b-header-search--overlay"),
        searchUrl = $($(searchbutton)[0].form).attr('action');

    function hideSearch() {
        search.removeClass("b-header-search---show");
    }

    function searchStart(searchUrl) {
        if (searchfield.val().length > 0) {
            var searchFullUrl;
            if (searchUrl !== undefined && searchUrl.length > 0) {
                searchFullUrl = searchUrl + "?q=" + searchfield.val()
            } else {
                searchFullUrl = '/search/' + "?q=" + searchfield.val()
            }
            window.location.href = searchFullUrl;
        }
        hideSearch();
    }

    searchicon.on("click", function (e) {
        e.preventDefault();
        search.addClass("b-header-search---show");
        setTimeout(function () {
            searchfield.focus();
        }, 100);
    });
    searchclose.on("click", function () {
        search.removeClass("b-header-search---show");
    });
    searchbutton.on("click", function () {
        searchStart(searchUrl);
        return false;
    });
    searchoverlay.on("click", function () {
        hideSearch();
    });
    searchfield.on("keyup", function (e) {
        if (e.keyCode === 13) {
            searchStart(searchUrl);
        }
        return false;
    });



    $('body').on('input', '.e-text-field--entity', function () {
        var input = $(this);
        var length = input.val().length;
        if (length > 0 && !input.hasClass('input-not-empty')) {
            input.addClass('input-not-empty');
        } else if (length === 0 && input.hasClass('input-not-empty')) {
            input.removeClass('input-not-empty')
        }

    });
});