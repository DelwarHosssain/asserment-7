import PropTypes from 'prop-types';

const Cousedata = ({cousedata}) => {
    const {img, title, description, price, price_icon,  time, bookmark_icon}=cousedata;
    return (
        <div className="bg-white p-5 shadow-lg shadow-indigo-500/50 rounded-lg space-y-4">
            <img src= {img} alt="" />
            <h1 className="text-lg font-semibold ">{title}</h1>
            <p className="text-base text-[#737272]">{description}</p>
            <div className="flex justify-between">
                <h1 className="text-2xl">{price_icon}</h1>
                <p className="text-base font-medium text-[#737272]">Price: {price}</p>
                <h3 className="text-2xl">{bookmark_icon}</h3>
                <h2 className="text-base  font-medium text-[#737272]">Credit: {time}</h2>
            </div>
            <div className="w-full bg-[#2f80ed] text-center rounded-lg p-2 ">
                <button className="text-lg font-medium text-white">Select</button>
            </div>
        </div>
    );
};
Cousedata.prototype ={
    cousedata: PropTypes.object.isRequired
}
export default Cousedata;