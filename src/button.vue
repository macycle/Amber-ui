<template>   
        <button class="button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
            <am-icon v-if="icon && !loading" :name="icon" class="icon" ></am-icon>
            <am-icon  class="loading icon" v-if="loading" name="loading" ></am-icon>
            <div class="content">
                <slot></slot>
            </div>
        </button>
</template>

<script>
    export default {
        props:{
            icon:{},
            loading:{
                type:Boolean,
                default:false
            },
            iconPosition:{
                type:String,
                default:'left',
                validator(value){
                    return value==='left' || value==='right'
                }
            }
        }
    }
</script>

<style lang='scss'>
@keyframes spin {
    0%{
        transform: rotate(0deg)
    }
    100%{
        transform: rotate(360deg);
    }
}
.button {
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
    >.icon{order:1}
    >.content{order:2}
    &.icon-right{    /*后面的样式会覆盖前面的样式 */
        >.icon{order:2;margin-right: 0; margin-left: .3em}
        >.content{order:1}
    }
    &:hover{border-color: var(--border-color-hover);}
    &:active{background-color: var(--button-active-bg);}
    &:focus{outline: none;}

    .loading{
        animation: spin 1s infinite linear;
    }
}



</style>

