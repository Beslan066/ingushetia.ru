import HomeLayout from '@/Layouts/HomeLayout.jsx';
import {Link, Head} from '@inertiajs/react';


export default function Home() {

    return (
        <div>
            <HomeLayout/>
            <h3>first app laravel-react</h3>

            <Link href={route('dashboard')}>Дашборд</Link>


        </div>

    )
}



