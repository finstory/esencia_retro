//$ GENERATE IMPORT REDUCERS
import { authReducer } from "../../services/useAuthServices";
import { homeReducer } from "../../services/useHomeServices";
import { customizeReducer } from "../../services/useCustomizeServices";

//$

const reducers = {};

//$ GENERATE ADD REDUCERS TO INITIAL STATE
reducers.auth = authReducer;
reducers.home = homeReducer;
reducers.customize = customizeReducer;

//$

export default reducers;