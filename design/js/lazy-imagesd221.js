function lazy_load_init() {
    $('span[data-src]').bind('scrollin', {distance: 200}, function () {
        lazy_load_image_now(this);
    });


    $('[data-back-src]').bind('scrollin', {distance: 200}, function () {
        lazy_load_background(this);
    });
}
// функция проверки полной видимости элемента
function checkPosition(el){
    if ($(document).scrollTop() + $(window).height() + 150 > $(el).offset().top && $(document).scrollTop() - $(el).offset().top - 150 < $(el).height())
        return true;
    else
        return false;
}

function getAttrsAsJson(tg)
{
    var strAttr = {};
    $.each(tg.attributes, function()
    {
        if(this.specified)
        {
            var name =  this.name;
            if(this.name=='data-src' || this.name== 'data-tabs-src' || this.name=='data-menu-src')
                name = 'src';
            strAttr[name] = this.value;
        }
    });
    return strAttr;
}
function lazy_load_image_now(img)
{

    var $img = jQuery(img),
        src = $img.attr('data-src');
    if (!src || 'undefined' === typeof(src))
        return;
    var strAttr = getAttrsAsJson(img);
    if(checkPosition($img)==false) return;
    var img = $('<img />', strAttr);
    $img.replaceWith(function(){
        return img.outerHTML();
    });
    /*
    $img.unbind('scrollin')
        .hide()
        .removeAttr('data-src')
        .attr('data-lazy-loaded', 'true');

    img.src = src;
    $img.fadeIn();
    */
}
jQuery.fn.outerHTML = function(s) {
    return s
        ? this.before(s).remove()
        : jQuery("<p>").append(this.eq(0).clone()).html();
};
function lazy_load_image(img, tp, i) {

    var $img = jQuery(img),
        src = $img.attr('data-'+tp+'-src');
    if (!src || 'undefined' === typeof(src))
        return;
    var strAttr = getAttrsAsJson(img);
    var img = $('<img />', strAttr);
    $img.replaceWith(function(){
        return img.outerHTML();
    });
    /*
    $img.unbind('scrollin')
        .hide()
        .removeAttr('data-'+tp+'-src')
        .attr('data-lazy-loaded', 'true');

    img.src = src;
    $img.fadeIn();
    checkParent($img);
    */
}

function checkParent(el)
{
    console.log(el.parent().parent().parent().parent().parent());
}
function lazy_load_background(img)
{
    var $img = jQuery(img),
        src = $img.attr('data-back-src');

    if (!src || 'undefined' === typeof(src))
        return;

    $img.unbind('scrollin')
        .hide()
        .removeAttr('data-back-src')
        .attr('data-lazy-loaded', 'true');

    $img.attr("style",'background-image:url('+src+');');
    $img.fadeIn();
}

/**
 * run after ajax-call success for example
 */
function lazy_run(tp, etabsitemCurr) {
    var cla = (tp=='tabs') ? 'b-tabs--section':'b-dropdown-menu--section';

    $($('.'+cla).get(etabsitemCurr.data('section'))).find('span[data-'+tp+'-src]').each(function () {
        lazy_load_image(this, tp, etabsitemCurr.data('section'));
    });
}
function lazy_run_full() {
    $('body').find('span[data-src]').each(function () {
        lazy_load_image_now(this);
    });
}
function lazy_run_visible_only() {
    $('body').find('span[data-src]:visible').each(function () {
        lazy_load_image(this);
    });
}

function lazy_run_image_compare () {
    $('body').find('.compare-images-ajax span[data-src]').each(function (i, item) {
        var $img = jQuery(item),
            src = $img.attr('data-src');
        if (!src || 'undefined' === typeof(src))
            return;
        var strAttr = getAttrsAsJson(item);
        var img = $('<img />', strAttr);
        $img.replaceWith(function(){
            return img.outerHTML();
        });
    });
    return true;
}

$(document).ready(function(){setTimeout("lazy_run_full();",100)});

(function ($) {
    lazy_load_init();
    window.onscroll = function() {
        console.log('scroll');
        $('body').find('span[data-src]').each(function () {
            lazy_load_image_now(this);
        });
        $('body').find('.lazyload-span').each(function () {
            lazy_load_image_now(this);
        });
    };
    if($('.e-tabs--item--title').length > 0)
        $('.e-tabs--item--title:first').click();
})(jQuery);