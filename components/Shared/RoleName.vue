<template>
    <div class="role-name-wrapper">
        {{ formattedRoleName }}
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
    computed: {
        formattedRoleName () {
            return this.roleName.toUpperCase();
        },
    },
};
</script>

<style>
    .role-name-wrapper {
        font-weight: bold;
    }
</style>
