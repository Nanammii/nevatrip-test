# Тестовое задание - верстка по макету Nevatrip

---

Нужно сверстать страницу по макету по принципу mobile-first.

Используемые технологии:  

1. HTML5, BEM
2. Gulp
3. Sass/Scss
4. JavaScript


[Demo preview](https://nanammii.github.io/nevatrip-test/)

# Тестовое задание #

Это тестовое задание не имеет никаких технических ограничений.
Ты можешь использовать любые инструменты.
Делай так, как ты считаешь, будет правильно и хорошо.

### 1. Верстка блока ###

Нужно сверстать страницу [по макету](https://www.figma.com/file/JyFQcxiynMH1i5ViWz4qi0/Layout-test-task) по принципу mobile-first.

Примечания:
- Если времен больше чем на 1 строчку,
  то в конце строчки должна появиться кнопка "ещё..."
  при нажатии на которую будут раскрываться скрытые времена.
- Под ценой может не быть надписи "1200₽ на причале"
  в таком случае цена должна быть выровнена посередине
  относительно копки "подробнее"


### 2. Таблица на странице ###

В текст [статьи на странице](https://codepen.io/kizoso/pen/VwpeeRY)
с адаптивной версткой менеджеры добавили таблицу.
На десктопе таблицы выглядят хорошо,
но на мобиле - появляется горизонтальный скролл, верстка едет. Что делать?

**Ответ:** 
- Таблицу обернуть `div` со свойствами: ```overflow-x: scroll; width: 100%```.
- К родительскому контейнеру (`div class="blog"`) применить: `box-sizing: border-box`. Либо к `body` применить свойство: `overflow-x: hidden`.


# Тестовое задание 2 часть #
Это тестовое задание не имеет никаких технических ограничений. Ты можешь использовать любые инструменты.

## 1. Билеты на событие ##
   После успешной покупки билетов на событие, данные попадают в список заказов. Список заказов сохраняется в таблице phpMyAdmin в виде:

| id	| event_id |	event_date          |	ticket_adult_price |	ticket_adult_quantity |	ticket_kid_price |	ticket_kid_quantity | 	barcode  | 	user_id |	equal_price	| created             |
|-----|----------|----------------------|--------------------|------------------------|------------------|----------------------|-----------|----------|-------------|---------------------|
| 1   | 003      |	2021-08-21 13:00:00 |	700                |	1                     |	450              | 0                    | 	11111111 |	00451   |	700         |	2021-01-11 13:22:09 |
| 2	  | 006      |	2021-07-29 18:00:00 |	1000               |	0                     | 800              | 2                    | 	22222222 |	00364   |	1600        |	2021-01-12 16:62:08 |
| 3   | 003	     | 2021-08-15 17:00:00  |	700                |	4                     |	450              | 3                    | 	33333333 |	00015   |	4150        |	2021-01-13 10:08:45 |  

Где:

`id` - инкрементальный порядковый номер заказа  
`event_id` - уникальный ид события. У каждого события есть свое название, описание, расписание, цены и свой уникальный event_id соответственно  
`event_date` - дата и время на которое были куплены билеты  
`ticket_adult_price` - цена взрослого билета на момент покупки  
`ticket_adult_quantity` - количество купленных взрослых билетов в этом заказе  
`ticket_kid_price` - цена детского билета на момент покупки  
`ticket_kid_quantity` - количество купленных детских билетов в этом заказе  
`barcode` уникальный штрих код заказа  
`equal_price` - общая сумма заказа  
`created` - дата создания заказа  

### Вопросы: ###

1. Некоторые события нужно продавать с дополнительными типами билетов - льготный и групповой, у которых будут свои цены и название. Имеется информация, что вероятно, будут другие типы билетов, которые нужно будет добавить. Нужно уметь сохранять при заказе 2 дополнительных типа билета, льготный и групповой в бд.  
**Задача** - Показать конечный вид таблицы с добавленными типами билетов. Объяснить свое решение.  
Часто посетители из одного заказа приходят не одновременно на события. Возникает необходимость чекинить их по отдельности. Для этого у каждого билета должен быть свой баркод. Если в одном заказе было куплено несколько билетов, 2 взрослых, 3 детских, 4 льготных - то должно быть 9 баркодов для каждого билета соответственно.  
**Задача** - Показать конечный вид таблицы, где у каждого билета свой баркод. Объяснить свое решение.  

**ОТВЕТ:**
* Добавить дополнительное поле в таблицу `ticket_type`

| id	| event_id |	event_date          | ticket_type | 	ticket_adult_price |	ticket_adult_quantity |	ticket_kid_price |	ticket_kid_quantity | 	barcode  | 	user_id |	equal_price	| created             |
|-----|----------|----------------------|-------------|---------------------|------------------------|------------------|----------------------|-----------|----------|-------------|---------------------|
| 1   | 003      |	2021-08-21 13:00:00 | 	| 700                 | 	1                  |	450              | 0                    | 	11111111 |	00451   |	700         |	2021-01-11 13:22:09 |
| 2	  | 006      |	2021-07-29 18:00:00 | 	| 1000                | 	0                  | 800              | 2                    | 	22222222 |	00364   |	1600        |	2021-01-12 16:62:08 |
| 3   | 003	     | 2021-08-15 17:00:00  | 	| 700                 | 	4                  |	450              | 3                    | 	33333333 |	00015   |	4150        |	2021-01-13 10:08:45 |  

* Сделать выпадающий список для каждого события, который будет разворачиваться при клике по нему и где будут находится баркоды всех билетов заказа.


2. Время из A в B  
   Известно расписание отправления теплохода по московскому времени (GMT+3):

* из A в B:

  * 2021-08-21 18:00:00
  * 2021-08-21 18:30:00
  * 2021-08-21 18:45:00
  * 2021-08-21 19:00:00
  * 2021-08-21 19:15:00
  * 2021-08-21 21:00:00  
* из B в A:

  * 2021-08-21 18:30:00
  * 2021-08-21 18:45:00
  * 2021-08-21 19:00:00
  * 2021-08-21 19:15:00
  * 2021-08-21 19:35:00
  * 2021-08-21 21:50:00
  * 2021-08-21 21:55:00  

"из A в B" и "из B в A" стоимость одного билета 700р.

"из A в B и обратно в А" стоимость составного билета 1200р

Время пути в одну сторону 50 минут.

**Задача**. Сделать страницу (дизайн не имеет значения) на которой пользователь выбрав направление, время и количество билетов сможет посчитать итоговые значения: общую стоимость, время в пути.

Как это должно выглядеть?

На странице пользователь сначала должен выбрать направление:

```HTML
<select name="route" id="route">
  <option value="из A в B">из A в B</option>
  <option value="из B в A">из B в A</option>
  <option value="из A в B и обратно в А">из A в B и обратно в А</option>
</select>  
```

После чего предлагается пользователю выбрать время. Важно, время показываем в часовом поясе пользователя. Предположим, что на всех его устройствах стоит запрет перевода времени в локальный часовой пояс.  


```HTML
<label for="time">Выберите время</label>
<select name="time" id="time">
  <option value="18:00(из A в B)">18:00(из A в B)</option>
  <option value="18:30(из A в B)">18:30(из A в B)</option>
  <option value="18:45(из A в B)">18:45(из A в B)</option>
  <option value="19:00(из A в B)">19:00(из A в B)</option>
  <option value="19:15(из A в B)">19:15(из A в B)</option>
  <option value="21:00(из A в B)">21:00(из A в B)</option>
  <option value="18:30(из B в A)">18:30(из B в A)</option>
  <option value="18:45(из B в A)">18:45(из B в A)</option>
  <option value="19:00(из B в A)">19:00(из B в A)</option>
  <option value="19:15(из B в A)">19:15(из B в A)</option>
  <option value="19:35(из B в A)">19:35(из B в A)</option>
  <option value="21:50(из B в A)">21:50(из B в A)</option>
  <option value="21:55(из B в A)">21:55(из B в A)</option>
</select>  
```

Если выбрано время "из A в B и обратно в А", то должен показаться дополнительный селект, в котором можно будет выбрать обратное время. Обратите внимание, что время не должно пересекаться. Это значит, что следует учитывать, что если путь из А в В был выбран в 14:00, то обратный путь возможен только по прибытию на место в пункт В.  

Далее ползователю прелагается выбрать количество билетов и нажать на кнопку "посчитать".  

```HTML
<label for="num">Количество билетов</label>
<input id="num">
<button>Посчитать</button> 
``` 

При клике на кнопку "Посчитать" показать результат с направлением, временем в пути, временем отправления и временем прибытия в часовом поясе пользователя.

Например:

```
Вы выбрали 4 билета по маршруту из A в B стоимостью 4000р.
Это путешествие займет у вас 40 минут.
Теплоход отправляется в 12-00, а прибудет в 18-00.
```
[Demo preview](https://nanammii.github.io/nevatrip-test/test)
