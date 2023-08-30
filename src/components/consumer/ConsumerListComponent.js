
const ConsumerListComponent = () => {

    return ( 

        <div className="justify-center items-center container mt-3">
            <div className="w-full h-[100px] flex justify-center items-center ">
                <div className="items-center justify-center flex">
                <input className="rounded-sm border-2 p-2"/>          
                <button type="submit" className="border-1 p-1 w-10 hover:bg-black hover:text-white">검색</button>
                </div>
            </div> 

            <table className="w-[1200px] items-center justify-center container">

                <tr className="border-b-2 border-gray-300 text-center h-12">
                    <td className="w-1/12">No</td>
                    <td className="w-8/12">Title</td>
                    <td className="w-1/12">Writer</td>
                    <td className="w-1/12">Duedate</td>
                    <td className="w-1/12">Count</td>
                </tr>
                <tr className="border-b-2 border-gray-300 text-center h-12">
                    <td className="w-1/12">1</td>
                    <td className="w-8/12">구독 잘하고있습니다</td>
                    <td className="w-1/12">탁일준</td>
                    <td className="w-1/12">23-08-04</td>
                    <td className="w-1/12">1</td>          
                </tr>
            </table>
        </div>

     );
     
}
 
export default ConsumerListComponent;