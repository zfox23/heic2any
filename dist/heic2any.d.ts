import "./gifshot";
declare function heic2any({ blob, toType, quality, gifInterval, multiple, skipIdx }: {
    blob: Blob;
    multiple?: true;
    toType?: string;
    quality?: number;
    gifInterval?: number;
    skipIdx?: number;
}): Promise<Blob | Blob[]>;
export default heic2any;
