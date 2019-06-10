function showOverlay(wrapperId) {
    document.getElementById(wrapperId).classList.add('active');
}
function hideOverlay(wrapperId) {
    document.getElementById(wrapperId).classList.remove('active');
}

$(document).ready(function() {

    //Show / hide srcoll information container
    var scrollContainer = document.getElementById('scroll-container');

    if (scrollContainer) {
        document.addEventListener('scroll', function() {
            var offsetHeight = window.scrollY;
    
            if (offsetHeight > 12) {
                scrollContainer.classList.add('hidden');
            }
            else {
                scrollContainer.classList.remove('hidden');
            }
        });
    }

    //Scroll from menu to location handler
    var linkProjects = document.getElementById('link-projects');
    var projectStartElement = document.getElementById('project-start');

    if (linkProjects && projectStartElement) {
        linkProjects.addEventListener('click', function(event) {
            event.preventDefault();
    
            $('html, body').animate({
                scrollTop: $(projectStartElement).offset().top
            }, 200);
        });
    }    

    //Sidebar menu scroll to location handler
    $('aside.sidebar-menu a').on('click', function(e) {
        e.preventDefault();

        var destination = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(destination).offset().top
        }, 300);
    });

    //Sidebar menu show/hide on scroll
    if ($('.sidebar-menu').length && window.innerWidth > 1200) {       
        $(document).on('scroll', function() {
            var offsetHeight = window.scrollY;

            if (offsetHeight > $('#main-title').offset().top - 100) {
                $('.sidebar-menu').removeClass('hidden');
            }
            else {
                $('.sidebar-menu').addClass('hidden');
            }
        });
    }
});