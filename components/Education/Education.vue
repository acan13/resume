<template>
    <div class="education-wrapper">
        <ac-section section-title="Education">
            <ac-role role-name="Full-Stack Web Development" location="Dallas, TX" organization="Coding Dojo" :start-date="dojoStartDate" :end-date="dojoEndDate">
                <ac-role-item>
                    Only member of class to graduate with a Triple Black Belt, with a GPA of 9.9/10
                </ac-role-item>
                <ac-role-item>
                    Immersive program comprising 3 full stacks, including Python, Ruby, and MEAN
                </ac-role-item>
            </ac-role>
            <ac-role role-name="B.S. Chemical Engineering" location="Provo, UT" organization="Brigham Young University" :start-date="byuStartDate" :end-date="byuEndDate">
                <ac-role-item>
                    Studied graduate-level numerical methods and algorithms using Python
                </ac-role-item>
                <ac-role-item>
                    Used self-taught coding to create a mirror of the game 2048
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
    created () {
        this.dojoStartDate = new Date(2017, 7);
        this.dojoEndDate = new Date(2017, 11);
        this.byuStartDate = new Date(2011, 7);
        this.byuEndDate = new Date(2015, 4);
    },
};
</script>

<style>

</style>
