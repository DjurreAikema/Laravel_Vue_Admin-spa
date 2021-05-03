<?php

namespace App\Http\Controllers;

use App\Models\Example;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class ExampleController extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): array
    {
        $examples = Example::all()->toArray();
        return array_reverse($examples);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'details' => 'required'
        ]);

        return Example::create([
            'name' => $request->name,
            'details' => $request->details
        ]);
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
     * Update the specified resource in storage.
     */
    public function update(Request $request): \Illuminate\Http\JsonResponse
    {
        $this->validate($request, [
            'id' => 'required',
            'name' => 'required',
            'details' => 'required'
        ]);

        $example = Example::findOrFail($request->id);
        $example->update($request->all());

        return response()->json('Example updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id): \Illuminate\Http\JsonResponse
    {
        $example = Example::findOrFail($id);
        $example->delete();

        return response()->json('Example deleted successfully');
    }
}
