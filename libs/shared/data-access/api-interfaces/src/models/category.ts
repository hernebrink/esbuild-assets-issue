type IconName = ''
  | 'display'
  | 'map'
  | 'success'
  | 'spreadsheet'
  | 'project'
  | 'design-mode'
  | 'line-bar-chart'

export type Category = {
  id: number;
  name: string;
  icon: IconName;
}
