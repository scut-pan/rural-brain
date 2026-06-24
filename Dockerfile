# ---------- 构建阶段 ----------
FROM node:20-alpine AS builder
WORKDIR /app

# 安装 pnpm（项目无 lockfile，固定 pnpm@9 保证可复现）
RUN npm install -g pnpm@9

# 先拷依赖清单，利用 docker 层缓存
COPY package.json pnpm-workspace.yaml ./

# 安装依赖
RUN pnpm install

# 拷源码并构建（Vite 默认输出到 dist/）
COPY . .
RUN pnpm build

# ---------- 运行阶段 ----------
FROM nginx:alpine

# 自定义 nginx 配置：静态托管 + gzip + 资源缓存
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 拷构建产物
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
