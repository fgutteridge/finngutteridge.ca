<template>
	<article class="d-flex align-items-center justify-content-center text-center">
		<div>
			<h1 class="display-3 mb-0">In Development</h1>
			<hr>
			<a href="/" class="subtitle text-dark text-decoration-none">finngutteridge.ca</a>
			<aside class="d-flex justify-content-center mt-4">
				<a href="https://www.linkedin.com/in/finn-gutteridge-646530203/" target="_blank" class="circle-btn"><span class="bi bi-linkedin"></span></a>
				<a href="mailto:fgutteridge@gmail.com" class="circle-btn mx-3"><span class="bi bi-envelope-fill"></span></a>
				<a href="tel:+16474656478" class="circle-btn"><span class="bi bi-telephone-fill"></span></a>
			</aside>
		</div>
	</article>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component
	export default class Home extends Vue {
		// 
	}
</script>

<style lang="scss" scoped>
	article {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	h1 {
		letter-spacing: 5px;
	}
</style>