
import request from '@/api/interceptors';

export function method(name, body) {
  return new Promise(function(resolve, reject) {
      request({
            method: "POST",
            data: {
                id: requestId(1000000, 9999999),
                jsonrpc: "2.0",
                method: name,
                params: body
            },
        }).then(res => {
            if(!res['error'] && res['result']){
                resolve(res['result']);
            }else{
                reject(res['error']);
            }
        })
        .catch(err => {
            reject(err);
        });
  })
}

function requestId(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}