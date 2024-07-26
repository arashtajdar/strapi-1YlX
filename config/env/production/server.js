module.exports = ({ env }) => ({
  url: 'https://' + env('RAILWAY_PUBLIC_DOMAIN', 'strapi-rn6j-develop.up.railway.app/')
});
