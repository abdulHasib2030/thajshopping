
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Main from '../Main/Main';


const Home = () => {
    return (
        <div className='md:container mx-auto w-[90%]'>
            <Helmet>
                <title>THAJ Shopping | Home</title>
            </Helmet>
                <Banner />
                <Main />

        </div>
    );
};

export default Home;