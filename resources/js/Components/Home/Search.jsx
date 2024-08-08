import React from "react";
import {useState} from "react";

export default function Search({search}) {
    return (
        <div className={`position-relative search-form container bg-white p-40 ${search ? 'active' : ''}`}>
            <form className={'d-flex align-items-center justify-content-between w-100'}>
                <input type="text" placeholder={`Найти на сайте`}/>
                <button>Найти</button>
            </form>
        </div>
    )
}
