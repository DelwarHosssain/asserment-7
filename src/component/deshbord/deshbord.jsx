/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const Deshbord = ({deshbordData,totalRemaining,TotalTime}) => {
    console.log(deshbordData);

    return (
        <div className=" space-y-4">
            <h1 className="text-lg font-bold text-[#2F80ED] ">Credit Hour Remaining: {totalRemaining} hr</h1>
            <hr />
            

            {
                // eslint-disable-next-line react/prop-types
                deshbordData.map((Course) =>(
                    <li key={Course.id} type="1">{Course.title}</li>
                    
                    
                ))
            }
            <hr />
            <h1>Total Credit Hour : {TotalTime}</h1>
            <hr />
            <h1>Total Price : 48000 USD</h1>
        </div>
    )
};

export default Deshbord;