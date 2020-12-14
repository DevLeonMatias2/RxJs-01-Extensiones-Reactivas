import { Observable, Observer, Subscriber } from "rxjs";


const observer: Observer<any> = {
    next:value => console.log('next:', value),
    error: error =>console.warn('error',error),
    complete:()=>console.info('completado')
};


const intervalos$ = new Observable<number>(Subscriber=>{
    
    //Crear un contador, 1,2,3,4,5

    let count= 0;

     const interval =setInterval(()=>{
        //cada segundo
        count++;
        Subscriber.next( count );
        console.log(count);
    },1000);

    setTimeout(()=>{
        Subscriber.complete();
    },2500);


    return ()=>{
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});



const subs1= intervalos$.subscribe( observer);
const subs2= intervalos$.subscribe( observer);
const subs3= intervalos$.subscribe( observer);

subs1.add( subs2 )
      .add( subs3 );

setTimeout(()=>{
    // subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();

    console.log('Completado timeout');

},3000)