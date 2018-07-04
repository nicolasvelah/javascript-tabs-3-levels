jQuery(document).ready(function () {
    //NIVEL 1
    jQuery(".item_nv").click(function () {
        tabid = jQuery(this).attr('target_tab');
        menu = jQuery(this).attr('menu');
        content = jQuery(this).html();
        tabview(tabid, content, '.tab_nv', 1, jQuery(this), menu);
        active(jQuery(this), '1');
    });

    //NIVEL 2
    jQuery(".item_nv2").click(function () {
        tabid = jQuery(this).attr('target_tab');
        tabview(tabid, '', '.tab_nv', 2, jQuery(this));
        active(jQuery(this), '2');
    });

    //NIVEL 3
    jQuery(".item_nv3").click(function () {
        tabid = jQuery(this).attr('target_tab');
        tabview(tabid, '', '.tab_nv', 3, jQuery(this));
        active(jQuery(this), '3');
    });

    active(jQuery('.item_nv:first-child'), '1');
    function active(element, level) {
        if(level == '1'){
            jQuery('.tabmenu').children('a').each(function () {
                jQuery(this).removeClass( "active" );
            });
            menu = element.attr( "menu" );
            jQuery('.'+menu).children('li:first-child').children('a').addClass( "active" );
        }else if(level == '2'){
            jQuery('ul').children('li').children('a').each(function () {
                jQuery(this).removeClass( "active" );
            });
        }else {
            jQuery('ul').children('li').children('ul').children('li').children('a').each(function () {
                jQuery(this).removeClass( "active" );
            });
        }
        
        element.addClass( "active" );
    }

    //MUESTRA EL TAB SELECCIONADO
    function tabview(tabid, content, element, tipo, this_el, menu) {
        jQuery(element).each(function () {
            jQuery(this).hide();
        });
        jQuery('#' + tabid).show();

        if (tipo == 1) {
            jQuery('#tabtit').html(content);

            jQuery('.level1').each(function () {
                jQuery(this).hide();
            });
            jQuery('.' + menu).show();
        } else if (tipo == 2) {
            jQuery('.level2').each(function () {
                jQuery(this).hide();
            });
            this_el.parent('li').children('ul').show();
        }

    }

    /*iniciliza los 3 niveles*/
    jQuery('.tab_nv').each(function () {
        jQuery(this).hide();
    });

    jQuery('#tab1').show();

    jQuery('.level1').each(function () {
        jQuery(this).hide();
    });
    jQuery('.menu1').show();

    jQuery('.level2').each(function () {
        jQuery(this).hide();
    });

    jQuery('.menu1').children('li:first-child').children('ul').show();

});