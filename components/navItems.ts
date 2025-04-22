export const navSections = [
  {
    title: 'Evidence',
    items: [
      { label: 'Uploads', href: '/dashboard/uploads', icon: 'FaVideo' },
      { label: 'Review Panel', href: '/dashboard/evidence-review', icon: 'FaEye' },
      { label: 'Transcript Export', href: '/dashboard/transcript-export', icon: 'FaDownload' },
    ]
  },
  {
    title: 'AI Intelligence',
    items: [
      { label: 'AI Dashboard', href: '/dashboard/ai', icon: 'FaBrain' },
      { label: 'Ask AI', href: '/dashboard/ai-query', icon: 'FaQuestionCircle' },
      { label: 'Entity Insights', href: '/dashboard/entity-explorer', icon: 'FaTag' },
      { label: 'Timeline Heatmap', href: '/dashboard/timeline-heatmap', icon: 'FaChartLine' }
    ]
  },
  {
    title: 'Reports',
    items: [
      { label: 'Report Generator', href: '/dashboard/pdf-generator', icon: 'FaFileAlt' },
      { label: 'Audit Log', href: '/dashboard/audit-log', icon: 'FaShieldAlt' }
    ]
  },
  {
    title: 'Admin',
    items: [
      { label: 'Projects', href: '/dashboard/projects-manager', icon: 'FaFolder' },
      { label: 'User Manager', href: '/dashboard/admin/user-manager', icon: 'FaUserShield' },
      { label: 'Profile', href: '/dashboard/profile', icon: 'FaUser' }
    ]
  }
];
