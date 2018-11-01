$(document).ready(function(){


    var x = 0;
    var images = ['cinnamon001.jpeg', 'roller001.jpeg', 'baking001.jpeg',]

    //forward
    $('#banner-right-btn').click(function(){

        if(x < images.length - 1 ) {
            x++;
        }else {
            x = 0;
        }

        $('#image-slider').css({"background-image":"url(/assets/images/"+images[x]+")"});
    });

    // backward
    $('#banner-left-btn').click(function(){

        if(x > 0) {
            x--;
        }else {
            x = images.length - 1;
        }

        $('#image-slider').css({"background-image":"url(/assets/images/"+images[x]+")"});

    });


    // Filter gallery
    $('#all-btn').click(function(){

        $('#filter-menu button').removeClass('active');
        $(this).addClass('active');

        $('.all').hide();
        $('.all').show();
    });

    $('#glazed-btn').click(function(){

        $('#filter-menu button').removeClass('active');
        $(this).addClass('active');

        $('.all').hide();
        $('.glazed').show();
    });

    $('#plated-btn').click(function(){

        $('#filter-menu button').removeClass('active');
        $(this).addClass('active');

        $('.all').hide();
        $('.plated').show();
    });

    $('#unglazed-btn').click(function(){

        $('#filter-menu button').removeClass('active');
        $(this).addClass('active');

        $('.all').hide();
        $('.unglazed').show();
    });


    //Tab Navigation
    $('#history-btn').click(function(){

        $('#about-btn, #recipe-btn').removeClass('active');
        $('#history-btn').addClass('active');

        $('#about-pane').hide();
        $('#recipe-pane').hide();
        $('#history-pane').show();


    });

    $('#recipe-btn').click(function(){

        $('#about-btn, #history-btn').removeClass('active');
        $('#recipe-btn').addClass('active');

        $('#about-pane').hide();
        $('#history-pane').hide();
        $('#recipe-pane').show();


    });

    $('#about-btn').click(function(){

        $('#about-btn, #recipe-btn').removeClass('active');
        $('#about-btn').addClass('active');

        $('#recipe-pane').hide();
        $('#history-pane').hide();
        $('#about-pane').show();


    });

    // shadowbox

    var imagesSh = [];
    var imgIndex = 0;

    //Push all images into global images array


    $('.all img').each(function(){

        var imgSrc = $(this).attr('src').replace('/Resized-images/', '/large/');
        imagesSh.push(imgSrc);
    });

    // console.log(images);

    $('.all img').click(function(){

        var imgSrc = $(this).attr('src').replace('/Resized-images/', '/large/');
        $('#shadow-img').attr('src', imgSrc);

        imgIndex = $.inArray(imgSrc, imagesSh);

        // console.log(imgIndex);

        var marginTop = $(window).scrollTop();
        $('#shadowbox').css({"margin-top":marginTop});
        $('.shadow-box-all').show();
    });



    $('#shadow-right').click(function(){

        imgIndex++;

        $('#shadow-img').attr('src', imagesSh[imgIndex]);

    });

    $('#shadow-left').click(function(){

        imgIndex--;

        $('#shadow-img').attr('src', imagesSh[imgIndex]);

    });



    // close shadowbox
    $('#shadow-close').click(function(){

        $('.shadow-box-all').hide();

    });




}); // END DOCUMENT READY
