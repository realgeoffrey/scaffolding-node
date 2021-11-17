# scaffolding-node

>scaffolding of Node.js: TypeScript+pm2+--inspect+ESLint+Prettier+simple-git-hooks+lint-staged

纯后台服务。

## 本地调试

```shell
# 启动
npm run dev

# 关闭
npm run dev:stop
```

## 生产环境
1. 使用pm2

    ```shell
    # 启动
    npm run start:pm2

    # 关闭
    npm run stop:pm2

    # 重启
    npm run restart:pm2
    ```
2. 直接Node.js前台启动

    ```shell
    npm run start
    ```

- 生成docker镜像，启动容器

    ```shell
    # 生成docker镜像
    docker build -t scaffolding-node .

    # 启动容器
    docker run -p=8080:8080 -d scaffolding-node
    ```
