<?php

namespace App\Http\Requests\Admin\News;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string',
            'lead' => 'required|string',
            'content' => 'required',
            'image_main' => 'required|image|mimes:jpg,jpeg,webp,png',
            'category_id' => 'nullable',
            'news_ing' => 'nullable',
            'user_id' => 'required',
        ];
    }
}
