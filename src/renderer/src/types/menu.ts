export interface SubMenuItem {
    path: string
    title: string
    icon: string
  }
  
  export interface MenuItem {
    path: string
    title: string
    icon: string
    children: SubMenuItem[]
  }