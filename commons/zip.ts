import admZip from 'adm-zip';

const zipFolder = (folder: string): Buffer => {
    const zip: admZip = new admZip();
    zip.addLocalFolder(folder);
    return zip.toBuffer();
};

export {
    zipFolder
}