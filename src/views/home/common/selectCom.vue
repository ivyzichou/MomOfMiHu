<template>
  <div>
    <el-cascader placeholder = "试试搜索"
                 :options = "options"
                 @expand-change = "getCenter">
      <template slot-scope="{node, data}">
        <span>{{data.label}}</span>
      </template>
    </el-cascader>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => [
        {
          value: '1',
          label: '总',
          children: [
            {
              value: '2-1',
              label: '经',
              children: [
                {
                  value: '3-1',
                  label: '业1'
                },
                {
                  value: '3-2',
                  label: '业2'
                },
                {
                  value: '3-3',
                  label: '增加'
                }
              ]
            },
            {
              value: '2-2',
              label: '增加'
            }
          ]
        }
      ]
    }
  },
  created () {
    this.getCenter()
  },
  methods: {
    getCenter () {
      let list1 = document.getElementsByClassName('el-cascader-menu__list')
      this.$nextTick(() => {
        for (var i = 0; i < list1.length; i++) {
          list1[i].style.textAlignLast = 'center'
        }
        let arr = list1[list1.length - 1].getElementsByClassName('el-cascader-node')
        // let arr_active = list1[list1.length - 1].getElementsByClassName('el-cascader-node is-active')
        // if (arr_active) {
        //   console.log('sdkjhfksdhfsdkjfhdfhal')
        // }
        // console.log('!!!!hjhkjh!!!', arr)
        // for (let i = 0; i < arr.length; i++) {
        //   console.log('haahahahahah', arr[i])
        // }
        // arr[arr.length - 1].removeChild
        arr[arr.length - 1].addEventListener('click', function () {
          console.log('最后一个！！！')
        })
      })
    },
    getDOMHtml () {
      console.log('----6767----', document.getElementsByClassName('el-cascader-menu__list'))
      let newHtmlPlus = document.createElement('li')
      newHtmlPlus.className = 'plus'
      newHtmlPlus.innerHTML = '+'
      document.getElementsByClassName('el-cascader-menu__list')[1].appendChild(newHtmlPlus)
      console.log('1212121212', newHtmlPlus)
    }
  }
}
</script>

<style>
.plus {
  text-align: center;
}
</style>
