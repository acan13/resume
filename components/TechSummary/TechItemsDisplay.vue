<template>
    <div class="tech-items-display-wrapper">
        <div class="tech-item-line">
            <span class="item-type-name">
                LANGUAGES:
            </span>
            <template v-for="(item, index) in languageItems">
                {{ item.shortName }}<template v-if="index !== languageItems.length - 1">
                    ,
                </template>
            </template>
        </div>
        <div class="tech-item-line">
            <span class="item-type-name">
                FRAMEWORKS:
            </span>
            <template v-for="(item, index) in frameworkItems">
                {{ item.shortName }}<template v-if="index !== frameworkItems.length - 1">
                    ,
                </template>
            </template>
        </div>
        <div class="tech-item-line">
            <span class="item-type-name">
                WORLD LANGUAGES:
            </span>
            <template v-for="(item, index) in worldLanguageItems">
                {{ item.shortName }}<template v-if="index !== worldLanguageItems.length - 1">
                    ,
                </template>
            </template>
        </div>
    </div>
</template>

<script>
import { TYPE } from './techSummaryItems';
export default {
    props: {
        techSummaryItems: {
            type: Array,
            required: true,
        },
        selectedFilters: {
            type: Array,
            default: () => { return []; },
        },
    },
    computed: {
        sortedItems () {
            const sortedItems = [...this.techSummaryItems];
            return sortedItems.sort((a, b) => {
                const nameA = a.shortName.toUpperCase();
                const nameB = b.shortName.toUpperCase();
                if (nameA > nameB) {
                    return 1;
                } else if (nameA < nameB) {
                    return -1;
                }
                return 0;
            });
        },
        filteredItems () {
            return this.sortedItems.filter((item) => {
                return this.selectedFilters.length === 0 || this.selectedFilters.includes(item.comfortLevel);
            });
        },
        languageItems () {
            return this.filterByType(TYPE.LANGUAGE);
        },
        frameworkItems () {
            return this.filterByType(TYPE.FRAMEWORK);
        },
        worldLanguageItems () {
            return this.filterByType(TYPE.WORLD_LANGUAGE);
        },
    },
    methods: {
        filterByType (type) {
            return this.filteredItems.filter((item) => {
                return item.type === type;
            });
        },
    },
};
</script>

<style>
    .item-type-name {
        font-weight: bold;
    }
</style>
