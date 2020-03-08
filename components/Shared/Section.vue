<template>
    <div class="section-wrapper">
        <ac-section-title v-if="sectionTitle" :title="sectionTitle"/>
        <slot/>
        <ac-divider/>
    </div>
</template>

<script>
import SectionTitleVue from './SectionTitle.vue';
import DividerVue from './Divider.vue';
export default {
    components: {
        'ac-section-title': SectionTitleVue,
        'ac-divider': DividerVue,
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
