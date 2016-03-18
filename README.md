# alaska-field-text
Alaska text field

```javascript
//alaska config

export default {
  'alaska-field-text': {
   lowercase: field.lowercase,//是否全部转为小写
   uppercase: field.uppercase,//是否全部转为大写
   trim: field.trim, //是否去掉首尾空格
   //对字段使用的正则表达式 在view中接收到的是字符串，需要重新转换成正则表达式，
   //可以使用
   //let m=props.field.match.split('/');
   //let reg=new RegExp(m[1],m[2]);
   match: field.match instanceof RegExp ? field.match : null,
   maxlength: field.maxlength, //字段最大长度
   minlength: field.minlength //字段最小长度
  }
}
```

## Contribute
[Maichong Software](http://maichong.it)

[Liang Xingchen](https://github.com/liangxingchen)

[Li Yudeng](https://github.com/maichonglyd)

## License

This project is licensed under the terms of the MIT license
