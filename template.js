// render('我是{{name}}，年龄{{age}}，性别{{sex}}',{ name:'姓名', age:18 }) // 结果： 我是姓名，年龄18，性别undefined。
let tpl = '我是{{name}}，年龄{{age}}，性别{{sex}}'
let data = {
  name: 'Mars',
  age: '18',
  sex: 'male'
}

const render = (tpl, data) => {
  return tpl.replace(/\{\{(.+?)\}\}/g, function(m1, m2){
    console.log(m2);
    return data[m2]
  })
}
console.log(render(tpl, data))