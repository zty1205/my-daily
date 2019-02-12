
import CommonObj from "../CommonObj"
import { NOT_EXIST } from "./constants"

class Dictionary {
  constructor(did = NOT_EXIST, dName = "", remark ="", status = 0, base = false) {
    this._did = did;
    this._dName = dName;
    this._remark = remark;
    this._status = status;
    this._base = base;
  }

  setDid(did) {
    this._did = did;
    return this;
  }
  setDName(dName) {
    this._dName = dName
  }
  setRemark(remark) {
    this._remark = remark;
    return this;
  }
  setStatus(status) {
    this._status = status;
    return this;
  }
  setBase(base) {
    this._base = base;
    return this;
  }

  set _did(did) {
    if (!isNaN(did)) {
      this.did = Number(did);    
    } else {
      throw new Error("did must be countable");
    } 
  }
  set _dName(dName) {
    this.dName = (dName + "");
  }
  set _remark(remark) {
    this.remark = remark;
  } 
  set _status(status) {
    if (!isNaN(status)) {
      this.status = Number(status);    
    } else {
      throw new Error("status must be countable");
    }  
  }
  set _base(base) {
    this.base = !!base;
  }
}