<template>
    <div class="resume-wrapper">
        <div class="resume-header">
            <ac-header/>
        </div>
        <div class="resume-tech-summary">
            <ac-tech-summary/>
        </div>
        <div class="experience-summary">
            <ac-experience/>
        </div>
        <div class="education-summary">
            <ac-education/>
        </div>
        <div class="leadership-service-summary">
            <ac-leadership-service/>
        </div>
    </div>
</template>

<script>
import HeaderVue from '~/components/Header/Header.vue';
import TechnicalSummaryVue from '~/components/TechSummary/TechnicalSummary.vue';
import EducationVue from '~/components/Education/Education.vue';
import ExperienceVue from '~/components/Experience/Experience.vue';
import LeadershipServiceVue from '~/components/LeadershipService/LeadershipService.vue';
export default {
    components: {
        'ac-header': HeaderVue,
        'ac-tech-summary': TechnicalSummaryVue,
        'ac-education': EducationVue,
        'ac-experience': ExperienceVue,
        'ac-leadership-service': LeadershipServiceVue,
    },
};
</script>

<style>

</style>
