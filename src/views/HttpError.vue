<template>
    <article class="d-flex align-items-center justify-content-center text-center">
		<div>
            <h2 class="status-code mb-0">{{ statusCode }}</h2>

            <template v-if="statusMessage">
                <hr class="mt-0">
                <h1 class="subtitle mb-0">{{ statusMessage }}</h1>
            </template>

            <div class="d-flex justify-content-center mt-4">
                <router-link to="/" class="circle-btn"><span class="bi bi-house-door-fill"></span></router-link>
            </div>
        </div>
    </article>
</template>

<script lang="ts">
    import { Prop, Component, Vue } from 'vue-property-decorator'

    @Component
    export default class HttpError extends Vue {
        @Prop(Number) statusCode!: number;
        @Prop(String) statusMessage?: number;
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

    .status-code {
        font-weight: 300;
        font-size: 8rem;
    }
</style>