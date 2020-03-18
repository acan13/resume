<template>
    <div class="tech-items-display-wrapper">
        <div v-for="category in categories" :key="category" class="tech-item-line">
            <span class="item-type-name">
                {{ category.toUpperCase() }}
            </span>
            <transition-group name="list">
                <span v-for="(item, index) in techItemsMap.get(category)" :key="item.name" class="list-item">
                    {{ `${item.name}${index !== techItemsMap.get(category).length - 1 ? ',' : ''}` }}
                </span>
            </transition-group>
        </div>
    </div>
</template>

<script>
import { TECH_ITEM_CATEGORIES_SORT_ORDER } from '../../conventions';
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
            categories: [],
            techSummaryItems,
        };
    },
    computed: {
        techItemsMap () {
            const itemMap = new Map();
            for (const category of this.categories) {
                itemMap.set(category, []);
            }
            for (const item of this.techSummaryItems) {
                itemMap.get(item.category).push(item);
            }
            for (const category of this.categories) {
                itemMap.get(category).sort(this.sorter);
            }
            return itemMap;
        },
    },
    methods: {
        sorter (a, b) {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA > nameB) {
                return 1;
            } else if (nameA < nameB) {
                return -1;
            }
            return 0;
        },
    },
    created () {
        this.categories = TECH_ITEM_CATEGORIES_SORT_ORDER;
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
