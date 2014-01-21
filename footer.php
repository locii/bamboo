<?php global $bamboo ?>
	<footer class="footer" role="contentinfo">
		
		<div id="inner-footer" class="wrap clearfix">

			<nav role="navigation">
							<?php bones_footer_links(); ?>
			</nav>

			<p class="source-org copyright">&copy; <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?>.</p>

		</div>

	</footer>




		<?php // all js scripts are loaded in library/bones.php ?>
		<?php wp_footer(); ?>
		
		<?php echo zen::lazyload(
				$bamboo['lazyload'],
				$bamboo['lazyload-selector'],
				$bamboo['lazyload-not-selector']); 
		?>
		
		 <!-- Back To Top -->
				<?php echo zen::backtotop(
					$bamboo['backtotop'])
				?>
		
				<!-- Sticky Nav -->
				<?php echo zen::stickynav(
					$bamboo['stickynav'],
					$bamboo['stickynav-threshold'])
				?>
		
				
				<!-- Fonts -->
				<?php echo zen::fonts(); ?>

	</body>

</html>
