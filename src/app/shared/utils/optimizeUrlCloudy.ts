export function optimizeUrlCloudy(url: string): string {
    if (url.includes('res.cloudinary.com')) {
        return url.replace('/upload/', '/upload/f_auto,q_auto/');
    }
    return url;
}