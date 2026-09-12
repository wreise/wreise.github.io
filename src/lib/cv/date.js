// Dates are written as `{ start, end }`, where each bound is a `MM.YYYY`
// string and a missing `end` means the role is ongoing. They are displayed
// abbreviated, as `Sep '20`.

const ONGOING = 'present';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** A `MM.YYYY` string as `Sep '20`. */
function format(date) {
    const [month, year] = date.split('.');
    return `${MONTHS[Number(month) - 1]} '${year.slice(-2)}`;
}

/** Sort key for a `MM.YYYY` string: later dates compare greater. */
function key(date) {
    const [month, year] = date.split('.');
    return Number(year) * 12 + Number(month);
}

/** `{ start, end }` as a single label, e.g. `Sep '20 - Dec '23`. */
export function formatRange({ start, end }) {
    return `${format(start)} - ${end ? format(end) : ONGOING}`;
}

/** The span covered by a list of roles: earliest start to latest end. */
export function spanOf(roles) {
    const start = roles.map((role) => role.date.start).sort((a, b) => key(a) - key(b))[0];
    const ends = roles.map((role) => role.date.end);
    const end = ends.includes(undefined)
        ? undefined
        : ends.sort((a, b) => key(b) - key(a))[0];
    return formatRange({ start, end });
}

/** `{ city, country }` as a single label, e.g. `Paris, FR`. */
export function formatLocation({ city, country } = {}) {
    return [city, country].filter(Boolean).join(', ');
}
