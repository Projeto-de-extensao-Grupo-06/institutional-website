FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG VITE_BASE=/institucional
ENV VITE_BASE=${VITE_BASE}

RUN npm run build

FROM nginx:alpine

ENV NGINX_ENVSUBST_FILTER=BACKEND_URL

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
