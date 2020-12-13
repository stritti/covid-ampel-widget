import { NavBar } from 'vant'
import { Sticky } from 'vant'
import { ActionBar, ActionBarIcon, ActionBarButton } from 'vant'
import { Cell, CellGroup } from 'vant'
import { Collapse, CollapseItem } from 'vant'
import { Image as VanImage } from 'vant'
import { IndexBar, IndexAnchor } from 'vant'
import { Loading } from 'vant'
import { Locale } from 'vant'

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
  }
}
