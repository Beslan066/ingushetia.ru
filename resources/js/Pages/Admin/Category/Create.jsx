import AdminLayout from "@/Layouts/AdminLayout.jsx";
import {usePage} from "@inertiajs/react";

export default function Create({authors }) {

    const { auth } = usePage().props
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');


    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append('_token', csrfToken);

        const response = await fetch('/admin/categories/store', {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRF-TOKEN': csrfToken
            },
        });

        if (response.ok) {
            // Редирект после успешного запроса
            window.location = '/admin/categories' // Переход без перезагрузки страницы
        } else {
            // Обработка ошибок, если это необходимо
            alert('Ошибка при выполнении запроса');
        }

    }

        return (
        <AdminLayout>
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-md-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Создание категории</h4>

                                    <form className="forms-sample" method="post" action={'/admin/categories/store'}
                                          onSubmit={handleSubmit}>

                                        <div className="form-group w-50">
                                            <input type="text" className="form-control" id="exampleInputUsername1"
                                                   placeholder="Заголовок" name={'title'}/>
                                        </div>

                                        <div className="form-group w-50 mt-2">
                                            <select className="form-select form-select-sm" name="user_id">
                                                <option value={auth.user.id}>{auth.user.name}</option>
                                            </select>
                                        </div>


                                        <button type="submit" className="btn btn-primary me-2">Создать</button>
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
