<?php

namespace App\Http\Requests\Admin\Municipality;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
            'year' => 'required|integer',
            'population' => 'required|integer',
            'content' => 'nullable',
            'square' => 'required',
            'type' => 'required',
            'user_id' => 'required',
            'supervisor_id' => 'required',
            'image_main' => 'required|image|mimes:jpg,jpeg,webp,png',
            'arms' => 'required|image|mimes:jpg,jpeg,webp,png',
            'phone_number' => [
                'required',
                'regex:/^8-\d{3}-\d{3}-\d{2}-\d{2}$/'
            ],
            'fax_number' => [
                'required',
                'regex:/^8 \(\d{4}\) \d{2} \d{2} \d{2}$/'
            ],
            'email' => 'required|email',
            'address' => 'required|string|max:255',
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Заголовок обязателен для заполнения.',
            'title.string' => 'Заголовок должен быть строкой.',
            'image_main.required' => 'Необходимо выбрать изображение.',
            'image_main.image' => 'Файл должен быть изображением.',
            'image_main.mimes' => 'Изображение должно быть в формате: jpg, jpeg, webp, png.',

        ];
    }
}
