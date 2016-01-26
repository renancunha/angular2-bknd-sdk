export class UtilService{

  static instance:UtilService;


  constructor() {

  }

  static getInstance() {
    if(UtilService.instance == null) {
      UtilService.instance = new UtilService();
    }
    return UtilService.instance;
  }

  static encodeObjToURI(obj:any) {
    let str:Array<string> = [];
    for(var index in obj) {
      str.push(encodeURIComponent(index) + "=" + encodeURIComponent(obj[index]));
    }
    return str.join('&');
  }
}
