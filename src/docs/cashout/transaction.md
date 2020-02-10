### دریافت لیست تراکنش ها


``` http request 
method:post 
https://pay.ir/api/v1/transaction/get?token={your-token}
```
### پارامتر

| فیلد  |  نوع  | توضیحات  |
| ------------ | ------------ | ------------ |
|  from_date  |  DateTime  | 2018-10-10|
|  to_date  |  DateTime  | 2018-10-10|
|  from_amount  |  Integer  | از مبلغ (ریال)|
|  to_amount  |  Integer  |تا مبلغ (ریال)|
|  transaction_id  |  Integer  |شماره تراکنش|
|  card_number  |  String  |شماره کارت|
|  factor_number  |  String  |شماره فاکتور|



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
