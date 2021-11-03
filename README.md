# 1. 接口文档

## 1. 服务器

服务器地址：xxxxxxx

开放端口号：88

## 2. 获取所有任务

请求方法：`GET`

请求地址：`http://xxxxxxx:88/getall`

返回：

```javascript
// 成功
{
    success: 0,
    data: [
        { id: '5g34jh5', content: 'Hello world!', isDone: false },
        { id: 't6h45jk6h345', content: 'Hello world!', isDone: true },
        { id: '245jhk234h5', content: 'Hello world!', isDone: false },
        { id: '4h5jk345gh', content: 'Hello world!', isDone: true },
        { id: '67hjkh345jkh', content: 'Hello world!', isDone: false },
        { id: '823hjk4ghkgh3j4', content: 'Hello world!', isDone: true },
    ],
}
// id:string      content:string     isDone:boolean

// 失败
{
    success: -1
}
```

## 3. 添加任务

请求方法：`POST`

请求地址：`http://xxxxxxx:88/add`

请求参数：

```javascript
{
    content: 'a task...',
    isDone: false
}
```

保存到服务器时，添加一个**随机**、**唯一**的`id`。

返回：

```javascript
// 成功
{
    success: 0,
    data: {
        id: 'd45hj43h53jk4'
    }
}

// 失败
{
    success: -1
}
```

## 4. 删除任务

请求方法：`DELETE`

请求地址：`http://xxxxxxx:88/delete/[id]`，`[id]`为要删除任务的真实`id`

返回：

```javascript
// 成功
{
    success: 0,
}

// 失败
{
    success: -1
}
```

## 5. 修改任务

### 1. 修改任务状态

请求方法：`POST`

请求地址：`http://xxxxxxx:88/state`

请求参数：

```javascript
{
    id: 'd45hj43h53jk4',
    isDone: false
}
```

返回：

```javascript
// 成功
{
    success: 0,
}

// 失败
{
    success: -1
}
```

### 2. 修改任务内容

请求方法：`POST`

请求地址：`http://xxxxxxx:88/content`

请求参数：

```javascript
{
    id: 'd45hj43h53jk4',
    content: 'a task...',
}
```

返回：

```javascript
// 成功
{
    success: 0,
}

// 失败
{
    success: -1
}
```

