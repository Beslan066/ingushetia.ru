import AdminLayout from "@/Layouts/AdminLayout.jsx";
import {Link, Head} from '@inertiajs/react';
import Filter from "@/Components/Admin/Filter.jsx";



export default function Index() {

    const pageProperties = [
        {
        title: 'пользователя',
        url: '/admin/users/create'
        }
    ];


    return (
        <div>
            <AdminLayout>


                <div>
                    <Filter pageProperties={pageProperties}/>
                    <div className="row d-flex justify-content-center" style={{margin: '0 auto'}}>
                        <div className="col-lg-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Basic Table</h4>
                                    <p className="card-description">
                                        Add class <code>.table</code>
                                    </p>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th>Profile</th>
                                                <th>VatNo.</th>
                                                <th>Created</th>
                                                <th>Status</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Jacob</td>
                                                <td>53275531</td>
                                                <td>12 May 2017</td>
                                                <td><label className="badge badge-danger">Pending</label></td>
                                            </tr>
                                            <tr>
                                                <td>Messsy</td>
                                                <td>53275532</td>
                                                <td>15 May 2017</td>
                                                <td><label className="badge badge-warning">In progress</label></td>
                                            </tr>
                                            <tr>
                                                <td>John</td>
                                                <td>53275533</td>
                                                <td>14 May 2017</td>
                                                <td><label className="badge badge-info">Fixed</label></td>
                                            </tr>
                                            <tr>
                                                <td>Peter</td>
                                                <td>53275534</td>
                                                <td>16 May 2017</td>
                                                <td><label className="badge badge-success">Completed</label></td>
                                            </tr>
                                            <tr>
                                                <td>Dave</td>
                                                <td>53275535</td>
                                                <td>20 May 2017</td>
                                                <td><label className="badge badge-warning">In progress</label></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Hoverable Table</h4>
                                    <p className="card-description">
                                        Add class <code>.table-hover</code>
                                    </p>
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead>
                                            <tr>
                                                <th>User</th>
                                                <th>Product</th>
                                                <th>Sale</th>
                                                <th>Status</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Jacob</td>
                                                <td>Photoshop</td>
                                                <td className="text-danger"> 28.76% <i className="ti-arrow-down"></i>
                                                </td>
                                                <td><label className="badge badge-danger">Pending</label></td>
                                            </tr>
                                            <tr>
                                                <td>Messsy</td>
                                                <td>Flash</td>
                                                <td className="text-danger"> 21.06% <i className="ti-arrow-down"></i>
                                                </td>
                                                <td><label className="badge badge-warning">In progress</label></td>
                                            </tr>
                                            <tr>
                                                <td>John</td>
                                                <td>Premier</td>
                                                <td className="text-danger"> 35.00% <i className="ti-arrow-down"></i>
                                                </td>
                                                <td><label className="badge badge-info">Fixed</label></td>
                                            </tr>
                                            <tr>
                                                <td>Peter</td>
                                                <td>After effects</td>
                                                <td className="text-success"> 82.00% <i className="ti-arrow-up"></i>
                                                </td>
                                                <td><label className="badge badge-success">Completed</label></td>
                                            </tr>
                                            <tr>
                                                <td>Dave</td>
                                                <td>53275535</td>
                                                <td className="text-success"> 98.05% <i className="ti-arrow-up"></i>
                                                </td>
                                                <td><label className="badge badge-warning">In progress</label></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </AdminLayout>


        </div>

    )
}


