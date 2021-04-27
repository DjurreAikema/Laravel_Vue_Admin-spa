<?php

namespace App\Http\Controllers;

use App\Models\Example;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class ExampleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): array
    {
        $examples = Example::all()->toArray();
        return array_reverse($examples);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        $example = new Example([
            'name' => $request->name,
            'details' => $request->details
        ]);
        $example->save();

        return response()->json('Example was created');
    }

    /**
     * Display the specified resource.
     */
    public function show($id): \Illuminate\Http\JsonResponse
    {
        $example = Example::find($id);
        return response()->json($example);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Example $example)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id): \Illuminate\Http\JsonResponse
    {
        $example = Example::find($id);
        $example->update($request->all());

        return response()->json('Example updated!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id): \Illuminate\Http\JsonResponse
    {
        $example = Example::find($id);
        $example->delete();

        return response()->json('Example deleted!');
    }
}
