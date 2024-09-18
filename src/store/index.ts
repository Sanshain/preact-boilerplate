import { BehaviorSubject } from 'rxjs';
import { ObservableStream } from './components/ObservableStream';


const query$ = new BehaviorSubject({ query: undefined });

export default ObservableStream(
    query$,
    {
        onChangeQuery: value => query$.next({ query: value }),
    },
    {
        query: 0,
    }    
);