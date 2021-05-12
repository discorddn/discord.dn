import * as EmbedOptions from  "../../lib/interfaces/EmbedOptions.ts" 

export class Embed {
    title?: string;
    type?: "rich" | "image" | "video" | "gifv" | "article" | "link";
    description?: string;
    url?: string;
    timestamp?: string;
    color: number;
    footer?: EmbedOptions.EmbedFooter;
    image?: EmbedOptions.EmbedImage;
    thumbnail?: EmbedOptions.EmbedThumbnail;
    video?: EmbedOptions.EmbedVideo;
    provider?: EmbedOptions.EmbedProvider;
    author?: EmbedOptions.EmbedAuthor;
    fields?: Array<EmbedOptions.EmbedField>

    constructor(options: EmbedOptions.Embed) {
        this.title = options.title;
        this.type = options.type || "rich";
        this.description = options.description;
        this.url = options.url;
        this.timestamp = options.timestamp;
        this.color = options.color.startsWith("#") ? Embed.hexToDecimal(options.color) : parseInt(options.color);
        this.footer = options.footer;
        this.image = options.image;
        this.thumbnail = options.thumbnail;
        this.video = options.video;
        this.provider = options.provider;
        this.author = options.author;
    };

    public addField(name: string, value: string, inline: boolean=false) {
        this.fields?.push({name, value, inline});
        return this;
    };

    public toString() {
        // will work on this later
    }

    public static hexToDecimal(hex: string) {
        return parseInt(hex.replace('#', ''), 16);
    };
};
