<template>
    <div class="role-wrapper">
        <div class="role-header">
            <ac-role-info
                :role-name="roleName"
                :location="location"
                :start-date="startDate"
                :end-date="endDate"
                :organization="organization"
                :website="website"/>
        </div>
        <ul class="role-items">
            <slot/>
        </ul>
        <ac-role-divider/>
    </div>
</template>

<script>
import RoleInfoVue from './RoleInfo.vue';
import RoleDividerVue from './RoleDivider.vue';
export default {
    components: {
        'ac-role-info': RoleInfoVue,
        'ac-role-divider': RoleDividerVue,
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
            default: undefined, // put new Date() for 'present'
        },
        organization: {
            type: String,
            default: '',
        },
        website: {
            type: String,
            default: '',
        },
    },
};
</script>

<style>

</style>
