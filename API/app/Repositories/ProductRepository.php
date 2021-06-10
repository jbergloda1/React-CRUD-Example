<?php

namespace App\Repositories;

use App\Models\Product;
use App\Models\Size;
use App\Models\ProductSizeColor;
use App\Models\Color;
use App\Models\Supplier;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Exceptions\UserUnauthorizedException;
use Config;

class ProductRepository
{
    //Index-Search Product
    public function search($inputs)
    {
        return Product::join('supplier', 'product.supplier_id', '=', 'supplier.id')
        ->join('category', 'product.category_id', '=', 'category.id')
        ->select('product.id as id', 'product.name as name', 
               'product.img as img', 'product.note as note',
               'product.import_price as import_price',
               'product.export_price as export_price',
               'product.amount as amount',
               'product.sale as sale',
               'product.status as status',
               'supplier.name as supplier_id',
               'category.name as category_id')
        ->when(isset($inputs['id']), function ($query) use ($inputs) {
            return $query->where('product.id', $inputs['id']);
        })
        ->when(isset($inputs['status']), function ($query) use ($inputs) {
            return $query->where('product.status', $inputs['status']);
        })
        ->when(isset($inputs['name']), function ($query) use ($inputs) {
            return $query->where('product.name', 'LIKE', '%' . $inputs['name'] . '%');
        })
        ->orderBy('product.sale', 'desc')
        ->paginate(100);
    }

    public function searchPSC($inputs)
    {
        return ProductSizeColor::join('product', 'product_size_color.product_id', '=', 'product.id')
        ->join('color', 'product_size_color.color_id', '=', 'color.id')
        ->join('size', 'product_size_color.size_id', '=', 'size.id')
        ->select('product_size_color.id as id', 
               'product.name as product',
               'color.color as color',
               'size.size as size')
        ->when(isset($inputs['id']), function ($query) use ($inputs) {
            return $query->where('product_size_color.id', $inputs['id']);
        })
        ->when(isset($inputs['product']), function ($query) use ($inputs) {
            return $query->where('product.name', 'LIKE', '%' . $inputs['product'] . '%');
        })
        ->orderBy('product_size_color.id', 'desc')
        ->paginate(10000);
    }

    //Show Product
    public function show($id)
    {
        return Product::findOrFail($id);
    }

    //Store Product
    public function store($inputs, $newNamefile)
    {
        return Product::create([
            'name'          => $inputs['name'],
            'img'           => $newNamefile,
            'note'          => $inputs['note'],
            'import_price'  => $inputs['import_price'],
            'export_price'  => $inputs['export_price'] ? $inputs['export_price'] : null,
            'sale'          => $inputs['sale'] ? $inputs['sale'] : null,
            'supplier_id'   => $inputs['supplier_id'],
            'category_id'   => $inputs['category_id'],
            'status'        => 1
        ]);
    }
    public function storePSC($data)
    {
        return ProductSizeColor::create([
            'product_id' => $data['product_id'],
            'size_id'    => $data['size_id'],
            'color_id'   => $data['color_id'],
            'amount'     => $data['amount']
        ]);
    }
    public function storePSCNotNull($data, $checkData)
    {
        return ProductSizeColor::findOrFail($checkData->id)
            ->update(['amount' => $data['amount']+$checkData->amount]);
    }

    public function checkData($data)
    {
        return ProductSizeColor::where('product_id', '=', $data['product_id'])
            ->where('color_id', '=', $data['color_id'])
            ->where('size_id', '=', $data['size_id'])
            ->first();
    }

    public function amount($product_id)
    {
        $totalAmount = ProductSizeColor::where('product_id', $product_id)->sum('amount');
        return Product::find($product_id)
            ->update([
                'amount' => $totalAmount
            ]);
    }

    //Update Product
    public function update($inputs, $id)
    {
        return Product::findOrFail($id)
            ->update([
                'name'          => $inputs['name'],
                'note'          => $inputs['note'],
                'import_price'  => $inputs['import_price'],
                'export_price'  => $inputs['export_price'] ? $inputs['export_price'] : null,
                'sale'          => $inputs['sale'] ? $inputs['sale'] : null,
                'supplier_id'   => $inputs['supplier_id'],
                'category_id'   => $inputs['category_id']
            ]);
    }

    public function updatePSC($inputs, $id)
    {
        return ProductSizeColor::findOrFail($id)
            ->update([
                'product_id' => $inputs['product_id'],
                'size_id'    => $inputs['size_id'],
                'color_id'   => $inputs['color_id'],
                'amount'     => $inputs['amount']
        ]);
    }

    //Delete Product (Update Status)
    public function destroy($id)
    {
        return Product::findOrFail($id)
            ->update(['status' => 2]);
    }
    public function updateStatus($id)
    {
        return Product::findOrFail($id)
            ->update(['status' => 1]);
    }
    
   
    //Get Size-Color
    public function getSize()
    {
        return Size::orderBy('size', 'desc')
        ->paginate();
    }
    public function getColor()
    {
        return Color::orderBy('color', 'desc')
        ->paginate();
    }

    //Note
    public function showSize($id)
    {
        return Size::findOrFail($id);
    }
    public function showColor($id)
    {
        return Color::findOrFail($id);
    }
   
    public function showProductSizeColor($psc)
    {
        return ProductSizeColor::where('id', $psc)->get();
    }
    public function getData($product_id)
    {
        return Product::where('id', $product_id)->get();
    }
    public function showProductPage($id)
    {
        return Product::where('supplier_id', '=', $id)
        ->orderBy('name', 'desc')
        ->paginate(10);
    }
   
    public function get()
    {
        return Product::orderBy('sale', 'desc')->paginate(10);
    }
}