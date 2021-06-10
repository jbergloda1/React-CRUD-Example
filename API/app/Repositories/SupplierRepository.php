<?php

namespace App\Repositories;

use App\Models\Supplier;

class SupplierRepository
{
    //Index-Search Supplier
    public function search($inputs)
    {
        return Supplier::when(isset($inputs['id']), function ($query) use ($inputs) {
            return $query->where('supplier.id', $inputs['id']);
        })
        ->when(isset($inputs['name']), function ($query) use ($inputs) {
            return $query->where('supplier.name', 'LIKE', '%' . $inputs['name'] . '%');
        })
        ->latest()
        ->paginate(10);
    }

    //Store Supplier
    public function store($inputs)
    {
        return Supplier::create([
            'name'          => $inputs['name'],
            'category_id'   => $inputs['category_id'],
            'address'       => $inputs['address'],
            'phone'         => $inputs['phone'],
            'status'        => 1
        ]);
    }

    //Show Supplier
    public function show($id)
    {
        return Supplier::find($id);
    }

    //Update Supplier
    public function update($inputs, $id)
    {
        return Supplier::findOrFail($id)
            ->update($inputs);
    }
}
