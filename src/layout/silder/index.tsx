import React, { useState, useCallback, useEffect } from 'react'
import { Layout, Breadcrumb } from 'antd'
import AppMenu from './app-menu'
import AppBreadcrumb from './app-breadcrumb'

const { Header, Content, Footer, Sider } = Layout

const index: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false)
	const onCollapse = useCallback(
		(parm) => {
			setCollapsed(parm)
		},
		[collapsed]
	)
	useEffect(() => {
		console.log('====================================')
		console.log(111)
		console.log('====================================')
		return () => {
			console.log('====================================')
			console.log(222)
			console.log('====================================')
		}
	}, [])
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
				<div className="logo" />
				<AppMenu />
			</Sider>
			<Layout className="site-layout">
				<Header className="site-layout-background" style={{ padding: 0 }} />
				<Content style={{ margin: '0 16px' }}>
					<AppBreadcrumb />
					<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
						Bill is a cat.
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
			</Layout>
		</Layout>
	)
}

export default index
