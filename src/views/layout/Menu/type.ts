export interface MenuProps {
  path: string;
  meta: { hidden: boolean; icon: string; title: string };
  children?: MenuProps[];
}
