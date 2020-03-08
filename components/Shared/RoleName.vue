<template>
    <div class="role-name-wrapper">
        {{ roleName }}
    </div>
</template>

<script>
export default {
    props: {
        roleName: {
            type: String,
            default: '',
        },
    },
};
</script>

<style>

</style>
