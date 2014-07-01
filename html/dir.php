<?php 
	$dir    = '.';
	$files = scandir($dir);
	
	foreach($files as $key => $value){
		echo '<a href="' . $value .'" target="_blank">' . $value . '</a><br>';
	}
?>