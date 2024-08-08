export default function SupportModal({active, onClose}) {
    return (
        <div className={`overlay support-modal ${active ? 'active' : ''}`}>
            <div className="wrapper">
                <div className={'d-flex align-items-center justify-content-between support-modal-title'}>
                    <h3>Обращение в пресс-службу</h3>
                    <button onClick={onClose}>
                        <img src="img/icons/Close.svg" alt=""/>
                    </button>
                </div>
                <p>Обратите внимание, что данное обращение будет рассмотренно в течение 2х суток</p>

                <form action="">
                    <div className={'d-flex flex-column'}>
                        <label htmlFor={'user_family'}>Фамилия</label>
                        <input type="text" name={'userFamily'} id={'user_family'} placeholder={'Введите вашу фамилию'}/>
                    </div>
                    <div className={'d-flex flex-column'}>
                        <label htmlFor={'user_name'}>Имя</label>
                        <input type="text" name={'user_name'} id={'user_name'} placeholder={'Введите ваше имя'}/>
                    </div>
                    <div className={'d-flex flex-column'}>
                        <label htmlFor={'user_phone'}>Телефон</label>
                        <input type="phone" name={'user_phone'} id={'user_phone'} placeholder={'Укажите ваш телефон'}/>
                    </div>
                    <div className={'d-flex flex-column'}>
                        <label htmlFor={'user_email'}>Адрес эл. почты</label>
                        <input type="email" name={'user_email'} placeholder={'Укажите ваш адрес эл. почты'}/>
                    </div>
                    <div className={'d-flex flex-column'}>
                        <label htmlFor={'user_message'}>Текст обращения</label>
                        <textarea  name={'user_message'} id={'user_message'} placeholder={'Введите текст обращения'} rows={'4'}/>
                    </div>
                </form>
            </div>
        </div>
    )
}
