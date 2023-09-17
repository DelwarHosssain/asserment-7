/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const Deshbord = ({deshbordData,totalRemaining,TotalTime,totalPrice}) => {
    console.log(deshbordData);

    return (
        <div className=" space-y-4">
            <h1 className="text-lg font-bold text-[#2F80ED] ">Credit Hour Remaining: {totalRemaining} hr</h1>
            <hr />
            

            {
                // eslint-disable-next-line react/prop-types
                deshbordData.map((Course) =>(
                    <div key={Course.id} className="text-base  font-normal text-[#737272]">
                        <li type="1" key={Course.id} >{Course.title}</li>
                    </div>
                    
                ))
            }
            <hr />
            <h1 className="text-base  font-medium">Total Credit Hour : {TotalTime}</h1>
            <hr />
            <h1 className="text-base  font-medium">Total Price : {totalPrice} USD</h1>
        </div>
    )
};

export default Deshbord;