<template>
  <div class="password">
    <div class="password__field">{{ text }}</div>
    <button class="password__button" v-clipboard="() => text">
      <img src="@/assets/copy.svg" alt="copy" />
    </button>
  </div>
</template>

<script>
export default {
  name: "Password",
  props: {
    text: String
  }
};
</script>

<style lang="scss">
.password {
  display: flex;

  &__field {
    position: relative;
    height: 50px;
    max-width: 100%;
    background-color: $white;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    border-radius: 5px 0 0 5px;
    overflow: hidden;
    white-space: nowrap;
    flex-grow: 1;
    flex-basis: auto;

    @media (min-width: 768px) {
      height: 60px;
      font-size: 26px;
    }

    @media (min-width: 1280px) {
      height: 65px;
      font-size: 30px;
    }

    &:before {
      content: "";
      position: absolute;
      height: 100%;
      left: 0;
      box-shadow: 0 0 15px 25px $white;
    }

    &:after {
      content: "";
      position: absolute;
      height: 100%;
      right: 0;
      box-shadow: 0 0 15px 25px $white;
    }
  }

  &__button {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 55px;
    height: 50px;
    background-color: $main;
    outline: none;
    user-select: none;
    border: none;
    border-radius: 0 5px 5px 0;
    transition: all 0.3s ease;
    cursor: pointer;

    @media (min-width: 768px) {
      min-width: 65px;
      height: 60px;
    }

    @media (min-width: 1280px) {
      min-width: 70px;
      height: 65px;
    }

    &:hover {
      background-color: rgba($main, 0.8);
    }

    & img {
      width: 16px;

      @media (min-width: 768px) {
        width: 18px;
      }

      @media (min-width: 1280px) {
        width: 20px;
      }
    }
  }
}
</style>
