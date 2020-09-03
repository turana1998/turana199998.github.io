$(function () {
    /**
     * Подгружаемый блок сравнения двух картинок
     * itemID (data-id) - ID элемента в инфоблоке
     */
    var $compareImageObj = $(".compare-images-ajax");
    if ($compareImageObj.length > 0) {
        $compareImageObj.each(function () {
            var _this = $(this);
            var itemID = _this.data('id');
            if (itemID !== "" && $.isNumeric(itemID)) {
                $.ajax({
                    type: "POST",
                    url: '/ajax/compare-image.php',
                    dataType: "html",
                    data: {
                        'itemID': itemID
                    },
                    success: function (out) {
                        if(out !== "") {
                            _this.append(out);
                            if (lazy_run_image_compare()) {
                                var twentytwentyContainer = $(".twentytwenty-container");
                                console.log(twentytwentyContainer);
                                twentytwentyContainer.twentytwenty({
                                    no_overlay: true
                                });

                                var imgHeight = twentytwentyContainer.find('span[data-src]').css('height');
                                twentytwentyContainer.css('height', imgHeight);
                            }

                        }
                    }
                })
            }
        });
    }

});