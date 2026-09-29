// Loads every image/video under src/assets/<Project Folder>/ and groups them by folder name.
// Glob keys keep the original file names, so captions stay readable after Vite hashes the URLs.
// Folders that aren't project media are excluded so they don't get copied into the build.
const imageModules = import.meta.glob(
    [
        '../assets/*/*.{png,jpg,jpeg,webp,svg,PNG,JPG,JPEG}',
        '!../assets/Sample Project/**',
        '!../assets/Skills Icons/**',
        '!../assets/3D Printing Services/**',
    ],
    { eager: true, import: 'default' }
);

const videoModules = import.meta.glob(
    [
        '../assets/*/*.{mp4,webm,ogg}',
        '!../assets/Sample Project/**',
        '!../assets/3D Printing Services/**',
    ],
    { eager: true, import: 'default' }
);

function parsePath(path) {
    const [folder, file] = path.split('/').slice(-2);
    return { folder, caption: file.replace(/\.[^/.]+$/, '') };
}

function groupByFolder(modules, toEntry) {
    const groups = {};
    for (const [path, src] of Object.entries(modules)) {
        const { folder, caption } = parsePath(path);
        (groups[folder] ??= []).push(toEntry(src, caption));
    }
    return groups;
}

const projectImages = groupByFolder(imageModules, (src, caption) => ({ src, caption }));
const projectVideos = groupByFolder(videoModules, (src) => src);

// Returns [{ src, caption }] for the given asset folder.
export function getImages(folder) {
    return projectImages[folder] || [];
}

// Returns the first video URL in the given asset folder, or undefined.
export function getVideo(folder) {
    return projectVideos[folder]?.[0];
}
