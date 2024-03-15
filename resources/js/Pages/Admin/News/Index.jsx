import AdminLayout from "@/Layouts/AdminLayout.jsx";
import {Link, Head, router} from '@inertiajs/react';
import Filter from "@/Components/Admin/Filter.jsx";



export default function Index({news}) {

    const pageProperties = [
        {
        title: 'новость',
        url: '/admin/news/create'
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

    function deleteNews( id ) {
        if (confirm("Вы уверены, что хотите удалить эту новость"))  {
            router.delete(`/admin/news/${id}`);
        }
    }

    function editNews(id) {
        router.get(`/admin/news/${id}/edit`)
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
                            <th>Категория</th>
                            <th>Автор</th>
                            <th>Изображение</th>
                            <th>Перевод</th>
                            <th>Создан</th>
                            <th>Действие</th>
                        </tr>
                        </thead>
                        <tbody>

                        {news.data.map(item => (
                            <tr>
                                <td>
                                    <p>{item.id}</p>
                                </td>
                                <td>
                                    <p className="fw-normal mb-1">{item.title}</p>
                                </td>
                                <td>
                                    <span className="badge badge-success rounded-pill d-inline">
                                        {item.category.title}
                                    </span>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                            alt=""/>
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">{item.user.name}</p>
                                            <p className="text-muted mb-0">{item.user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <img style={{width: '150px', height: '80px', borderRadius: '5px'}}
                                         src={'http://127.0.0.1:8000/storage/' + item.image_main}
                                         alt="Sheep"/>

                                </td>
                                <td>
                                    Нет
                                </td>
                                <td>
                                    {formatDate(item.created_at)}
                                </td>
                                <td>
                                    <button type="button" className="btn btn-success btn-rounded btn-sm"><i
                                        className={'mdi mdi-library-plus'}></i>перевод
                                    </button>
                                    <button type="button" className="btn btn-primary btn-sm btn-rounded" onClick={() => editNews(item.id)}><i
                                        className={'mdi mdi-pencil'}></i></button>
                                    <button type="button" className="btn btn-danger btn-rounded btn-sm"
                                            onClick={() => deleteNews(item.id)}>
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


