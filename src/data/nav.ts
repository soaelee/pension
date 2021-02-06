interface CategoryType {
  id: number;
  title: string;
  link: string;
  active: false;
  icon?: string;
}

export const category: CategoryType[] = [
  {
    id: 1,
    title: 'About',
    link: '/about',
    active: false,
    icon: 'HomeOutlined',
  },
  {
    id: 2,
    title: 'Rooms',
    link: '/rooms',
    active: false,
    icon: 'KeyOutlined'
  },
  {
    id: 3,
    title: 'Facility',
    link: '/facility',
    active: false,
  },
  {
    id: 4,
    title: 'Service',
    link: '/service',
    active: false,
  },
  {
    id: 5,
    title: 'Reserver',
    link: '/reserve',
    active: false,
  }
]