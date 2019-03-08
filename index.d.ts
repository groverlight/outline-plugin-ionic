import { IonicNativePlugin } from '@ionic-native/core';
export declare const log: {
    initialize(apiKey: string): Promise<void>;
    send(uuid: string): Promise<void>;
};
export declare const enum ConnectionStatus {
    CONNECTED = 0,
    DISCONNECTED = 1,
    RECONNECTING = 2
}
export declare const enum ERROR_CODE {
    NO_ERROR = 0,
    UNEXPECTED = 1,
    VPN_PERMISSION_NOT_GRANTED = 2,
    INVALID_SERVER_CREDENTIALS = 3,
    UDP_RELAY_NOT_ENABLED = 4,
    SERVER_UNREACHABLE = 5,
    VPN_START_FAILURE = 6,
    ILLEGAL_SERVER_CONFIGURATION = 7,
    SHADOWSOCKS_START_FAILURE = 8,
    HTTP_PROXY_START_FAILURE = 9,
    CONFIGURE_SYSTEM_PROXY_FAILURE = 10
}
export interface ServerConfig {
    method?: string;
    password?: string;
    host?: string;
    port?: number;
    name?: string;
}
export declare class OutlinePluginOriginal extends IonicNativePlugin {
    quitApplication(): void;
    config: ServerConfig;
    readonly id: string;
    create(serverConfig: ServerConfig, id?: string): void;
    logInitialize(apiKey: string): void;
    sendLog(uuid: string): void;
    start(): Promise<void>;
    stop(): Promise<void>;
    isRunning(): Promise<boolean>;
    isReachable(): Promise<boolean>;
    onStatusChange(listener: (status: ConnectionStatus) => void): void;
}

export declare const OutlinePlugin: OutlinePluginOriginal;