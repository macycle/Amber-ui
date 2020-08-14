<template>
    <svg class="am-icon">
        <use :xlink:href="`#am-${amIcon}`"></use>
    </svg>
</template>

<script>
    export default {
        props:['amIcon']
    }
</script>

<style lang="scss" scoped>
    .am-icon{width:1em; height: 1em;margin-right: .3em}
</style>