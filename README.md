# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### 二、github搜索案例相关知识点
1.设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办
2.es6小知识点：解构赋值+重命名
    let obj = {a:{b:1}}
    const {a} = obj
    const {a:{b}} = obj
    const {a:{b:value}} = obj
3.消息订阅与发布机制
    1.先订阅再发布
    2.适用于任意组件间通信
    3、要在组件的componentWillUnmount中取消订阅 pubsub-js
4.fetch发送请求（关注分离的设计思想）
            // try{
            //     const res = await fetch('https://api.github.com/search/users?q='+this.input.value);
            //     const data = await res.json();
            //     console.log(data)
            // }catch(err){
            //     console.log('请求出错',err)
            // }
            
5、react-router-dom的理解
    1、react的一个插件库
    2、专门实现一个spa应用
    3、基于react的项目基本都会用到此库
    4、内置组件 BrowserRouter HashRouter Router Redirect Link NavLink Switch
### 三、路由的基本使用
 1、明确好界面中的导航区、展示区
 2、导航区的a标签改为link标签
    <Link to='/xx'>Demo</Link>
 3、展示区与Router标签进行路径匹配
    <Router path='/xx' component={Demo}  />
 4、<App>的最外层包裹一个<BrowserRouter>或者<HashRouter>
 ### 四、路由组件与一般组件
 1、写法不同：
    一般组件：<Demo/>
    路由组件：<Route path='/xxx' component={Demo}/>
 2、存放位置不同：
    一般组件：components
    路由组件：pages
 3、接收到的props不同：
    一般组件：写组件标签时传递了什么，就能收到什么
    路由组件：接收到三个固定的属性：history  location match