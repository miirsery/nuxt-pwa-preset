# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

## Настройка PWA

Для того чтобы ваше PWA приложение работало не только через localhost, но и при
трансляции в локальную сеть нужно настроить https и сертификаты.

- Запустите проект с флагом --host. `nuxt dev --host`
- Скопируйте IP, на котором захостился сервер.
- Установите утилиту `mkcert`. Может потребоваться перезагрузка.
- Выполните команду `mkcert {адресс без протокола и порта}`
- Запишите в `.env` название/путь до полученных файлов. Файл с постфиксом `-key` - ключ. Второй - сертификат.
- Перезапустите сервер той же командой

Теперь, т.к. сертификат самоподписанный, надо добавить его в список доверенных сертификатов браузера.
Для desktop-устройств:
- Зайдите в настройки браузера
- Найдите раздел конфиденциальности
- Найдите настройку сертификатов
- Добавьте полученный ранее сертификат (файл без постфикса `-key`)
- Следуйте инструкциям

Для android-устройств требуется корневой сертификат, поэтому порядок действий будет другим:
- Выполните команду `mkcert -CAROOT`
- Пройдите по полученному пути
- Отправьте файл ключа на ваше устройство
- Перейдите в настройки конфиденциальности устройства
- Найдите настройку установки сертификатов
- Выберите устновку сертификата доверенного центра
- Выберите файл корневого сертификата
- Перезагрузите устройство

#TODO: Найти способ для прода

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
