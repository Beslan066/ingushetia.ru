import AdminLayout from "@/Layouts/AdminLayout.jsx";
import {Link, Head} from '@inertiajs/react';
import Filter from "@/Components/Admin/Filter.jsx";
import {router} from "@inertiajs/react";


export default function Index({categories}) {

    const pageProperties = [
        {
        title: 'категория',
        url: '/admin/categories/create'
        }
    ];



    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();

        const formattedDate = `${(day < 10 ? '0' : '') + day}.${(month < 10 ? '0' : '') + month}.${year} ${(hours < 10 ? '0' : '') + hours}:${(minutes < 10 ? '0' : '') + minutes}`;

        return formattedDate;
    };



    function deleteCategory( id ) {
        if (confirm("Вы уверены, что хотите удалить эту категорию"))  {
            router.delete(`/admin/categories/${id}`);
        }
    }

    function editCategory(id) {
        router.get(`/admin/categories/${id}/edit`)
    }

    return (
        <div>
            <AdminLayout>


                <div>
                    <Filter pageProperties={pageProperties} />
                    <table className="table align-middle mb-0 bg-white">
                        <thead className="bg-light">
                        <tr>
                            <th>id</th>
                            <th>Заголовок</th>
                            <th>Автор</th>
                            <th>Создан</th>
                            <th>Действие</th>
                        </tr>
                        </thead>
                        <tbody>

                        {categories.data.map(category => (
                            <tr>
                                <td>
                                    <p>{category.id}</p>
                                </td>
                                <td>
                                    <span className="badge badge-success rounded-pill d-inline">{category.title}</span>
                                </td>
                                <td>
                                    <span className="badge badge-success rounded-pill d-inline">{category.user_id}</span>
                                </td>
                                <td>
                                    {formatDate(category.created_at)}
                                </td>
                                <td>
                                    <button type="button" className="btn btn-success btn-rounded btn-sm"><i
                                        className={'mdi mdi-library-plus'}></i>перевод
                                    </button>
                                    <button type="button" className="btn btn-primary btn-sm btn-rounded" onClick={() => editCategory(category.id)}><i
                                        className={'mdi mdi-pencil'}></i></button>
                                    <button type="button" className="btn btn-danger btn-rounded btn-sm"  onClick={() => deleteCategory(category.id)}>
                                        <i className={'mdi mdi-delete'}></i>
                                    </button>

                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </AdminLayout>


        </div>

    )
}


