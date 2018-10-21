# TypeScript
![TypeScript](https://www.tslang.cn/assets/images/foreground_bluprint.svg)

#### 001、什么是TypeScript

- 个人定义： TypeScript = Type + ECMAScript 6
> TypeScript 是 JavaScript 的一个超集，主要提供了 **类型系统** 和 **ES6 的支持**

- `TypeScript` 是 `JavaScript` 的加强版本，在编译期去掉类型和语法，生成纯净、 简洁的`JavaScript` 代码，并且可以运行在任何浏览器上、`Node.js` 环境中和任何支持ECMAScript 3（或更高版本）的 `JavaScript` 引擎中。

- 类型允许JavaScript开发者在开发JavaScript应用程序时使用高效的开发工具和常用操作比如静态检查和代码重构。
  
#### 002、为什么选择使用 TypeScript 

- 可以在编译期间发现错误
- 类型关系明确，增加了代码的可读与维护性
- 增强了编辑器的功能(代码提示、IDE代码提示等)

#### 003、什么是静态语言和动态语言

- 静态语言
    - 静态语言是在编译时变量的数据类型即可确定的语言，多数静态类型语言要求在使用变量之前必须声明数据类型。 
    - 例如：C++、Java、Delphi、C#等。

- 动态语言
    - 动态语言是在运行时确定数据类型的语言。变量使用之前不需要类型声明，通常变量的类型是被赋值的那个值的类型。 
    - 例如PHP/ASP/Ruby/Python/Perl/ABAP/SQL/JavaScript/Unix Shell等等。

![静态语言和动态语言的比较](https://www.cnblogs.com/images/cnblogs_com/guashi/1324200/o_静态语言和动态语言的比较.png)

#### 004、什么是静态检查与动态检查

- 静态检查
    - 静态类型检查允许我们在程序没有运行之前就可以确定我们所设定的确定性是否是对的。一旦有违反这些既定规则的行为，它能在运行之前就发现，而不是在运行时。
    - 静态方法是指不运行被测程序本身，仅通过分析或检查源程序的语法、结构、过程、接口等来检查程序的正确性。
    - 无需运行，根据程序代码就能确定结果

- 动态检查
    - 通过运行被测程序，检查运行结果与预期结果的差异，并分析运行效率、正确性和健壮性等性能

> 动态语言和静态语言各有优劣，而 TypeScript 提供了静态语言强类型支持，同时兼容动态语言弱类型的语法，使用者根据项目需求自由选择。

#### 拓展

```javascript
Type（类型）

静态（static）：无需运行，根据程序代码就能确定结果。

动态（dynamic）：只有运行才能确定结果。

类型：对某个数据所具有的性质进行的描述。如它的结构是怎样的，能进行什么操作。

静态类型：数据拥有类型，且仅有数据拥有类型。

动态类型：数据拥有类型，存放数据的变量、表达式也拥有类型，且类型在编译时是固定的。

作者：daniel ding
链接：https://www.zhihu.com/question/21879449/answer/117601224
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

#### 005、搭建 TypeScript 开发环境

- npm 全局安装

```javascript
npm install -g typescript

```

- 编辑器构建一个 ts 文件，例如 greeter.ts，注意后缀名为 `.ts`

```javascript
function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);

```

- 编译代码

```javascript
tsc greeter.ts

```

- [拓展阅读：5分钟上手TypeScript](https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html)

#### 006、推荐编辑器

- `Visual Studio Code`
    - 内置了 TypeScript 支持。并且 `VS Code` 本身也是用 TypeScript 编写的。

#### 007、基础类型

- JavaScript 5大基础数据类型
    -  Undefined 、 Null 、 Boolean 、 Number 和 String