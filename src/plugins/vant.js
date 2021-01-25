import 'vant/lib/nav-bar/index.less'
import { NavBar } from 'vant'
import 'vant/lib/sticky/index.less'
import { Sticky } from 'vant'
import 'vant/lib/action-bar/index.less'
import 'vant/lib/action-bar-button/index.less'
import 'vant/lib/action-bar-icon/index.less'
import { ActionBar, ActionBarIcon, ActionBarButton } from 'vant'
import 'vant/lib/cell/index.less'
import 'vant/lib/cell-group/index.less'
import { Cell, CellGroup } from 'vant'
import 'vant/lib/collapse-item/index.less'
import { Collapse, CollapseItem } from 'vant'
import 'vant/lib/image/index.less'
import { Image as VanImage } from 'vant'
import 'vant/lib/index-bar/index.less'
import 'vant/lib/index-anchor/index.less'
import { IndexBar, IndexAnchor } from 'vant'
import 'vant/lib/loading/index.less'
import { Loading } from 'vant'
import { Locale } from 'vant'
import 'vant/lib/tag/index.less'
import { Tag } from 'vant'
import 'vant/lib/list/index.less'
import { List } from 'vant'

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
    app.use(VanImage)
    app.use(IndexBar)
    app.use(IndexAnchor)
    app.use(Loading)
    app.use(Tag)
    app.use(List)
  }
}
