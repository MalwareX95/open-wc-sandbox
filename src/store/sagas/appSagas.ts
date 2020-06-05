import * as effects from 'redux-saga/effects'
import {appActions, appTypes} from '../actions';


function* load(id: number){
    var response:Response = yield fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    var data = yield response.json();
    console.log(data)
}


function* OnAuthorize(){
    
}

function* AuthSaga(){
    // yield effects.take(appTypes.LOGGING)
    // const task = yield effects.fork(OnAuthorize)
    // const action = yield effects.take(appTypes.LOGOUT)
    // if(action.type == 'LOGERROR') yield effects.cancel(task);
}

function* mySaga(){
    yield effects.take(appTypes.INCREMENT);
    yield* [1,2,3,4].map(x => effects.fork(load, x))
    console.log('saga')
}

export default mySaga;