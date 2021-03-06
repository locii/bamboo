<?php global $bamboo;
	
	// Logic for sidebar widths
	if($bamboo['cpt_layout_toggle']) {
		$layout = $bamboo['single_layout'];
		$mainwidth = $bamboo['single-main-width'];
	} else {
		$layout = $bamboo['layout'];
		$mainwidth = $bamboo['main-width'];
	}

	if($layout == 0) {
		$mainwidth = "12";
		$layout_type = "full-width";
	}
	
	if($layout == 1) {
		$layout_type = "main-left two-col";
	} elseif ($layout == 2) {
		$layout_type = "main-right two-col";
	} elseif ($layout == 3) {
		$layout_type = "main-right three-col";
	} elseif ($layout == 4) {
		$layout_type = "main-left three-col";
	} elseif ($layout == 5) {
		$layout_type = "left-mid-right three-col";
	}
	
	
	get_header(); ?>

	<section id="main" class="single">
			<div id="content" class="container <?php echo $layout_type; ?>">

				<div id="inner-content" class="wrap clearfix">

					<?php // Small compromise on not adding pull classes for three cols
						if($layout =="5") { 
							get_sidebar();
						} ?>
					

					<div id="main" class="col col-<?php echo $mainwidth; ?> first clearfix" role="main">
					
						<?php the_breadcrumb(); ?>
						<?php get_template_part('templates/content', 'single'); ?>
						<?php if($bamboo['author_profile']) { get_template_part('templates/author', 'profile');} ?>
					</div>

					<?php if($layout > 0 && $layout < 5) { 
							get_sidebar();
						} ?>
					
					<?php if($layout > 2) { 
							get_sidebar('secondary');
						} ?>

				</div>

			</div>
	</section>
<?php get_footer(); ?>
