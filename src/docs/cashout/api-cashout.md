### استعلام وضعیت تسویه حساب
```http request
method:post
https://pay.ir/api/v1/cashout/status?token={your-token}
``` 

### پارامتر

| فیلد  |  نوع  |     توضیحات  | 
| ------------ | ------------ | ------------ |
|  id  |  Integer  | شناسه تسویه حساب|




:::: tabs
::: tab  پاسخ دریافتی در صورت صحت اطلاعات ارسالی
```http request
HTTP/1.1 200 OK
```

```json
{
  "status": 1,
  "data": [
     "cashout_id"  : "شناسه تسویه حساب",
     "status_code" : "کد وضعیت",
     "status_label": "وضعیت",
     "transfer_status": "وضعیت انتقال بانکی",
     "deposit_referrer": "شماره رهگیری واریز"
  ]
}
```
:::
::: tab  پاسخ دریافتی در صورت بروز خطا
```http request
HTTP/1.1 422 Error
```
``` json
{
  "status": 0,
  "message": ["message1","message2","..."]
}
```
:::
::::


### ثبت درخواست تسویه حساب

:::danger مهم
قبل از ارسال درخواست تسویه حساب حتما با استفاده از متد 
[پیگیری درخواست ثبت شده](/docs/cashout/api-cashout.html#پیگیری-درخواست-ثبت-شده)
اطمینان حاصل کنید که این درخواست قبلا ثبت نشده باشد
:::


```http request
method:post
https://pay.ir/api/v1.2/cashout/request?token={your-token}
```

### پارامتر

| فیلد  |  نوع  |     توضیحات  | 
| ------------ | ------------ | ------------ |
|  amount  |  String  |مبلغ به ریال|
|  name  |  String  |نام صاحب حساب دریافت کننده|
|  sheba  |  String  |شماره شبای بانک مقصد|
|  uid  |  String  |شناسه یکتا به ازای هر درخواست|

:::: tabs
::: tab  پاسخ دریافتی در صورت صحت اطلاعات ارسالی
```http request
HTTP/1.1 200 OK
```

```json
{
  "status": 1,
  "message": "['درخواست تسویه حساب شما ثبت شد']",
  "data": [
     "cashout_id"   : "شناسه تسویه حساب",
     "status_code"  : "کد وضعیت",
     "status_label" : "وضعیت"
  ]
}
```
:::
::: tab  پاسخ دریافتی در صورت بروز خطا
```http request
HTTP/1.1 422 Error
```
``` json
{
  "status": 0,
  "message": ["message1","message2","..."]
}
```
:::
::::


### حذف درخواست تسویه حساب

با استفاده از این متد میتوانید درخواست ثبت شده قبلی را حذف کنید

```http request
method:post
https://pay.ir/api/v1.2/cashout/delete?token={your-token}
```

### پارامتر

| فیلد  |  نوع  |     توضیحات  | 
| ------------ | ------------ | ------------ |
|  id  |  Integer  |شناسه تسویه حساب دریافتی هنگام ثبت درخواست|


:::: tabs
::: tab  پاسخ دریافتی در صورت صحت اطلاعات ارسالی
```http request
HTTP/1.1 200 OK
```

```json
{
  "status": 1,
  "message": "['درخواست تسویه حساب حذف شد']"
}
```
:::
::: tab  پاسخ دریافتی در صورت بروز خطا
```http request
HTTP/1.1 422 Error
```
``` json
{
  "status": 0,
  "message": ["message1","message2","..."]
}
```
:::
::::


### پیگیری درخواست ثبت شده

### پارامتر

| فیلد  |  نوع  |     توضیحات  | 
| ------------ | ------------ | ------------ |
|  uid  |  String  |شناسه یکتا به ازای هر درخواست|


:::: tabs
::: tab  پاسخ دریافتی در صورت صحت اطلاعات ارسالی
```http request
HTTP/1.1 200 OK
```

```json
{
  "status": 1,
  "message": "['درخواست تسویه حساب شما ثبت شد']",
  "data": [
     "cashout_id"  : "شناسه تسویه حساب",
     "status_code" : "کد وضعیت",
     "status_label": "وضعیت"
  ]
}
```
:::
::: tab  پاسخ دریافتی در صورت بروز خطا
```http request
HTTP/1.1 422 Error
```
``` json
{
  "status": 0,
  "message": ["message1","message2","..."]
}
```
:::
::::
