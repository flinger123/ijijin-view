<!-- 
 输入框
 -->

<template>
    <div class="vu-input" :class="{'f-bd': border}">
        <input
            v-bind="$attrs"
            v-on="listeners"
            ref="input"
            :class="className"
            :type="type"
            :value="value"
            :readonly="readonly"
                     />
        <v-icon v-show="showClearIcon" type="close-fill" @click.prevent="$emit('input', '')"/>
    </div>
</template>

<script>
  import '../less/Input.less'

    export default {
        name: 'input',

        computed: {
            // 显示清除图标
            showClearIcon () {
                return this.clearable && !this.readonly && this.value !== ''
            },

            // event listeners
            listeners() {
              return {
                ...this.$listeners,
                input: this.onInput,
                keypress: this.onKeypress,
                focus: this.onFocus,
                blur: this.onBlur
              };
            }
        },

        props: {
            readonly: {
                type: Boolean,
                default: false
            },
            clearable: {
                type: Boolean,
                default: false
            },
            className: [String, Array],
            type: {
                type: String,
                default: 'text'
            },
            border: {
              type: Boolean,
              default: true
            },
            value: [String, Number]
        },

        methods: {
            blur() {
              this.$refs.input && this.$refs.input.blur();
            },

            onInput(event) {
              let _value = event.target.value;
              if (this.type === 'number') {
                event.target.value = _value = _value.replace(/[^0-9.]/g, '')
              }
              this.$emit('input', _value);
            },

            onFocus(event) {
              this.focused = true;
              this.$emit('focus', event);

              // hack for safari
              if (this.readonly) {
                this.blur();
              }
            },

            onBlur(event) {
              this.focused = false;
              this.$emit('blur', event);
            },

            onKeypress(event) {
              if (this.type === 'number') {
                const { keyCode } = event;
                const allowPoint = String(this.value).indexOf('.') === -1;
                const isValidKey = (keyCode >= 48 && keyCode <= 57) || (keyCode === 46 && allowPoint) || keyCode === 45;
                if (!isValidKey) {
                  event.preventDefault();
                }
              } else if (this.type === 'search' && event.keyCode === 13) {
                this.blur();
              }

              this.$emit('keypress', event);
            }
        }
    }
</script>