$(document).ready(function() {
    // Scroll to the top of the page when the document is ready
    $(window).scrollTop(0);

    // Scroll animation for elements with the "slideanim" class
    $(window).scroll(function() {
        $(".slideanim").each(function() {
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            if (pos < winTop + $(window).height() - 50) {
                $(this).addClass("slide");
            }
        });
    });

    // Smooth scrolling for navbar and footer links
    $(".navbar a, footer a[href='#myPage']").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {
                window.location.hash = hash;
            });
        }
    });

    // Load the navbar from an external file
    $("#navbar-placeholder").load("navbar.html");

    // Smoothly load content via AJAX for links with the class "ajax-link"
    $(document).on('click', '.ajax-link', function(event) {
        event.preventDefault();
        
        var url = $(this).attr('href');
        
        $('.page-content').fadeOut(500, function() {
            // Load new content via AJAX
            $('.page-content').load(url + ' .page-content', function() {
                // Fade in the new content
                $('.page-content').fadeIn(500);
                
                // Scroll to top after loading new content
                $('html, body').animate({ scrollTop: 0 }, 'slow');
            });
        });

        // Update the URL in the browser without reloading the page
        history.pushState(null, '', url);
    });

    // Handle back/forward buttons with AJAX content loading
    window.addEventListener('popstate', function() {
        var url = window.location.href;
        
        $('.page-content').fadeOut(500, function() {
            // Load the content corresponding to the current URL
            $('.page-content').load(url + ' .page-content', function() {
                $('.page-content').fadeIn(500);
            });
        });
    });
});
