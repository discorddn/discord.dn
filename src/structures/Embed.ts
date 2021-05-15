import * as EmbedOptions from "../../lib/interfaces/EmbedOptions.ts";

export class Embed {
  private title?: string;
  private type?: "rich" | "image" | "video" | "gifv" | "article" | "link";
  private description?: string;
  private url?: string;
  private timestamp?: string;
  private color?: number;
  private footer?: EmbedOptions.EmbedFooter;
  private image?: EmbedOptions.EmbedImage;
  private thumbnail?: EmbedOptions.EmbedThumbnail;
  private video?: EmbedOptions.EmbedVideo;
  private provider?: EmbedOptions.EmbedProvider;
  private author?: EmbedOptions.EmbedAuthor;
  private fields?: Array<EmbedOptions.EmbedField>;

  constructor(options: EmbedOptions.Embed) {
    options.color = options.color || "";
    this.title = options.title;
    this.type = options.type || "rich";
    this.description = options.description;
    this.url = options.url;
    this.timestamp = options.timestamp;
    this.color = options.color.startsWith("#")
      ? Embed.hexToDecimal(options.color)
      : parseInt(options.color);
    this.fields = [];
  }

  public addField(name: string, value: string, inline: boolean = false) {
    this.fields?.push({ name, value, inline });
    return this;
  }

  public setFooter(text: string, iconUrl?: string, proxyIconUrl?: string) {
    this.footer = { text, iconUrl, proxyIconUrl };
    return this;
  }

  public setImage(
    url: string,
    proxyUrl?: string,
    height?: number,
    width?: number
  ) {
    this.image = { url, proxyUrl, height, width };
    return this;
  }

  public setThumbnail(
    url: string,
    proxyUrl?: string,
    height?: number,
    width?: number
  ) {
    this.thumbnail = { url, proxyUrl, height, width };
    return this;
  }

  public setVideo(
    url: string,
    proxyUrl?: string,
    height?: number,
    width?: number
  ) {
    this.thumbnail = { url, proxyUrl, height, width };
    return this;
  }

  public setProvider(name?: string, url?: string) {
    this.provider = { name, url };
    return this;
  }

  public setAuthor(
    name?: string,
    url?: string,
    iconUrl?: string,
    proxyIconUrl?: string
  ) {
    this.author = { name, url, iconUrl, proxyIconUrl };
    return this;
  }

  public toJSON() {
    return {
      title: this.title,
      type: this.type,
      description: this.description,
      url: this.url,
      timestamp: this.timestamp,
      color: this.color,
      footer: {
        text: this.footer?.text,
        icon_url: this.footer?.iconUrl,
        proxy_icon_url: this.footer?.proxyIconUrl,
      },
      image: {
        url: this.image?.url,
        proxy_url: this.image?.proxyUrl,
        height: this.image?.height,
        width: this.image?.width,
      },
      thumbnail: {
        url: this.thumbnail?.url,
        proxy_url: this.thumbnail?.proxyUrl,
        height: this.thumbnail?.height,
        width: this.thumbnail?.width,
      },
      video: {
        url: this.video?.url,
        proxy_url: this.video?.proxyUrl,
        height: this.video?.height,
        width: this.video?.width,
      },
      provider: {
        name: this.provider?.name,
        url: this.provider?.url,
      },
      author: {
        name: this.author?.name,
        url: this.author?.url,
        icon_url: this.author?.iconUrl,
        proxy_icon_url: this.author?.proxyIconUrl,
      },
      fields: this.fields?.map((e) => {
        return {
          name: e.name,
          value: e.value,
          inline: e.inline,
        };
      }),
    };
  }

  public static hexToDecimal(hex: string) {
    return parseInt(hex.replace("#", ""), 16);
  }
}
