<?php
/**
 * Plugin Name: Gutenberg Note Block
 * Description: A simple "Note" Gutenberg block built with @wordpress/scripts.
 * Version: 0.1.0
 * Author: Armaan Patnaik
 */
if ( ! defined( 'ABSPATH' ) ) exit;
function ap_register_note_block() {
    register_block_type( __DIR__ );
}
add_action('init','ap_register_note_block');
