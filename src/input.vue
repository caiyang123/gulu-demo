<template>
    <div class="wrapper" :class="{'error': error}">
        <input 
            :value="value" 
            :disabled="disabled" 
            :readonly="readonly" 
            type="text"
            @change="$emit('change', $event.target.value)"
            @input="$emit('input', $event.target.value)"
            @focus="$emit('focus', $event.target.value)"
            @blur="$emit('blur', $event.target.value)">
        <template v-if="error">
            <g-icon name="error" fill="red"></g-icon>
            <span class="errorMessage">{{ error }}</span>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'GuluInput',
        props: {
            value: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0, 0, 0, .5);
    $red: #F1453D;
    .wrapper {
        display: inline-flex;
        align-items: center;
        font-size: $font-size;
        > :not(:last-child) {margin-right: .5em; }
        > input {
            font-size: inherit;
            height: $height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            &:hover {
                border-color: $border-color-hover;
            }
            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }
            &[disabled], &[readonly] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
        }
        &.error {
            > input {
                border-color: $red;
            }
        }
        .errorMessage {
            color: $red;
        }
    }
</style>