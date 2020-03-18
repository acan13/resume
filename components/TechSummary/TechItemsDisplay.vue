<template>
    <div class="tech-items-display-wrapper">
        <div v-for="category in categories" :key="category" class="tech-item-line">
            <span class="item-type-name">
                {{ category.toUpperCase() }}
            </span>
            <transition-group name="list">
                <span v-for="(item, index) in techItemsMap[category]" :key="item.name" class="list-item">
                    {{ item.shortName }}<template v-if="index !== languageItems.length - 1">
                        ,
                    </template>
                </span>
            </transition-group>
        </div>
    </div>
</template>

<script>
import { TECH_ITEM_CATEGORIES } from '../../conventions';
import { techSummaryItems } from './techSummaryItems';
export default {
    props: {
        selectedFilters: {
            type: Array,
            default: () => { return []; },
        },
    },
    data () {
        return {
            techSummaryItems,
        };
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
    },
    methods: {

    },
    created () {
        this.categories = Object.values(TECH_ITEM_CATEGORIES);
    },
};
</script>

<style>
    .item-type-name {
        font-weight: bold;
    }

    .list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }
</style>
