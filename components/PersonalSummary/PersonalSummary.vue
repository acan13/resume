<template>
    <div class="personal-summary-wrapper">
        <ac-section section-title="">
            <div class="personal-summary">
                Software developer with an engineering and technical sales background who possesses a high technical aptitude coupled with strong interpersonal skills to not only communicate technical solutions but contribute innovation and creativity to the solution as well. Highly self-motivated, seeking opportunities to tackle tough challenges and grow with an organization.
            </div>
        </ac-section>
    </div>
</template>

<script>
import SectionVue from '../Shared/Section.vue';
export default {
    components: {
        'ac-section': SectionVue,
    },
};
</script>

<style>
    .personal-summary {
        padding: 5px 0 10px;
    }
</style>
