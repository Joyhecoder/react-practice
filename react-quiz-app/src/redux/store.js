import { createStore, compose} from 'redux';
import reducer from './reducer';


export default createStore(reducer, 
    //add the redux tool
      compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
    
    )