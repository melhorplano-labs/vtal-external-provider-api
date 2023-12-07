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
    isProduction: boolean;
    isDevelopment: boolean;
    keepAliveTimeout: number;
    headersTimeout: number;
    mpauth: string;
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
    timezone: "America/Sao Paulo",
    port: 8080,
    isProduction: process.env.NODE_ENV === "production",
    isDevelopment: process.env.NODE_ENV === "development",
    keepAliveTimeout: 61 * 1000,
    headersTimeout: 62 * 1000,
    mpauth: parseEnvStr("MP_AUTH", "credencial-mpauth-aqui"),
    vtalConfig: {
        authUrl: parseEnvStr("VTAL_AUTH_URL", "https://api.vtal.com.br/auth/oauth/v2/token?grant_type=client_credentials"),
        baseUrl: parseEnvStr("VTAL_BASE_URL", "https://api.vtal.com.br/api"),
        username: parseEnvStr("VTAL_USERNAME", "seu-usuario-aqui"),
        password: parseEnvStr("VTAL_PASSWORD", "sua-senha-aqui"),
        scope: parseEnvStr("VTAL_SCOPE", "seu-scope-aqui"),
    },
};
