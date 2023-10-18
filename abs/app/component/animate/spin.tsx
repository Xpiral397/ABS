export default function Spin({enable}: {enable: boolean, }) {
    return (
        enable ? <div className='spinner bg-white rounded-md px-5 py-5  transistion duration-500'></div> : ''
    )
}
