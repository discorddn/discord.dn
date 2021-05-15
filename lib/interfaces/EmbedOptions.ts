export interface Embed {
    title?: string;
    type?: "rich" | "image" | "video" | "gifv" | "article" | "link";
    description?: string;
    url?: string;
    timestamp?: string;
    color?: string;
};

export interface EmbedFooter {
    text: string;
    iconUrl?: string;
    proxyIconUrl?: string;
};

export interface EmbedImage {
    url?: string;
    proxyUrl?: string;
    height?: number;
    width?: number;
};

export interface EmbedThumbnail {
    url?: string;
    proxyUrl?: string;
    height?: number;
    width?: number;
};

export interface EmbedVideo {
    url?: string;
    proxyUrl?: string;
    height?: number;
    width?: number;
};

export interface EmbedProvider {
    name?: string;
    url?: string;
};

export interface EmbedAuthor {
    name?: string;
    url?: string;
    iconUrl?: string;
    proxyIconUrl?: string;
};

export interface EmbedField {
    name: string;
    value: string;
    inline?: boolean;
};