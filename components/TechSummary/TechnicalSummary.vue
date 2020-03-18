<template>
    <div class="tech-summary-wrapper">
        <ac-section section-title="Tech Summary">
            <div class="tech-summary-filter-bar">
                <ac-filter-bar v-model="selectedFilters" :options="filterOptions"/>
            </div>
            <div class="tech-summary-items-display">
                <ac-tech-items-display :tech-summary-items="techSummaryItems" :selected-filters="selectedFilters"/>
            </div>
        </ac-section>
    </div>
</template>

<script>
import SectionVue from '../Shared/Section.vue';
import TechItemsDisplayVue from './TechItemsDisplay.vue';
import { techSummaryItems } from './techSummaryItems';
import FilterBarVue from '~/components/Shared/FilterBar.vue';
export default {
    components: {
        'ac-filter-bar': FilterBarVue,
        'ac-section': SectionVue,
        'ac-tech-items-display': TechItemsDisplayVue,
    },
    data () {
        return {
            selectedFilters: [],
        };
    },
    created () {
        this.techSummaryItems = techSummaryItems;
        this.filterOptions = [];
    },
};
</script>

<style>
    .tech-summary-items-display {
        padding-bottom: 10px;
    }
</style>
