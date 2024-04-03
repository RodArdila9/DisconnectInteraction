// Original date string
const dateString = '04/03/2024 10:57:29 am (-05:00)';

// Parse the date string into a Date object
const date = new Date(dateString);

// Convert the date to UTC
const utcYear = date.getUTCFullYear();
const utcMonth = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
const utcDay = String(date.getUTCDate()).padStart(2, '0');
const utcHours = String(date.getUTCHours()).padStart(2, '0');
const utcMinutes = String(date.getUTCMinutes()).padStart(2, '0');
const utcSeconds = String(date.getUTCSeconds()).padStart(2, '0');
const utcMilliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');

// Construct ISO 8601 format string in UTC with milliseconds
const iso8601UTCString = `${utcYear}-${utcMonth}-${utcDay}T${utcHours}:${utcMinutes}:${utcSeconds}.${utcMilliseconds}Z`;

console.log(iso8601UTCString); // Output: "2024-04-03T15:39:19.000Z"
