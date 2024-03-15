import AdminLayout from "@/Layouts/AdminLayout.jsx";
import { Link } from '@inertiajs/react';
import { usePage, useForm } from '@inertiajs/react';
import { useState } from "react";
import RichTextEditor from "@/Components/Admin/Uploading/RichTextEditor.jsx";

const name = {
    name: 'image_main'
};



export default function Create({ roles, categories, authors }) {
    const { auth } = usePage().props

    const { data, setData, post, processing, errors } = useForm({
        title: '',
        lead: '',
        content: '',
        category_id: '',
        news_ing: '',
        user_id: auth.user.id,
        image_main: null
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/admin/news/store', {
            data: {
                ...data,
                image_main: data.image_main
            },
            onSuccess: () => {
                Inertia.location('/admin/news')
            },
            onError: () => {
                // Обработка ошибок, если это необходимо
                alert('Ошибка при выполнении запроса');
            }
        });
    };



    return (
        <AdminLayout>
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-md-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Создание новости</h4>

                                    <form className="forms-sample" method="post" onSubmit={handleSubmit}
                                          encType="multipart/form-data">
                                        <div className="form-group w-50">
                                            <input type="text" className="form-control" id="exampleInputUsername1"
                                                   placeholder="Заголовок" name="title" value={data.title}
                                                   onChange={(e) => setData('title', e.target.value)}/>
                                            {errors && errors.title &&
                                                <div className="text-danger">{errors.title}</div>}
                                        </div>

                                        <div className="form-group w-50">
                                            <div className="expandable-textarea">
                                                <textarea placeholder="Лид новости..." name="lead" rows="5"
                                                          value={data.lead}
                                                          onChange={(e) => setData('lead', e.target.value)}/>
                                                {errors && errors.lead &&
                                                    <div className="text-danger">{errors.lead}</div>}
                                            </div>
                                        </div>

                                        <div className="form-group w-50">
                                            <RichTextEditor name="content" value={data.content}
                                                            onChange={(value) => setData('content', value)}/>
                                            {errors && errors.content &&
                                                <div className="text-danger">{errors.content}</div>}
                                        </div>

                                        <div className="form-group w-50">
                                            <label htmlFor="image_main">Изображение</label>
                                            <input type="file" className="form-control" id="image_main"
                                                   name="image_main"
                                                   onChange={(e) => setData('image_main', e.target.files[0])}/>
                                            {errors && errors.image_main &&
                                                <div className="text-danger">{errors.image_main}</div>}
                                        </div>


                                        <div className="form-group w-50 mt-2">
                                            <select className="form-select form-select-sm"
                                                    aria-label=".form-select-sm example" name="category_id"
                                                    value={data.category_id}
                                                    onChange={(e) => setData('category_id', e.target.value)}>
                                                <option value="">Выберите категорию</option>

                                                {categories.map(category => (
                                                    <option value={category.id}>{category.title}</option>
                                                ))}
                                            </select>
                                            {errors && errors.category_id &&
                                                <div className="text-danger">{errors.category_id}</div>}
                                        </div>

                                        <div className="form-group w-50 mt-2">
                                            <select className="form-select form-select-sm"
                                                    aria-label=".form-select-sm example" name="news_ing"
                                                    value={data.news_ing}
                                                    onChange={(e) => setData('news_ing', e.target.value)}>
                                                <option value="">Выберите перевод</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                            </select>
                                            {errors && errors.news_ing &&
                                                <div className="text-danger">{errors.news_ing}</div>}
                                        </div>

                                        <div className="form-group w-50 mt-2">
                                            <select className="form-select form-select-sm" name="user_id" value={data.user_id}>
                                                    <option value={auth.user.id}>{auth.user.name}</option>
                                            </select>
                                        </div>

                                        <button type="submit" className="btn btn-primary me-2"
                                                disabled={processing}>Создать
                                        </button>
                                        <button className="btn btn-light">Отмена</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
