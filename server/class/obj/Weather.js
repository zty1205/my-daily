
import Dictionary from "./Dictionary"
import { NOT_EXIST } from "./constants"

class Weather extends Dictionary {
  constructor(wid = NOT_EXIST, wName = "", did, dName, remark, status, base) {
    super(did, dName, remark, status, base);
    this._wid = wid;
    this._wName = wName;
  }

  setWid(wid) {
    this._wid = wid;
    return this;
  }
  setWName(wName) {
    this._wName = wName
  }

  set _wid(wid) {
    if (!isNaN(wid)) {
      this.wid = Number(wid);    
    } else {
      throw new Error("wid must be countable");
    } 
  }
  set _wName(wName) {
    this.wName = (wName + "");
  }
}