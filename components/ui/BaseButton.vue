<template>
  <button v-if="!link" class="button" :class="className" :disabled="disabled" @click.prevent="$emit('click')">
    <span>{{ title }}</span>
    <slot />
    <span v-if="loader !== null" class="circularG-wrap">
      <span class="circularG circularG_1" />
      <span class="circularG circularG_2" />
      <span class="circularG circularG_3" />
      <span class="circularG circularG_4" />
      <span class="circularG circularG_5" />
      <span class="circularG circularG_6" />
      <span class="circularG circularG_7" />
      <span class="circularG circularG_8" />
    </span>
  </button>
  <a v-else :href="link" class="button" target="blank">
    <span>
      <slot />
    </span>
  </a>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    title: {
      type: String,
      default: ''
    },
    error: {
      type: Boolean,
      default: false
    },
    green: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loader: {
      type: Boolean,
      default: false
    },
    link: String
  },
  computed: {
    className () {
      return {
        button_error: this.error,
        button_loader: this.loader,
        button_green: this.green,
        button_shadow: this.shadow
      }
    }
  }
}
</script>

<style lang="scss">
@import "~assets/scss/blocks/loader";

.button {
  font-family: "Roboto", sans-serif;
  display: inline-block;
  text-align: center;
  background: linear-gradient(180deg, #ff5000 15.42%, #ff8a00 100%);
  // padding: 5px 38px 5px;
  padding: 5px;
  transition: all .2s linear;
  outline: none;
  justify-content: center;
  height: 44px;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
  border: none;
  color: #fff;
  width: 100%;

  &_green {
    background: #3cd52e;
  }

  &_shadow {
    box-shadow: 0 0 25px 6px rgba(255, 80, 0, 0.4);
  }

  &_error {
    animation-name: shakeError;
    animation-fill-mode: forwards;
    animation-duration: 600ms;
    animation-timing-function: ease-in-out;
    pointer-events: none;
  }

  &_loader {
    opacity: 0.7;
    pointer-events: none;
    .circularG-wrap {
      visibility: visible;
    }
  }

  &_icon {
    display: flex;
    align-items: center;

    > span {
      display: block;
      margin-right: 6px;
    }
  }

  .button_green:hover {
    background: #ff5000;
  }

  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }

  @include media-tablet {
    height: 60px;
    width: auto;
    font-size: 22px;
    padding: 5px 30px;
  }

  @include media-laptop {
    height: auto;
    padding: 15px 30px;
    font-size: 24px;

    &:hover {
      background: linear-gradient(180deg, #ff5000 15.42%, #b13700 100%);
    }
  }
}

.button-link {
  background: linear-gradient(180deg, #ff5000 15.42%, #ff8a00 100%);
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 10px;

  &::after {
    position: absolute;
    content: "";
    width: 24px;
    height: 23px;
    top: 9px;
    left: 9px;
    background: url("~assets/img/arrow-link.svg"), no-repeat, center;
  }

  @include media-desktop {
    width: 53px;
    height: 53px;

    &::after {
      top: 14px;
      left: 15px;
    }
  }
}

.basket {
  padding: 0;
  border: 0;
  width: 35px;
  height: 30px;
  background-image: url("~assets/img/basket.svg");
  background-repeat: no-repeat;
  background-position: -2px -5px;
  display: block;
}

.authorization {
  padding: 0;
  border: 0;
  width: 31px;
  height: 31px;
  background-image: url("~assets/img/logout.svg");
  background-repeat: no-repeat;
  background-position: 0px 0px;
}

.icon-basket {
  display: block;
  background: url("~assets/img/basket-card.svg") no-repeat -3px -5px;
  width: 31px;
  height: 28px;
}

.icon-hart {
  display: block;
  background: url("~assets/img/heart.svg") no-repeat center;
  width: 38px;
  height: 36px;
}

.icon-delete {
  display: block;
  background: url("~assets/img/delete.svg") no-repeat center;
  width: 23px;
  height: 23px;
}

.icon-intention {
  display: inline-block;
  background: url("~assets/img/intention.svg") no-repeat center;
  width: 28px;
  height: 28px;
}

.icon-edit {
  display: block;
  background: url("~assets/img/pencil.svg") no-repeat center;
  width: 22px;
  height: 22px;
}

.circularG-wrap {
  position: absolute;
  right: -10px;
  top: 0;
  visibility: hidden;
}

@keyframes shakeError {
  0% {
    transform: translateX(0);
  }
  15% {
    transform: translateX(0.375rem);
  }
  30% {
    transform: translateX(-0.375rem);
  }
  45% {
    transform: translateX(0.375rem);
  }
  60% {
    transform: translateX(-0.375rem);
  }
  75% {
    transform: translateX(0.375rem);
  }
  90% {
    transform: translateX(-0.375rem);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
