<template>
    <div class="layout-wrapper">
        <div class="content-wrapper">
            <nuxt/>
        </div>
    </div>
</template>

<style>
    html {
        font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    body {
        padding: 0;
        margin: 0;
    }

    .layout-wrapper {
        display: flex;
        justify-content: center;
    }

    .content-wrapper {
        max-width: 1200px;
    }
</style>
