import { createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';


export default createStore(reducer, 
    
      compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
    
    )