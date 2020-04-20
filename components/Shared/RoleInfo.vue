<template>
    <div class="role-info-wrapper">
        <div class="role-info role-info-header-line">
            <div class="role-name-group">
                <ac-role-name :role-name="roleName"/>
                <div v-if="roleName && website" class="role-name-group-divider">
                    -
                </div>
                <a v-if="website" :href="website">{{ website }}</a>
            </div>
            <ac-role-dates :start-date="startDate" :end-date="endDate"/>
        </div>
        <div class="organization-info role-info-header-line">
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
        website: {
            type: String,
            default: '',
        },
    },
};
</script>

<style>
    .role-info-header-line {
        display: flex;
        justify-content: space-between;
    }

    .role-name-group {
        display: flex;
        justify-content: flex-start;
    }

    .role-name-group-divider {
        padding-left: 10px;
        padding-right: 10px;
    }
</style>
