const axios =require("axios")

axios.post("http://127.0.0.1:3000/list.do",{
  name:"jsd"
}).then(res=>{
  console.log(res)
}).catch(err=>{
  console.error(err)
})