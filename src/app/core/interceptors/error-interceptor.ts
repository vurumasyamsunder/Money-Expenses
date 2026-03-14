import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error)=>{
      if (error.status === 401) {
        console.log("Unauthorized");
      }

      else if (error.status === 404) {
        console.log("API Not Found");
      }

      else if (error.status === 500) {
        console.log("Server Error");
      }
      return throwError(() => error);

    })
  );
};
