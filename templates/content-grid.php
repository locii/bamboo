<?php
	/**
	 * Show page title and content
	 */
	?>
	<?php if ( have_posts() ) : ?>
		<?php while ( have_posts() ) : the_post(); ?>
			<header class="entry-header">
				<h1 class="page-title"><?php the_title(); ?></h1>
			</header>
			<div class="entry-content">
				<?php the_content(); ?>
			</div>
		<?php endwhile; ?>

		<div class="entry-content columns">

		<?php
		/**
		 * Create a new WP_Query
		 * Set $wp_query object to temp
		 * Grab $paged variable so pagination works
		 */
		?>
		<?php
			global $wp_query; $post; $post_id = $post-> ID;
			$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
			rewind_posts();
			$temp = $wp_query;
			$wp_query = NULL;
			$columns = '2';
			$post_type = 'post'; // change this to the post type you want to show
			$show_posts = '12'; // change this to how many posts you want to show

		?>
		<?php $wp_query = new WP_Query( 'post_type=' . $post_type . '&posts_per_page=' . $show_posts . '&paged=' . $paged ); ?>
			<?php 
			$counter = 0;
			while ( $wp_query->have_posts() ) : $wp_query->the_post();
			$counter++;
			
			?>
			
			<div class="col col-<?php echo 12/$columns; ?> item-<?php echo $counter;?> <?php if($counter == "1") { echo "first";} ?>">
				<a href="<?php the_permalink(); ?>" rel="bookmark" title="<?php printf(__('Permanent Link to %s'),the_title_attribute('echo=0')); ?>"><?php the_post_thumbnail('medium'); ?></a>
				<h2 class="entry-title"><a href="<?php the_permalink(); ?>" rel="bookmark" title="<?php printf(__('Permanent Link to %s'),the_title_attribute('echo=0')); ?>"><?php the_title(); ?></a></h2>
			</div><!-- .column -->
			<?php 
				if($counter == $columns) {
					$counter = 0;
					echo '<div class="clearfix"></div>';
				}
				
			endwhile; ?>
		<?php wp_reset_postdata(); ?>
		</div><!-- .columns -->
		<div class="clearfix"></div>
		<?php previous_posts_link(); ?>
		<?php next_posts_link(); ?>

		<?php $wp_query = NULL; $wp_query = $temp; ?>

	<?php else : ?>

		<?php get_template_part('templates/content', 'notfound'); ?>

	<?php endif; ?>