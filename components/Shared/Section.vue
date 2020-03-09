<template>
    <div class="section-wrapper">
        <ac-section-title v-if="sectionTitle" :title="sectionTitle"/>
        <slot/>
        <ac-section-divider/>
    </div>
</template>

<script>
import SectionTitleVue from './SectionTitle.vue';
import SectionDividerVue from './SectionDivider.vue';
export default {
    components: {
        'ac-section-title': SectionTitleVue,
        'ac-section-divider': SectionDividerVue,
    },
    props: {
        sectionTitle: {
            type: String,
            default: '',
        },
    },
};
</script>

<style>

</style>
