import { NavBar, Sticky, ActionBar, ActionBarIcon, ActionBarButton, Cell, CellGroup, Collapse, CollapseItem, Image as VanImage, IndexBar, IndexAnchor, Loading, Locale, Tag, PullRefresh } from 'vant'

import 'vant/lib/pull-refresh/index.less'

import 'vant/lib/index.css'
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
    app.use(PullRefresh)
  }
}
