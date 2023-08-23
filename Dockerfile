# Используем базовый образ Node версии 18
FROM node:18

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json внутрь контейнера
COPY package.json .
COPY package-lock.json .

# Устанавливаем зависимости
RUN npm i --legacy-peer-deps

# Копируем все остальные файлы проекта внутрь контейнера
COPY . .

# Устанавливаем порт для приложения
EXPOSE 5173

# Задаем entrypoint
ENTRYPOINT ["npm", "run"]

# Запускаем сборку и запуск приложения
CMD ["build"]
CMD ["dev"]
