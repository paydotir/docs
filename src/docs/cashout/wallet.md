### دریافت موجودی کیف پول

```http request
method:post
https://pay.ir/api/v1/wallet/balance?token={your-token}
```


:::: tabs
::: tab  پاسخ دریافتی در صورت صحت اطلاعات ارسالی
```http request
HTTP/1.1 200 OK
```
``` json
{
  "status" : 1,
   "data": [
      "transactions" : "لیست تراکنش ها",
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
  "status" : 0,
  "errorCode" : کد خطا,
  "errorMessage" : متن پیام خطا
}
```
:::
::::