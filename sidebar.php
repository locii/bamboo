<?php 

	global $bamboo;
	
	// Logic for sidebar widths
	
	if($bamboo['cpt_layout_toggle']) {
		if(is_page()) { 
			$sidebar1width = $bamboo['page-sidebar1-width'];
	
		} 	elseif(is_search()) {
				$sidebar1width = $bamboo['search_sidebar1-width'];
				
		}	elseif(is_single()) {
				$sidebar1width = $bamboo['single-sidebar1-width'];
		}	else {
			$sidebar1width = $bamboo['sidebar1-width'];
		}
	}	
	else {
		$sidebar1width = $bamboo['sidebar1-width'];
	}
	
	?>
	
	<div id="sidebar1" class="sidebar col col-<?php echo $sidebar1width; ?> last" role="complementary">

	<?php if ( is_active_sidebar( 'sidebar-primary' ) ) : ?>

		<?php dynamic_sidebar( 'sidebar-primary' ); ?>

	<?php else : ?>

		<?php // This content shows up if there are no widgets defined in the backend. ?>

		<div class="alert alert-help">
			<p><?php _e( 'Please activate some Widgets.', 'bonestheme' );  ?></p>
		</div>

	<?php endif; ?>

</div>