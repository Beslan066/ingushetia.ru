import AdminLayout from "@/Layouts/AdminLayout.jsx";
import {Link, Head, usePage} from '@inertiajs/react';
import FileUpload from "@/Components/Admin/Uploading/FileUpload.jsx";
import { useState } from 'react';






export default function Create({roles}) {


    const name = {
        name: 'avatar'
    };

    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        password: '',
        avatar: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAvatarChange = (avatar) => {
        setFormData((prevState) => ({
            ...prevState,
            avatar: avatar
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = new FormData();
        form.append('name', formData.name);
        form.append('email', formData.email);
        form.append('role', formData.role);
        form.append('password', formData.password);
        form.append('avatar', formData.avatar);

        const response = await fetch('/admin/users/store', {
            method: 'POST',
            body: form,
            headers: {
                'X-CSRF-TOKEN': csrfToken
            },
        });

        if (response.ok) {
            // Редирект после успешного запроса
            window.location = '/admin/users'; // Переход без перезагрузки страницы
        } else {
            // Обработка ошибок, если это необходимо
            alert('Ошибка при выполнении запроса');
        }
    };
    const rolesArray = Object.entries(roles);

    return (
        <AdminLayout>
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-md-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Создание пользователя</h4>

                                    <form className="forms-sample" method="post" action={'/admin/users/store'}
                                          onSubmit={handleSubmit} encType="multipart/form-data">
                                        <div className="form-group w-50 mb-2">
                                            <label htmlFor="exampleInputUsername1">Имя и фамилия</label>
                                            <input type="text" className="form-control" id="exampleInputUsername1"
                                                   placeholder="Имя и фамилия" name={'name'}/>
                                        </div>
                                        <div className="col-sm-9 mb-2">
                                            <input type="email" className="form-control" id="exampleInputEmail2"
                                                   placeholder="Email" name={'email'}/>
                                        </div>


                                        <FileUpload name={name} onFileChange={handleAvatarChange}/>
                                        <div className="form-group w-50 mt-2">
                                            <select className="form-select form-select-sm"
                                                    aria-label=".form-select-sm example" name={'role'}>
                                                <option selected>Выберите роль</option>
                                                {rolesArray.map(([id, title]) => (
                                                    <option key={id} value={id}>{title}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="col-sm-9 mb-2">
                                            <input type="password" className="form-control"
                                                   id="exampleInputConfirmPassword2" placeholder="Пароль"
                                                   name={'password'}/>
                                        </div>
                                        <button type="submit" className="btn btn-primary me-2">Создать</button>
                                        <button className="btn btn-light">Отмена</button>
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
