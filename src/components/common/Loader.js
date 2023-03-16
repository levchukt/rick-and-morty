import loadingGif from '../../img/spinner.gif';

const Loader = (props) => {
    return (
        <div className='loaderBlock'>
            <div className='loader'>
                <img src={loadingGif} alt='loading...'/>
            </div>
        </div >
    )
}

export default Loader;