<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <!-- Bootstrap core CSS -->
    <link href="{{ URL::asset('css/bootstrap.min.css') }}" rel="stylesheet" media="screen">
    <script src='https://netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js'></script>
    <script src='https://code.jquery.com/jquery-1.11.1.min.js'></script>
    <title>Thư Tự Động</title>
</head>
<body>
  
  <div class="container">
    <div class="row">
        <div class="col-xs-12">
        <div class="invoice-title">
          <h2>HÓA ĐƠN</h2><h3 class="pull-right">Đơn hàng {{$details["bill_id"]}}</h3>
        </div>
        <hr>
        <div class="row">
          <div class="col-xs-6">
            <address>
            <strong>Thông tin shop:</strong><br>
            Shop giày 500 AE<br>
            TMA Sollution Bình Định<br>
            Địa chỉ: TMA<br>
            Số điện thoại: 02563113<br>
            </address>
          </div>
          <div class="col-xs-6 text-right">
            <address>
              <strong>Thông tin giao hàng:</strong><br>
              Khách hàng: {{$details["customer_email"]}}<br>
              Tên: {{$details["customer_name"]}}<br>
              Địa chỉ: {{$details["customer_address"]}}<br>
              Số điện thoại: {{$details["customer_phone"]}}
            </address>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6">
            <address>
              <strong>Phương Thức Thanh Toán:</strong><br>
              {{$details['payment']}}<br>
            </address>
          </div>
          <div class="col-xs-6 text-right">
            <address>
              <strong>Order Date:</strong><br>
              {{$details['dateorder']}}<br><br>
            </address>
          </div>
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title"><strong>Chi tiết đơn đặt hàng</strong></h3>
          </div>
          <div class="panel-body">
            <div class="table-responsive">
              <table class="table table-condensed">
                <thead>
                                <tr>
                      <td><strong>Sản phẩm</strong></td>
                      <td class="text-center"><strong>Hình ảnh</strong></td>
                      <td class="text-center"><strong>Màu</strong></td>
                      <td class="text-center"><strong>Size</strong></td>
                      <td class="text-center"><strong>Giá</strong></td>
                      <td class="text-center"><strong>Số lượng</strong></td>
                      <td class="text-right"><strong>Tổng</strong></td>
                                </tr>
                </thead>
                <tbody>
                  @foreach ($details['product'] as $key => $productDetails)
                  <tr>
                    <td>{{$productDetails->name}}</td>
                    <td class="text-center"><img class="resize" src="http://127.0.0.1:8000/uploads/product/{{$productDetails->img}}" ></td>
                    <td class="text-center">{{$productDetails->color}}</td>
                    <td class="text-center">{{$productDetails->size}}</td>
                    <td class="text-center">{{$productDetails->price}}</td>
                    <td class="text-center">{{$productDetails->amount}}</td>
                    <td class="text-center">{{($productDetails->amount) * ($productDetails->price)}}</td>
                  </tr>
                @endforeach
                <tr>
                  <td class="thick-line"></td>
                  <td class="thick-line"></td>
                  <td class="thick-line text-center"><strong>Tổng tiền đơn hàng</strong></td>
                  <td class="thick-line text-right">{{$details['total']}}</td>
                </tr>
                <tr>
                  <td class="no-line"></td>
                  <td class="no-line"></td>
                  <td class="no-line text-center"><strong>Phí ship</strong></td>
                  <td class="no-line text-right">12.000Đ</td>
                </tr>
                <tr>
                  <td class="no-line"></td>
                  <td class="no-line"></td>
                  <td class="no-line text-center"><strong>Tổng tiền hóa đơn</strong></td>
                  <td class="no-line text-right">{{$details['total'] + 12000}}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
<style>
        .invoice-title h2, .invoice-title h3 {
            display: inline-block;
        }

        .table > tbody > tr > .no-line {
            border-top: none;
        }

        .table > thead > tr > .no-line {
            border-bottom: none;
        }

        .table > tbody > tr > .thick-line {
            border-top: 2px solid;
        }
        
</style>

</html>