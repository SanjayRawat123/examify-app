// prettier-ignore
export interface CoreMenuItem {
    id           : string;
    title        : string;
    url?         : string;
    type         : 'section' | 'collapsible' | 'item';
    icon?        : string;
    children?: CoreMenuItem[];
}

export interface CoreMenu extends CoreMenuItem {
  children?: CoreMenuItem[];
}
