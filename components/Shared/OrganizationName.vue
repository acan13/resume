<template>
    <div class="organization-name-wrapper">
        <i>
            {{ organization }}
        </i>
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
    .organization-name-wrapper {
        font-weight: bold;
    }
</style>
