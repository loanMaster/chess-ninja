<template>
  <div class="animated-bg"></div>
</template>

<style lang="scss" scoped>
@mixin dots($count) {
  $text-shadow: ();
  @for $i from 0 through $count {
    $text-shadow: $text-shadow,
      (-0.5+ (random()) * 3) +
        em
        (-0.5+ (random()) * 3) +
        em
        7px
        hsla(random() * 360, 100%, 50%, 0.9);
  }
  text-shadow: $text-shadow;
}

.animated-bg {
  display: block;
  font-size: 52px;
  color: transparent;
}

.animated-bg::before,
.animated-bg::after,
.animated-bg::before,
.animated-bg::after {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 3em;
  height: 3em;
  content: '.';
  mix-blend-mode: screen;
  animation: 44s -27s move infinite ease-in-out alternate;
}

.bg-abs .animated-bg::before,
.bg-abs .animated-bg::after,
.bg-abs .animated-bg::before,
.bg-abs .animated-bg::after {
  position: absolute;
}

.animated-bg::before {
  @include dots(40);
  animation-duration: 44s;
  animation-delay: -27s;
}

.animated-bg::after {
  @include dots(40);
  animation-duration: 43s;
  animation-delay: -32s;
}

.animated-bg::before {
  @include dots(40);
  animation-duration: 42s;
  animation-delay: -23s;
}

.animated-bg::after {
  @include dots(40);
  animation-duration: 41s;
  animation-delay: -19s;
}

@keyframes move {
  from {
    transform: rotate(0deg) scale(12) translateX(-20px);
  }
  to {
    transform: rotate(360deg) scale(18) translateX(20px);
  }
}
</style>
