<template>   
        <button class="am-button" :class="{[`icon-${iconPosition}`]:true}">
            <svg v-if="icon" class="icon">
                <use :xlink:href="`#am-${icon}`"></use>
            </svg>
            <div class="content">
                <slot></slot>
            </div>
        </button>
</template>

<script>
    export default {
        props:['icon',`iconPosition`]
    }
</script>

<style lang='scss'>
.am-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    >.icon{order:1; width:1em; height: 1em;margin-right: .3em}
    >.content{order:2}
    &.icon-right{    /*后面的样式会覆盖前面的样式 */
        >.icon{order:2;margin-right: 0; margin-left: .3em}
        >.content{order:1}
    }
    &:hover{border-color: var(--border-color-hover);}
    &:active{background-color: var(--button-active-bg);}
    &:focus{outline: none;}
}


</style>

