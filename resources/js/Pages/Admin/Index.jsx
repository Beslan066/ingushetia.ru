

import AdminLayout from "@/Layouts/AdminLayout.jsx";

export default function Index() {
    return (


            <AdminLayout>
                <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="home-tab">
                                <div
                                    className="d-sm-flex align-items-center justify-content-between border-bottom">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active ps-0" id="home-tab"
                                               data-bs-toggle="tab"
                                               href="#overview" role="tab" aria-controls="overview"
                                               aria-selected="true">Overview</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="profile-tab" data-bs-toggle="tab"
                                               href="#audiences"
                                               role="tab" aria-selected="false">Audiences</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="contact-tab" data-bs-toggle="tab"
                                               href="#demographics" role="tab"
                                               aria-selected="false">Demographics</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link border-0" id="more-tab" data-bs-toggle="tab"
                                               href="#more"
                                               role="tab" aria-selected="false">More</a>
                                        </li>
                                    </ul>
                                    <div>
                                        <div className="btn-wrapper">
                                            <a href="#" className="btn btn-otline-dark align-items-center"><i
                                                className="icon-share"></i> Share</a>
                                            <a href="#" className="btn btn-otline-dark"><i
                                                className="icon-printer"></i> Print</a>
                                            <a href="#" className="btn btn-primary text-white me-0"><i
                                                className="icon-download"></i> Export</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content tab-content-basic">
                                    <div className="tab-pane fade show active" id="overview" role="tabpanel"
                                         aria-labelledby="overview">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div
                                                    className="statistics-details d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <p className="statistics-title">Bounce Rate</p>
                                                        <h3 className="rate-percentage">32.53%</h3>
                                                        <p className="text-danger d-flex"><i
                                                            className="mdi mdi-menu-down"></i><span>-0.5%</span>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="statistics-title">Page Views</p>
                                                        <h3 className="rate-percentage">7,682</h3>
                                                        <p className="text-success d-flex"><i
                                                            className="mdi mdi-menu-up"></i><span>+0.1%</span>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="statistics-title">New Sessions</p>
                                                        <h3 className="rate-percentage">68.8</h3>
                                                        <p className="text-danger d-flex"><i
                                                            className="mdi mdi-menu-down"></i><span>68.8</span>
                                                        </p>
                                                    </div>
                                                    <div className="d-none d-md-block">
                                                        <p className="statistics-title">Avg. Time on Site</p>
                                                        <h3 className="rate-percentage">2m:35s</h3>
                                                        <p className="text-success d-flex"><i
                                                            className="mdi mdi-menu-down"></i><span>+0.8%</span>
                                                        </p>
                                                    </div>
                                                    <div className="d-none d-md-block">
                                                        <p className="statistics-title">New Sessions</p>
                                                        <h3 className="rate-percentage">68.8</h3>
                                                        <p className="text-danger d-flex"><i
                                                            className="mdi mdi-menu-down"></i><span>68.8</span>
                                                        </p>
                                                    </div>
                                                    <div className="d-none d-md-block">
                                                        <p className="statistics-title">Avg. Time on Site</p>
                                                        <h3 className="rate-percentage">2m:35s</h3>
                                                        <p className="text-success d-flex"><i
                                                            className="mdi mdi-menu-down"></i><span>+0.8%</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-8 d-flex flex-column">
                                                <div className="row flex-grow">
                                                    <div
                                                        className="col-12 col-lg-4 col-lg-12 grid-margin stretch-card">
                                                        <div className="card card-rounded">
                                                            <div className="card-body">
                                                                <div
                                                                    className="d-sm-flex justify-content-between align-items-start">
                                                                    <div>
                                                                        <h4 className="card-title card-title-dash">Performance
                                                                            Line Chart</h4>
                                                                        <h5 className="card-subtitle card-subtitle-dash">Lorem
                                                                            Ipsum is simply dummy text of the
                                                                            printing</h5>
                                                                    </div>
                                                                    <div id="performance-line-legend"></div>
                                                                </div>
                                                                <div className="chartjs-wrapper mt-5">
                                                                    <canvas id="performaneLine"></canvas>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 d-flex flex-column">
                                                <div className="row flex-grow">
                                                    <div
                                                        className="col-md-6 col-lg-12 grid-margin stretch-card">
                                                        <div className="card bg-primary card-rounded">
                                                            <div className="card-body pb-0">
                                                                <h4 className="card-title card-title-dash text-white mb-4">Status
                                                                    Summary</h4>
                                                                <div className="row">
                                                                    <div className="col-sm-4">
                                                                        <p className="status-summary-ight-white mb-1">Closed
                                                                            Value</p>
                                                                        <h2 className="text-info">357</h2>
                                                                    </div>
                                                                    <div className="col-sm-8">
                                                                        <div
                                                                            className="status-summary-chart-wrapper pb-4">
                                                                            <canvas
                                                                                id="status-summary"></canvas>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="col-md-6 col-lg-12 grid-margin stretch-card">
                                                        <div className="card card-rounded">
                                                            <div className="card-body">
                                                                <div className="row">
                                                                    <div className="col-sm-6">
                                                                        <div
                                                                            className="d-flex justify-content-between align-items-center mb-2 mb-sm-0">
                                                                            <div
                                                                                className="circle-progress-width">
                                                                                <div id="totalVisitors"
                                                                                     className="progressbar-js-circle pr-2"></div>
                                                                            </div>
                                                                            <div>
                                                                                <p className="text-small mb-2">Total
                                                                                    Visitors</p>
                                                                                <h4 className="mb-0 fw-bold">26.80%</h4>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-6">
                                                                        <div
                                                                            className="d-flex justify-content-between align-items-center">
                                                                            <div
                                                                                className="circle-progress-width">
                                                                                <div id="visitperday"
                                                                                     className="progressbar-js-circle pr-2"></div>
                                                                            </div>
                                                                            <div>
                                                                                <p className="text-small mb-2">Visits
                                                                                    per
                                                                                    day</p>
                                                                                <h4 className="mb-0 fw-bold">9065</h4>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <table className="table align-middle mb-0 bg-white">
                                                <thead className="bg-light">
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Title</th>
                                                    <th>Status</th>
                                                    <th>Position</th>
                                                    <th>Actions</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img
                                                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                                                alt=""/>
                                                            <div className="ms-3">
                                                                <p className="fw-bold mb-1">John Doe</p>
                                                                <p className="text-muted mb-0">john.doe@gmail.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="fw-normal mb-1">Software engineer</p>
                                                        <p className="text-muted mb-0">IT department</p>
                                                    </td>
                                                    <td>
                                                                <span
                                                                    className="badge badge-success rounded-pill d-inline">Active</span>
                                                    </td>
                                                    <td>Senior</td>
                                                    <td>
                                                        <button type="button"
                                                                className="btn btn-link btn-sm btn-rounded">
                                                            Edit
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img
                                                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                                                alt=""/>
                                                            <div className="ms-3">
                                                                <p className="fw-bold mb-1">John Doe</p>
                                                                <p className="text-muted mb-0">john.doe@gmail.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="fw-normal mb-1">Software engineer</p>
                                                        <p className="text-muted mb-0">IT department</p>
                                                    </td>
                                                    <td>
                                                                <span
                                                                    className="badge badge-success rounded-pill d-inline">Active</span>
                                                    </td>
                                                    <td>Senior</td>
                                                    <td>
                                                        <button type="button"
                                                                className="btn btn-link btn-sm btn-rounded">
                                                            Edit
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img
                                                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                                                alt=""/>
                                                            <div className="ms-3">
                                                                <p className="fw-bold mb-1">John Doe</p>
                                                                <p className="text-muted mb-0">john.doe@gmail.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="fw-normal mb-1">Software engineer</p>
                                                        <p className="text-muted mb-0">IT department</p>
                                                    </td>
                                                    <td>
                                                                <span
                                                                    className="badge badge-success rounded-pill d-inline">Active</span>
                                                    </td>
                                                    <td>Senior</td>
                                                    <td>
                                                        <button type="button"
                                                                className="btn btn-link btn-sm btn-rounded">
                                                            Edit
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img
                                                                src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                                                                className="rounded-circle" alt=""/>
                                                            <div className="ms-3">
                                                                <p className="fw-bold mb-1">Alex Ray</p>
                                                                <p className="text-muted mb-0">alex.ray@gmail.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="fw-normal mb-1">Consultant</p>
                                                        <p className="text-muted mb-0">Finance</p>
                                                    </td>
                                                    <td>
                                                                    <span
                                                                        className="badge badge-primary rounded-pill d-inline">Onboarding</span>
                                                    </td>
                                                    <td>Junior</td>
                                                    <td>
                                                        <button type="button"
                                                                className="btn btn-link btn-rounded btn-sm fw-bold"
                                                                data-mdb-ripple-color="dark">
                                                            Edit
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img
                                                                src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                                                                className="rounded-circle" alt=""/>
                                                            <div className="ms-3">
                                                                <p className="fw-bold mb-1">Kate
                                                                    Hunington</p>
                                                                <p className="text-muted mb-0">kate.hunington@gmail.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="fw-normal mb-1">Designer</p>
                                                        <p className="text-muted mb-0">UI/UX</p>
                                                    </td>
                                                    <td>
                                                                <span
                                                                    className="badge badge-warning rounded-pill d-inline">Awaiting</span>
                                                    </td>
                                                    <td>Senior</td>
                                                    <td>
                                                        <button type="button"
                                                                className="btn btn-link btn-rounded btn-sm fw-bold"
                                                                data-mdb-ripple-color="dark">
                                                            Edit
                                                        </button>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer">

                </footer>
            </div>
            </AdminLayout>

    );
}
