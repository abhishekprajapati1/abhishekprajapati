export const TOKENS = {
    auth_token: "_hact",
    refresh_auth_token: "_hactr",
};

export const MAX_AGES = {
    [TOKENS.auth_token]: 1000 * 60 * 30, // 30 minutes
    [TOKENS.refresh_auth_token]: 1000 * 60 * 60 * 24 * 60, // 60 days
};

export const TOKEN_EXPIRATIONS = {
    [TOKENS.auth_token]: "30m",
    [TOKENS.refresh_auth_token]: "60d"
};

export const PATTERNS = {
    mobile_number: /^(\+?61)?0?([2-8]\d{8})$/,
    mongo_id: /^[0-9a-fA-F]{24}$/,
    hex_color: /^(\#([a-fA-F0-9]{3}){1,2}|(rgb|hsl)\(\s*\d+%?\s*,\s*\d*%?\s*,\s*\d*%?\s*\))$/,
    time_in_ampm: /.*:(?:.*am|.* pm)$/,
    break_time: /^(\d+)([hm])$/,
    month_year: /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{4}/,
};

export type TOKEN_DATA = {
    value?: string;
    life?: number;
}