export const jwtConstants = {
  secret: process.env.JWT_SECRET || 'secret-key',
  accessTokenExpiry: '15m',
  refreshTokenExpiry: '7d',
  refreshTokenExpirySeconds: 7 * 24 * 60 * 60,
};
