<template>
    <div class="tech-summary-wrapper">
        <ac-section section-title="Tech Summary">
            <div class="tech-summary-filter-bar">
                <ac-filter-bar/>
            </div>
        </ac-section>
    </div>
</template>

<script>
import SectionVue from '../Shared/Section.vue';
import FilterBarVue from '~/components/Shared/FilterBar.vue';
export default {
    components: {
        'ac-filter-bar': FilterBarVue,
        'ac-section': SectionVue,
    },
};
</script>

<style>

</style>
