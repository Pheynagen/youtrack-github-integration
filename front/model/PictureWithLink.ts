export class PictureWithLink {
  private _pictureName: string;
  private _link: string;

  constructor(picturePath: string, link: string) {
    this._pictureName = picturePath;
    this._link = link;
  }


  get pictureName(): string {
    return this._pictureName;
  }

  set pictureName(value: string) {
    this._pictureName = value;
  }

  get link(): string {
    return this._link;
  }

  set link(value: string) {
    this._link = value;
  }
}
