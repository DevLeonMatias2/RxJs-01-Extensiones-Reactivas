import { Observable, Observer } from "rxjs";


const observer: Observer<any> = {
    next:value => console.log('siguiente [next]:', value),
    error: error =>console.warn('error[obs]:',error),
    complete:()=>console.info('completado[obs]')
    
};
// const obs$ = Observable.create();
const obs$ = new Observable( subs=>{

    subs.next('hola');
    subs.next('Mundo');

    subs.next('hola');
    subs.next('Mundo');

    // const a = undefined;
    // a.nombre= 'Fernando';

    subs.complete();

    subs.next('hola');
    subs.next('Mundo');

});

obs$.subscribe( observer);

// obs$.subscribe(

//     valor => console.log('next:', valor),
//     error => console.log('error:',error),
//     ()=> console.log('Completado')
// );







