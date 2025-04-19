#!/usr/bin/env bash

# Скрипт для деплоя React-приложения в Yandex Cloud Object Storage
# Требования: установлен AWS CLI с профилем yc и endpoint-url настроенным на https://storage.yandexcloud.net

set -euo pipefail
IFS=$'\n\t'

# Настройки (можно переопределить через переменные окружения)
BUCKET_NAME=${BUCKET_NAME:-okr-platform-deck-front}  # Имя бакета
AWS_PROFILE=${AWS_PROFILE:-yc}                      # Профиль AWS CLI
ENDPOINT_URL=${ENDPOINT_URL:-https://storage.yandexcloud.net}
BUILD_DIR=${BUILD_DIR:-build}

echo "🚀 Начинаем деплой для бакета: $BUCKET_NAME"

# Шаг 1: Сборка приложения всегда
echo "📦 Выполняем установку зависимостей и сборку проекта..."
npm install
npm run build

# Шаг 2: Синхронизация файлов в бакет
echo "☁️  Синхронизируем файлы из папки $BUILD_DIR в s3://$BUCKET_NAME"
aws s3 sync "$BUILD_DIR/" "s3://$BUCKET_NAME/" \
  --profile "$AWS_PROFILE" \
  --acl public-read \
  --delete \
  --endpoint-url "$ENDPOINT_URL"

# Шаг 3: Завершение
echo "✅ Деплой завершен! Приложение доступно по адресу: https://$BUCKET_NAME.website.yandexcloud.net/"