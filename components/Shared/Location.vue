<template>
    <div class="location-wrapper">
        {{ location }}
    </div>
</template>

<script>
export default {
    props: {
        location: {
            type: String,
            default: '',
        },
    },
};
</script>

<style>

</style>
