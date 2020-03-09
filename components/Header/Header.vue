<template>
    <ac-section>
        <div class="header-wrapper">
            <div class="main-name">
                Allan Cannon
            </div>
            <div class="header-contact-info">
                <ac-contact-info/>
            </div>
        </div>
    </ac-section>
</template>

<script>
import SectionVue from '../Shared/Section.vue';
import ContactInfoVue from '~/components/Header/ContactInfo.vue';
export default {
    components: {
        'ac-section': SectionVue,
        'ac-contact-info': ContactInfoVue,
    },
};
</script>

<style>
    .header-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    .main-name {
        font-size: 50px;
        font-weight: bold;
        display: inline-block;
    }

    .header-contact-info {
        
    }
</style>
