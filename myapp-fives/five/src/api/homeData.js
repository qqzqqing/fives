import myajax from "@/tool/myajax.js";

export default {
  homeBanner(cb){
    const config = {
      url: "http://10.8.162.51:8000/api/banner",
      options:{},
      success:(data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  },
  homeNav(cb){
    const config= {
      url: "http://10.8.162.51:8000/api/nav",
      options:{},
      success:(data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  }
}



12345