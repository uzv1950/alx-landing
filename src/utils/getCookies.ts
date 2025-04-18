import { IncomingMessage, ServerResponse } from 'http';
import { getCookie as getCookieRoot } from 'cookies-next';

export const getCookie = (key: string) => getCookieRoot(key);

export const getCookieSSR = ({
  req,
  res,
  key
}: {
  req: IncomingMessage;
  res: ServerResponse<IncomingMessage>;
  key: string;
}) => getCookieRoot(key, { req, res });
