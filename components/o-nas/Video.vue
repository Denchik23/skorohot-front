<template>
  <section>
    <div class="container">
      <div class="section-title">Как мы делаем <span>пиццу и роллы?</span></div>
      <div class="intro intro_big">Посмотрите наши видео: еще больше найдете на нашем <span>youtube-канале :)</span></div>
      <div class="video-block">
        <div class="video-block__item">
          <iframe
            v-if="showVideo"
            loading="lazy"
            width="676"
            height="435"
            src="https://www.youtube.com/embed/UN4xKVzAvf8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <template v-else>
            <img src="~/assets/img/video-preview.png" alt="video-preview" width="676" height="435">
            <button class="video-block__play" @click="showVideo = !showVideo"/>
          </template>
        </div>
        <div class="video-block__item">
          <iframe
            v-if="showVideo1"
            loading="lazy"
            width="676"
            height="435"
            src="https://www.youtube.com/embed/4hwHuBdcGZM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <template v-else>
            <img src="~/assets/img/video-preview2.png" alt="video-preview2" width="676" height="435">
            <button class="video-block__play" @click="showVideo1 = !showVideo1"/>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Video',
  data () {
    return {
      showVideo: false,
      showVideo1: false
    }
  }
}
</script>

<style lang="scss">
.video-block {
  margin: 30px 0 0 0;

  &__item {
    margin: 0 0 15px 0;
    position: relative;

    &:last-child {
      margin: 0;
    }
  }

  &__play {
    margin: 0;
    padding: 0;
    width: 150px;
    height: 150px;
    background: url("~assets/img/play.svg") no-repeat center;
    border: none;
    position: absolute;
    top: 10%;
    left: 25%;

    &:hover {
      background: url("~assets/img/play-hover.svg") no-repeat center;
    }
  }

  @include media-mobile {
    &__play {
      top: 22%;
      left: 35%;
    }
  }

  @include media-tablet {
    display: flex;
    margin: 60px -12px 0 -12px;

    &__item {
      padding: 0 12px;
      width: 49.9%;
    }
  }

  @include media-desktop {
    &__play {
      top: 30%;
      left: 40%;
    }
  }
}
</style>
