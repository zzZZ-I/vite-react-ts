import React from 'react'
import { useLocation } from 'react-router-dom'
import { Breadcrumb } from 'antd'

interface breadcrumb {
  id: string
  name: string
}

// 递归获得面包屑
function getBreadcrumb(src: string[], data: any) {
  let result: breadcrumb[] = []
  const value = data.find((item) => {
    return item.id === src[0]
  })
  if (value) {
    result.push({
      id: value.id,
      name: value.name
    })
    src.splice(0, 1)
    if (src.length > 0) {
      result = result.concat(getBreadcrumb(src, value.children))
    }
  }
  return result
}
const AppBreadcrumb: React.FC = () => {
  const { pathname } = useLocation()
  console.log(pathname)
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>User</Breadcrumb.Item>
      <Breadcrumb.Item>Bill</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default AppBreadcrumb
