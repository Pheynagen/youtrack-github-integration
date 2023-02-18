export class GalleryPicture {
  private _name: string;
  private _pictureName: string;
  private _videoLink: string;

  constructor(name: string, picturePath: string, videoLink: string) {
    this._name = name;
    this._pictureName = picturePath;
    this._videoLink = videoLink;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get pictureName(): string {
    return this._pictureName;
  }

  set pictureName(value: string) {
    this._pictureName = value;
  }

  get videoLink(): string {
    return this._videoLink;
  }

  set videoLink(value: string) {
    this._videoLink = value;
  }
}
