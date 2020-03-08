<template>
    <div class="role-wrapper">
        <div class="role-header">
            <ac-role-info :role-name="roleName" :location="location" :start-date="startDate" :end-date="endDate" :organization="organization"/>
        </div>
        <div class="role-items">
            <slot/>
        </div>
    </div>
</template>

<script>
import RoleInfoVue from './RoleInfo.vue';
export default {
    components: {
        'ac-role-info': RoleInfoVue,
    },
    props: {
        roleName: {
            type: String,
            default: '',
        },
        location: {
            type: String,
            default: '',
        },
        startDate: {
            type: Date,
            default: undefined,
        },
        endDate: {
            type: Date,
            default: undefined, // put today for 'present'
        },
        organization: {
            type: String,
            default: '',
        },
    },
};
</script>

<style>

</style>
