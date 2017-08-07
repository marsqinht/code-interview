/*
尽可能全面正确的解析一个任意url的所有参数为Object。 
var url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&d&enabled'; parseParam(url); 
结果： 
{ user: 'anonymous', id: [123, 456], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型 city: '北京', 
中文 enabled: true, // 未指定值的 key 约定值为 true } 
*/

let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&d&enabled'

function parseParam(url) {
  let oParams = {}
  let count = {}
  let query = decodeURIComponent(url).split('?')
  if (!query) return {}

  let arrParams = query[1].split('&')
  arrParams.forEach(function(el, index) {
    let arrKeyValue = el.split('=')
    if (arrKeyValue[1] === void 0) {
      arrKeyValue[1] = true
    }
    if(oParams[arrKeyValue[0]]) { 
      let same = oParams[arrKeyValue[0]] + ' ' + arrKeyValue[1]
      oParams[arrKeyValue[0]] = same
    } else {
      oParams[arrKeyValue[0]] = arrKeyValue[1]
    }
    
  })

  return oParams
  
}
console.log(parseParam(url))

