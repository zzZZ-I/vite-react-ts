import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons'

export default [
  {
    icon: DesktopOutlined,
    index: '/',
    title: '活动管理',
    key: 'sub1'
  },
  {
    icon: PieChartOutlined,
    index: '/detail',
    title: '详情管理',
    key: 'sub2',
    children: [
      {
        icon: FileOutlined,
        key: '2-1',
        index: '/detail',
        title: '详情管理'
      },
      {
        icon: FileOutlined,
        key: '2-2',
        index: '/detail',
        title: '详情管理'
      },
      {
        icon: FileOutlined,
        key: '2-3',
        index: '/detail',
        title: '详情管理'
      }
    ]
  },
  {
    icon: FileOutlined,
    index: '/detail',
    title: '我问问谁',
    key: 'sub3'
  },
  {
    icon: UserOutlined,
    index: '/detail',
    title: '钱钱钱',
    key: 'sub4'
  },
  {
    icon: TeamOutlined,
    index: '/detail',
    title: '哈哈哈',
    key: 'sub5'
  }
]
