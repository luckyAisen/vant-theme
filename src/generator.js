(function () {
  var docMenuList = []
  var styleList = []
  var webMenuList = []
  var readlyMenuList = []
  var _id, _groupItem

  /**
   * 获取 vant 官网左侧菜单，并且存储到 docMenuList 和 webMenuList
   * @returns 
   */
  function getDocMenu() {
    const nav__group = document.querySelectorAll('.van-doc-nav__group')
    Array.from(nav__group).map(navGroup => {
      const groupItem = {}
      groupItem.id = navGroup.querySelector('.van-doc-nav__title').innerText
      groupItem.name = navGroup.querySelector('.van-doc-nav__title').innerText
      groupItem.children = []
      webMenuList.push(groupItem)
      const nav__item = navGroup.querySelectorAll('.van-doc-nav__item')
      Array.from(nav__item).map(navItem => {
        const el = navItem.querySelector('a')
        // const menuItem = {}
        // menuItem.id = el.innerText.split(" ")[0]
        // menuItem.name = el.innerText
        // const id = el.innerText.split(" ")[0]
        const id = el.innerText
        const hash = el.getAttribute('href')
        docMenuList.push({ id, hash, groupItem })
      })
    })
    return docMenuList
  }
  /**
   * 获取组件变量
   */
  function getStyleList() {
    docMenuList.map(async (item, index) => {
      const { id, hash, groupItem } = item
      setTimeout(() => {
        _id = id
        _groupItem = { ...groupItem }
        window.location.hash = hash
        // hashChange(id, groupItem)
      }, 1000 * (index + 1))
    })
  }
  function hashChange() {
    setTimeout(() => {
      const styles = getDocVar()
      if (styles.length > 0) {
        id = _id
        groupItem = { ..._groupItem }
        const newId = id.split(" ")[0]
        styleList.push({ id: newId, styles })
        const menuItem = {}
        menuItem.id = newId
        menuItem.name = id
        groupItem.children.push(menuItem)
      }
    }, 500)
  }
  /**
   * 获取 vant 官方文档中的“样式变量”
   */
  function getDocVar() {
    const ysbl = document.querySelector("#yang-shi-bian-liang")
    if (!ysbl) {
      return []
    }
    const styleGroup = ysbl.nextElementSibling.nextElementSibling.querySelector("tbody").querySelectorAll("tr");
    const stylesList = Array.from(styleGroup).map((item) => {
      return item.querySelector("td").innerText;
    });
    return stylesList
  }
  /**
   * 过滤 webMenuList 得到有样式变量的组件
   */
  function filterWebMenuList() {
    setTimeout(() => {
      readlyMenuList = webMenuList.filter(item => (item.children.length > 0))
    }, 1000 * 105)
  }
  /**
   * 生成所有组件路由
   */
  function createRouter() {
    // const groupList = [...readlyMenuList]
    const groupList = [
      {
        "id": "基础组件",
        "name": "基础组件",
        "children": [
          {
            "id": "Button",
            "name": "Button 按钮"
          },
          {
            "id": "Cell",
            "name": "Cell 单元格"
          },
          {
            "id": "Image",
            "name": "Image 图片"
          },
          {
            "id": "Popup",
            "name": "Popup 弹出层"
          },
          {
            "id": "Toast",
            "name": "Toast 轻提示"
          }
        ]
      },
      {
        "id": "表单组件",
        "name": "表单组件",
        "children": [
          {
            "id": "Calendar",
            "name": "Calendar 日历"
          },
          {
            "id": "Cascader",
            "name": "Cascader 级联选择"
          },
          {
            "id": "Checkbox",
            "name": "Checkbox 复选框"
          },
          {
            "id": "Field",
            "name": "Field 输入框"
          },
          {
            "id": "NumberKeyboard",
            "name": "NumberKeyboard 数字键盘"
          },
          {
            "id": "PasswordInput",
            "name": "PasswordInput 密码输入框"
          },
          {
            "id": "Picker",
            "name": "Picker 选择器"
          },
          {
            "id": "Radio",
            "name": "Radio 单选框"
          },
          {
            "id": "Rate",
            "name": "Rate 评分"
          },
          {
            "id": "Search",
            "name": "Search 搜索"
          },
          {
            "id": "Slider",
            "name": "Slider 滑块"
          },
          {
            "id": "Stepper",
            "name": "Stepper 步进器"
          },
          {
            "id": "Switch",
            "name": "Switch 开关"
          },
          {
            "id": "Uploader",
            "name": "Uploader 文件上传"
          }
        ]
      },
      {
        "id": "反馈组件",
        "name": "反馈组件",
        "children": [
          {
            "id": "ActionSheet",
            "name": "ActionSheet 动作面板"
          },
          {
            "id": "Dialog",
            "name": "Dialog 弹出框"
          },
          {
            "id": "DropdownMenu",
            "name": "DropdownMenu 下拉菜单"
          },
          {
            "id": "Loading",
            "name": "Loading 加载"
          },
          {
            "id": "Notify",
            "name": "Notify 消息通知"
          },
          {
            "id": "Overlay",
            "name": "Overlay 遮罩层"
          },
          {
            "id": "PullRefresh",
            "name": "PullRefresh 下拉刷新"
          },
          {
            "id": "ShareSheet",
            "name": "ShareSheet 分享面板"
          },
          {
            "id": "SwipeCell",
            "name": "SwipeCell 滑动单元格"
          }
        ]
      },
      {
        "id": "展示组件",
        "name": "展示组件",
        "children": [
          {
            "id": "Badge",
            "name": "Badge 徽标"
          },
          {
            "id": "Circle",
            "name": "Circle 环形进度条"
          },
          {
            "id": "Collapse",
            "name": "Collapse 折叠面板"
          },
          {
            "id": "CountDown",
            "name": "CountDown 倒计时"
          },
          {
            "id": "Divider",
            "name": "Divider 分割线"
          },
          {
            "id": "Empty",
            "name": "Empty 空状态"
          },
          {
            "id": "ImagePreview",
            "name": "ImagePreview 图片预览"
          },
          {
            "id": "List",
            "name": "List 列表"
          },
          {
            "id": "NoticeBar",
            "name": "NoticeBar 通知栏"
          },
          {
            "id": "Popover",
            "name": "Popover 气泡弹出框"
          },
          {
            "id": "Progress",
            "name": "Progress 进度条"
          },
          {
            "id": "Skeleton",
            "name": "Skeleton 骨架屏"
          },
          {
            "id": "Steps",
            "name": "Steps 步骤条"
          },
          {
            "id": "Sticky",
            "name": "Sticky 粘性布局"
          },
          {
            "id": "Swipe",
            "name": "Swipe 轮播"
          },
          {
            "id": "Tag",
            "name": "Tag 标签"
          }
        ]
      },
      {
        "id": "导航组件",
        "name": "导航组件",
        "children": [
          {
            "id": "ActionBar",
            "name": "ActionBar 动作栏"
          },
          {
            "id": "Grid",
            "name": "Grid 宫格"
          },
          {
            "id": "IndexBar",
            "name": "IndexBar 索引栏"
          },
          {
            "id": "NavBar",
            "name": "NavBar 导航栏"
          },
          {
            "id": "Pagination",
            "name": "Pagination 分页"
          },
          {
            "id": "Sidebar",
            "name": "Sidebar 侧边导航"
          },
          {
            "id": "Tab",
            "name": "Tab 标签页"
          },
          {
            "id": "Tabbar",
            "name": "Tabbar 标签栏"
          },
          {
            "id": "TreeSelect",
            "name": "TreeSelect 分类选择"
          }
        ]
      },
      {
        "id": "业务组件",
        "name": "业务组件",
        "children": [
          {
            "id": "AddressEdit",
            "name": "AddressEdit 地址编辑"
          },
          {
            "id": "AddressList",
            "name": "AddressList 地址列表"
          },
          {
            "id": "Card",
            "name": "Card 商品卡片"
          },
          {
            "id": "ContactCard",
            "name": "ContactCard 联系人卡片"
          },
          {
            "id": "ContactEdit",
            "name": "ContactEdit 联系人编辑"
          },
          {
            "id": "ContactList",
            "name": "ContactList 联系人列表"
          },
          {
            "id": "Coupon",
            "name": "Coupon 优惠券"
          },
          {
            "id": "SubmitBar",
            "name": "SubmitBar 提交订单栏"
          }
        ]
      }
    ]

    const array = [];

    groupList.map((item) => {
      const obj = {
        path: 'base',
        name: 'Base',
        component: `'()=> import(
        /* webpackChunkName: "component-Base" */ "../views/component/block.vue"
      )'`,
      };
      array.push(obj);
      item.children.map(route => {
        const path = route.id.toLocaleLowerCase();
        const name = route.id;
        const obj = {
          path,
          name,
          component: `'()=> import(
          /* webpackChunkName: "component-${path}" */ "../views/component/block.vue"
        )'`,
        };
        array.push(obj);
      })
    });

    return array;
  }
  /**
   * 输出变量
   */
  function consoleData() {
    setTimeout(() => {
      console.log("readlyMenuList，网站菜单：", readlyMenuList)
      console.log("styleList，组件样式变量：", styleList)
    }, 1000 * 120)
  }
  function init() {
    getDocMenu()
    getStyleList()
    window.addEventListener("hashchange", hashChange, false);
    filterWebMenuList()
    setTimeout(createRouter, 1000 * 110)
    consoleData()
  }
  init()
})()
