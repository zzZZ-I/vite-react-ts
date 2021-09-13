import React from 'react'
import { Menu } from 'antd'

import silder from './menu'

const { SubMenu } = Menu

const defaultSelectedKeys = silder[0].key

const AppMenu: React.FC = () => {
  return (
    <Menu theme="dark" defaultSelectedKeys={[defaultSelectedKeys]} mode="inline">
      {silder.map((item) =>
        item.children && item.children.length > 0 ? (
          <SubMenu key={item.key} icon={<item.icon />} title={item.title}>
            {item.children.map((child) => (
              <Menu.Item key={`${child.key}-1`} icon={<child.icon />}>
                {child.title}
              </Menu.Item>
            ))}
          </SubMenu>
        ) : (
          <Menu.Item key={item.key} icon={<item.icon />}>
            {item.title}
          </Menu.Item>
        )
      )}
    </Menu>
  )
}
export default AppMenu
