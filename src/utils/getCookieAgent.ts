import { IncomingMessage, ServerResponse } from 'http';
import { getCookie } from 'cookies-next';
import { TOKEN_COOKIE_NAME } from '../const';

export const getCookieAgent = () => getCookie(TOKEN_COOKIE_NAME);

export const getCookieAgentSSR = ({ req, res }: { req: IncomingMessage; res: ServerResponse<IncomingMessage> }) =>
  getCookie(TOKEN_COOKIE_NAME, { req, res });
