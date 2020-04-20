<template>
    <div class="projects-wrapper">
        <ac-section section-title="Projects">
            <ac-role role-name="Personal Resume Site" website="https://www.allancannon.com" organization="(you are here)" :start-date="allancannonDate" :end-date="allancannonDateEnd">
                <ac-role-item>
                    Uses a completely automated CI/CD pipeline to automatically push changes all the way to a distributed CDN
                </ac-role-item>
                <ac-role-item>
                    Built with Nuxt, hosted on AWS using Cloudfront, CodeBuild, CodePipeline, Route 53, S3
                </ac-role-item>
            </ac-role>
            <ac-role role-name="AMOS Product Demo" website="http://amos-demonstration.s3-website.us-east-2.amazonaws.com/#/" organization="AMOS Venture Investment Intelligence" :start-date="amosDate" :end-date="amosDateEnd">
                <ac-role-item>
                    Allows users to perform a market simulation that tells what the probability of exit is for any given startup -- based on historical data for nearly 100,000 startups
                </ac-role-item>
                <ac-role-item>
                    Built with Vue and hosted on AWS
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
        this.allancannonDate = new Date(2020, 2);
        this.allancannonDateEnd = new Date();
        this.amosDate = new Date(2019, 7);
        this.amosDateEnd = new Date();
    },
};
</script>

<style>

</style>
