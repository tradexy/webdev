// images data

var galleryTitle = 'Finance';

var imagesData = 
    
    [
      {'imagePath': 'http://sorgalla.com/jcarousel/examples/_shared/img/img1.jpg',
       'thumbPath': 'http://sorgalla.com/jcarousel/examples/_shared/img/img1_thumb.jpg',
       'description': 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum'
      },
      {'imagePath': 'http://sorgalla.com/jcarousel/examples/_shared/img/img2.jpg',
       'thumbPath': 'http://sorgalla.com/jcarousel/examples/_shared/img/img2_thumb.jpg',
       'description': 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum'
      },
      {'imagePath': 'http://sorgalla.com/jcarousel/examples/_shared/img/img3.jpg',
       'thumbPath': 'http://sorgalla.com/jcarousel/examples/_shared/img/img3_thumb.jpg',
       'description': 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum'
      },
      {'imagePath': 'http://sorgalla.com/jcarousel/examples/_shared/img/img4.jpg',
     'thumbPath': 'http://sorgalla.com/jcarousel/examples/_shared/img/img4_thumb.jpg',
       'description': 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum'
      },
      {'imagePath': 'http://sorgalla.com/jcarousel/examples/_shared/img/img5.jpg',
     'thumbPath': 'http://sorgalla.com/jcarousel/examples/_shared/img/img5_thumb.jpg',
       'description': 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum'
      },
      {'imagePath': 'http://sorgalla.com/jcarousel/examples/_shared/img/img6.jpg',
       'thumbPath': 'http://sorgalla.com/jcarousel/examples/_shared/img/img6_thumb.jpg',
       'description': 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum'
      }
    ];
  
console.log(imagesData);

//
   var connector = function (itemNavigation, carouselStage) {
        return carouselStage.jcarousel('items').eq(itemNavigation.index());
    };

    $(function () {
        // Setup the carousels. Adjust the options for both carousels here.
        var carouselStage = $('.carousel-stage').jcarousel();
        var carouselNavigation = $('.carousel-navigation').jcarousel();

        // We loop through the items of the navigation carousel and set it up
        // as a control for an item from the stage carousel.
        carouselNavigation.jcarousel('items').each(function () {
            var item = $(this);

            // This is where we actually connect to items.
            var target = connector(item, carouselStage);

            item
                .on('jcarouselcontrol:active', function () {
                    carouselNavigation.jcarousel('scrollIntoView', this);
                    item.addClass('active');
                })
                .on('jcarouselcontrol:inactive', function () {
                    item.removeClass('active');
                })
                .jcarouselControl({
                    target: target,
                    carousel: carouselStage
                });
        });

        // Setup controls for the stage carousel
      
      /*
        $('.prev-stage')
            .on('jcarouselcontrol:inactive', function () {
                $(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function () {
                $(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.next-stage')
            .on('jcarouselcontrol:inactive', function () {
                $(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function () {
                $(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });
         */

        // Setup controls for the navigation carousel
        $('.prev-navigation')
            .on('jcarouselcontrol:inactive', function () {
                $(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function () {
                $(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '-=5'
            });

        $('.next-navigation')
            .on('jcarouselcontrol:inactive', function () {
                $(this).addClass('inactive');
            })
            .on('jcarouselcontrol:active', function () {
                $(this).removeClass('inactive');
            })
            .jcarouselControl({
                target: '+=5'
            });  
      
       //update images from json
      
});
//json update images data 
        function reloadImages(){
          
          // update the album title
          $('.albumTitle').html(galleryTitle);
          
          //get the images d into the li
            var stageHtml = '<ul>', thumbHtml = '<ul>';
            $.each(imagesData, function(i) {
                stageHtml += '<li><img src="' + this.imagePath + '" alt="' + i + '"><p>'+this.description+'</p></li>';
                thumbHtml += '<li><img src="' + this.thumbPath + '" alt="' + i + '"></li>';
            });
            stageHtml += '</ul>';
            thumbHtml += '</ul>';
            console.log(stageHtml);
            console.log(thumbHtml);
            $('.carousel-stage').html(stageHtml);
            $('.carousel-navigation').html(thumbHtml);

            // Reload carousel
           carouselStage.carouselStage('reload');
           carouselNavigation.carouselStage('reload');
        }
 reloadImages();
  // });