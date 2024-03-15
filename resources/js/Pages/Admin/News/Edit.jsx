import AdminLayout from "@/Layouts/AdminLayout.jsx";
import { usePage } from '@inertiajs/react';
import { useForm } from "react-hook-form";
import {useState, useEffect} from "react";
import RichTextEditor from "@/Components/Admin/Uploading/RichTextEditor.jsx";

export default function Edit({ news, categories }) {
    const { auth } = usePage().props;
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('lead', data.lead);
        formData.append('content', data.content);
        formData.append('category_id', data.category_id);
        formData.append('news_ing', data.news_ing);
        formData.append('user_id', data.user_id);
        formData.append('image_main', data.image_main[0]);

        try {
            await fetch(`/admin/news/${news.id}`, {
                method: 'PATCH',
                body: formData,
            });

            window.location = '/admin/news';
        } catch (error) {
            alert('Ошибка при выполнении запроса');
        }
    };

    useEffect(() => {
        setValue('title', news.title || '');
        setValue('lead', news.lead || '');
        setValue('content', news.content || '');
        setValue('category_id', news.category_id || '');
        setValue('news_ing', news.news_ing || '');
        setValue('user_id', auth.user.id);
    }, [news, auth, setValue]);

    return (
        <AdminLayout>
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-md-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Редактирование новости</h4>

                                    <form className="forms-sample" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                                        <div className="form-group w-50">
                                            <input type="text" className="form-control" placeholder="Заголовок" {...register('title')} />
                                            {errors.title && <div className="text-danger">{errors.title.message}</div>}
                                        </div>

                                        <div className="form-group w-50">
                                            <textarea placeholder="Лид новости..." rows="5" {...register('lead')} />
                                            {errors.lead && <div className="text-danger">{errors.lead.message}</div>}
                                        </div>

                                        <div className="form-group w-50">
                                            <RichTextEditor name="content" {...register('content')}/>
                                            {errors.content && <div className="text-danger">{errors.content.message}</div>}
                                        </div>

                                        <div className="form-group w-50">
                                            <label htmlFor="image_main">Изображение</label>
                                            <input type="file" className="form-control" id="image_main" {...register('image_main')} />
                                            {errors.image_main && <div className="text-danger">{errors.image_main.message}</div>}
                                        </div>

                                        <div className="form-group w-50 mt-2">
                                            <select className="form-select form-select-sm" name="category_id" {...register('category_id')}>
                                                <option value="">Выберите категорию</option>
                                                {categories.map(category => (
                                                    <option key={category.id} value={category.id}>{category.title}</option>
                                                ))}
                                            </select>
                                            {errors.category_id && <div className="text-danger">{errors.category_id.message}</div>}
                                        </div>

                                        <div className="form-group w-50 mt-2">
                                            <select className="form-select form-select-sm" name="news_ing" {...register('news_ing')}>
                                                <option value="">Выберите перевод</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                            </select>
                                            {errors.news_ing && <div className="text-danger">{errors.news_ing.message}</div>}
                                        </div>

                                        <div className="form-group w-50 mt-2">
                                            <select className="form-select form-select-sm" name="user_id" disabled>
                                                <option value={auth.user.id}>{auth.user.name}</option>
                                            </select>
                                        </div>

                                        <button type="submit" className="btn btn-primary me-2">Обновить</button>
                                        <button type="button" className="btn btn-light">Отмена</button>
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
