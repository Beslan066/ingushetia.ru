import React, { useState } from 'react';
import { router } from '@inertiajs/react'
import AdminLayout from "@/Layouts/AdminLayout.jsx";
import { useForm } from '@inertiajs/react';


export default function Edit({category}) {

    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    const { data, setData, patch } = useForm({
        title: category.title,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        patch(route('admin.categories.update', { category }), {
            data,
            onSuccess: () => {
                Inertia.visit(route('admin.categories.index')); // Переход без перезагрузки страницы
            },
            headers: {
                'X-CSRF-TOKEN': csrfToken
            },
        });
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };







    return (
        <AdminLayout>
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-md-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Изменение категории</h4>

                                    <form className="forms-sample"  onSubmit={handleSubmit}>

                                        <div className="form-group w-50">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="title"
                                                placeholder="Заголовок"
                                                name="title"
                                                value={data.title}
                                                onChange={handleChange}
                                            />
                                        </div>


                                        <button type="submit" className="btn btn-primary me-2">Изменить</button>
                                        <button className="btn btn-light" type={"submit"}>Отмена</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </AdminLayout>
    )

}
