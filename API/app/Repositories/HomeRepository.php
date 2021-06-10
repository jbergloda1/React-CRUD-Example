<?php

namespace App\Repositories;

use App\Models\Product;
use App\Models\ProductSizeColor;

class HomeRepository
{
    public function getSupplier($id)
    {
        return Product::wheresupplier_id($id)
        ->orderBy('sale', 'desc')
        ->paginate();
    }
    public function getCategory($id)
    {
        return Product::wherecategory_id($id)
        ->orderBy('sale', 'desc')
        ->paginate();
    }
    public function getColor($id)
    {
        return ProductSizeColor::join('color', 'product_size_color.color_id', '=', 'color.id')
        ->select('product_size_color.color_id as id', 'color.color as color')
        ->whereproduct_id($id)
        ->distinct()
        ->paginate();
    }

    public function getSize($product, $color)
    {
        return ProductSizeColor::join('size', 'product_size_color.size_id', '=', 'size.id')
        ->select('product_size_color.size_id as id', 'size.size as size')
        ->whereproduct_id($product)
        ->wherecolor_id($color)
        ->paginate();
    }

    public function showProductNew()
    {
        return Product::wherestatus(1)->latest()
            ->orderBy('created_at', 'desc')
            ->paginate(10);
    }
}
