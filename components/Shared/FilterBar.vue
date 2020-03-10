<template>
    <div class="filter-bar-wrapper">
        Filters:
        <div v-for="option in options" :key="option" class="filter-option" @click="handleClick(option)">
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
        padding: 15px 25px;
    }
</style>
