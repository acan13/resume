<template>
    <div class="section-title-wrapper">
        {{ title }}
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
    .section-title-wrapper {
        font-size: 24px;
    }
</style>
