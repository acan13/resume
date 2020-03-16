<template>
    <div class="personal-summary-wrapper">
        <ac-section section-title="">
            <div class="personal-summary">
                Software developer with an engineering and technical sales background who possesses a high technical aptitude coupled with strong interpersonal skills. Passionate about learning, solving hard problems, and creating software that people love.
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
        padding: 15px 0;
    }
</style>
