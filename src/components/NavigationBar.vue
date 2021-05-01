<template>
  <van-sticky>
    <van-action-bar class="van-hairline--top">
      <van-action-bar-icon :to="home">
        <slot name="icon">
          <traffic-lights />
        </slot>
        <slot>Home</slot>
      </van-action-bar-icon>
      <van-action-bar-icon
        to="/vaccination"
      >
        <slot name="icon">
          <vaccine />
        </slot>
        <slot>Impfstatus</slot>
      </van-action-bar-icon>
      <van-action-bar-icon to="/help">
        <slot name="icon">
          <help />
        </slot>
        <slot>Hilfe</slot>
      </van-action-bar-icon>
      <van-action-bar-icon to="/config">
        <slot name="icon">
          <settings />
        </slot>
        <slot>Einstellungen</slot>
      </van-action-bar-icon>
      <van-action-bar-icon to="/more">
        <slot name="icon">
          <more />
        </slot>
        <slot>Mehr</slot>
      </van-action-bar-icon>
    </van-action-bar>
  </van-sticky>
</template>

<script>
import TrafficLights from '@/components/svg/TrafficLights'
import Settings from '@/components/svg/Settings'
import Help from '@/components/svg/Help'
import Vaccine from '@/components/svg/Vaccine'
import More from '@/components/svg/More'

export default {
  name: 'NavigationBar',
  components: { TrafficLights, Settings, Help, Vaccine, More },
  data () {
    return {
      home: '/'
    }
  },
  watch: {
    // call again the method if the route changes
    $route: 'home2lkr'
  },
  methods: {
    home2lkr () {
      this.home = '/'
      const selected = localStorage.getItem('landkreis')
      if (selected) {
        this.home = '/lkr/' + selected
      }
      return this.home
    }
  }
}
</script>

<style lang="scss" scoped>
.van-action-bar {
  background-color: var(--background-color);

  .icon-tabler {
    margin-left: auto;
    margin-right: auto;
    width: 2.25rem;
    height: 2.25rem;
    stroke-width: 1.5;
  }

  .van-action-bar-icon {
    color: var(--text);
    background-color: var(--background-color);
  }

}

@media only screen and (max-height: 376px) {
  /* show no navigationbar in widget view */
  .van-action-bar {
    display: none;
  }
}
</style>
