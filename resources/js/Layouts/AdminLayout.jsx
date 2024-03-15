import Navbar from "@/Components/Admin/Navbar.jsx";

import Logo from "/public/dist/images/logo-mini.svg";

export default function AdminLayout({ children })  {
    return (
        <div>
            <div className="container-scroller">
                <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
                    <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
                        <div className="me-3">
                            <button className="navbar-toggler navbar-toggler align-self-center" type="button"
                                    data-bs-toggle="minimize">
                                <span className="icon-menu"></span>
                            </button>
                        </div>
                        <div>
                            <a className="navbar-brand brand-logo" href="">
                                <img src={Logo} alt="logo"/>
                            </a>
                            <a className="navbar-brand brand-logo-mini" href="index.html">
                                <img src={Logo} alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="navbar-menu-wrapper d-flex align-items-top">
                        <ul className="navbar-nav">
                            <li className="nav-item font-weight-semibold d-none d-lg-block ms-0">
                                <h1 className="welcome-text">Добрый день,<span
                                    className="text-black fw-bold">Беслан</span></h1>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item dropdown d-none d-lg-block">
                                <a className="nav-link dropdown-bordered dropdown-toggle dropdown-toggle-split"
                                   id="messageDropdown"
                                   href="#" data-bs-toggle="dropdown" aria-expanded="false"> Select Category </a>
                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                                     aria-labelledby="messageDropdown">
                                    <a className="dropdown-item py-3">
                                        <p className="mb-0 font-weight-medium float-left">Select category</p>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-item-content flex-grow py-2">
                                            <p className="preview-subject ellipsis font-weight-medium text-dark">Bootstrap
                                                Bundle </p>
                                            <p className="fw-light small-text mb-0">This is a Bundle featuring 16 unique
                                                dashboards</p>
                                        </div>
                                    </a>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-item-content flex-grow py-2">
                                            <p className="preview-subject ellipsis font-weight-medium text-dark">Angular
                                                Bundle</p>
                                            <p className="fw-light small-text mb-0">Everything you’ll ever need for your
                                                Angular
                                                projects</p>
                                        </div>
                                    </a>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-item-content flex-grow py-2">
                                            <p className="preview-subject ellipsis font-weight-medium text-dark">VUE
                                                Bundle</p>
                                            <p className="fw-light small-text mb-0">Bundle of 6 Premium Vue Admin
                                                Dashboard</p>
                                        </div>
                                    </a>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-item-content flex-grow py-2">
                                            <p className="preview-subject ellipsis font-weight-medium text-dark">React
                                                Bundle</p>
                                            <p className="fw-light small-text mb-0">Bundle of 8 Premium React Admin
                                                Dashboard</p>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item d-none d-lg-block">
                                <div id="datepicker-popup" className="input-group date datepicker navbar-date-picker">
              <span className="input-group-addon input-group-prepend border-right">
                <span className="icon-calendar input-group-text calendar-icon"></span>
              </span>
                                    <input type="text" className="form-control"/>
                                </div>
                            </li>
                            <li className="nav-item">
                                <form className="search-form" action="#">
                                    <i className="icon-search"></i>
                                    <input type="search" className="form-control" placeholder="Search Here"
                                           title="Search here"/>
                                </form>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link count-indicator" id="notificationDropdown" href="#"
                                   data-bs-toggle="dropdown">
                                    <i className="icon-mail icon-lg"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                                     aria-labelledby="notificationDropdown">
                                    <a className="dropdown-item py-3 border-bottom">
                                        <p className="mb-0 font-weight-medium float-left">You have 4 new
                                            notifications </p>
                                        <span className="badge badge-pill badge-primary float-right">View all</span>
                                    </a>
                                    <a className="dropdown-item preview-item py-3">
                                        <div className="preview-thumbnail">
                                            <i className="mdi mdi-alert m-auto text-primary"></i>
                                        </div>
                                        <div className="preview-item-content">
                                            <h6 className="preview-subject fw-normal text-dark mb-1">Application
                                                Error</h6>
                                            <p className="fw-light small-text mb-0"> Just now </p>
                                        </div>
                                    </a>
                                    <a className="dropdown-item preview-item py-3">
                                        <div className="preview-thumbnail">
                                            <i className="mdi mdi-settings m-auto text-primary"></i>
                                        </div>
                                        <div className="preview-item-content">
                                            <h6 className="preview-subject fw-normal text-dark mb-1">Settings</h6>
                                            <p className="fw-light small-text mb-0"> Private message </p>
                                        </div>
                                    </a>
                                    <a className="dropdown-item preview-item py-3">
                                        <div className="preview-thumbnail">
                                            <i className="mdi mdi-airballoon m-auto text-primary"></i>
                                        </div>
                                        <div className="preview-item-content">
                                            <h6 className="preview-subject fw-normal text-dark mb-1">New user
                                                registration</h6>
                                            <p className="fw-light small-text mb-0"> 2 days ago </p>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link count-indicator" id="countDropdown" href="#"
                                   data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    <i className="icon-bell"></i>
                                    <span className="count"></span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                                     aria-labelledby="countDropdown">
                                    <a className="dropdown-item py-3">
                                        <p className="mb-0 font-weight-medium float-left">You have 7 unread mails </p>
                                        <span className="badge badge-pill badge-primary float-right">View all</span>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <img src="../../dist/images/faces/face10.jpg" alt="image"
                                                 className="img-sm profile-pic"/>
                                        </div>
                                        <div className="preview-item-content flex-grow py-2">
                                            <p className="preview-subject ellipsis font-weight-medium text-dark">Marian
                                                Garner </p>
                                            <p className="fw-light small-text mb-0"> The meeting is cancelled </p>
                                        </div>
                                    </a>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <img src="../../dist/images/faces/face12.jpg" alt="image"
                                                 className="img-sm profile-pic"/>
                                        </div>
                                        <div className="preview-item-content flex-grow py-2">
                                            <p className="preview-subject ellipsis font-weight-medium text-dark">David
                                                Grey </p>
                                            <p className="fw-light small-text mb-0"> The meeting is cancelled </p>
                                        </div>
                                    </a>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <img src="../../dist/images/faces/face1.jpg" alt="image"
                                                 className="img-sm profile-pic"/>
                                        </div>
                                        <div className="preview-item-content flex-grow py-2">
                                            <p className="preview-subject ellipsis font-weight-medium text-dark">Travis
                                                Jenkins </p>
                                            <p className="fw-light small-text mb-0"> The meeting is cancelled </p>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item dropdown d-none d-lg-block user-dropdown">
                                <a className="nav-link" id="UserDropdown" href="#" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    <img className="img-xs rounded-circle" src="../../dist/images/faces/face8.jpg"
                                         alt="Profile image"/>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown"
                                     aria-labelledby="UserDropdown">
                                    <div className="dropdown-header text-center">
                                        <img className="img-md rounded-circle" src="../../dist/images/faces/face8.jpg"
                                             alt="Profile image"/>
                                        <p className="mb-1 mt-3 font-weight-semibold">Allen Moreno</p>
                                        <p className="fw-light text-muted mb-0">allenmoreno@gmail.com</p>
                                    </div>
                                    <a className="dropdown-item"><i
                                        className="dropdown-item-icon mdi mdi-account-outline text-primary me-2"></i> My
                                        Profile <span className="badge badge-pill badge-danger">1</span></a>
                                    <a className="dropdown-item"><i
                                        className="dropdown-item-icon mdi mdi-message-text-outline text-primary me-2"></i> Messages</a>
                                    <a className="dropdown-item"><i
                                        className="dropdown-item-icon mdi mdi-calendar-check-outline text-primary me-2"></i> Activity</a>
                                    <a className="dropdown-item"><i
                                        className="dropdown-item-icon mdi mdi-help-circle-outline text-primary me-2"></i> FAQ</a>
                                    <a className="dropdown-item"><i
                                        className="dropdown-item-icon mdi mdi-power text-primary me-2"></i>Sign Out</a>
                                </div>
                            </li>
                        </ul>
                        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                                type="button"
                                data-bs-toggle="offcanvas">
                            <span className="mdi mdi-menu"></span>
                        </button>
                    </div>
                </nav>
                <div className="container-fluid page-body-wrapper">
                    <div className="theme-setting-wrapper">
                        <div id="settings-trigger"><i className="ti-settings"></i></div>
                        <div id="theme-settings" className="settings-panel">
                            <i className="settings-close ti-close"></i>
                            <p className="settings-heading">SIDEBAR SKINS</p>
                            <div className="sidebar-bg-options selected" id="sidebar-light-theme">
                                <div className="img-ss rounded-circle bg-light border me-3"></div>
                                Light
                            </div>
                            <div className="sidebar-bg-options" id="sidebar-dark-theme">
                                <div className="img-ss rounded-circle bg-dark border me-3"></div>
                                Dark
                            </div>
                            <p className="settings-heading mt-2">HEADER SKINS</p>
                            <div className="color-tiles mx-0 px-4">
                                <div className="tiles success"></div>
                                <div className="tiles warning"></div>
                                <div className="tiles danger"></div>
                                <div className="tiles info"></div>
                                <div className="tiles dark"></div>
                                <div className="tiles default"></div>
                            </div>
                        </div>
                    </div>
                    <div id="right-sidebar" className="settings-panel">
                        <i className="settings-close ti-close"></i>
                        <ul className="nav nav-tabs border-top" id="setting-panel" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="todo-tab" data-bs-toggle="tab" href="#todo-section"
                                   role="tab"
                                   aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="chats-tab" data-bs-toggle="tab" href="#chats-section"
                                   role="tab"
                                   aria-controls="chats-section">CHATS</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="setting-content">
                            <div className="tab-pane fade show active scroll-wrapper" id="todo-section" role="tabpanel"
                                 aria-labelledby="todo-section">
                                <div className="add-items d-flex px-3 mb-0">
                                    <form className="form w-100">
                                        <div className="form-group d-flex">
                                            <input type="text" className="form-control todo-list-input"
                                                   placeholder="Add To-do"/>
                                            <button type="submit" className="add btn btn-primary todo-list-add-btn"
                                                    id="add-task">Add
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="list-wrapper px-3">
                                    <ul className="d-flex flex-column-reverse todo-list">
                                        <li>
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input className="checkbox" type="checkbox"/>
                                                    Team review meeting at 3.00 PM
                                                </label>
                                            </div>
                                            <i className="remove ti-close"></i>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input className="checkbox" type="checkbox"/>
                                                    Prepare for presentation
                                                </label>
                                            </div>
                                            <i className="remove ti-close"></i>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input className="checkbox" type="checkbox"/>
                                                    Resolve all the low priority tickets due today
                                                </label>
                                            </div>
                                            <i className="remove ti-close"></i>
                                        </li>
                                        <li className="completed">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input className="checkbox" type="checkbox" checked/>
                                                    Schedule meeting for next week
                                                </label>
                                            </div>
                                            <i className="remove ti-close"></i>
                                        </li>
                                        <li className="completed">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input className="checkbox" type="checkbox" checked/>
                                                    Project review
                                                </label>
                                            </div>
                                            <i className="remove ti-close"></i>
                                        </li>
                                    </ul>
                                </div>
                                <h4 className="px-3 text-muted mt-5 fw-light mb-0">Events</h4>
                                <div className="events pt-4 px-3">
                                    <div className="wrapper d-flex mb-2">
                                        <i className="ti-control-record text-primary me-2"></i>
                                        <span>Feb 11 2018</span>
                                    </div>
                                    <p className="mb-0 font-weight-thin text-gray">Creating component page build a
                                        js</p>
                                    <p className="text-gray mb-0">The total number of sessions</p>
                                </div>
                                <div className="events pt-4 px-3">
                                    <div className="wrapper d-flex mb-2">
                                        <i className="ti-control-record text-primary me-2"></i>
                                        <span>Feb 7 2018</span>
                                    </div>
                                    <p className="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
                                    <p className="text-gray mb-0 ">Call Sarah Graves</p>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="chats-section" role="tabpanel"
                                 aria-labelledby="chats-section">
                                <div className="d-flex align-items-center justify-content-between border-bottom">
                                    <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
                                    <small
                                        className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 fw-normal">See
                                        All</small>
                                </div>
                                <ul className="chat-list">
                                    <li className="list active">
                                        <div className="profile"><img src="../../dist/images/faces/face1.jpg"
                                                                      alt="image"/><span
                                            className="online"></span></div>
                                        <div className="info">
                                            <p>Thomas Douglas</p>
                                            <p>Available</p>
                                        </div>
                                        <small className="text-muted my-auto">19 min</small>
                                    </li>
                                    <li className="list">
                                        <div className="profile"><img src="../../dist/images/faces/face2.jpg"
                                                                      alt="image"/><span
                                            className="offline"></span></div>
                                        <div className="info">
                                            <div className="wrapper d-flex">
                                                <p>Catherine</p>
                                            </div>
                                            <p>Away</p>
                                        </div>
                                        <div className="badge badge-success badge-pill my-auto mx-2">4</div>
                                        <small className="text-muted my-auto">23 min</small>
                                    </li>
                                    <li className="list">
                                        <div className="profile"><img src="../../dist/images/faces/face3.jpg"
                                                                      alt="image"/><span
                                            className="online"></span></div>
                                        <div className="info">
                                            <p>Daniel Russell</p>
                                            <p>Available</p>
                                        </div>
                                        <small className="text-muted my-auto">14 min</small>
                                    </li>
                                    <li className="list">
                                        <div className="profile"><img src="../../dist/images/faces/face4.jpg"
                                                                      alt="image"/><span
                                            className="offline"></span></div>
                                        <div className="info">
                                            <p>James Richardson</p>
                                            <p>Away</p>
                                        </div>
                                        <small className="text-muted my-auto">2 min</small>
                                    </li>
                                    <li className="list">
                                        <div className="profile"><img src="../../dist/images/faces/face5.jpg"
                                                                      alt="image"/><span
                                            className="online"></span></div>
                                        <div className="info">
                                            <p>Madeline Kennedy</p>
                                            <p>Available</p>
                                        </div>
                                        <small className="text-muted my-auto">5 min</small>
                                    </li>
                                    <li className="list">
                                        <div className="profile"><img src="../../dist/images/faces/face6.jpg"
                                                                      alt="image"/><span
                                            className="online"></span></div>
                                        <div className="info">
                                            <p>Sarah Graves</p>
                                            <p>Available</p>
                                        </div>
                                        <small className="text-muted my-auto">47 min</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <Navbar />
                    {children}


                </div>
            </div>
        </div>
    )

}
