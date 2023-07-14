import axios from "axios";
import { updateData } from "./dataTableUsingApiSlice";

export const fetchArrayData = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/todos"
            );
            dispatch(updateData(response.data));
            console.log("reponse", response.data)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
};






// const fetchDataTableApiAction = createAsyncThunk(
//     "dataTable/fetch",
//     async (payload, { rejectWithValue, getState, dispatch }) => {
//         console.log('payload', payload);
//         try {
//             const { data } = await axios.get(
//                 `https://jsonplaceholder.typicode.com/todos`
//             );
//             return data;
//         } catch (error) {
//             if (!error?.response) {
//                 throw error;
//             }
//             return rejectWithValue(error?.response?.data);
//         }
//     }
// )

// export default fetchDataTableApiAction;