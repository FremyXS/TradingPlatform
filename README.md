# TradingPlatform

TradingPlatform - интернет магазин, реализованный на микросервисах laravel  

## UI Service (tradingplatform.ui)
Сервис, отвчающий за весь фронт сайта. ( Пучбличная и админ часть )

## Products Service (tradinglpatform.products)
Сервис, отвечающий за хранение, изменение, удаление информации о продукте.
Информация о товаре:
 - Id товара
 - Титл - Название продукта
 - Описание
 - Дата выхода
 - Жанр
 - Платформа 
 - Тип продукта 
 - Разработчик
 - Id продавца

### Api:
 - api/products
    - / - Получение всех продуктов (ProductController@index)
    - /get-sellers - Получение всех продуктов (ProductController@getBySellerId)
    - /filters - Получение всех фильтров (ProductController@getAllFilters)
    - /{id} - Получение полной информации об одном продукте (ProductController@show)
    - /create - Добавление продукта (ProductController@store)
 - api/filters
    - /genres
    - /platforms
    - /type-products
    - /developers

## Sales Service (tradingplatform.sales)
Сервис, отвечающий за покупки на сайте.
Хранит информацию о заказах, в которой указаны:
 - Id покупателя
 - Id продавца
 - Id продукта
 - Статус Заказа
 - Количество товара при заказе
 - Окончательная цена

## Email Service (tradinglpatform.email)
Сервис, отвечающий за отправку писемь на почту.
### Api:
 - api/email - Отправка текста по почте (EmailController@send)

## Auth Service (tradinglpatform.auth)
Сервис, который отвечает за аутентификацию и авторизацию на сайте. Хранит данные входа пользователя на сайт.
Использует JWT - токен

### Api:
 - api/auth
    - /register - Регистрация (AuthController@register)
    - /login - Авторизация (AuthController@login) 
    - /logout - Выход из системы (AuthController@logout)
    - /refresh - обновление токена (AuthController@refresh)
    - /user-profile - получение авторзированного юзера по токену (AuthController@userProfile)
- api/users
    - /index - список всех юзеров (UserController@index)
