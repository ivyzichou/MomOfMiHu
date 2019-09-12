<template>
  <div>
    <div>
      <el-cascader placeholder = "试试搜索"
                  :options = "options"
                  @expand-change = "getCenter">
        <template slot-scope="{node, data}">
          <span>{{data.label}}</span>
        </template>
      </el-cascader>
    </div>
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
        // let arrActive = arr[arr.length - 1].getElementsByClassName('el-cascader-node__prefix')[0]
        // if (arr_active) {
        //   console.log('sdkjhfksdhfsdkjfhdfhal')
        // }
        console.log('1234567890', arr[arr.length - 1])
        // console.log('!!!!hjhkjh!!!', arr[arr.length - 1].getElementsByClassName('el-cascader-node__prefix'))
        // for (let i = 0; i < arr.length; i++) {
        //   console.log('haahahahahah', arr[i])
        // }
        // arr[arr.length - 1].removeChild()
        // if (arr[arr.length - 1].getElementsByTagName('el-icon-check')) {
        //   let child = arr[arr.length - 1].getElementsByTagName('i')
        //   arr[arr.length - 1].removeChild(child)
        // }
        // arr[arr.length - 1].removeChild()
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
