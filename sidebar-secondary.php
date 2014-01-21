<?php 

	global $bamboo;
	
	// Logic for sidebar widths
	if($bamboo['cpt_layout_toggle']) {
		if(is_page()) { 
			$sidebar2width = $bamboo['page-sidebar1-width'];
	
		} 	elseif(is_search()) {
				$sidebar2width = $bamboo['search_sidebar1-width'];
		}	elseif(is_single()) {
				$sidebar2width = $bamboo['single-sidebar2-width'];
		}else {
			$sidebar1width = $bamboo['sidebar1-width'];
		}
	}
	else {
		$sidebar1width = $bamboo['sidebar2-width'];
	}?>
	
	<div id="sidebar2" class="sidebar col col-<?php echo $sidebar2width; ?>" role="complementary">

	<?php if ( is_active_sidebar( 'sidebar-secondary' ) ) : ?>

		<?php dynamic_sidebar( 'sidebar-secondary' ); ?>

	<?php else : ?>

		<?php // This content shows up if there are no widgets defined in the backend. ?>

		<div class="alert alert-help">
			<p><?php _e( 'Please activate some Widgets.', 'bonestheme' );  ?></p>
		</div>

	<?php endif; ?>

</div>