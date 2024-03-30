# node block
FROM node:alpine3.16 as nodework
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build


# nginx block
# nginx run on port 80
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
# remove the default content
RUN rm -rf ./*
# now copy the content of build into the /usr/share/nginx/html
COPY --from=nodework /app/build .
ENTRYPOINT [ "nginx","-g","daemon off;" ]