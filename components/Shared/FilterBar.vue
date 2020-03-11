<template>
    <div class="filter-bar-wrapper">
        Filters:
        <div v-for="option in options" :key="option" class="filter-option" :class="{'selected': optionHighlighted[option]}" @click="handleClick(option)">
            {{ option }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            default: () => { return []; },
        },
        value: { // selected options
            type: Array,
            default: () => { return []; },
        },
    },
    computed: {
        selectedOptions: {
            get () {
                return this.value;
            },
            set (val) {
                this.$emit('input', val);
            },
        },
        currentSelections () {
            const currentSelections = {};
            this.options.forEach((option) => {
                currentSelections[option] = !this.value.length || this.value.includes(option);
            });
            return currentSelections;
        },
        optionHighlighted () {
            const currentSelections = {};
            this.options.forEach((option) => {
                currentSelections[option] = this.value.includes(option);
            });
            return currentSelections;
        },
    },
    methods: {
        handleClick (option) {
            const selectedOptions = [...this.selectedOptions];
            const index = this.selectedOptions.indexOf(option);
            if (index === -1) {
                selectedOptions.push(option);
            } else {
                selectedOptions.splice(index, 1);
            }
            this.selectedOptions = selectedOptions;
        },
    },
};
</script>

<style>
    .filter-bar-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .filter-option {
        margin: 12px 6px;
        border-radius: 50px;
        padding: 4px 15px;
        cursor: pointer;
    }

    .filter-option:hover, .filter-option.selected:hover {
        background-color: #d3d3d35c;
    }

    .filter-option.selected {
        background-color: lightgray;
    }
</style>
