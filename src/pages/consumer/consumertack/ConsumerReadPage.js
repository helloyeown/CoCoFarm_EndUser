import useQueryObj from "../../../hooks/consumers/useQueryObj"

const ConsumerReadPage = () => {

    const {queryObj, moveList} = useQueryObj()
    
    const {bno} = useParams()

    console.log(bno)
    console.log(useQueryObj)
    console.log("------------------------")


    return ( 
        <div>
            
        </div>
    );
}
 
export default ConsumerReadPage;