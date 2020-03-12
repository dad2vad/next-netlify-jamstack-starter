export default (req, res) => {
	//export function handler(event, context, callback) {
  const date = new Date()
    .toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '');

  res.json({ date });
};
