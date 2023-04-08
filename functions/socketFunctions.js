import io from 'Socket.IO-client';
import { marketDataRoute } from './apiRoutes';

export function getMarketPrice () {
    return io(marketDataRoute,  { transports: ['websocket', 'polling', 'flashsocket'] })
}