<?php
//* Start the engine
include_once( get_template_directory() . '/lib/init.php' );

//* Set Localization (do not remove)
load_child_theme_textdomain( 'eleven40', apply_filters( 'child_theme_textdomain', get_stylesheet_directory() . '/languages', 'eleven40' ) );

//* Child theme (do not remove)
define( 'CHILD_THEME_NAME', __( 'eleven40 Pro Theme', 'eleven40' ) );
define( 'CHILD_THEME_URL', 'http://my.studiopress.com/themes/eleven40/' );
define( 'CHILD_THEME_VERSION', '2.0' );

//* Add HTML5 markup structure
add_theme_support( 'html5' );

//* Add viewport meta tag for mobile browsers
add_theme_support( 'genesis-responsive-viewport' );

//* Load Lora and Oswald Google fonts
add_action( 'wp_enqueue_scripts', 'eleven40_google_fonts' );
function eleven40_google_fonts() {
	wp_enqueue_style( 'google-font', '//fonts.googleapis.com/css?family=Lora:400,700|Oswald:400', array(), PARENT_THEME_VERSION );
}

//* Add new featured image size
add_image_size( 'grid-featured', 270, 100, TRUE );

//* Create additional color styles
add_theme_support( 'genesis-style-selector', array(
	'eleven40-pro-blue'	=> __( 'eleven40 Pro Blue', 'eleven40' ),
	'eleven40-pro-green'	=> __( 'eleven40 Pro Green', 'eleven40' ),
	'eleven40-pro-red'	=> __( 'eleven40 Pro Red', 'eleven40' )
) );

//* Add support for custom header
add_theme_support( 'custom-header', array(
	'width'			=> 320,
	'height'		=> 65,
	'header-selector'	=> '.site-header .title-area',
	'header-text'		=> false
) );

//* Add support for structural wraps
add_theme_support( 'genesis-structural-wraps', array(
	'header',
	'nav',
	'subnav',
	'site-inner',
	'footer-widgets',
	'footer'
) );

//* Reposition the primary navigation menu
remove_action( 'genesis_after_header', 'genesis_do_nav' );
add_action( 'genesis_before_content_sidebar_wrap', 'genesis_do_nav' );

//* Reposition the secondary navigation menu
remove_action( 'genesis_after_header', 'genesis_do_subnav' );
add_action( 'genesis_before_content_sidebar_wrap', 'genesis_do_subnav' );

//* Reposition the site description
remove_action( 'genesis_site_description', 'genesis_seo_site_description' );
add_action( 'genesis_before_content_sidebar_wrap', 'genesis_seo_site_description' );

//* Add support for 3-column footer widgets
add_theme_support( 'genesis-footer-widgets', 3 );
