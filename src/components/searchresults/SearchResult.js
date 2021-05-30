import CharWrapper from '../charwrapper/CharWrapper';
import { Redirect } from "react-router-dom";
const SearchResult  = () => {
    if (!localStorage.getItem("token")) {
        return <Redirect to="/login" />
      }
    return ( 
        <div>
            <h2>Results</h2>
            <CharWrapper team={[]}></CharWrapper>
        </div>
     );
}
 
export default SearchResult ;