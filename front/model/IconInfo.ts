export class IconInfo {
  private _link: string;
  private _icon: string;

  constructor(link: string, icon: string) {
    this._link = link;
    this._icon = icon;
  }

  get link(): string {
    return this._link;
  }

  set link(value: string) {
    this._link = value;
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }
}
