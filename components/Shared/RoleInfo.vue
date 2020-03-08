<template>
    <div class="role-info-wrapper">
        <div class="role-info">
            <ac-role-name :role-name="roleName"/>
            <ac-role-dates :start-date="startDate" :end-date="endDate"/>
        </div>
        <div class="organization-info">
            <ac-organization-name :organization="organization"/>
            <ac-location :location="location"/>
        </div>
    </div>
</template>

<script>
import RoleNameVue from './RoleName.vue';
import RoleDatesVue from './RoleDates.vue';
import OrganizationNameVue from './OrganizationName.vue';
import LocationVue from './Location.vue';
export default {
    components: {
        'ac-role-name': RoleNameVue,
        'ac-role-dates': RoleDatesVue,
        'ac-organization-name': OrganizationNameVue,
        'ac-location': LocationVue,
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
