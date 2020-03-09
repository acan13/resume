<template>
    <div class="experience-wrapper">
        <ac-section section-title="Experience">
            <ac-role role-name="Solutions Engineer" location="Plano, TX" organization="Hoonuit" :start-date="hoonuitStartDate" :end-date="hoonuitEndDate">
                <ac-role-item>
                    Built the main engine of an app that won a company-wide hackathon
                </ac-role-item>
                <ac-role-item>
                    Designed and built a CLI that facilitates generation of large amounts of realistic test data and automates running complex ETL workflows
                </ac-role-item>
                <ac-role-item>
                    Wrote multiple ETL’s to populate an enterprise data warehouse for education customers
                </ac-role-item>
            </ac-role>
            <ac-role role-name="UI/UX Developer" location="Plano, TX" organization="Mizuni" :start-date="mizuniStartDate" :end-date="mizuniEndDate">
                <ac-role-item>
                    Implemented a knowledge base and built a tool to seamlessly integrate context-based content into a web app
                </ac-role-item>
                <ac-role-item>
                    Planned and executed complete rebuild of main company marketing website from scratch
                </ac-role-item>
                <ac-role-item>
                    Created and built multiple front-end apps using JavaScript, Vue, and Webpack
                </ac-role-item>
            </ac-role>
            <ac-role role-name="Sales Engineer" location="Plano, TX" organization="Keyence Corporation of America" :start-date="keyenceStartDate" :end-date="keyenceEndDate">
                <ac-role-item>
                    Developed an algorithm that generated over $80,000 in sales.
                </ac-role-item>
                <ac-role-item>
                    Created and delivered a presentation that grew a new territory to over $500,000 in sales over two years
                </ac-role-item>
                <ac-role-item>
                    Won multiple awards, including best rookie, skills champion, and sales monster
                </ac-role-item>
                <ac-role-item>
                    Developed strong communication skills through 600+ sales calls and 200+ hours on the phone
                </ac-role-item>
            </ac-role>
        </ac-section>
    </div>
</template>

<script>
import SectionVue from '../Shared/Section.vue';
import RoleVue from '../Shared/Role.vue';
import RoleItemVue from '../Shared/RoleItem.vue';
export default {
    components: {
        'ac-section': SectionVue,
        'ac-role': RoleVue,
        'ac-role-item': RoleItemVue,
    },
    computed: {

    },
    created () {
        this.hoonuitStartDate = new Date(2019, 3);
        this.hoonuitEndDate = new Date();
        this.mizuniStartDate = new Date(2018, 1);
        this.mizuniEndDate = new Date(2019, 3);
        this.keyenceStartDate = new Date(2015, 6);
        this.keyenceEndDate = new Date(2017, 6);
    },
};
</script>

<style>

</style>
