<template>
    <div class="leadership-service-wrapper">
        <ac-section section-title="Leadership & Service">
            <ac-role role-name="Volunteer Representative" location="Sao Paulo, Brazil" organization="The Church of Jesus Christ of Latter-Day Saints" :start-date="missionStartDate" :end-date="missionEndDate">
                <ac-role-item>
                    Trained and led a team that increased effectiveness by 400%, improving from worst to second-best area
                </ac-role-item>
                <ac-role-item>
                    Developed the ability to work with people of many different backgrounds and skill sets
                </ac-role-item>
            </ac-role>
            <ac-role role-name="Eagle Scout Award" location="Flower Mound, TX" organization="Boy Scouts of America" :start-date="eagleScoutDate">
                <ac-role-item>
                    Coordinated over 100 hours of volunteer work from over 50 volunteers
                </ac-role-item>
                <ac-role-item>
                    Organized the donation of over 500 items of school supplies for needy families in inner-city Dallas
                </ac-role-item>
                <ac-role-item>
                    Planned an event to help over 100 inner-city students to prepare for a new school year
                </ac-role-item>
            </ac-role>
        </ac-section>
    </div>
</template>

<script>
import SectionVue from '../Shared/Section.vue';
import RoleVue from '../Shared/Role.vue';
import RoleItemVue from '../Shared/RoleItem.vue';
export default {
    components: {
        'ac-section': SectionVue,
        'ac-role': RoleVue,
        'ac-role-item': RoleItemVue,
    },
    created () {
        this.missionStartDate = new Date(2009, 6);
        this.missionEndDate = new Date(2011, 6);
        this.eagleScoutDate = new Date(2008, 10);
    },
};
</script>

<style>

</style>
