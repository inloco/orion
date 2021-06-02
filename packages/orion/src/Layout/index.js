import React from 'react'

import Layout from './Layout'
import LayoutAlert, { AlertContextProvider } from './LayoutAlert'
import LayoutAppsDropdown from './LayoutAppsDropdown'
import LayoutCenter from './LayoutCenter'
import LayoutMain from './LayoutMain'
import LayoutTopbar from './LayoutTopbar'
import LayoutSidebar from './LayoutSidebar'
import LayoutUserProfile from './LayoutUserProfile'
import LayoutContent from './LayoutContent'

const Dimensions = {
  topbarHeight: 64,
  alertHeight: 40
}

const LayoutIndex = props => {
  return (
    <AlertContextProvider>
      <Layout {...props} />
    </AlertContextProvider>
  )
}

LayoutIndex.Alert = LayoutAlert
LayoutIndex.AppsDropdown = LayoutAppsDropdown
LayoutIndex.Center = LayoutCenter
LayoutIndex.Main = LayoutMain
LayoutIndex.Topbar = LayoutTopbar
LayoutIndex.Sidebar = LayoutSidebar
LayoutIndex.UserProfile = LayoutUserProfile
LayoutIndex.Content = LayoutContent
LayoutIndex.Dimensions = Dimensions

export default LayoutIndex
