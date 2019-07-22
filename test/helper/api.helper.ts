class UIHelper {
  rgbToHex(rgb: string) {
    let _hex: string;
    const hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      _hex = '0' + hex;
    }
    return _hex;
  }

  // get full code
  fullColorHex(r: string, g: string, b: string) {
    const red = this.rgbToHex(r);
    const green = this.rgbToHex(g);
    const blue = this.rgbToHex(b);
    return red + green + blue;
  }
}

export default new UIHelper();
