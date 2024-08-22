<?php

namespace App\Http\Requests\Admin\EconomicSupport;

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
            'title' => 'required|string|max:255',
            'document' => 'nullable|file|mimes:pdf,docx,doc',
            'lead' => 'nullable|string',
            'type' => 'required',
            'content' => 'nullable'
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Заголовок обязателен для заполнения',
            'title.max' => 'Длина заголовка не должна превышать 255 символов',
            'user_id.required' => 'Ошибка при определении пользователя',
        ];
    }
}
