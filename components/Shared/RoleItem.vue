<template>
    <li class="role-item-wrapper">
        <div v-if="text" class="standard-text">
            {{ text }}
        </div>
        <slot/>
    </li>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: undefined,
        },
    },
};
</script>

<style>

</style>
