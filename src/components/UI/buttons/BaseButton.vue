<template>
    <button
        class="button"
        :type="type"
    >
        {{value}}
    </button>
</template>

<script>
export default {
    name: 'BaseButton',

    props: {
        value: [String, Number],
        type: {
            type: String,
            default: 'button',
        }
    }
}
</script>