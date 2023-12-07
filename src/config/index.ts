import * as dotenv from "dotenv";

dotenv.config();

const parseEnvStr = (env: string, defaultEnv = ""): string => {
    return process.env[env] || defaultEnv;
};

const parseEnvInt = (env: string, defaultEnv = 0): number => {
    if (env in process.env) {
        return parseInt(String(process.env[env]), 10);
    }
    return defaultEnv;
};

interface AppConfig {
    env: string;
    timezone: string;
    port: number;
    origin: string;
    isProduction: boolean;
    isDevelopment: boolean;
    keepAliveTimeout: number;
    headersTimeout: number;
    vtalConfig: {
        authUrl: string;
        baseUrl: string;
        username: string;
        password: string;
        scope: string;
    };
}

export const serverConfig: AppConfig = {
    env: parseEnvStr("NODE_ENV", "development"),
    timezone: parseEnvStr("TZ", "America/Sao Paulo"),
    port: parseEnvInt("SERVER_PORT", 8080),
    origin: parseEnvStr("SERVER_ORIGIN", "http://localhost:8080"),
    isProduction: process.env.NODE_ENV === "production",
    isDevelopment: process.env.NODE_ENV === "development",
    keepAliveTimeout: parseEnvInt("SERVER_KEEP_ALIVE_TIMEOUT", 61 * 1000),
    headersTimeout: parseEnvInt("SERVER_HEADERS_TIMEOUT", 62 * 1000),
    vtalConfig: {
        authUrl: parseEnvStr("VTAL_AUTH_URL", "https://api.vtal.com.br/auth/oauth/v2/token?grant_type=client_credentials"),
        baseUrl: parseEnvStr("VTAL_BASE_URL", "https://api.vtal.com.br/api"),
        username: parseEnvStr("VTAL_USERNAME"),
        password: parseEnvStr("VTAL_PASSWORD"),
        scope: parseEnvStr("VTAL_SCOPE"),
    },
};
