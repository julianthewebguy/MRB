

    $(function () {
        $('.toggle-menu').click(function () {
            $('.exo-menu').toggleClass('display');

        });

    });



    jQuery(document).ready(function () {
        if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {

            var listingFooter = jQuery('<!--AboveMedia Footer Content Starts --> <!-- Back to top--> <style> .button-row2 a { padding: 0.9em; background-color: #071594; color: #fff; text-decoration: none; border-radius: 26px; border: 1px solid #071594; } #toTop { padding: 5px 3px; color: #fff; position: fixed; bottom: 50px; right: calc(50% - 60px); display: none; } @media only screen and (min-width: 1444px) { #toTop { display: none !important; } } .custom-shape-divider-bottom-1665691037 { left: 0; width: 100%; overflow: hidden; line-height: 0; position: relative; bottom: -1px; } .custom-shape-divider-bottom-1665691037 svg { position: relative; display: block; width: calc(100% + 1.3px); height: 46px; } .custom-shape-divider-bottom-1665691037 .shape-fill { fill: #eee; } </style> <div id="toTop" class="button-row2 align-center"><a href="#Top">Back to Top</a> </div> <div class="custom-shape-divider-bottom-1665691037"> <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"> <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path> </svg> </div> <div class="secondaryBackground"> <div class="mainBackground py-5"> <div id="mid-footer"> <div class="footer-flexContainer"> <div class="footer-flex footer-left"> <h2>Mexico Realty Brokers</h2> <br /> <p><strong><a href="tel:+529842087189"><i class="fas fa-phone-alt socials"></i> +52 984 208 7189</a></strong> </p> <p><strong><a href="tel:+529841688866"><i class="fas fa-phone-alt socials"></i> +52 984 168 8866</a></strong> </p> <p>Playa del Carmen, Quintana Roo </p> <p> Mexico</p> <!-- <div class="footer-social"> <h3>Follow Us:</h3> <a href="#" target="_blank"><i class="fab fa-facebook-f socials"></i></a> <a href="#" target="_blank"><i class="fab fa-youtube socials"></i></a> <a href="#" target="_blank"><i class="fab fa-instagram socials"></i></a> </div> </div>--> </div> <div class="footer-flex no-mobile"> <img src="https://mediavault.point2.com/p2a/htmltext/2fa4/c479/2bb4/b938acc56be22180e935/original.png" alt="Mexico Realty Brokers - Playa del Carmen Real Estate">  </div> <div class="footer-flex footer-right"> <h2 class="title">Useful Links</h2> <ul> <li><a href="/">Home</a></li> <li><a href="/cancun_real_estate/page_2712346.html">Cancun Real Estate</a></li> <li><a href="/playa_del_carmen_real_estate/page_2712347.html">PLaya del Carmen Real Estate</a></li> <li><a href="/playa_del_carmen_real_estate/page_2712348.html">Tulum Real Estate</a></li> <li><a href="/puerto_morelos_real_estate/page_2712349.html">Puerto Morelos</a></li> <li><a href="/puerto_aventuras_real_estate/page_2712350.html">Puerto Aventuras</a></li> <li><a href="/akumal_real_estate/page_2712351.html">Akumal</a></li> <li><a href="/mahahual_real_estate/page_2712352.html"> Mahahual</a></li> <li><a href="/riviera_maya_real_estate/page_2712353.html">All Riviera Maya</a></li> <li><a href="https://blog.mexicorealtybrokers.net/">Blog</a></li> <li><a href="/about_us/page_2712366.html">About Us</a></li> <li><a href="/contact_me/page_2712331.html">Contact Us</a></li> </ul> </div> <div class="footer-flex only-mobile"> <img src="https://mediavault.point2.com/p2a/htmltext/2fa4/c479/2bb4/b938acc56be22180e935/original.png" alt="Mexico Realty Brokers - Playa del Carmen Real Estate">  </div> </div> </div> </div> <div id="final-footer" class="secondaryBackground"> <a href="https://abovemedia.ca" title="Real Estate Marketing" target="_blank" rel="nofollow">Real Estate Marketing</a> by AboveMedia Canada. </div> <!--AboveMedia Footer Content Ends -->');

            jQuery('body').append(listingFooter);
        }

        jQuery(".row-fluid").last().addClass("footerBG");
    });



    function addCustomClasses() {
        if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {
            var headerDiv = document.getElementsByClassName('maindiv')[0];
        }
        else {
            var headerDiv = document.getElementsByClassName('row-fluid')[1];
        }
        headerDiv.classList.add('headerBG');
    }
    document.ready = addCustomClasses;

    // When the user scrolls the page, execute myFunction 
    window.onscroll = function () { myFunction() };
    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        // Get the header depending on whether we're on a listing page or not
        if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {
            var header = document.getElementsByClassName('maindiv')[0];
            //console.log('AM');
        }
        else {
            var header = document.getElementsByClassName('headerBG')[0];
        }
        //Get the offset position of the navbar
        var sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }


    // Make home fill width
    $(document).ready(function () {
        var url = location.href;
        var headerDiv = document.getElementsByClassName('row-fluid')[2];
        console.log(url)
        if (url == "https://www.mexicorealtybrokers.net/" || url == "http://www.playadelcarmenrealestatemexico.com/" || url == "https://www.mexicorealtybrokers.net/#" || url == "http://www.playadelcarmenrealestatemexico.com/#" || (window.location.href.indexOf('https://www.mexicorealtybrokers.net/homes.aspx?__ts=') == 0)) {
            headerDiv.classList.add('fullwidth');
        }

    });

    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
