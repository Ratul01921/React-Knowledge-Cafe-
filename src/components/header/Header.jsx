import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex justify-between items-center p-4 border-b-2'>
            <h1 className='text-2xl font-bold'>Ratul Knowledge Cafe
            </h1>
            <img src={profile} alt="" />
            </div>
        </div>
    );
};

export default Header;