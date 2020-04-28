<template>
    <div class="experience-wrapper">
        <ac-section section-title="Experience">
            <ac-role role-name="Solutions Engineer" location="Plano, TX" organization="Hoonuit" :start-date="hoonuitStartDate" :end-date="hoonuitEndDate">
                <ac-role-item>
                    Took initiative to design and build a tool to automate development testing of ETL's, saving more than 100 hours of development time in the first year of use
                </ac-role-item>
                <ac-role-item>
                    Won a company-wide hackathon by building the main engine of an app that reduced the time required to populate a customer dashboard from weeks to hours
                </ac-role-item>
                <ac-role-item>
                    Reduced the ETL execution time of the main company product by 50%
                </ac-role-item>
                <ac-role-item>
                    Wrote multiple ETL’s to populate an enterprise data warehouse for education customers
                </ac-role-item>
            </ac-role>
            <ac-role role-name="UI/UX Developer" location="Plano, TX" organization="Mizuni (Acquired by Hoonuit)" :start-date="mizuniStartDate" :end-date="mizuniEndDate">
                <ac-role-item>
                    Planned and executed a complete rebuild of the main company <a href="https://web.archive.org/web/20190118031700/https://www.mizuni.com/">marketing website</a> from scratch
                </ac-role-item>
                <ac-role-item>
                    Created a knowledge base integration widget to provide context-based help and interactive tours of live page content
                </ac-role-item>
                <ac-role-item>
                    Built a tool to automatically identify and mask sensitive data from being displayed inadvertently during demonstrations
                </ac-role-item>
                <ac-role-item>
                    Worked on front-end apps in all stages of the product lifecycle including creation, tooling, back-end integration, state management, legacy support, and testing
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
                    Developed strong communication skills through 500+ sales calls and 200+ hours on the phone
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
