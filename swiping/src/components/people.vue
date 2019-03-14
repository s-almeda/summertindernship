<template>
	<div class="people">
		<ul>
			<li>{{ name }}</li>
			<li>Position</li>
			<li>Status</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'people',
	props: {
		name: String
	}
}

</script>