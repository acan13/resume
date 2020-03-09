<template>
    <div class="role-dates-wrapper">
        {{ dateString }}
    </div>
</template>

<script>
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
];

export default {
    props: {
        startDate: {
            type: Date,
            default: undefined,
        },
        endDate: {
            type: Date,
            default: undefined, // put today for 'present'
        },
    },
    computed: {
        startDateString () {
            if (!this.startDate) {
                return '';
            }
            const year = this.startDate.getFullYear();
            const month = monthNames[this.startDate.getMonth()];
            return `${month} ${year}`;
        },
        endDateString () {
            if (!this.endDate) {
                return '';
            }
            if (this.endDate.setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0)) {
                return 'Present';
            }
            const year = this.endDate.getFullYear();
            const month = monthNames[this.endDate.getMonth()];
            return `${month} ${year}`;
        },
        dateString () {
            let dateString = this.startDateString;
            if (this.startDateString && this.endDateString) {
                dateString += ' - ';
            }
            dateString += this.endDateString;
            return dateString;
        },
    },
};
</script>

<style>

</style>
