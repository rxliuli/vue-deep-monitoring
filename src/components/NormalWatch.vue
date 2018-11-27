<template>
  <v-card>
    <v-card-title primary-title>
      <h2>普通监听</h2>
      <v-subheader>不会发生变化</v-subheader>
    </v-card-title>
    <v-card-text>
      <v-list>
        <v-list-tile
          v-for="item in items"
          :key="item.k"
        >
          <v-text-field
            :label="`输入框 ${item.k}`"
            v-model="item.v"
          ></v-text-field>
        </v-list-tile>
      </v-list>
      <v-layout
        row
        wrap
      >
        <v-flex
          md4
          xs12
        >
          <h2>旧值</h2>
          <p>{{oldVal}}</p>
        </v-flex>

        <v-flex
          md4
          sm4
          xs12
        >
          <h2>差异</h2>
          <p>{{difference}}</p>
        </v-flex>
        <v-flex
          md4
          xs12
        >
          <h2>新值</h2>
          <p>{{val}}</p>
        </v-flex>
      </v-layout>
      <v-layout
        row
        wrap
      >
        <v-flex xs12>
          <h4>最后更新于：{{lastUpdateTime}}</h4>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import _ from 'lodash'
export default {
  data: () => ({
    items: [],
    // 下面的两个属性仅用于展示
    oldVal: [],
    val: [],
    difference: [],
    lastUpdateTime: new Date()
  }),
  watch: {
    // 监听 items 的变化（实际上数组内部的值变化）
    items (val, oldVal) {
      this.val = val
      this.oldVal = oldVal
      this.difference = _.differenceWith(val, oldVal, (i, k) => JSON.stringify(i) === JSON.stringify(k))
      this.lastUpdateTime = new Date().toISOString()
    }
  },
  methods: {
    /**
     * 初始化 items
     */
    init () {
      this.items = _.range(1, 6)
        .map(i => ({
          k: i,
          v: ''
        }))
    }
  },
  mounted () {
    this.init()
  }
}
</script>