import 'vant/lib/nav-bar/index.less'
import { NavBar, Sticky, ActionBar, ActionBarIcon, ActionBarButton, Cell, CellGroup, Collapse, CollapseItem, Dialog, Image as VanImage, Icon, IndexBar, IndexAnchor, Loading, Locale, Tag, List, PullRefresh } from 'vant'
import 'vant/lib/sticky/index.less'

import 'vant/lib/action-bar/index.less'
import 'vant/lib/action-bar-button/index.less'
import 'vant/lib/action-bar-icon/index.less'

import 'vant/lib/cell/index.less'
import 'vant/lib/cell-group/index.less'

import 'vant/lib/collapse-item/index.less'

import 'vant/lib/dialog/index.less'

import 'vant/lib/image/index.less'

import 'vant/lib/icon/index.less'

import 'vant/lib/index-bar/index.less'
import 'vant/lib/index-anchor/index.less'

import 'vant/lib/loading/index.less'

import 'vant/lib/tag/index.less'

import 'vant/lib/list/index.less'

import 'vant/lib/pull-refresh/index.less'

import deDE from 'vant/es/locale/lang/de-DE'

export default {
  install: (app) => {
    Locale.use('de-DE', deDE)

    app.use(NavBar)
    app.use(Sticky)
    app.use(ActionBar)
    app.use(ActionBarIcon)
    app.use(ActionBarButton)
    app.use(Cell)
    app.use(CellGroup)
    app.use(Collapse)
    app.use(CollapseItem)
    app.use(Dialog)
    app.use(VanImage)
    app.use(IndexBar)
    app.use(IndexAnchor)
    app.use(Loading)
    app.use(Tag)
    app.use(PullRefresh)
    app.use(List)
    app.use(Icon)
  }
}
