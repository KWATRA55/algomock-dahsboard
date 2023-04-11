import io from 'socket.io-client';
import { marketDataRoute } from './apiRoutes';

// export function getMarketPrice () {
//     return io(marketDataRoute,  { transports: ['websocket', 'polling', 'flashsocket'] })
// }

export function getMarketPrice() {
    return new WebSocket(marketDataRoute);
}