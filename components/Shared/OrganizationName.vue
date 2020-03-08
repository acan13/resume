<template>
    <div class="organization-name-wrapper">
        {{ organization }}
    </div>
</template>

<script>
export default {
    props: {
        organization: {
            type: String,
            default: '',
        },
    },
};
</script>

<style>

</style>
