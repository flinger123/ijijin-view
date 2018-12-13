<!-- 
 button
 -->

<template>
	<a 
		class="vu-btn"
		:class="[ inline ? 'u-btn_il' : 'u-btn', 'btn-' + type, disabled && 'z-disabled', className ]"
		:href="link || 'javascript:void(0)'"
		v-if="link"
		v-on="$listeners"
	><slot></slot></a>
	<button
		class="vu-btn"
		:class="[ inline ? 'u-btn_il' : 'u-btn', 'btn-' + type, disabled && 'z-disabled', className ]"
		v-on="$listeners"
		v-else
	><slot></slot></button>
</template>

<script>
	export default {
		name: 'button',

		props: {
			link: String,
			inline: {
				type: Boolean,
				default: true
			},
			type: {
				type: String,
				default: 'default'
			},
			disabled: Boolean,
			className: [String, Array]
		}
	}
</script>