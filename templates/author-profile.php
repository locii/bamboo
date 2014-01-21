<?php
/*
Author profile partial
*/
?>

<div id="author-profile-avatar" class="col col-3 first">
	<?php echo get_avatar( $post->post_author );?>
</div>

<div id="author-profile" class="col col-9 last">
	<p>More posts by <?php the_author_posts_link(); ?></p>
	<?php echo my_get_display_author_posts();?>
</div>