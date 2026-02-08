import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { UserService } from '../services/user';
import { UserAuthService } from '../services/user-auth';
import { inject } from '@angular/core';


/**
 * Interceptor HTTP que adiciona automaticamente o token de autenticação
 * do usuário nas requisições saindo da aplicação.
 * 
 * - Obtém o token de autenticação através do UserAuthService.
 * - Se existir um token, clona a requisição original adicionando o cabeçalho
 *   'Authorization' no formato 'Bearer <token>'.
 * - Se não houver token, a requisição segue normalmente sem alterações.
 * 
 * Isso permite que todas as requisições HTTP enviadas ao servidor estejam
 * autenticadas, evitando a necessidade de adicionar o token manualmente em cada chamada.
 * 
 * @param req - A requisição HTTP original.
 * @param next - Função para enviar a requisição ao próximo interceptor ou ao backend.
 * @returns A requisição, modificada ou original, para continuar a cadeia de interceptação.
 */

export const authInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
    
    const _userAuthService = inject(UserAuthService);
    const HAS_TOKEN = _userAuthService.getUserToken();

    if (HAS_TOKEN) {
        const newReq = req.clone({
            headers: req.headers.append('Authorization', `Bearer ${HAS_TOKEN}`)
        });

        return next(newReq);
    };
     
    return next(req);
}   