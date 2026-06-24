# 部署与更新指南

本项目为纯静态前端（Vite + React），通过 Docker 部署，容器内 nginx 托管静态文件。
对外端口：**3002**，访问地址：`http://<服务器IP>:3002/`

---

## 一、本地：提交并推送代码

```bash
cd <项目本地路径>
git add .
git commit -m "更新说明"
git push origin main
```

## 二、服务器：连接

```bash
ssh <用户名>@<服务器IP>
```

## 三、服务器：更新并重新部署

```bash
cd ~/rural-brain

# 1. 拉取最新代码
git pull origin main

# 2. 重新构建镜像
docker build -t rural-brain:latest .

# 3. 重建容器（端口 3002，--restart always 后台常驻）
docker rm -f rural-brain
docker run -d --name rural-brain --restart always -p 3002:80 rural-brain:latest

# 4. 验证（返回 HTTP 200 即正常）
curl -I http://localhost:3002/
```

## 四、常用运维命令

| 操作 | 命令 |
|------|------|
| 查看运行状态 | `docker ps` |
| 查看容器日志 | `docker logs -f rural-brain` |
| 重启容器 | `docker restart rural-brain` |
| 停止容器 | `docker stop rural-brain` |

> 容器配置了 `--restart always`，服务器重启后会自动恢复运行。
