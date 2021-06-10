<?php

namespace App\Repositories;

use App\Models\Customer;


class CustomerRepository
{
    public function show($id)
    {
        return Customer::findOrFail($id);
    }
    public function store($inputs)
    {
        return Customer::create([
            "email"     => $inputs['email'],
            "password"  => encrypt($inputs['password'])
        ]);
    }

    public function update($inputs, $customer_id)
    {
        return Customer::findOrFail($customer_id)
            ->update([
                'name'      => $inputs['name'],
                'address'   => $inputs['address'],
                'phone'     => $inputs['phone']
            ]);
    }

    public function check($customer)
    {
        return Customer::find($customer);
    }

    public function getCustomer($inputs)
    {
        return Customer::where('email', $inputs['email'])->first();
    }

    public function get($id)
    {
        return Customer::whereid($id)->paginate();
    }

     //Update Customer
     public function edit($inputs, $id)
     {
         return Customer::findOrFail($id)
             ->update([
                 'name'          => $inputs['name'],
                 'phone'         => $inputs['phone'],
                 'address'       => $inputs['address']
             ]);
     }
}
